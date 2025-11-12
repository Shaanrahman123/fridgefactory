import ContactSection from "@/components/common/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import CoreCompetitiveEdge from "@/components/home/CoreCompetitiveEdge";
import HeroSlider from "@/components/home/HeroSlider";
import IndustrySection from "@/components/home/IndustrySection";
import ProductSection from "@/components/home/ProductSection";
import QualityAssurance from "@/components/home/QualityAssurance";
import TestimonialSection from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Swiper Slider */}
      <HeroSlider />


      <section >
        <AboutSection />
        <ProductSection />
        <CoreCompetitiveEdge />
        <QualityAssurance />
        <IndustrySection />
        <TestimonialSection />
        <ContactSection />
      </section>
    </main>
  );
}