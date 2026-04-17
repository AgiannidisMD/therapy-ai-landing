"use client";

import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    // Initialize Swiper when component mounts
    if (typeof window !== "undefined" && (window as any).Swiper) {
      new (window as any).Swiper(".testimonialSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    }
  }, []);

  const testimonials = [
    {
      quote:
        "Saves me 6 hours every week. I can actually focus on my patients now instead of spending evenings on documentation.",
      name: "Dr. Maria K.",
      role: "Clinical Psychologist, Athens",
    },
    {
      quote:
        "The Greek transcription accuracy is incredible. Better than typing myself. GDPR compliance gives me complete peace of mind.",
      name: "Dimitris P.",
      role: "Psychiatrist, Thessaloniki",
    },
    {
      quote:
        "As a private practice owner, this tool has been transformative. My team can see more patients while maintaining quality documentation.",
      name: "Elena S.",
      role: "Practice Owner, Patras",
    },
  ];

  return (
    <section className="py-16 bg-navy-50 border-y border-navy-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">
            Trusted by mental health professionals
          </h2>
          <p className="text-lg text-navy-600">
            Join hundreds of therapists saving time with AI documentation
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="swiper testimonialSwiper">
          <div className="swiper-wrapper pb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-white border border-navy-100 rounded-lg p-8 h-full card-hover">
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ph-fill ph-star text-teal text-xl"></i>
                    ))}
                  </div>
                  <p className="text-navy-700 mb-6 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                    <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
                      <i className="ph-fill ph-user text-navy-600 text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-navy-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
