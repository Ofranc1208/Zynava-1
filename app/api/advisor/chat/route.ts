/**
 * ZYNAVA Advisor Chat API Route
 * Handles conversational AI requests for supplement advisor
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendChatMessage } from '@/src/services/openaiService';
import type { ChatMessage, QuizContext } from '@/src/services/openaiService';

// Simple in-memory rate limiting (production should use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please wait a moment before trying again.',
          message: 'Too many requests. Please slow down and try again in a minute.'
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { message, conversationHistory = [], quizContext } = body;

    // Validate required fields
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    // Validate conversation history
    if (!Array.isArray(conversationHistory)) {
      return NextResponse.json(
        { error: 'Conversation history must be an array' },
        { status: 400 }
      );
    }

    // Limit conversation history to last 10 messages to avoid token limits
    const recentHistory = conversationHistory.slice(-10);

    console.log(`📨 Chat request from ${clientIp}: "${message.substring(0, 50)}..."`);

    // Call OpenAI service
    const response = await sendChatMessage(
      message,
      recentHistory as ChatMessage[],
      quizContext as QuizContext | undefined
    );

    // Log if there was an error
    if (response.error) {
      console.error(`❌ Chat error for ${clientIp}:`, response.error);
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('❌ Chat API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat message',
        message: 'I apologize, but I\'m having trouble right now. Please try again.'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS (if needed)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}

