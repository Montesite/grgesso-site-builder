import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e transformar seu projeto em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Telefone</h3>
                    <a 
                      href="https://wa.me/5534998378195" 
                      className="text-muted-foreground hover:text-accent transition-colors"
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
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Email</h3>
                    <a 
                      href="mailto:darrell.martins@outlook.com" 
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      darrell.martins@outlook.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/grgesso?igsh=cXpyM3g0aml5ZXp1&utm_source=qr" 
                      className="text-muted-foreground hover:text-accent transition-colors"
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
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Avenida Airton Senna, 281<br />
                      Jardim Primavera
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300 md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Horário de funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda à Sexta das 07:00 às 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado
            </p>
            <button
              onClick={() => window.open("https://wa.me/5534998378195", "_blank")}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold shadow-gold transition-all duration-300 hover:shadow-lg"
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
