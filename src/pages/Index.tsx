import { useState } from 'react';
import { Menu, X, Wrench, Cog, Truck, UserCog, CheckCircle2, Clock, Users, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Техническое обслуживание',
      description: 'Плановое и внеплановое техническое обслуживание промышленного оборудования любого уровня сложности.'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Ремонт оборудования',
      description: 'Качественный ремонт и восстановление работоспособности оборудования с использованием оригинальных запчастей.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Поставка запчастей',
      description: 'Обеспечиваем поставку оригинальных запчастей и комплектующих от производителя в кратчайшие сроки.'
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: 'Консультации и аудит',
      description: 'Технический аудит производственных линий, консультации по эксплуатации и модернизации оборудования.'
    }
  ];

  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Качество и надёжность',
      description: 'Строгое соблюдение стандартов качества и использование оригинальных компонентов.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Оперативность',
      description: 'Круглосуточная техническая поддержка и выезд специалистов в течение 24 часов.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Опытные специалисты',
      description: 'Квалифицированные инженеры, прошедшие обучение на производстве в Италии.'
    }
  ];

  const projects = [
    {
      category: 'service',
      tag: 'Обслуживание',
      title: 'Техобслуживание производственной линии',
      description: 'Комплексное техническое обслуживание производственной линии на заводе в Московской области.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop'
    },
    {
      category: 'repair',
      tag: 'Ремонт',
      title: 'Ремонт гидравлической системы',
      description: 'Восстановление работоспособности гидравлической системы прессового оборудования.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop'
    },
    {
      category: 'modernization',
      tag: 'Модернизация',
      title: 'Модернизация системы управления',
      description: 'Обновление системы ЧПУ на станках для повышения точности и производительности.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-3xl font-black tracking-wider font-orbitron"
            >
              <span className="text-primary">NEL</span>
              <span className="text-foreground">DEN</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Главная</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">О компании</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Проекты</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Контакты</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t animate-fade-in">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('home')} className="nav-link text-left">Главная</button>
                <button onClick={() => scrollToSection('services')} className="nav-link text-left">Услуги</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-left">О компании</button>
                <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Проекты</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Контакты</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/70 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&auto=format&fit=crop" 
            alt="Industrial equipment"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-orbitron uppercase tracking-tight animate-fade-in">
            Сервис и обслуживание<br />промышленного оборудования
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Официальный представитель итальянской компании NELDEN в России. Предоставляем полный комплекс услуг по обслуживанию, ремонту и модернизации промышленного оборудования.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg">
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="service-card group">
                <CardContent className="p-8 text-center">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title text-left">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                NELDEN — итальянская компания с более чем 30-летним опытом в проектировании и производстве промышленного оборудования. С 2020 года мы представлены в России, предоставляя полный спектр сервисных услуг для наших клиентов.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-primary mt-1 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Связаться с нами
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
                alt="NELDEN Equipment"
                className="rounded-lg shadow-2xl w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Наши проекты</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className="rounded-full"
            >
              Все проекты
            </Button>
            <Button 
              variant={activeFilter === 'service' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('service')}
              className="rounded-full"
            >
              Обслуживание
            </Button>
            <Button 
              variant={activeFilter === 'repair' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('repair')}
              className="rounded-full"
            >
              Ремонт
            </Button>
            <Button 
              variant={activeFilter === 'modernization' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('modernization')}
              className="rounded-full"
            >
              Модернизация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="project-card overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Контакты</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Свяжитесь с нами</h3>
              <p className="text-muted-foreground mb-8">
                Готовы ответить на все ваши вопросы и предложить оптимальное решение для вашего предприятия.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" />
                  <span>г. Москва, ул. Промышленная, д. 15, офис 304</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary flex-shrink-0" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary flex-shrink-0" />
                  <span>info@nelden-russia.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-primary flex-shrink-0" />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.'); }}>
                  <div>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Ваш email" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Ваш телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black mb-4 font-orbitron">
                <span className="text-primary">NEL</span>
                <span>DEN</span>
              </div>
              <p className="text-gray-400">
                Официальный представитель итальянской компании NELDEN в России. Специализируемся на сервисе и обслуживании промышленного оборудования.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Быстрые ссылки</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-primary transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-primary transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-primary transition-colors">
                  О компании
                </button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-primary transition-colors">
                  Проекты
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-primary transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  г. Москва, ул. Промышленная, д. 15
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  info@nelden-russia.ru
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2023 NELDEN Russia. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;