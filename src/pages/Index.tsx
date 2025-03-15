
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import ProviderCTA from "@/components/home/ProviderCTA";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceCategories />
        <HowItWorks />
        <Features />
        <Testimonials />
        <ProviderCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
