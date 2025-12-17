# ChatGPT Integration for ZYNAVA Supplement Advisor

## ✅ Implementation Complete

This document outlines the ChatGPT integration that has been successfully implemented for the ZYNAVA Supplement Advisor.

---

## 📁 Files Created

### 1. Knowledge Base & Prompts
- **`src/lib/prompts/zynavaKnowledge.ts`**
  - Complete ZYNAVA knowledge base with company info, Z-SCORE™ algorithm details
  - Terrains framework with key ingredients
  - FDA/FTC compliance language rules
  - Comprehensive FAQ section

- **`src/lib/prompts/advisorPrompts.ts`**
  - Core system prompt defining Z's personality and behavior
  - Context-aware prompts for quiz completion
  - Error handling and medical redirect prompts
  - Dynamic quiz context integration

### 2. Compliance & Safety
- **`src/lib/compliance/guardrails.ts`**
  - Sensitive condition detection (pregnancy, medications, chronic conditions)
  - Blocked phrase checking for medical claims
  - Automatic disclaimer injection
  - Response validation for FDA/FTC compliance

### 3. OpenAI Service
- **`src/services/openaiService.ts`**
  - OpenAI API client initialization
  - Chat message handling with compliance checks
  - Error handling with specific error types
  - Results explanation generation
  - Rate limiting awareness

### 4. API Route
- **`app/api/advisor/chat/route.ts`**
  - POST endpoint for chat messages
  - In-memory rate limiting (20 requests/minute per IP)
  - Request validation and sanitization
  - Conversation history management (last 10 messages)
  - CORS support

### 5. UI Components (Updated)
- **`src/components/advisor/AdvisorChat/AdvisorInputBar.tsx`**
  - Added `isLoading` prop for loading state
  - Loading spinner in send button
  - Max height constraint (120px, ~3 lines)
  - Disabled state during loading

- **`src/components/advisor/AdvisorChat/AdvisorInputBar.module.css`**
  - Loading spinner animation
  - Updated placeholder text
  - Responsive styling maintained

- **`src/components/advisor/AdvisorChat.tsx`**
  - Chat message state management
  - API integration with error handling
  - Quiz context passing to OpenAI
  - Chat message display using existing `ChatBubble` component

---

## 🔧 Configuration

### Environment Variables
File: `.env.local` (already configured)

```bash
# OpenAI API Configuration
OPENAI_API_KEY=sk-proj-...
```

✅ **Verified**: API key is properly configured

### Dependencies
- **`openai`** package: ✅ Installed (v5.x)

---

## 🎯 How It Works

### 1. User Flow
1. User completes the supplement advisor quiz
2. User can ask questions in the input bar at any time
3. Questions are sent to the OpenAI API with context
4. AI responds using ZYNAVA knowledge base
5. Compliance guardrails ensure safe, compliant responses

### 2. Context-Aware Responses
- **Before quiz completion**: General supplement education
- **After quiz completion**: Personalized explanations based on:
  - User's goals
  - Demographic info
  - Activity level
  - Dietary preferences
  - Specific concerns

### 3. Compliance Features
#### Hard Stops (Medical Redirect)
If user mentions:
- Pregnancy/breastfeeding
- Children under 18
- Chronic conditions (diabetes, heart disease, etc.)
- Prescription medications

→ AI redirects to healthcare provider consultation

#### Automatic Disclaimers
If response discusses supplement benefits:
- Automatically adds FDA disclaimer
- Uses compliant language ("supports", "may help")
- Avoids prohibited claims ("treats", "cures", "prevents")

---

## 🚀 API Usage

### Endpoint
```
POST /api/advisor/chat
```

### Request Body
```typescript
{
  message: string,                    // User's message
  conversationHistory?: ChatMessage[], // Previous messages (last 10)
  quizContext?: {                     // User's quiz results (optional)
    goals: string | string[],
    demographic: string,
    activity: string,
    diet: string,
    concerns: string | string[]
  }
}
```

### Response
```typescript
{
  message: string,  // AI response
  error?: string    // Error message if any
}
```

