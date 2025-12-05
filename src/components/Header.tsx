const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/d76b9f0a-ce76-462a-9ee5-3d445af8828d.png" 
              alt="NELDEN" 
              className="h-12"
            />
            <p className="text-xs text-gray-500 mt-1 tracking-wider uppercase">Инженерные Решения</p>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">О нас</a>
            <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Решения</a>
            <a href="#service" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Сервис</a>
            <a href="#reputation" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Репутация</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;