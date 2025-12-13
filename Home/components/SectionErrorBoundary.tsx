'use client';
import React from 'react';

interface SectionErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
  fallbackComponent?: React.ComponentType;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export default class SectionErrorBoundary extends React.Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SectionErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`${this.props.sectionName} Section Error:`, error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback component if provided
      if (this.props.fallbackComponent) {
        const FallbackComponent = this.props.fallbackComponent;
        return <FallbackComponent />;
      }

      // Default fallback UI
      return (
        <section style={{
          padding: "2rem",
          textAlign: "center",
          background: "#fef7f0",
          border: "1px solid #fed7aa",
          borderRadius: "8px",
          margin: "1rem 0"
        }}>
          <div style={{
            fontSize: "2rem",
            marginBottom: "1rem"
          }}>
            ⚠️
          </div>
          <h3 style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#c2410c",
            marginBottom: "0.5rem"
          }}>
            {this.props.sectionName} Section Unavailable
          </h3>
          <p style={{
            color: "#9a3412",
            fontSize: "0.875rem"
          }}>
            This section is temporarily unavailable. Please refresh the page or try again later.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}
