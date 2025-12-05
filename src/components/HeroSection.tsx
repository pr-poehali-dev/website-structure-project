const HeroSection = () => {
  return (
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
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
          NELDEN INDUSTRY
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-gray-100 font-light tracking-wide">
          Production, Installation and After Sales
        </p>
        <p className="text-lg md:text-xl text-gray-300 font-light">
          Производство, монтаж и постпродажное обслуживание
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
