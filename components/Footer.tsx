"use client";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-teal flex items-center justify-center">
                <i className="ph-fill ph-note-pencil text-white text-lg"></i>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                MedScribe<span className="text-navy-400">.gr</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm mb-4">
              Enterprise-grade AI clinical documentation for mental health
              professionals. HIPAA & GDPR compliant.
            </p>
            <p className="text-navy-500 text-xs">
              © 2026 MedScribe.gr. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-navy-400">
              <li>
                <a href="#how-it-works" className="hover:text-teal transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-navy-400">
              <li>
                <a
                  href="mailto:hello@medscribe.gr"
                  className="hover:text-teal transition-colors"
                >
                  hello@medscribe.gr
                </a>
              </li>
              <li className="text-navy-500">Athens, Greece</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
