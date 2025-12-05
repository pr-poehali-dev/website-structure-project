import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ContactForms = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
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
  );
};

export default ContactForms;
