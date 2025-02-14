import FeaturesSection from "@/components/organisms/FeaturesSection";
import HeroSection from "@/components/organisms/HeroSection";
import TestimonialsSection from "@/components/organisms/TestimonialSection";
import Layout from "@/components/templates/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </Layout>
  );
}
