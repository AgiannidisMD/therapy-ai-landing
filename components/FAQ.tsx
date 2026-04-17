"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "Is my patient data really safe?",
      answer:
        "Yes. All audio is deleted immediately after transcription (within 60 seconds). We use end-to-end AES-256 encryption, store all data exclusively on EU servers, and are fully GDPR compliant. We never use your data to train AI models.",
    },
    {
      question: "How accurate is the Greek transcription?",
      answer:
        "Our AI is specifically trained on Greek medical and psychological terminology. Accuracy is typically >95% for standard Greek. You can always review and edit notes before saving. The system learns your documentation preferences over time.",
    },
    {
      question: "What if the AI makes a mistake in clinical notes?",
      answer:
        "You always review and approve notes before saving. The AI assists you—it doesn't replace your clinical judgment. Every statement in the generated note links back to the original transcript so you can verify accuracy instantly.",
    },
    {
      question: "Do I need to install software or integrate with my EHR?",
      answer:
        "No installation needed. MedScribe works in any web browser on your phone, tablet, or computer. Notes can be exported as PDF or copied directly into any EHR system. No complex integration required.",
    },
    {
      question: "Can I try it before committing?",
      answer:
        "Yes. The first 50 early-access users get 3 months completely free. No credit card required. After that, you can cancel anytime—no long-term contracts.",
    },
    {
      question: "What note formats do you support?",
      answer:
        "We currently support SOAP and DAP note formats, which cover most psychotherapy documentation needs. Custom templates and additional formats (BIRP, GIRP, etc.) are coming soon based on user feedback.",
    },
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border border-navy-100 rounded-lg p-6 group"
            >
              <summary className="font-semibold text-navy-900 cursor-pointer flex justify-between items-center">
                {faq.question}
                <i className="ph ph-caret-down text-navy-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-navy-600 mt-4 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="text-center text-sm text-navy-600 mt-10">
          Still have questions?{" "}
          <a
            href="mailto:hello@medscribe.gr"
            className="text-teal font-semibold hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
