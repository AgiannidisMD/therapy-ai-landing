"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-navy-600 mb-4">
            No per-session fees. No surprises.
          </p>
          <p className="text-lg text-navy-500">
            Pay per user, unlimited sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="border-2 border-teal rounded-2xl p-10 bg-white relative card-hover animate-fade-up shadow-premium">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full">
              MOST POPULAR
            </div>
            <div className="text-sm font-bold text-teal mb-4 tracking-wider">
              STANDARD
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-navy-900">€80</span>
                <span className="text-lg text-navy-500">/user/month</span>
              </div>
              <div className="text-sm text-navy-600 mt-2">
                or €64/user/month billed annually
              </div>
            </div>

            <div className="bg-navy-50 rounded-xl p-4 mb-6">
              <div className="text-sm font-semibold text-navy-900 mb-2">
                Perfect for solo practitioners & small practices
              </div>
              <div className="text-xs text-navy-600">1-10 users</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold text-navy-900">
                    Unlimited sessions
                  </div>
                  <div className="text-xs text-navy-600">No per-session fees</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold text-navy-900">
                    AI transcription & notes
                  </div>
                  <div className="text-xs text-navy-600">
                    Greek & English support
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold text-navy-900">
                    All note formats
                  </div>
                  <div className="text-xs text-navy-600">
                    SOAP, DAP, BIRP, GIRP
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <span className="text-navy-700">PDF & DOCX export</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <span className="text-navy-700">Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <span className="text-navy-700">GDPR compliant storage</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal text-lg mt-0.5"></i>
                <span className="text-navy-700">Mobile app access</span>
              </li>
            </ul>

            <a
              href="#cta"
              className="btn-primary block text-center text-white px-6 py-4 rounded-xl font-bold text-base"
            >
              Start 14-day free trial
            </a>
            <p className="text-xs text-center text-navy-500 mt-3">
              No credit card required
            </p>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-navy-200 rounded-2xl p-10 bg-gradient-to-br from-navy-900 to-navy-800 text-white card-hover animate-fade-up">
            <div className="text-sm font-bold text-teal-300 mb-4 tracking-wider">
              ENTERPRISE
            </div>

            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">Custom</div>
              <div className="text-sm text-navy-300">
                Starting at €480/month for 10 users
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
              <div className="text-sm font-semibold mb-2">
                For clinics, hospitals & large practices
              </div>
              <div className="text-xs text-navy-300">
                10+ users · Volume discounts available
              </div>
            </div>

            <div className="text-sm font-semibold mb-4 text-teal-300">
              Everything in Standard, plus:
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold">Custom note templates</div>
                  <div className="text-xs text-navy-300">
                    Tailored to your practice
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold">API access & SSO</div>
                  <div className="text-xs text-navy-300">
                    SAML, OAuth integrations
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <div>
                  <div className="font-semibold">Dedicated account manager</div>
                  <div className="text-xs text-navy-300">
                    White-glove onboarding
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <span className="text-navy-100">Priority 24/7 support</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <span className="text-navy-100">Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <span className="text-navy-100">Multi-location support</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ph-fill ph-check text-teal-300 text-lg mt-0.5"></i>
                <span className="text-navy-100">99.9% SLA guarantee</span>
              </li>
            </ul>

            <a
              href="#cta"
              className="btn-secondary block text-center text-navy-900 bg-white px-6 py-4 rounded-xl font-bold text-base hover:bg-navy-50"
            >
              Contact sales
            </a>
            <p className="text-xs text-center text-navy-400 mt-3">
              Volume discounts available
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-navy-500 mt-8">
          All plans include 3 months free for early access users
        </p>
      </div>
    </section>
  );
}
