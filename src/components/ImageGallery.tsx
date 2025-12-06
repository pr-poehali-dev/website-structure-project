const ImageGallery = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/03afb0ae-cd03-430a-884b-1a96597fe078.jpg"
              alt="Производство"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/6e5f8194-c3e4-463f-ad51-5c59e823f668.jpg"
              alt="Монтаж"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/af89fdd3-8010-434d-af2f-691ecf699b9e.jpg"
              alt="Завод"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
