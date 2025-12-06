const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/78e39bcc-222c-4149-8546-6043d8283444.jpg')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white animate-fade-in py-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
          NELDEN
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 text-primary font-bold tracking-widest uppercase">engineering</p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-light tracking-wide">
          Производство • Монтаж • Сервис
        </p>
      </div>
    </section>
  );
};

export default HeroSection;