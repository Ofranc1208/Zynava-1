# LCP Assistant Components

This folder contains components for the AI assistant panel that provides contextual help throughout the LCP flow. These components handle complex state management, auto-scroll behavior, and user interaction detection.

## Components

### 📣 AssistantPrompt
**Purpose**: Call-to-action button to encourage users to open the AI assistant
**Features**:
- Animated pulsing effects to draw attention
- Prominent "Ask Mint" button
- Responsive design for all screen sizes
- Accessible with proper ARIA labels

```tsx
import { AssistantPrompt } from './assistant-components';

<AssistantPrompt />
```

**CSS Module**: `AssistantPrompt.module.css`
- Gradient background with pulsing animation
- Button hover and active states
- Responsive sizing for mobile devices
- Reduced motion support for accessibility

### 🎭 AssistantBackdrop
**Purpose**: Click-to-close overlay backdrop for the assistant panel
**Features**:
- Full-screen overlay with fade-in animation
- Click-to-close functionality
- Keyboard support (Escape key)
- Accessibility attributes

```tsx
import { AssistantBackdrop } from './assistant-components';

<AssistantBackdrop onClose={handleClose} />
```

**CSS Module**: `AssistantBackdrop.module.css`
- Fixed positioning with backdrop blur
- Smooth fade animations
- Focus indicators for accessibility

### 🎯 AssistantHeader
**Purpose**: Header component with title and close button
**Features**:
- Consistent title styling
- Accessible close button
- Responsive design
- Professional appearance

```tsx
import { AssistantHeader } from './assistant-components';

<AssistantHeader onClose={handleClose} title="Help Assistant" />
```

**CSS Module**: `AssistantHeader.module.css`
- Flexbox layout for responsive design
- Hover states for interactive elements
- Mobile-optimized sizing

### 💬 MessageContainer
**Purpose**: Message display area with complex auto-scroll logic
**Features**:
- Auto-scroll when user is near bottom
- User interaction detection (hover to pause)
- Loading states
- Message rendering with typing indicators

```tsx
import { MessageContainer } from './assistant-components';

<MessageContainer
  messages={messages}
  isTyping={isTyping}
  isLoading={isLoading}
/>
```

**CSS Module**: `MessageContainer.module.css`
- Custom scrollbar styling
- Smooth scrolling behavior
- Responsive message sizing
- Accessibility improvements

## Complex Behaviors

### Auto-Scroll Logic
The MessageContainer implements sophisticated scroll behavior:

1. **Detection**: Checks if user is within 50px of bottom
2. **Timing**: 150ms delay to ensure DOM updates complete
3. **Pause on hover**: Stops auto-scroll when user hovers
4. **Resume on leave**: Restarts when user stops hovering

```tsx
// Simplified auto-scroll logic
useEffect(() => {
  if (containerRef.current && !isHovered) {
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;

    if (isNearBottom) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 150);
    }
  }
}, [messages, isTyping, isHovered]);
```

### Animation Sequence
When the assistant panel opens for the first time:

1. **Loading state** shows for 300ms
2. **Typing animation** displays for 1.5 seconds
3. **Welcome message** appears after typing completes

## State Management

The components work together to manage complex state:

- **Panel visibility** (open/close)
- **Loading states** (initial animation)
- **Message history** (conversation flow)
- **Typing indicators** (AI responses)
- **Scroll position** (user interaction)

## Accessibility Features

### Keyboard Navigation
- **Escape key** closes the panel
- **Tab navigation** through all interactive elements
- **Focus management** when panel opens/closes

### Screen Readers
- **ARIA labels** on all buttons and containers
- **Live regions** for dynamic content updates
- **Role attributes** for proper semantic structure

### Motion Preferences
- **Reduced motion** support for animations
- **Respects user preferences** for motion sensitivity

## Integration Pattern

```tsx
const AssistantPanel: React.FC = () => {
  return (
    <>
      <AssistantBackdrop onClose={closeAssistant} />
      <div className={styles.panel}>
        <AssistantHeader onClose={closeAssistant} />
        <MessageContainer
          messages={messages}
          isTyping={isTyping}
          isLoading={isLoading}
        />
        <AssistantInputBar />
      </div>
    </>
  );
};
```

## Performance Considerations

### Optimizations
- **Component memoization** prevents unnecessary renders
- **useCallback hooks** for stable function references
- **CSS transforms** for smooth animations
- **Cleanup timers** prevent memory leaks

### Memory Management
- **Effect cleanup** on component unmount
- **Event listener cleanup** when panel closes
- **Scroll position restoration** when closing

## Testing Strategy

### Component Tests
- **Backdrop click behavior**
- **Header close functionality**
- **Message scroll behavior**
- **Keyboard accessibility**

### Integration Tests
- **Panel open/close flow**
- **Message display sequence**
- **Auto-scroll interruption**
- **Responsive design breakpoints
