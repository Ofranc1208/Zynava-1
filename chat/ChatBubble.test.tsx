import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBubble from './ChatBubble';

describe('ChatBubble', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<ChatBubble sender="user">Hello, world!</ChatBubble>);
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('renders bot message correctly', () => {
    const { getByText } = render(<ChatBubble sender="bot">Bot message</ChatBubble>);
    expect(getByText('Bot message')).toBeInTheDocument();
  });

  it('renders system message correctly', () => {
    const { getByText } = render(<ChatBubble sender="system">System message</ChatBubble>);
    expect(getByText('System message')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { getByText } = render(
      <ChatBubble sender="user" className="custom-class">Custom message</ChatBubble>
    );
    expect(getByText('Custom message')).toBeInTheDocument();
  });
}); 