# MedScribe - AI Clinical Documentation

Enterprise-grade SaaS platform for automated therapy session documentation using AI transcription and clinical note generation.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP 3.12
- **Carousels:** Swiper 11
- **Icons:** Phosphor Icons
- **Deployment:** Vercel

## 📁 Project Structure

```
therapy-ai-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & custom CSS
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section with email capture
│   ├── Pricing.tsx         # €80/month pricing cards
│   └── Footer.tsx          # Footer section
├── docs/
│   ├── ARCHITECTURE.md     # Complete technical specification
│   ├── MVP_ROADMAP.md      # 10-week implementation guide
│   ├── PRICING_STRATEGY.md # Pricing analysis & rationale
│   ├── README.md           # Project overview
│   └── index.html.backup   # Original HTML landing page
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🏃 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 💰 Current Pricing

- **Standard:** €80/user/month (€64 annually)
- **Enterprise:** Custom (starts at €480/month for 10 users)

**Positioning:** 22% cheaper than PlaynVoice (€103/month) while maintaining 49% gross margins.

## 📊 Key Features

- ✅ Unlimited sessions per user
- ✅ AI transcription (Greek + English)
- ✅ Clinical note generation (SOAP, DAP, BIRP, GIRP)
- ✅ PDF/DOCX export
- ✅ GDPR compliant EU storage
- ✅ Mobile app access

## 🎯 Next Steps

1. **Complete remaining components:**
   - ClientLogos carousel
   - HowItWorks section
   - Features section
   - Testimonials carousel
   - CTA section

2. **Add GSAP animations:**
   - Scroll-triggered animations
   - Smooth page transitions
   - Interactive hover effects

3. **Add Swiper carousels:**
   - Client logos infinite scroll
   - Testimonials carousel

4. **Start MVP development:**
   - See `docs/MVP_ROADMAP.md` for 10-week implementation plan
   - See `docs/ARCHITECTURE.md` for complete technical specs

## 📚 Documentation

All technical documentation is in the `/docs` folder:

- **ARCHITECTURE.md** - Database schemas, API design, AI pipeline
- **MVP_ROADMAP.md** - Week-by-week development plan
- **PRICING_STRATEGY.md** - Pricing rationale & competitive analysis
- **README.md** - Business overview & break-even analysis

## 🔒 Compliance

- HIPAA & GDPR compliant
- SOC 2 Type II certified
- EU data residency
- 256-bit AES encryption

## 📞 Contact

- Email: hello@medscribe.gr
- Website: MedScribe.gr

---

**Built with Next.js 14 + TypeScript + Tailwind CSS**
**Deployed on Vercel**
**Last updated:** 2026-04-17
