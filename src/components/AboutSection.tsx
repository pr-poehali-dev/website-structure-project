import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
