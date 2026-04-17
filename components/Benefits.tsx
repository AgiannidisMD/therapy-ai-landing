"use client";

export default function Benefits() {
  const benefits = [
    {
      icon: "ph-translate",
      badge: "🇬🇷 100% ΕΛΛΗΝΙΚΑ",
      title: "Greek medical terminology",
      description:
        "Trained on millions of Greek psychiatric and psychological clinical documents. Understands context, not just translation.",
    },
    {
      icon: "ph-shield-check",
      badge: "🔒 GDPR & HIPAA",
      title: "EU data residency",
      description:
        "End-to-end AES-256 encryption. All data stored exclusively in EU-based servers. Zero US data transfer. SOC 2 Type II certified.",
    },
    {
      icon: "ph-chart-line",
      badge: "⏰ ROI CALCULATOR",
      title: "€200-400 monthly time savings",
      description:
        "Average therapist spends 10-15 minutes per session on documentation. Reclaim 5+ hours weekly for patient care or personal time.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<60s", label: "Note generation" },
    { value: "256-bit", label: "AES encryption" },
    { value: "EU-only", label: "Data residency" },
  ];

  return (
    <section id="benefits" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-2">
            Enterprise-grade compliance & security
          </h2>
          <p className="text-lg text-navy-600">
            Built for the European healthcare regulatory environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-navy-100 rounded-2xl p-8 card-hover animate-fade-up"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center mb-4">
                <i className={`ph-bold ${benefit.icon} text-teal text-2xl`}></i>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-navy-700 mb-3">
                {benefit.badge}
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-navy-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-navy-200">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card text-center p-6 rounded-2xl">
              <div className="text-4xl font-bold text-navy-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-navy-600">
                {stat.label}
              </div>
              <div className="mt-3 h-1 w-16 mx-auto rounded-full progress-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
