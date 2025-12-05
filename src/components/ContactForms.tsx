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

  const handleTelegramContact = () => {
    window.open('https://t.me/nelden_support_bot', '_blank');
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
                  <Icon name="Send" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2">Telegram</h4>
                  <Button 
                    onClick={handleTelegramContact}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать в Telegram
                  </Button>
                  <p className="text-gray-600 text-sm mt-2">Быстрая связь с нашими специалистами</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Электронная почта</h4>
                  <a href="mailto:nelden@internet.ru" className="text-primary hover:underline break-all text-lg">
                    nelden@internet.ru
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Ответим в течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Головной офис (Италия)</h4>
                  <a 
                    href="https://www.neldenindustry.it/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg"
                  >
                    www.neldenindustry.it
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Milano, Italia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Юридическая информация</h4>
                  <p className="text-gray-700 font-semibold mb-2">ООО «НЕЛДЕН ИНЖИНИРИНГ»</p>
                  <p className="text-gray-600 text-sm mb-1">
                    125252, г. Москва, вн.тер.г. муниципальный округ Хорошевский, проезд Берёзовой Рощи, д. 12, кв. 689
                  </p>
                  <p className="text-gray-600 text-sm">ИНН: 9714073547</p>
                  <p className="text-gray-600 text-sm">КПП: 771401001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Режим работы</h4>
                  <p className="text-gray-700">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                  <p className="text-gray-600 text-sm mt-1">Техподдержка 24/7 через Telegram</p>
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
