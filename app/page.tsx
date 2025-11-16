import ContactSection from "@/components/common/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import CoreCompetitiveEdge from "@/components/home/CoreCompetitiveEdge";
import HeroSlider from "@/components/home/HeroSlider";
import IndustrySection from "@/components/home/IndustrySection";
import ProductSection from "@/components/home/ProductSection";
import QualityAssurance from "@/components/home/QualityAssurance";
import TestimonialSection from "@/components/home/Testimonial";

export const metadata = {
  title: "Star Refrigeration & Air Conditioning – Cold Rooms, Chillers, Ripening Chambers",
  description:
    "Star Refrigeration specializes in cold rooms, fruit ripening chambers, PUF panel rooms, chillers, and HVAC solutions across India. Trusted since 2015.",
  alternates: {
    canonical: "https://www.starrefrigeration.in/",
  },
  openGraph: {
    title: "Star Refrigeration & Air Conditioning",
    description:
      "Your trusted partner for cold storage, ripening chambers, chillers, and HVAC systems.",
    url: "https://www.starrefrigeration.in/",
    type: "website",
    siteName: "Star Refrigeration",
  },
};

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