"use client";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i className="ph-fill ph-lightning"></i>
          <span>Limited Availability</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Πρώτοι 50 Χρήστες:
          <br />
          Δωρεάν για 3 Μήνες
        </h2>
        <p className="text-xl text-navy-300 mb-10 max-w-2xl mx-auto">
          Join our early-access program. Shape the product with us and get
          premium access completely free.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
          <input
            type="email"
            placeholder="Η διεύθυνση email σας..."
            required
            className="flex-1 px-5 py-4 bg-navy-800/50 border-2 border-navy-700/50 rounded-xl text-white placeholder:text-navy-400 focus:outline-none focus:border-teal focus:bg-navy-800 transition-all backdrop-blur-sm font-medium"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-500 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex items-center gap-2 justify-center"
          >
            <span>Κράτηση Θέσης</span>
            <i className="ph-bold ph-arrow-right"></i>
          </button>
        </form>

        <p className="text-sm text-navy-400">
          Προτιμάτε demo;
          <a href="#" className="text-teal font-semibold hover:underline ml-1">
            Κλείστε 15λεπτη κλήση
          </a>
        </p>
      </div>
    </section>
  );
}
