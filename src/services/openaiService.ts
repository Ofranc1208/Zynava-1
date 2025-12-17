/**
 * OpenAI Service for ZYNAVA Supplement Advisor
 * Handles all OpenAI API interactions with compliance guardrails
 */

import OpenAI from 'openai';
import { SYSTEM_PROMPT, getQuizCompletionPrompt } from '@/src/lib/prompts/advisorPrompts';
import { 
  checkSensitiveInput, 
  sanitizeAdvisorResponse, 
  getMedicalRedirectResponse,
  validateResponse 
} from '@/src/lib/compliance/guardrails';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

export interface QuizContext {
  goals: string | string[];
  demographic: string;
  activity: string;
  diet: string;
  concerns: string | string[];
}

/**
 * Send chat message to OpenAI with compliance checks
 * 
 * @param userMessage - The user's message
 * @param conversationHistory - Previous messages in the conversation
 * @param quizContext - User's quiz results for context-aware responses
 * @returns ChatResponse with message or error
 */
export async function sendChatMessage(
  userMessage: string,
  conversationHistory: ChatMessage[] = [],
  quizContext?: QuizContext
): Promise<ChatResponse> {
  try {
    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY is not configured');
      return {
        message: 'I apologize, but the chat service is not properly configured. Please try again later.',
        error: 'Missing API key',
      };
    }

    // Check for sensitive conditions first (pregnancy, medical conditions, etc.)
    if (checkSensitiveInput(userMessage)) {
      console.log('🚨 Sensitive condition detected, redirecting to medical professional');
      return {
        message: getMedicalRedirectResponse(),
      };
    }

    // Build system prompt with quiz context if available
    let systemPrompt = SYSTEM_PROMPT;
    if (quizContext) {
      systemPrompt = getQuizCompletionPrompt(quizContext);
    }

    // Build messages array for OpenAI
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: userMessage },
    ];

    console.log(`🤖 Calling OpenAI API (${messages.length} messages)...`);

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Cost-effective for chat
      messages,
      temperature: 0.7,
      max_tokens: 150, // Reduced from 500 to enforce concise responses (1-2 sentences)
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const assistantMessage = completion.choices[0]?.message?.content || 
      'I apologize, but I could not generate a response. Please try rephrasing your question.';

    console.log('✅ OpenAI API call successful');

    // Validate response for prohibited claims
    const validation = validateResponse(assistantMessage);
    if (!validation.valid) {
      console.warn('⚠️ Response validation issues:', validation.issues);
      // Continue but log the issues for monitoring
    }

    // Sanitize response for compliance (add disclaimers if needed)
    const sanitized = sanitizeAdvisorResponse(assistantMessage);

    return {
      message: sanitized,
    };
  } catch (error) {
    console.error('❌ OpenAI API error:', error);
    
    // Handle specific error types
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return {
          message: 'I apologize, but the chat service is not properly configured. Please contact support.',
          error: 'Invalid API key',
        };
      } else if (error.status === 429) {
        return {
          message: 'I apologize, but I\'m receiving too many requests right now. Please try again in a moment.',
          error: 'Rate limit exceeded',
        };
      }
    }

    return {
      message: 'I apologize, but I\'m having trouble processing your request right now. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Generate explanation for Z-SCORE™ results
 * Specialized function for explaining quiz results
 */
export async function generateResultsExplanation(
  quizContext: QuizContext,
  topProducts: Array<{ name: string; zScore: number; category: string[] }>
): Promise<ChatResponse> {
  try {
    const goalsArray = Array.isArray(quizContext.goals) ? quizContext.goals : [quizContext.goals];
    const concernsArray = Array.isArray(quizContext.concerns) ? quizContext.concerns : [quizContext.concerns];

    const prompt = `Based on the user's quiz results:
- Goals: ${goalsArray.join(', ')}
- Demographics: ${quizContext.demographic}
- Activity: ${quizContext.activity}
- Diet: ${quizContext.diet}
- Concerns: ${concernsArray.join(', ')}

Our Z-SCORE™ algorithm recommended these top products:
${topProducts.map((p, i) => `${i + 1}. ${p.name} (Z-SCORE: ${p.zScore}) - ${p.category.join(', ')}`).join('\n')}

Explain in 2-3 sentences why these products were recommended and how they align with the user's goals and concerns. Focus on ingredients and Z-SCORE™ matching.`;

    const systemPrompt = getQuizCompletionPrompt(quizContext);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 200, // Reduced for concise explanations
    });

    const explanation = completion.choices[0]?.message?.content || 
      'Your results are tailored to your specific goals and health profile using our Z-SCORE™ algorithm.';

    const sanitized = sanitizeAdvisorResponse(explanation);

    return { message: sanitized };
  } catch (error) {
    console.error('❌ Error generating results explanation:', error);
    return {
      message: 'Your personalized recommendations are ready! Our Z-SCORE™ algorithm analyzed 30,000+ supplements to find your best matches.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

