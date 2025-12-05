import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/78e39bcc-222c-4149-8546-6043d8283444.jpg')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Быстрая модернизация<br />
          <span className="text-primary">производственных линий</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Доставка из Италии без задержек • Полное таможенное оформление • Гарантия и сервис
        </p>
        <div className="flex gap-8 justify-center mb-8 text-sm md:text-base flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={20} className="text-primary" />
            <span>Установка за 3-5 дней</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={20} className="text-primary" />
            <span>Прямая доставка</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={20} className="text-primary" />
            <span>Гарантия 2 года</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            Наши решения
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
            Рассчитать окупаемость
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
