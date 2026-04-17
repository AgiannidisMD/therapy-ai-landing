"use client";

import { useEffect } from "react";

export default function ClientLogos() {
  useEffect(() => {
    // Initialize Swiper when component mounts
    if (typeof window !== "undefined" && (window as any).Swiper) {
      new (window as any).Swiper(".logoSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    }
  }, []);

  const logos = [
    { icon: "ph-hospital", name: "ATTIKON HOSPITAL" },
    { icon: "ph-cross", name: "HYGEIA CLINIC" },
    { icon: "ph-activity", name: "METROPOLITAN" },
    { icon: "ph-heartbeat", name: "IASO HOSPITAL" },
    { icon: "ph-first-aid", name: "EUROCLINIC" },
    { icon: "ph-pulse", name: "MITERA HOSPITAL" },
  ];

  return (
    <section className="py-16 bg-navy-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-8 text-center">
          Trusted by leading Greek healthcare institutions
        </p>

        {/* Swiper Logo Carousel */}
        <div className="swiper logoSwiper mb-8">
          <div className="swiper-wrapper items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="swiper-slide !flex items-center justify-center"
              >
                <div className="flex items-center gap-3 text-lg font-semibold opacity-70 hover:opacity-100 transition-opacity">
                  <i className={`ph-fill ${logo.icon} text-3xl text-teal`}></i>
                  <span>{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block text-sm bg-navy-800 px-6 py-3 rounded-lg font-medium border border-navy-700">
            <i className="ph-fill ph-check-circle text-teal mr-2"></i>
            Για Έλληνες επαγγελματίες ψυχικής υγείας
          </div>
        </div>
      </div>
    </section>
  );
}
