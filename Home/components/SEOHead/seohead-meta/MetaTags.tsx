'use client';

import { useEffect, useState } from 'react';

/**
 * Meta Tags Component
 * 
 * Handles all basic meta tags for SEO including title, description, keywords, and Open Graph.
 * 
 * @component MetaTags
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function MetaTags() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <title>Smarter Payouts - Get the Highest Early Payout for Your Future Payments</title>
      <meta
        name="description"
        content="Industry's first AI-powered self-quoting platform for structured settlements. Get instant quotes in seconds, anonymously and autonomously. No pushy sales calls, no personal information required."
      />
      <meta
        name="keywords"
        content="AI-powered structured settlement calculator, instant quotes, anonymous settlement quotes, automated settlement platform, self-quoting platform, structured settlement AI"
      />
      <meta property="og:title" content="Smarter Payouts - AI-Powered Self-Quoting Platform" />
      <meta
        property="og:description"
        content="Industry's first AI-powered self-quoting platform. Get instant structured settlement quotes in seconds, anonymously and autonomously."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Smarter Payouts - Get the Highest Early Payout for Your Future Payments" />
      <meta name="twitter:description" content="Get the highest early payout for your future payments instantly. No pushy sales calls. No sensitive personal information required. Industry's first online self-quoting platform." />
      <meta name="twitter:site" content="@Smarter Payouts" />
      <meta name="twitter:image" content="https://www.usa.gov/" />
    </>
  );
}
