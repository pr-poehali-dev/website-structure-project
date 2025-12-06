import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import ReputationSection from "@/components/ReputationSection";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%234A7C59" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>'), auto !important;
      }
      button, a {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%23357A4A" stroke-width="3"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>'), pointer !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImageGallery />
      <SolutionsSection />
      <ServicesSection />
      <ReputationSection />
      <ContactForms />
      <Footer />
    </div>
  );
};

export default Index;
