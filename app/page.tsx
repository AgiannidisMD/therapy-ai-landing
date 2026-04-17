import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* TODO: Add ClientLogos component */}
      {/* TODO: Add HowItWorks component */}
      {/* TODO: Add Features component */}
      {/* TODO: Add Testimonials component */}
      <Pricing />
      {/* TODO: Add CTA component */}
      <Footer />
    </main>
  );
}
