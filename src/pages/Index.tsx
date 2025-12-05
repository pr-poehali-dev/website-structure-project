import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [roiData, setRoiData] = useState({ investment: 0, savings: 0, years: 5 });
  const [roiResult, setRoiResult] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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

  const calculateROI = () => {
    const { investment, savings, years } = roiData;
    const totalSavings = savings * 12 * years;
    const roi = ((totalSavings - investment) / investment) * 100;
    const paybackMonths = investment / savings;
    setRoiResult(Math.round(roi));
    return { roi: Math.round(roi), paybackMonths: Math.round(paybackMonths) };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

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
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors font-medium">Решения</a>
              <a href="#roi" className="text-gray-700 hover:text-primary transition-colors font-medium">ROI</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              Оставить заявку
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
              { icon: "Settings", title: "Производственное оборудование", description: "Высокоточное оборудование для различных отраслей промышленности" },
              { icon: "Cpu", title: "Системы автоматизации", description: "Современные решения для полной автоматизации производства" },
              { icon: "Wrench", title: "Техническое обслуживание", description: "Комплексный сервис и поддержка на всех этапах эксплуатации" },
              { icon: "LineChart", title: "Оптимизация процессов", description: "Анализ и улучшение производственных процессов" },
              { icon: "Shield", title: "Системы безопасности", description: "Промышленные решения для обеспечения безопасности производства" },
              { icon: "Zap", title: "Энергоэффективность", description: "Снижение энергопотребления и оптимизация ресурсов" }
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
                {["Автомобильная", "Аэрокосмическая", "Химическая", "Пищевая", "Энергетика", "Металлургия"].map((industry, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roi" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Калькулятор окупаемости
            </h2>
            <p className="text-xl text-gray-600">
              Рассчитайте срок окупаемости модернизации вашей линии
            </p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="investment">Инвестиции (₽)</Label>
                  <Input
                    id="investment"
                    type="number"
                    placeholder="5000000"
                    value={roiData.investment || ''}
                    onChange={(e) => setRoiData({...roiData, investment: Number(e.target.value)})}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="savings">Экономия в месяц (₽)</Label>
                  <Input
                    id="savings"
                    type="number"
                    placeholder="200000"
                    value={roiData.savings || ''}
                    onChange={(e) => setRoiData({...roiData, savings: Number(e.target.value)})}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="mb-6">
                <Label htmlFor="years">Период расчета (лет)</Label>
                <Input
                  id="years"
                  type="number"
                  placeholder="5"
                  value={roiData.years || ''}
                  onChange={(e) => setRoiData({...roiData, years: Number(e.target.value)})}
                  className="mt-2"
                />
              </div>
              <Button 
                onClick={calculateROI} 
                className="w-full bg-primary hover:bg-primary/90 mb-6"
              >
                Рассчитать окупаемость
              </Button>
              {roiResult !== 0 && (
                <div className="bg-primary/10 rounded-lg p-6 grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{calculateROI().paybackMonths} мес</div>
                    <div className="text-sm text-gray-600">Срок окупаемости</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{roiResult}%</div>
                    <div className="text-sm text-gray-600">ROI за {roiData.years} лет</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
                Оформить заявку
              </h2>
              <p className="text-xl text-gray-600">
                Выберите нужную услугу и оставьте заявку
              </p>
            </div>

            <Tabs defaultValue="request" className="mb-12">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="request">Заявка на ремонт</TabsTrigger>
                <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
                <TabsTrigger value="parts">Заказ запчастей</TabsTrigger>
                <TabsTrigger value="technician">Вызов техника</TabsTrigger>
              </TabsList>

              <TabsContent value="request">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Заявка на ремонт оборудования</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Компания *</Label>
                          <Input placeholder="ООО Производство" className="mt-2" />
                        </div>
                        <div>
                          <Label>Контактное лицо *</Label>
                          <Input placeholder="Иван Иванов" className="mt-2" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Телефон *</Label>
                          <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                        </div>
                        <div>
                          <Label>Email *</Label>
                          <Input type="email" placeholder="email@company.ru" className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label>Тип оборудования *</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="press">Пресс</SelectItem>
                            <SelectItem value="cnc">ЧПУ станок</SelectItem>
                            <SelectItem value="conveyor">Конвейер</SelectItem>
                            <SelectItem value="hydraulic">Гидравлика</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Описание проблемы *</Label>
                        <Textarea 
                          placeholder="Подробно опишите неисправность, симптомы, когда возникла проблема..." 
                          rows={4}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label>Загрузить фото/видео (до 5 файлов)</Label>
                        <div className="mt-2">
                          <Input
                            type="file"
                            multiple
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/90"
                          />
                          {selectedFiles.length > 0 && (
                            <div className="mt-2 text-sm text-gray-600">
                              Выбрано файлов: {selectedFiles.length}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label>Срочность</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="critical">Критическая (линия остановлена)</SelectItem>
                            <SelectItem value="high">Высокая (в течение 24 часов)</SelectItem>
                            <SelectItem value="medium">Средняя (в течение недели)</SelectItem>
                            <SelectItem value="low">Низкая (плановый ремонт)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="maintenance">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Заявка на техническое обслуживание</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Компания *</Label>
                          <Input placeholder="ООО Производство" className="mt-2" />
                        </div>
                        <div>
                          <Label>Контактное лицо *</Label>
                          <Input placeholder="Иван Иванов" className="mt-2" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Телефон *</Label>
                          <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                        </div>
                        <div>
                          <Label>Email *</Label>
                          <Input type="email" placeholder="email@company.ru" className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label>Тип обслуживания</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="planned">Плановое ТО</SelectItem>
                            <SelectItem value="full">Полное обслуживание</SelectItem>
                            <SelectItem value="diagnostics">Диагностика</SelectItem>
                            <SelectItem value="preventive">Профилактика</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Количество единиц оборудования</Label>
                        <Input type="number" placeholder="3" className="mt-2" />
                      </div>
                      <div>
                        <Label>Комментарий</Label>
                        <Textarea placeholder="Дополнительная информация..." rows={3} className="mt-2" />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parts">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Заказ запчастей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Компания *</Label>
                          <Input placeholder="ООО Производство" className="mt-2" />
                        </div>
                        <div>
                          <Label>Контактное лицо *</Label>
                          <Input placeholder="Иван Иванов" className="mt-2" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Телефон *</Label>
                          <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                        </div>
                        <div>
                          <Label>Email *</Label>
                          <Input type="email" placeholder="email@company.ru" className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label>Артикул или название запчасти *</Label>
                        <Input placeholder="NPL-4567-H или Гидроцилиндр" className="mt-2" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Модель оборудования</Label>
                          <Input placeholder="NELDEN NPL-450" className="mt-2" />
                        </div>
                        <div>
                          <Label>Количество</Label>
                          <Input type="number" placeholder="2" className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label>Описание / комментарий</Label>
                        <Textarea placeholder="Дополнительные требования, уточнения..." rows={3} className="mt-2" />
                      </div>
                      <div>
                        <Label>Фото запчасти (если есть)</Label>
                        <Input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/90"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить запрос
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="technician">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Вызов техника (диагностика на месте)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Компания *</Label>
                          <Input placeholder="ООО Производство" className="mt-2" />
                        </div>
                        <div>
                          <Label>Контактное лицо *</Label>
                          <Input placeholder="Иван Иванов" className="mt-2" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Телефон *</Label>
                          <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                        </div>
                        <div>
                          <Label>Email</Label>
                          <Input type="email" placeholder="email@company.ru" className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label>Адрес выезда *</Label>
                        <Input placeholder="г. Москва, ул. Промышленная, д.15" className="mt-2" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Желаемая дата визита</Label>
                          <Input type="date" className="mt-2" />
                        </div>
                        <div>
                          <Label>Удобное время</Label>
                          <Select>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Выберите" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Утро (9:00-12:00)</SelectItem>
                              <SelectItem value="afternoon">День (12:00-15:00)</SelectItem>
                              <SelectItem value="evening">Вечер (15:00-18:00)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label>Описание проблемы *</Label>
                        <Textarea placeholder="Что нужно продиагностировать, какие симптомы наблюдаются..." rows={4} className="mt-2" />
                      </div>
                      <div>
                        <Label>Загрузить фото/видео проблемы</Label>
                        <Input
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          onChange={handleFileChange}
                          className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/90"
                        />
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 flex items-start gap-3">
                        <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div className="text-sm text-gray-700">
                          Выезд техника для диагностики — бесплатно при последующем ремонте через нашу компанию
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Вызвать специалиста
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-secondary/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Экстренная связь 24/7</h3>
              <p className="text-gray-600 mb-6">Для срочных вопросов и аварийных ситуаций</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:info@neldenindustry.it" className="text-primary hover:underline">
                  info@neldenindustry.it
                </a>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <a href="tel:+390123456789" className="text-primary hover:underline">
                  +39 012 345 6789
                </a>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-gray-600">Италия, Милан</p>
              </Card>
            </div>
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
