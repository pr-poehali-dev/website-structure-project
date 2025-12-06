import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "О нас" },
    { href: "#solutions", label: "Решения" },
    { href: "#service", label: "Сервис" },
    { href: "#reputation", label: "Репутация" },
    { href: "#contact", label: "Контакты" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/d76b9f0a-ce76-462a-9ee5-3d445af8828d.png" 
              alt="NELDEN" 
              className="h-8 md:h-12"
            />
            <p className="text-[10px] md:text-xs text-gray-500 mt-1 tracking-wider uppercase">Инженерные Решения</p>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium uppercase tracking-wide border-b border-gray-50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;