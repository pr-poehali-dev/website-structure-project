import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("solutions");

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/d76b9f0a-ce76-462a-9ee5-3d445af8828d.png" 
              alt="NELDEN" 
              className="h-10 md:h-12"
            />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors font-medium">Solutions</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</a>
            </nav>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

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
            Industrial Excellence<br />
            <span className="text-primary">Made in Italy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Ваш надежный партнер в промышленных решениях. Более 30 лет опыта в инновациях и качестве.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Наши решения
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
              О компании
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

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
              {
                icon: "Settings",
                title: "Производственное оборудование",
                description: "Высокоточное оборудование для различных отраслей промышленности"
              },
              {
                icon: "Cpu",
                title: "Системы автоматизации",
                description: "Современные решения для полной автоматизации производства"
              },
              {
                icon: "Wrench",
                title: "Техническое обслуживание",
                description: "Комплексный сервис и поддержка на всех этапах эксплуатации"
              },
              {
                icon: "LineChart",
                title: "Оптимизация процессов",
                description: "Анализ и улучшение производственных процессов"
              },
              {
                icon: "Shield",
                title: "Системы безопасности",
                description: "Промышленные решения для обеспечения безопасности производства"
              },
              {
                icon: "Zap",
                title: "Энергоэффективность",
                description: "Снижение энергопотребления и оптимизация ресурсов"
              }
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
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Автомобильная</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Аэрокосмическая</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Химическая</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Пищевая</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Энергетика</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Металлургия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Готовы обсудить ваш проект? Наши специалисты всегда готовы помочь.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:info@neldenindustry.it" className="text-primary hover:underline">
                  info@neldenindustry.it
                </a>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <a href="tel:+390123456789" className="text-primary hover:underline">
                  +39 012 345 6789
                </a>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-gray-600">Италия, Милан</p>
              </Card>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
              Оставить заявку
              <Icon name="Send" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

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
