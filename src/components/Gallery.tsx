import { useState } from "react";
import { X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { BestSellerBadge } from "./BestSellerBadge";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// Import images
import redVelvetCakes from "@/assets/gallery/red-velvet-cakes.jpg";
import foilCakesVariety from "@/assets/gallery/foil-cakes-variety.jpg";
import birthdayCake from "@/assets/gallery/birthday-cake.jpg";
import friedRice from "@/assets/gallery/fried-rice.jpg";
import cakeParfait from "@/assets/gallery/cake-parfait.jpg";
import parfaitCups from "@/assets/gallery/parfait-cups.jpg";

const WHATSAPP_LINKS = {
  instagram: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%20saw%20your%20food%20on%20Instagram%20and%20I%E2%80%99d%20like%20to%20order&source=instagram",
  bestSeller: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%E2%80%99d%20like%20to%20order%20your%20best%20seller&source=best_seller",
};

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  isBestSeller?: boolean;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Cake Parfait", category: "Best Seller", isBestSeller: true, image: cakeParfait },
  { id: 2, title: "Parfait Cups", category: "Desserts", isBestSeller: true, image: parfaitCups },
  { id: 3, title: "Birthday Cake", category: "Cakes", isBestSeller: true, image: birthdayCake },
  { id: 4, title: "Red Velvet Foil Cakes", category: "Cakes", image: redVelvetCakes },
  { id: 5, title: "Assorted Foil Cakes", category: "Cakes", image: foilCakesVariety },
  { id: 6, title: "Fried Rice & Chicken", category: "Food", image: friedRice },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleOrder = (item: GalleryItem) => {
    const link = item.isBestSeller ? WHATSAPP_LINKS.bestSeller : WHATSAPP_LINKS.instagram;
    window.open(link, "_blank");
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            From Our Kitchen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Our <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow us on Instagram for daily updates on fresh bakes and special offers.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_80%] min-w-0"
                >
                  <div
                    onClick={() => handleImageClick(item)}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Best Seller Badge */}
                    {item.isBestSeller && (
                      <div className="absolute top-3 left-3">
                        <BestSellerBadge />
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-primary-foreground font-bold text-lg">{item.title}</h3>
                        <p className="text-primary-foreground/70 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Best Seller Badge */}
              {item.isBestSeller && (
                <div className="absolute top-3 left-3">
                  <BestSellerBadge />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-primary-foreground font-bold text-lg">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/justgogolicious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow @justgogolicious
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-2xl w-full bg-card rounded-3xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="aspect-square">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-foreground">{selectedImage.title}</h3>
                {selectedImage.isBestSeller && <BestSellerBadge />}
              </div>
              <p className="text-muted-foreground mb-6">{selectedImage.category}</p>
              <button
                onClick={() => handleOrder(selectedImage)}
                className="whatsapp-btn w-full justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order This Item
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
