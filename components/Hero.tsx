"use client";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-navy-50 to-white overflow-hidden">
      {/* Gradient Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl hero-circle-1"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl hero-circle-2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="badge-premium inline-flex items-center gap-2 px-4 py-2 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <i className="ph-fill ph-shield-check text-sm"></i>
              <span>HIPAA & GDPR Compliant</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight tracking-tight mb-6">
              AI Τεκμηρίωση για Ψυχοθεραπευτές
            </h1>

            <p className="text-xl text-navy-600 mb-4 font-normal leading-relaxed">
              Enterprise-grade clinical documentation powered by AI
            </p>

            <p className="text-lg text-navy-500 mb-8 border-l-2 border-teal pl-4">
              Εξοικονομήστε 5+ ώρες την εβδομάδα με αυτοματοποιημένη τεκμηρίωση
              <br />
              <span className="text-base">
                Save 5+ hours every week with automated documentation
              </span>
            </p>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Εισάγετε το email σας"
                  required
                  className="input-premium w-full px-4 py-3.5 rounded-xl text-navy-900 placeholder:text-navy-400 font-medium"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="btn-primary text-white px-7 py-3.5 rounded-xl font-semibold whitespace-nowrap flex items-center gap-2"
              >
                <span>Δωρεάν Πρόσβαση</span>
                <i className="ph-bold ph-arrow-right"></i>
              </button>
            </form>
            <p className="text-xs text-navy-500 mt-3 flex items-center gap-1.5">
              <i className="ph-fill ph-lock-simple text-teal"></i> 100%
              Ασφαλές & Συμβατό με GDPR
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-navy-100">
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <i className="ph-fill ph-check-circle text-teal"></i>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <i className="ph-fill ph-check-circle text-teal"></i>
                <span>EU Data Residency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <i className="ph-fill ph-check-circle text-teal"></i>
                <span>256-bit AES</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Enterprise Dashboard Mockup */}
          <div className="relative">
            <div className="glass-card rounded-2xl shadow-premium p-6 overflow-hidden backdrop-blur-xl">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-navy-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-navy-100 flex items-center justify-center">
                    <i className="ph-fill ph-user-circle text-navy-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900">
                      Συνεδρία #4872
                    </h3>
                    <p className="text-xs text-navy-500">Διάρκεια: 48:23</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-navy-900 text-white rounded text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                  Live
                </div>
              </div>

              {/* Waveform */}
              <div className="py-8">
                <div className="flex items-end justify-center gap-1.5 h-16">
                  <div className="w-1.5 bg-navy-400 rounded-full audio-bar"></div>
                  <div className="w-1.5 bg-navy-500 rounded-full audio-bar"></div>
                  <div className="w-1.5 bg-navy-600 rounded-full audio-bar"></div>
                  <div className="w-1.5 bg-navy-700 rounded-full audio-bar"></div>
                  <div className="w-1.5 bg-navy-600 rounded-full audio-bar"></div>
                  <div className="w-1.5 bg-navy-500 rounded-full audio-bar"></div>
                </div>
              </div>

              {/* Generated Note Preview */}
              <div className="bg-navy-50 rounded p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-medium text-navy-700 mb-3">
                  <i className="ph-fill ph-sparkle text-teal"></i>
                  AI-Generated Documentation
                </div>
                <div className="h-2 bg-navy-200 rounded w-20"></div>
                <div className="h-2 bg-navy-100 rounded w-full"></div>
                <div className="h-2 bg-navy-100 rounded w-5/6"></div>
                <div className="h-2 bg-navy-100 rounded w-4/6"></div>
                <div className="h-2 bg-navy-100 rounded w-3/4"></div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
