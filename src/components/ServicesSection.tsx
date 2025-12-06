import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
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
                      <h4 className="font-bold mb-1">Склад запчастей</h4>
                      <p className="text-gray-600 text-sm">Оригинальные комплектующие всегда в наличии</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
