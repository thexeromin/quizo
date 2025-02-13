import NavBar from "@/components/molecules/NavBar";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import HeroSection from "@/components/organisms/HeroSection";
import Footer from "@/components/molecules/Footer";
import TestimonialsSection from "@/components/organisms/TestimonialSection";
import CtaSection from "@/components/organisms/CtaSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
