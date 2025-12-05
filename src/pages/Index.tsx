import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ROICalculator from "@/components/ROICalculator";
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

      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/c0e590fb-d228-4ddd-baeb-84e691a4cd27.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/fbad7570-ca08-4e9e-bcee-84b00afcbc6a.jpg"
                alt="Nelden Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
                Eccellenza italiana
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Dal 1990, Nelden Industry è leader nella produzione di macchinari industriali 
                e soluzioni per grandi imprese in tutto il mondo.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                С 1990 года компания Nelden Industry — ведущий производитель промышленного оборудования 
                и решений для крупных предприятий по всему миру.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Anni</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Progetti</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">45</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Paesi</div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Scopri di più
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Le nostre soluzioni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluzioni industriali complete per la vostra azienda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "Settings", title: "Macchinari", subtitle: "Оборудование", description: "Высокоточное оборудование для различных отраслей промышленности" },
              { icon: "Cpu", title: "Automazione", subtitle: "Автоматизация", description: "Современные решения для полной автоматизации производства" },
              { icon: "Wrench", title: "Manutenzione", subtitle: "Обслуживание", description: "Комплексный сервис и поддержка на всех этапах эксплуатации" },
              { icon: "LineChart", title: "Ottimizzazione", subtitle: "Оптимизация", description: "Анализ и улучшение производственных процессов" },
              { icon: "Shield", title: "Sicurezza", subtitle: "Безопасность", description: "Промышленные решения для обеспечения безопасности производства" },
              { icon: "Zap", title: "Efficienza", subtitle: "Энергоэффективность", description: "Снижение энергопотребления и оптимизация ресурсов" }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-2 border-gray-100 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Icon name={item.icon} size={36} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
                <p className="text-primary font-medium mb-4">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/c0e590fb-d228-4ddd-baeb-84e691a4cd27.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Perché scegliere Nelden?
            </h2>
            <p className="text-xl text-gray-300">Почему выбирают Nelden?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Award", title: "Qualità", text: "Сертифицированное качество ISO 9001" },
              { icon: "Globe", title: "Globale", text: "Присутствие в 45 странах мира" },
              { icon: "Users", title: "Esperienza", text: "Команда из 200+ специалистов" },
              { icon: "TrendingUp", title: "Innovazione", text: "Постоянное развитие и инновации" },
              { icon: "Headphones", title: "Supporto 24/7", text: "Техническая поддержка круглосуточно" },
              { icon: "Truck", title: "Consegna rapida", text: "Доставка из Италии 3-5 дней" }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      <ContactForms />

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/d9645102-01f0-4bb2-832f-a42c10f3b983.png" 
                alt="NELDEN" 
                className="h-8 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm">
                Промышленные решения премиум-класса из Италии
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Решения</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Оборудование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Автоматизация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сервис</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@neldenindustry.it
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +39 012 345 6789
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            © 2024 Nelden Industry. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;