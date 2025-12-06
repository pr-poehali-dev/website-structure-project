import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/d9645102-01f0-4bb2-832f-a42c10f3b983.png" 
              alt="NELDEN" 
              className="h-7 md:h-8 lg:h-10 mb-4 md:mb-5 lg:mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-xs md:text-sm">
              Итальянское инженерное превосходство на службе российской промышленности с 1990 года
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Компания</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Решения</a></li>
              <li><a href="#reputation" className="hover:text-white transition-colors">Репутация</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Услуги</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li><a href="#service" className="hover:text-white transition-colors">Доставка из Италии</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Таможенное оформление</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Гарантия и сервис</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Send" size={16} />
                <a href="https://t.me/nelden_support_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>nelden@internet.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Globe" size={16} />
                <a href="https://www.neldenindustry.it/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">neldenindustry.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">
            © 2024 ООО «НЕЛДЕН ИНЖИНИРИНГ». Все права защищены.
          </p>
          <p className="text-gray-500 text-[10px] md:text-xs">
            ИНН 9714073547 | КПП 771401001 | 125252, г. Москва
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
