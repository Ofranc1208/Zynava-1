'use client';
import React from 'react';

interface HomePageErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface HomePageErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export default class HomePageErrorBoundary extends React.Component<
  HomePageErrorBoundaryProps,
  HomePageErrorBoundaryState
> {
  constructor(props: HomePageErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): HomePageErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Home Page Error:', error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "8px",
          margin: "2rem auto",
          maxWidth: "600px"
        }}>
          <div style={{
            fontSize: "3rem",
            marginBottom: "1rem"
          }}>
            🏠⚠️
          </div>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#991b1b",
            marginBottom: "1rem"
          }}>
            Something went wrong on our homepage
          </h2>
          <p style={{
            color: "#7f1d1d",
            marginBottom: "2rem"
          }}>
            We're sorry, but there was an error loading the homepage. Please try refreshing the page or contact us directly.
          </p>
          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "#dc2626",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Refresh Page
            </button>
            <a
              href="/contact"
              style={{
                background: "#059669",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              Contact Support
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
