import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import midia1 from "@/assets/gallery/midia_1.jpg";
import midia2 from "@/assets/gallery/midia_2.jpg";
import midia3 from "@/assets/gallery/midia_3.jpg";
import midia4 from "@/assets/gallery/midia_4.jpg";
import midia5 from "@/assets/gallery/midia_5.jpg";
import midia6 from "@/assets/gallery/midia_6.jpg";
import midia7 from "@/assets/gallery/midia_7.jpg";
import midia8 from "@/assets/gallery/midia_8.jpg";
import midia9 from "@/assets/gallery/midia_9.jpg";
import midia10 from "@/assets/gallery/midia_10.jpg";
import midia11 from "@/assets/gallery/midia_11.jpg";
import midia12 from "@/assets/gallery/midia_12.jpg";
import midia13 from "@/assets/gallery/midia_13.jpg";
import midia14 from "@/assets/gallery/midia_14.jpg";
import midia15 from "@/assets/gallery/midia_15.jpg";
import midia16 from "@/assets/gallery/midia_16.jpg";
import midia17 from "@/assets/gallery/midia_17.jpg";
import midia18 from "@/assets/gallery/midia_18.jpg";
import midia19 from "@/assets/gallery/midia_19-2.jpg";
import midia20 from "@/assets/gallery/midia_20.jpg";

const galleryImages = [
  { src: midia1, alt: "Projeto GR Gesso - Ambiente moderno com iluminação embutida" },
  { src: midia2, alt: "Projeto GR Gesso - Forro externo com acabamento premium" },
  { src: midia3, alt: "Projeto GR Gesso - Sala de reunião com acabamento em gesso" },
  { src: midia4, alt: "Projeto GR Gesso - Fachada comercial moderna" },
  { src: midia5, alt: "Projeto GR Gesso - Teto com iluminação LED integrada" },
  { src: midia6, alt: "Projeto GR Gesso - Residência com acabamento contemporâneo" },
  { src: midia7, alt: "Projeto GR Gesso - Ambiente com iluminação indireta" },
  { src: midia8, alt: "Projeto GR Gesso - Living room com pé-direito duplo" },
  { src: midia9, alt: "Projeto GR Gesso - Fachada residencial elegante" },
  { src: midia10, alt: "Projeto GR Gesso - Sala de estar com molduras decorativas" },
  { src: midia11, alt: "Projeto GR Gesso - Sala de estar com forro em gesso e iluminação dourada" },
  { src: midia12, alt: "Projeto GR Gesso - Área de lazer com teto em gesso e iluminação LED" },
  { src: midia13, alt: "Projeto GR Gesso - Área externa com piscina e acabamento em gesso" },
  { src: midia14, alt: "Projeto GR Gesso - Espaço gourmet com molduras decorativas" },
  { src: midia15, alt: "Projeto GR Gesso - Ambiente moderno com iluminação geométrica no teto" },
  { src: midia16, alt: "Projeto GR Gesso - Hall com forro de gesso e lustre elegante" },
  { src: midia17, alt: "Projeto GR Gesso - Teto com iluminação embutida em formato geométrico" },
  { src: midia18, alt: "Projeto GR Gesso - Cozinha e sala integradas com teto moderno" },
  { src: midia19, alt: "Projeto GR Gesso - Forro com iluminação LED e spots embutidos" },
  { src: midia20, alt: "Projeto GR Gesso - Quarto com teto em gesso e iluminação moderna" },
];

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Nossos projetos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos realizados em Iturama e região
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none shadow-lg hover:shadow-elegant transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-0">
                        <div 
                          className="relative aspect-square overflow-hidden cursor-pointer"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                              Clique para expandir
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <img
              src={selectedImage || ""}
              alt="Imagem expandida"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
