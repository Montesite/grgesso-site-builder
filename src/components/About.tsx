import { Building2, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre a GR Gesso
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Nossa história</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                A GR Gesso nasceu de uma parceria entre dois amigos, Giovanni e Rogério, que prestavam serviços nesse segmento na cidade de Uberaba MG, em meados dos anos 90.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Em 2004, em uma visita na cidade de Iturama MG, os dois encontraram a oportunidade de instalação de uma empresa de gesso no local, tendo em vista a falta de profissionais da área.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Desde então somos a empresa líder em qualidade e inovação em Iturama e região.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 sm:p-8 text-primary-foreground shadow-elegant">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Nossa visão</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Ser a empresa de gesso líder em inovação e qualidade em Iturama e região, reconhecida pela excelência em soluções para interiores, transformando espaços e superando expectativas de clientes e parceiros.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-xl bg-secondary hover:shadow-elegant transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Desde 2004</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mais de 19 anos de experiência e tradição
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-xl bg-secondary hover:shadow-elegant transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Equipe qualificada</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Profissionais experientes e capacitados
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 rounded-xl bg-secondary hover:shadow-elegant transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">Líderes regionais</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Referência em qualidade em Iturama e região
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
