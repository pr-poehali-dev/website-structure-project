import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
