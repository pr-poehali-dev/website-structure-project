import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ROICalculator from "@/components/ROICalculator";
import ContactForms from "@/components/ContactForms";

const Index = () => {
  const [activeTab, setActiveTab] = useState("solutions");

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

      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                О компании Nelden
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                С 1990 года компания Nelden Industry является ведущим производителем промышленного оборудования 
                и решений для крупных предприятий по всему миру.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Наша миссия — предоставлять инновационные технологии высочайшего качества, 
                которые помогают нашим клиентам достигать производственного совершенства.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45</div>
                  <div className="text-sm text-gray-600">Стран</div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/7a562032-d1f4-45e6-89c6-141bede913a2.jpg"
                alt="Nelden Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/3e6159cd-9de2-4763-9c19-885811768a21.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные промышленные решения для вашего бизнеса
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              variant={activeTab === "solutions" ? "default" : "outline"}
              onClick={() => setActiveTab("solutions")}
              className={activeTab === "solutions" ? "bg-primary" : ""}
            >
              Промышленные решения
            </Button>
            <Button 
              variant={activeTab === "automation" ? "default" : "outline"}
              onClick={() => setActiveTab("automation")}
              className={activeTab === "automation" ? "bg-primary" : ""}
            >
              Автоматизация
            </Button>
            <Button 
              variant={activeTab === "consulting" ? "default" : "outline"}
              onClick={() => setActiveTab("consulting")}
              className={activeTab === "consulting" ? "bg-primary" : ""}
            >
              Консалтинг
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Settings", title: "Производственное оборудование", description: "Высокоточное оборудование для различных отраслей промышленности" },
              { icon: "Cpu", title: "Системы автоматизации", description: "Современные решения для полной автоматизации производства" },
              { icon: "Wrench", title: "Техническое обслуживание", description: "Комплексный сервис и поддержка на всех этапах эксплуатации" },
              { icon: "LineChart", title: "Оптимизация процессов", description: "Анализ и улучшение производственных процессов" },
              { icon: "Shield", title: "Системы безопасности", description: "Промышленные решения для обеспечения безопасности производства" },
              { icon: "Zap", title: "Энергоэффективность", description: "Снижение энергопотребления и оптимизация ресурсов" }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">{item.title}</h3>
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
            backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/78e39bcc-222c-4149-8546-6043d8283444.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Почему выбирают Nelden?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Award", text: "Сертифицированное качество ISO 9001" },
                  { icon: "Globe", text: "Присутствие в 45 странах мира" },
                  { icon: "Users", text: "Команда из 200+ специалистов" },
                  { icon: "TrendingUp", text: "Постоянное развитие и инновации" },
                  { icon: "Headphones", text: "24/7 техническая поддержка" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Наши клиенты</h3>
              <p className="text-gray-200 mb-6">
                Мы работаем с ведущими компаниями в различных отраслях промышленности:
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {["Автомобильная", "Аэрокосмическая", "Химическая", "Пищевая", "Энергетика", "Металлургия"].map((industry, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
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
