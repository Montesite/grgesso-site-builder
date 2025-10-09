import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Estamos prontos para atender você e transformar seu projeto em realidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Telefone</h3>
                    <a 
                      href="https://wa.me/5534998378195" 
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (34) 99837-8195
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Email</h3>
                    <a 
                      href="mailto:darrell.martins@outlook.com" 
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      darrell.martins@outlook.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/grgesso?igsh=cXpyM3g0aml5ZXp1&utm_source=qr" 
                      className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @grgesso
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Endereço</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Avenida Airton Senna, 281<br />
                      Jardim Primavera
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300 sm:col-span-2 lg:col-span-2">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Horário de funcionamento</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Segunda à Sexta das 07:00 às 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-primary-foreground shadow-elegant">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90 max-w-2xl mx-auto px-4">
              Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado
            </p>
            <button
              onClick={() => window.open("https://wa.me/5534998378195", "_blank")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-gold transition-all duration-300 hover:shadow-lg"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
