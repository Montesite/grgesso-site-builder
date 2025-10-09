import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in">
            GR Gesso
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 animate-fade-in leading-relaxed px-4">
            Empresa líder em inovação e qualidade em Iturama e região, reconhecida pela excelência em soluções para interiores
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in px-4">
            Desde 2004 transformando espaços com forros, divisórias e acabamentos de alta qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4">
            <button 
              onClick={() => window.open("https://wa.me/5534998378195", "_blank")} 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} 
              className="w-full sm:w-auto border-2 border-primary-foreground/60 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg bg-zinc-950 hover:bg-zinc-800 font-semibold transition-all duration-300"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>;
};
export default Hero;