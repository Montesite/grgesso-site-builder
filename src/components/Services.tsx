import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Grid3x3, 
  Home, 
  Frame, 
  Columns, 
  PackageOpen 
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Forro PVC",
    description: "Instalação profissional de forros em PVC, resistentes e de fácil manutenção para ambientes internos."
  },
  {
    icon: Grid3x3,
    title: "Forro vinílico",
    description: "Forros vinílicos com acabamento impecável, ideais para áreas que exigem durabilidade e estética."
  },
  {
    icon: Home,
    title: "Gesso acartonado",
    description: "Sistema de forro em gesso acartonado com qualidade superior e instalação técnica especializada."
  },
  {
    icon: Columns,
    title: "Divisórias drywall",
    description: "Divisórias em drywall para otimização de espaços, com rapidez na instalação e excelente custo-benefício."
  },
  {
    icon: Frame,
    title: "Steel frame",
    description: "Construções em steel frame, sistema construtivo moderno, rápido e eficiente para diversas aplicações."
  },
  {
    icon: PackageOpen,
    title: "Molduras",
    description: "Molduras internas e em EPS para acabamento refinado e decorativo em seus ambientes."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Nossos serviços
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Oferecemos soluções completas em gesso e acabamentos para transformar seu espaço com qualidade e excelência
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-gold">
                    <service.icon className="text-accent-foreground" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Interessado em nossos serviços? Entre em contato para um orçamento personalizado
            </p>
            <button
              onClick={() => window.open("https://wa.me/5534998378195", "_blank")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-gold transition-all duration-300 hover:shadow-lg"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
