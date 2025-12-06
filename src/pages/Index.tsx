import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection />

      <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="relative h-[300px] md:h-[500px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/fbad7570-ca08-4e9e-bcee-84b00afcbc6a.jpg"
                alt="Nelden Facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 text-secondary leading-tight">
                Инженерное превосходство
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed font-light">С 1990 года Nelden  — ваш партнер в производстве промышленного оборудования для линий розлива. Мы специализируемся на поставках итальянского оборудования высочайшего качества на российский рынок.</p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-10 mb-8 md:mb-12">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3">30+</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase tracking-wider">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3">500+</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase tracking-wider">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3">45</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 uppercase tracking-wider">Стран мира</div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p className="flex items-start gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <span>Собственное производство в Италии</span>
                </p>
                <p className="flex items-start gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <span>Официальное представительство в России</span>
                </p>
                <p className="flex items-start gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <span>Команда из 120+ инженеров и специалистов</span>
                </p>
                <p className="flex items-start gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <span>Сертификаты ISO 9001, CE, ГОСТ Р</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/6e5f8194-c3e4-463f-ad51-5c59e823f668.jpg"
                alt="Монтаж"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
                alt="Завод"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="service" className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-secondary">
              Полный цикл сервиса
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              От доставки оборудования из Италии до гарантийного обслуживания — мы берем на себя все этапы
            </p>
          </div>

          <Tabs defaultValue="delivery" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 md:mb-12 h-auto">
              <TabsTrigger value="delivery" className="py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base flex-col md:flex-row gap-1 md:gap-2">
                <Icon name="Truck" size={16} className="md:w-5 md:h-5" />
                <span className="hidden sm:inline">Доставка</span>
                <span className="sm:hidden"><Icon name="Truck" size={20} /></span>
              </TabsTrigger>
              <TabsTrigger value="customs" className="py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base flex-col md:flex-row gap-1 md:gap-2">
                <Icon name="FileText" size={16} className="md:w-5 md:h-5" />
                <span className="hidden sm:inline">Таможня</span>
                <span className="sm:hidden"><Icon name="FileText" size={20} /></span>
              </TabsTrigger>
              <TabsTrigger value="warranty" className="py-2 md:py-3 lg:py-4 text-xs md:text-sm lg:text-base flex-col md:flex-row gap-1 md:gap-2">
                <Icon name="Shield" size={16} className="md:w-5 md:h-5" />
                <span className="hidden sm:inline">Гарантия</span>
                <span className="sm:hidden"><Icon name="Shield" size={20} /></span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="delivery">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="relative h-[250px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                  <img 
                    src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/a295a1f9-1616-4e84-b8de-3b9262c66270.jpg"
                    alt="Международная доставка"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Доставка из Италии в Россию</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8">
                    Полный цикл логистики от завода в Милане до вашего производства. Опыт международных перевозок промышленного оборудования.
                  </p>

                  <div className="space-y-3 md:space-y-4 lg:space-y-5">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Truck" size={16} className="text-white md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-0.5 md:mb-1 text-sm md:text-base">Прямые поставки</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Работаем напрямую с производителями без посредников</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Сроки: 14-21 день</h4>
                        <p className="text-gray-600 text-sm">Оптимальные маршруты через порты или автотранспортом</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Страхование грузов</h4>
                        <p className="text-gray-600 text-sm">Все грузы застрахованы на полную стоимость</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Отслеживание в реальном времени</h4>
                        <p className="text-gray-600 text-sm">Онлайн-мониторинг и личный менеджер по логистике</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customs">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="relative h-[250px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                  <img 
                    src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/3c53f890-e155-4291-9783-6f12d6f7c366.jpg"
                    alt="Таможенное оформление"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Таможенное оформление</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8">
                    Полное сопровождение процесса растаможивания. Специалисты по ВЭД с опытом 15+ лет.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Подготовка документов</h4>
                        <p className="text-gray-600 text-sm">Инвойсы, паспорта, сертификаты, декларации</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Calculator" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Расчет платежей</h4>
                        <p className="text-gray-600 text-sm">Прозрачный расчет пошлин и НДС, оптимизация кода ТН ВЭД</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="BadgeCheck" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Сертификация в России</h4>
                        <p className="text-gray-600 text-sm">Получение деклараций ГОСТ Р, ТР ТС, регистрация в Росстандарте</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Личный таможенный брокер</h4>
                        <p className="text-gray-600 text-sm">Закрепленный специалист ведет поставку от начала до выпуска</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="warranty">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="relative h-[250px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                  <img 
                    src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/9c899e2d-d310-4b40-ae5e-4845d4853ce5.jpg"
                    alt="Гарантийный сервис"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Гарантия и сервис</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8">
                    Полная ответственность за качество поставляемого оборудования. Надежная гарантийная программа.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Гарантия 36 месяцев</h4>
                        <p className="text-gray-600 text-sm">Расширенная гарантия на оборудование итальянского производства</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Техподдержка 24/7</h4>
                        <p className="text-gray-600 text-sm">Горячая линия и удаленная диагностика круглосуточно</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Wrench" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Выезд инженера в течение 24 часов</h4>
                        <p className="text-gray-600 text-sm">Сервисные центры в 4 городах, выезд по всей России</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Package" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Склад запчастей в России</h4>
                        <p className="text-gray-600 text-sm">2000+ наименований на складе в Москве</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="GraduationCap" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Обучение персонала</h4>
                        <p className="text-gray-600 text-sm">Бесплатное обучение с выдачей сертификата</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reputation" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-secondary">
              Репутация и доверие
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              За 30 лет работы мы зарекомендовали себя как надежный партнер для крупнейших промышленных предприятий России и мира
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
            <Card className="p-6 md:p-8 lg:p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon name="Building2" size={28} className="text-primary md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">250+</div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">Постоянных клиентов</h3>
              <p className="text-sm md:text-base text-gray-600">Крупные предприятия пищевой, фармацевтической и химической промышленности</p>
            </Card>

            <Card className="p-6 md:p-8 lg:p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon name="TrendingUp" size={28} className="text-primary md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">98%</div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">Повторных обращений</h3>
              <p className="text-sm md:text-base text-gray-600">Клиенты возвращаются к нам за новым оборудованием и расширением производства</p>
            </Card>

            <Card className="p-6 md:p-8 lg:p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon name="Star" size={28} className="text-primary md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">4.9/5</div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">Средняя оценка</h3>
              <p className="text-sm md:text-base text-gray-600">По результатам независимых опросов клиентов за последние 3 года</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-12 lg:mb-16">
            <div className="relative h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/109a7054-d37b-4c9d-8397-57e443a7e03a.jpg"
                alt="Награды и сертификаты"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/ae094179-2708-4661-88e6-185246cad161.jpg"
                alt="Команда специалистов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Наши достижения</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="Award" size={24} className="text-primary flex-shrink-0 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Член Торгово-промышленной палаты РФ</h4>
                  <p className="text-sm md:text-base text-gray-600">Аккредитация с 2005 года. Участие в международных промышленных выставках.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="Award" size={24} className="text-primary flex-shrink-0 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Сертификат ISO 9001:2015</h4>
                  <p className="text-sm md:text-base text-gray-600">Международный стандарт системы менеджмента качества. Подтверждение высочайших стандартов.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="Award" size={24} className="text-primary flex-shrink-0 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Официальный дистрибьютор</h4>
                  <p className="text-sm md:text-base text-gray-600">Эксклюзивные права на территории России от 12 ведущих итальянских производителей.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="Award" size={24} className="text-primary flex-shrink-0 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Победитель конкурса "Надежный партнер"</h4>
                  <p className="text-sm md:text-base text-gray-600">Национальная премия в области промышленного оборудования 2022, 2023 годов.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-secondary">
              Кейсы наших клиентов
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Реальные результаты внедрения нашего оборудования на производствах
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="relative h-48 md:h-56 lg:h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/0f9dbca4-b242-4ff3-8d8b-d7569d01acdb.jpg"
                  alt="Кейс 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Завод безалкогольных напитков</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Полная модернизация линии розлива. Производительность увеличена с 12 000 до 24 000 бутылок/час.
                </p>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <p className="flex items-center gap-1.5 md:gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 md:w-[18px] md:h-[18px]" />
                    <span>Окупаемость: 18 месяцев</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Снижение брака на 45%</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Экономия электроэнергии 30%</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
                  alt="Кейс 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Молочный комбинат</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Поставка и запуск комплексной линии для розлива молочной продукции в ПЭТ-бутылки и Tetra Pak.
                </p>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <p className="flex items-center gap-1.5 md:gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 md:w-[18px] md:h-[18px]" />
                    <span>Запуск за 45 дней</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Производительность 15 000 л/час</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Соответствие ХАССП</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
                  alt="Кейс 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Пивоваренный завод</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Автоматизация процесса розлива пива в стеклянные бутылки 0,5л с этикетировкой и укупоркой.
                </p>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <p className="flex items-center gap-1.5 md:gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 md:w-[18px] md:h-[18px]" />
                    <span>Рост производства на 85%</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Снижение потерь продукта на 60%</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>Удаленный мониторинг 24/7</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ContactForms />

      <footer className="bg-secondary text-white py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/d9645102-01f0-4bb2-832f-a42c10f3b983.png" 
                alt="NELDEN" 
                className="h-7 md:h-8 lg:h-10 mb-4 md:mb-5 lg:mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 text-xs md:text-sm">
                Итальянское инженерное превосходство на службе российской промышленности с 1990 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Компания</h4>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Решения</a></li>
                <li><a href="#reputation" className="hover:text-white transition-colors">Репутация</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Услуги</h4>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
                <li><a href="#service" className="hover:text-white transition-colors">Доставка из Италии</a></li>
                <li><a href="#service" className="hover:text-white transition-colors">Таможенное оформление</a></li>
                <li><a href="#service" className="hover:text-white transition-colors">Гарантия и сервис</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <a href="https://t.me/nelden_support_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>nelden@internet.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  <a href="https://www.neldenindustry.it/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">neldenindustry.it</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">
              © 2024 ООО «НЕЛДЕН ИНЖИНИРИНГ». Все права защищены.
            </p>
            <p className="text-gray-500 text-[10px] md:text-xs">
              ИНН 9714073547 | КПП 771401001 | 125252, г. Москва
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;