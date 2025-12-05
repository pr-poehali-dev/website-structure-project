import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForms = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-secondary">
            Контакты
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Телефон</h3>
              <a href="tel:+390123456789" className="text-primary hover:underline text-lg">
                +39 012 345 6789
              </a>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Электронная почта</h3>
              <a href="mailto:info@neldenindustry.it" className="text-primary hover:underline break-all">
                info@neldenindustry.it
              </a>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-3 text-xl">Адрес</h3>
              <p className="text-gray-600">Милан, Италия</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;