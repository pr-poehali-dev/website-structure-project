import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactForms from "@/components/ContactForms";

const Index = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

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

  const solutions = [
    {
      icon: "Factory",
      title: "Производство линий розлива",
      description: "Проектирование и изготовление полных автоматизированных линий розлива для различных отраслей промышленности",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
    },
    {
      icon: "Wrench",
      title: "Монтаж и пуско-наладка",
      description: "Профессиональная установка оборудования, техническое обслуживание и ввод в эксплуатацию производственных линий",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/b8b54ddc-d302-4303-b119-6928a60e2693.jpg"
    },
    {
      icon: "Package",
      title: "Поставка запчастей",
      description: "Оригинальные комплектующие и запасные части для промышленного оборудования с гарантией качества",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/c283fe78-9633-42eb-b771-2da7bf48a1d1.jpg"
    },
    {
      icon: "Settings",
      title: "Модернизация оборудования",
      description: "Обновление и улучшение существующих производственных линий для повышения эффективности и производительности",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
    },
    {
      icon: "Headphones",
      title: "Послепродажное обслуживание",
      description: "Круглосуточная техническая поддержка, выезд специалистов и гарантийное обслуживание",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/78e39bcc-222c-4149-8546-6043d8283444.jpg"
    },
    {
      icon: "ClipboardCheck",
      title: "Инжиниринг и консалтинг",
      description: "Разработка технических решений, консультации по оптимизации производства и внедрению новых технологий",
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/fbad7570-ca08-4e9e-bcee-84b00afcbc6a.jpg"
    }
  ];

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
                Инженерное превосходство
              </h2>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
                С 1990 года Nelden Engineering — лидер в производстве промышленного оборудования для линий розлива.
              </p>
              
              <div className="grid grid-cols-3 gap-10 mb-12">
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">30+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Лет</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">500+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Проектов</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">45</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Стран</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/b8b54ddc-d302-4303-b119-6928a60e2693.jpg"
                alt="Сервис"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
                alt="Завод"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-secondary">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр инженерных услуг от проектирования до послепродажного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-primary transition-all duration-500 h-[420px]"
                onMouseEnter={() => setHoveredSolution(index)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-out"
                  style={{
                    transform: hoveredSolution === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div 
                    className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 transition-all duration-500"
                    style={{
                      transform: hoveredSolution === index ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 transition-all duration-300"
                    style={{
                      transform: hoveredSolution === index ? 'translateY(-8px)' : 'translateY(0)'
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: hoveredSolution === index ? '200px' : '0px',
                      opacity: hoveredSolution === index ? 1 : 0
                    }}
                  >
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
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
            © 2024 Nelden Industry. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
