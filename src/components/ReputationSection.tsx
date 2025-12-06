import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReputationSection = () => {
  return (
    <>
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
              Ознакомьтесь с реальными проектами, реализованными для крупных промышленных предприятий
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Card className="overflow-hidden border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="relative h-40 md:h-48 lg:h-56">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
                  alt="Линия розлива пива"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Пивоваренный завод «Балтика»</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Полная автоматизированная линия розлива пива производительностью 36 000 бутылок/час</p>
                <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium">
                  <Icon name="CheckCircle2" size={16} />
                  <span>Реализовано в 2023 году</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="relative h-40 md:h-48 lg:h-56">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/c283fe78-9633-42eb-b771-2da7bf48a1d1.jpg"
                  alt="Фармацевтическая линия"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Фармстандарт</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Установка линии розлива жидких лекарственных форм с системой контроля качества GMP</p>
                <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium">
                  <Icon name="CheckCircle2" size={16} />
                  <span>Реализовано в 2023 году</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
              <div className="relative h-40 md:h-48 lg:h-56">
                <img 
                  src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
                  alt="Молочный комбинат"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Останкинский молочный комбинат</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Модернизация линии розлива молочной продукции, увеличение производительности на 40%</p>
                <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium">
                  <Icon name="CheckCircle2" size={16} />
                  <span>Реализовано в 2022 году</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReputationSection;
