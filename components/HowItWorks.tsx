"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: "ph-microphone",
      label: "STEP 1",
      title: "Καταγράψτε τη συνεδρία",
      description:
        "Secure ambient recording during your therapy session. HIPAA-compliant encryption from capture to storage.",
      variant: "light",
    },
    {
      number: 2,
      icon: "ph-cpu",
      label: "STEP 2",
      title: "AI μετατρέπει σε τεκμηρίωση",
      description:
        "Advanced NLP engine generates structured clinical notes (SOAP, DAP) in Greek medical terminology.",
      variant: "dark",
    },
    {
      number: 3,
      icon: "ph-check-square",
      label: "STEP 3",
      title: "Ελέγξτε και αποθηκεύστε",
      description:
        "Review, edit, and approve AI-generated documentation. Export to any EHR system.",
      variant: "light",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Clinical-grade AI documentation workflow
          </h2>
          <p className="text-lg text-navy-600">
            Αφοσιωθείτε στον ασθενή. Όχι στην τεκμηρίωση.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${
                step.variant === "dark"
                  ? "bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-premium"
                  : "bg-white border border-navy-100"
              } rounded-2xl p-8 card-hover animate-fade-up`}
            >
              <div
                className={`w-14 h-14 ${
                  step.variant === "dark"
                    ? "bg-gradient-to-br from-teal-400 to-teal-600"
                    : "bg-gradient-to-br from-navy-900 to-navy-800"
                } rounded-xl flex items-center justify-center mb-5 shadow-lg`}
              >
                <i className={`ph-bold ${step.icon} text-white text-2xl`}></i>
              </div>
              <div
                className={`text-xs font-bold ${
                  step.variant === "dark" ? "text-teal-300" : "text-teal"
                } mb-3 tracking-wider`}
              >
                {step.label}
              </div>
              <h3
                className={`text-lg font-bold ${
                  step.variant === "dark" ? "text-white" : "text-navy-900"
                } mb-3`}
              >
                {step.title}
              </h3>
              <p
                className={`${
                  step.variant === "dark" ? "text-navy-300" : "text-navy-600"
                } text-sm leading-relaxed`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