### Rate Limiting
- **Limit**: 20 requests per minute per IP
- **Window**: 60 seconds
- **Response**: 429 status code when exceeded

---

## 📊 OpenAI Configuration

### Model
- **Primary**: `gpt-4o-mini` (cost-effective, fast)
- **Temperature**: 0.7 (balanced creativity)
- **Max Tokens**: 500 (concise responses)

### System Prompt
Z, the friendly AI supplement advisor:
- Knowledgeable friend tone
- Concise responses (2-4 sentences)
- Emphasizes ingredient intelligence
- References Z-SCORE™ algorithm
- Always includes disclaimers

---

## 🛡️ Safety & Compliance

### Language Rules
✅ **Allowed**:
- "Supports sleep quality"
- "May help with stress"
- "Research suggests"

❌ **Blocked**:
- "Treats insomnia"
- "Cures anxiety"
- "Prevents disease"
- "Clinically proven"
- "Doctor recommended"

### Sensitive Conditions
If detected → Medical redirect response:
- Pregnancy, breastfeeding, nursing
- Children, under 18, minors
- Depression, anxiety disorders, ADHD
- Diabetes, heart disease, cancer
- Blood thinners, insulin, antidepressants

---

## 🧪 Testing

### Manual Testing
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the Supplement Advisor chat

3. Test scenarios:
   - General questions: "What is magnesium good for?"
   - Quiz context: Complete quiz, then ask "Why were these recommended?"
   - Compliance: Ask about pregnancy, medications
   - Edge cases: Long messages, special characters

### Expected Behaviors
- ✅ Responses include disclaimers when discussing benefits
- ✅ Medical conditions trigger healthcare provider redirect
- ✅ Quiz context provides personalized explanations
- ✅ Loading spinner appears during API calls
- ✅ Error messages display on API failures
- ✅ Rate limiting prevents abuse

---

## 📝 Implementation Notes

### Architecture Decisions
1. **Orchestra Pattern**: Separate concerns (prompts, compliance, service)
2. **Client-Side State**: Chat messages managed in React component
3. **Server-Side API**: OpenAI calls only on server (secure API key)
4. **In-Memory Rate Limiting**: Simple for MVP (upgrade to Redis for production)

### Future Enhancements
- [ ] Persistent chat history (database)
- [ ] Redis-based rate limiting
- [ ] Analytics tracking (conversation quality)
- [ ] A/B testing for prompt variations
- [ ] Streaming responses for better UX
- [ ] Multi-language support

---

## 🔍 Monitoring & Debugging

### Console Logs
The implementation includes detailed logging:
- `🤖 Calling OpenAI API...` - API request initiated
- `✅ OpenAI API call successful` - Response received
- `🚨 Sensitive condition detected` - Medical redirect triggered
- `⚠️ Response validation issues` - Compliance warnings
- `❌ OpenAI API error` - API failures

### Error Handling
- API key missing → User-friendly error message
- Rate limit exceeded → 429 response with retry message
- OpenAI API errors → Graceful degradation
- Invalid requests → 400 with validation details

---

## 📚 Key Files Reference

### Prompts & Knowledge
- `src/lib/prompts/zynavaKnowledge.ts` - Knowledge base
- `src/lib/prompts/advisorPrompts.ts` - System prompts

### Compliance
- `src/lib/compliance/guardrails.ts` - Safety checks

### Services
- `src/services/openaiService.ts` - OpenAI integration

### API
- `app/api/advisor/chat/route.ts` - Chat endpoint

### Components
- `src/components/advisor/AdvisorChat.tsx` - Main chat container
- `src/components/advisor/AdvisorChat/AdvisorInputBar.tsx` - Input component

---

## ✨ Summary

The ChatGPT integration for ZYNAVA Supplement Advisor is now fully implemented with:

✅ Complete knowledge base with Z-SCORE™ algorithm details  
✅ FDA/FTC compliant responses with automatic disclaimers  
✅ Context-aware personalization based on quiz results  
✅ Medical condition detection and healthcare provider redirects  
✅ Rate limiting and error handling  
✅ Clean UI with loading states  
✅ Server-side API with secure key management  

The system is ready for testing and deployment!

