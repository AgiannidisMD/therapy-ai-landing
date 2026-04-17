"use client";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-navy-900 flex items-center justify-center">
            <i className="ph-fill ph-note-pencil text-teal text-lg"></i>
          </div>
          <span className="font-semibold text-lg tracking-tight text-navy-900">
            MedScribe<span className="text-navy-600">.gr</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
          >
            Λειτουργία
          </a>
          <a
            href="#benefits"
            className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
          >
            Οφέλη
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
          >
            Τιμές
          </a>
          <a
            href="#cta"
            className="btn-primary text-sm font-semibold text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2"
          >
            <span>Κλείστε Demo</span>
            <i className="ph-bold ph-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
