import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactForms from "@/components/ContactForms";

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

      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[700px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/fbad7570-ca08-4e9e-bcee-84b00afcbc6a.jpg"
                alt="Nelden Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-6xl md:text-7xl font-bold mb-10 text-secondary leading-tight">
                Italian Excellence
              </h2>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
                Dal 1990, Nelden Industry è leader nella produzione di macchinari industriali.
              </p>
              
              <div className="grid grid-cols-3 gap-10 mb-12">
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">30+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Years</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">500+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Projects</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">45</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-4 text-secondary">
              Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "Settings", title: "Production" },
              { icon: "Wrench", title: "Installation" },
              { icon: "Headphones", title: "After Sales" }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-12 hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                  <Icon name={item.icon} size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <ContactForms />

      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <img 
            src="https://cdn.poehali.dev/files/d9645102-01f0-4bb2-832f-a42c10f3b983.png" 
            alt="NELDEN" 
            className="h-10 mb-8 brightness-0 invert mx-auto"
          />
          <p className="text-gray-400 text-sm">
            © 2024 Nelden Industry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;