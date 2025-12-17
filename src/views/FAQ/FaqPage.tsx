export function FaqPage() {
  const faqs = [
    {
      question: "What is ZYNAVA?",
      answer: "ZYNAVA is an independent supplement advisor platform that helps individuals navigate the supplement landscape. We analyze thousands of supplements and match users with products that may align with their wellness goals based on a structured questionnaire. We do not sell supplements - we provide educational guidance and route users to trusted third-party retailers."
    },
    {
      question: "Does ZYNAVA sell supplements?",
      answer: "No. ZYNAVA does not sell, manufacture, or distribute supplements. We are an independent guidance platform. When you receive recommendations, you are routed to trusted third-party retailers where you can review products and make your own purchasing decisions."
    },
    {
      question: "How does the Supplement Advisor work?",
      answer: "The Supplement Advisor asks you a series of questions about your wellness goals, lifestyle, dietary preferences, and other relevant factors. Based on your responses, our algorithm evaluates thousands of supplements and provides personalized recommendations. The process is free, requires no account creation, and takes just a few minutes."
    },
    {
      question: "Is ZYNAVA medical advice?",
      answer: "No. ZYNAVA provides educational and informational guidance only. We do not diagnose, treat, cure, or prevent any disease or medical condition. We do not replace conversations with qualified healthcare professionals. Before using any supplement, especially if you have health conditions, take medications, or are pregnant or breastfeeding, please consult with a healthcare provider."
    },
    {
      question: "Do I need to create an account?",
      answer: "No. You can use the Supplement Advisor without creating an account. We respect your privacy and do not require registration to access our guidance platform."
    },
    {
      question: "How does ZYNAVA make money?",
      answer: "ZYNAVA may receive affiliate commissions when users click through to third-party retailers and make purchases. This does not influence our recommendations - our algorithm is independent and ingredient-focused. We are transparent about our affiliate relationships and prioritize accuracy over sales."
    },
    {
      question: "Are ZYNAVA's recommendations guaranteed?",
      answer: "No. ZYNAVA does not guarantee outcomes or results. Individual experiences with supplements vary. Our recommendations are based on available information about ingredients and supplement types, but we cannot promise that any product will produce specific results for any individual."
    },
    {
      question: "What sources does ZYNAVA use for information?",
      answer: "ZYNAVA uses authoritative, publicly available sources including the NIH Office of Dietary Supplements (ODS), PubMed research, NCCIH, and other evidence-based resources. We summarize and paraphrase information - we do not copy content verbatim. All content is reviewed for accuracy and compliance."
    },
    {
      question: "Can I trust ZYNAVA's recommendations?",
      answer: "ZYNAVA is committed to transparency, accuracy, and independence. Our recommendations are based on ingredient analysis, not brand marketing. We use evidence-informed guidance and transparent language. However, supplement decisions are personal choices, and you should always consult with healthcare professionals for medical advice."
    },
    {
      question: "How often is ZYNAVA's content updated?",
      answer: "We regularly review and update our content to ensure accuracy. Ingredient pages are refreshed periodically, and our recommendation algorithm is continuously refined based on new research and user feedback."
    },
    {
      question: "What if I have a complaint or concern?",
      answer: "We take feedback seriously. Please contact us at support@zynava.com with any concerns, questions, or complaints. We aim to respond within 1-2 business days."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes. ZYNAVA is committed to protecting your privacy. We do not sell your data to third parties. Your questionnaire responses are used solely to generate recommendations. Please review our Privacy Policy for complete details."
    }
  ];

  return (
    <main style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '3rem 1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      lineHeight: '1.7',
      color: '#1a202c'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        color: '#1a202c'
      }}>
        Frequently Asked Questions
      </h1>

      <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '2rem' }}>
        Find answers to common questions about ZYNAVA, our platform, and how we work.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {faqs.map((faq, index) => (
          <section
            key={index}
            style={{
              padding: '1.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              background: '#ffffff'
            }}
          >
            <h2 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              color: '#1a202c'
            }}>
              {faq.question}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#374151',
              margin: 0,
              lineHeight: '1.7'
            }}>
              {faq.answer}
            </p>
          </section>
        ))}
      </div>

      <section style={{
        marginTop: '3rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.2rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: '#1a202c'
        }}>
          Still Have Questions?
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          If you don't find the answer you're looking for, please{' '}
          <a href="/contact" style={{ color: '#ff6b35', textDecoration: 'none' }}>
            contact us
          </a>
          {' '}and we'll be happy to help.
        </p>
      </section>
    </main>
  )
}

export default FaqPage

