import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const SolutionsSection = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

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
      image: "https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/6e5f8194-c3e4-463f-ad51-5c59e823f668.jpg"
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
    <section id="solutions" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-secondary">
            Наши решения
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Полный спектр инженерных услуг от проектирования до послепродажного обслуживания
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-primary transition-all duration-500 h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px]"
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

              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all duration-500"
                  style={{
                    transform: hoveredSolution === index ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  <Icon name={item.icon} size={24} className="text-white md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 transition-all duration-300"
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
  );
};

export default SolutionsSection;
