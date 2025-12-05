import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactForms = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в течение 1 часа
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-secondary">Контактная информация</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Телефон</h4>
                  <a href="tel:+74951234567" className="text-primary hover:underline text-lg">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Москва, Россия</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Телефон (Италия)</h4>
                  <a href="tel:+390123456789" className="text-primary hover:underline text-lg">
                    +39 012 345 6789
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Милан, Италия</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Электронная почта</h4>
                  <a href="mailto:info@neldenindustry.ru" className="text-primary hover:underline break-all">
                    info@neldenindustry.ru
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Ответим в течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Офисы</h4>
                  <p className="text-gray-700 mb-1">Россия: Москва, ул. Промышленная, 15</p>
                  <p className="text-gray-700">Италия: Milano, Via Industriale, 42</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Режим работы</h4>
                  <p className="text-gray-700">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                  <p className="text-gray-600 text-sm mt-1">Техподдержка 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 border-2 border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Форма обратной связи</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Ваше имя *
                </label>
                <Input
                  type="text"
                  required
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Компания *
                </label>
                <Input
                  type="text"
                  required
                  placeholder="ООО «Название компании»"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Телефон *
                </label>
                <Input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Сообщение *
                </label>
                <Textarea
                  required
                  placeholder="Опишите ваш проект или задачу..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium"
              >
                Отправить заявку
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
