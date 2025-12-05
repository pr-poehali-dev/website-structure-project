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
                С 1990 года Nelden Engineering — лидер в производстве промышленного оборудования для линий розлива. Мы специализируемся на поставках итальянского оборудования высочайшего качества на российский рынок.
              </p>
              
              <div className="grid grid-cols-3 gap-10 mb-12">
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">30+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Лет опыта</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">500+</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">45</div>
                  <div className="text-base text-gray-600 uppercase tracking-wider">Стран мира</div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Собственное производство в Италии</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Официальное представительство в России</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Команда из 120+ инженеров и специалистов</span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span>Сертификаты ISO 9001, CE, ГОСТ Р</span>
                </p>
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

      <section id="delivery" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
                Доставка из Италии в Россию
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Мы обеспечиваем полный цикл логистики от завода в Милане до вашего производства. Наш опыт международных перевозок промышленного оборудования гарантирует безопасность и точность сроков.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Прямые поставки</h3>
                    <p className="text-gray-600">Работаем напрямую с производителями в Италии, без посредников. Это сокращает сроки и снижает стоимость.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сроки доставки: 14-21 день</h3>
                    <p className="text-gray-600">Оптимальные маршруты через морские порты Новороссийск, Санкт-Петербург или автотранспортом через Европу.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Страхование грузов</h3>
                    <p className="text-gray-600">Все грузы застрахованы на полную стоимость. Специальная упаковка для хрупкого оборудования.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Отслеживание в реальном времени</h3>
                    <p className="text-gray-600">Онлайн-мониторинг местоположения груза на всех этапах транспортировки. Личный менеджер по логистике.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[700px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/a295a1f9-1616-4e84-b8de-3b9262c66270.jpg"
                alt="Международная доставка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="customs" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[700px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/3c53f890-e155-4291-9783-6f12d6f7c366.jpg"
                alt="Таможенное оформление"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
                Таможенное оформление
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Полное сопровождение процесса растаможивания оборудования. Наши специалисты по ВЭД имеют 15+ лет опыта работы с промышленным оборудованием.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Подготовка документов</h3>
                    <p className="text-gray-600">Инвойсы, паспорта оборудования, сертификаты соответствия, декларации — мы готовим весь пакет документов.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Calculator" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Расчет таможенных платежей</h3>
                    <p className="text-gray-600">Прозрачный расчет пошлин и НДС. Помогаем выбрать оптимальный код ТН ВЭД для снижения платежей.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BadgeCheck" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сертификация в России</h3>
                    <p className="text-gray-600">Получение деклараций и сертификатов соответствия ГОСТ Р, ТР ТС. Регистрация в Росстандарте.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Личный таможенный брокер</h3>
                    <p className="text-gray-600">Закрепленный специалист ведет вашу поставку от начала до выпуска груза. Доступен 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
                Гарантия и сервис
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Мы несем полную ответственность за качество поставляемого оборудования. Наша гарантийная программа — одна из самых надежных на рынке промышленного оборудования.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантия 36 месяцев</h3>
                    <p className="text-gray-600">Расширенная гарантия на все оборудование итальянского производства. Бесплатное устранение дефектов.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Техподдержка 24/7</h3>
                    <p className="text-gray-600">Горячая линия технической поддержки работает круглосуточно. Удаленная диагностика и консультации.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Выезд инженера в течение 24 часов</h3>
                    <p className="text-gray-600">Сервисные центры в Москве, Санкт-Петербурге, Екатеринбурге, Новосибирске. Выезд по всей России.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Склад запчастей в России</h3>
                    <p className="text-gray-600">2000+ наименований оригинальных запчастей на складе в Москве. Доставка в регионы за 2-3 дня.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Обучение персонала</h3>
                    <p className="text-gray-600">Бесплатное обучение ваших специалистов работе с оборудованием. Сертификат по окончанию курса.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[700px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/7a5a020a-392a-4d73-934c-d920d1f4b70f.jpg"
                alt="Гарантия качества"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reputation" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
              Репутация и доверие
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              За 30 лет работы мы зарекомендовали себя как надежный партнер для крупнейших промышленных предприятий России и мира
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            <Card className="p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Building2" size={40} className="text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3">250+</div>
              <h3 className="text-xl font-bold mb-3">Постоянных клиентов</h3>
              <p className="text-gray-600">Крупные предприятия пищевой, фармацевтической и химической промышленности</p>
            </Card>

            <Card className="p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={40} className="text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3">98%</div>
              <h3 className="text-xl font-bold mb-3">Повторных обращений</h3>
              <p className="text-gray-600">Клиенты возвращаются к нам за новым оборудованием и расширением производства</p>
            </Card>

            <Card className="p-10 text-center border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={40} className="text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3">4.9/5</div>
              <h3 className="text-xl font-bold mb-3">Средняя оценка</h3>
              <p className="text-gray-600">По результатам независимых опросов клиентов за последние 3 года</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/109a7054-d37b-4c9d-8397-57e443a7e03a.jpg"
                alt="Награды и сертификаты"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/ae094179-2708-4661-88e6-185246cad161.jpg"
                alt="Команда специалистов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Наши достижения</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Член Торгово-промышленной палаты РФ</h4>
                  <p className="text-gray-600">Аккредитация с 2005 года. Участие в международных промышленных выставках.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Сертификат ISO 9001:2015</h4>
                  <p className="text-gray-600">Международный стандарт системы менеджмента качества. Подтверждение высочайших стандартов.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Официальный дистрибьютор</h4>
                  <p className="text-gray-600">Эксклюзивные права на территории России от 12 ведущих итальянских производителей.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Победитель конкурса "Надежный партнер"</h4>
                  <p className="text-gray-600">Национальная премия в области промышленного оборудования 2022, 2023 годов.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-secondary">
              Кейсы наших клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Реальные результаты внедрения нашего оборудования на производствах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/0f9dbca4-b242-4ff3-8d8b-d7569d01acdb.jpg"
                  alt="Кейс 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Завод безалкогольных напитков</h3>
                <p className="text-gray-600 mb-6">
                  Полная модернизация линии розлива. Производительность увеличена с 12 000 до 24 000 бутылок/час.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
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
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Молочный комбинат</h3>
                <p className="text-gray-600 mb-6">
                  Поставка и запуск комплексной линии для розлива молочной продукции в ПЭТ-бутылки и Tetra Pak.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
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
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Пивоваренный завод</h3>
                <p className="text-gray-600 mb-6">
                  Автоматизация процесса розлива пива в стеклянные бутылки 0,5л с этикетировкой и укупоркой.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
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

      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/d9645102-01f0-4bb2-832f-a42c10f3b983.png" 
                alt="NELDEN" 
                className="h-10 mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Итальянское инженерное превосходство на службе российской промышленности с 1990 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Решения</a></li>
                <li><a href="#reputation" className="hover:text-white transition-colors">Репутация</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка из Италии</a></li>
                <li><a href="#customs" className="hover:text-white transition-colors">Таможенное оформление</a></li>
                <li><a href="#warranty" className="hover:text-white transition-colors">Гарантия и сервис</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@neldenindustry.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nelden Engineering. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
