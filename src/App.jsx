import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/Hero";
import ClientsStrip from "./components/ClientsStrip";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "../src/components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "../src/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Navbar />
      <HeroSection />
      <ClientsStrip />
      <ServicesSection />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;