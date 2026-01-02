import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Skeleton } from "@/components/ui/skeleton";
import facialRingLight from "@/assets/gallery/facial-treatment-ring-light.jpg";
import hairStyling from "@/assets/gallery/hair-styling-treatment.jpg";
import facialDevice from "@/assets/gallery/facial-treatment-device.jpg";
import manicurePedicure from "@/assets/gallery/manicure-pedicure-lounge.jpg";
import facialProcedure from "@/assets/gallery/facial-treatment-procedure.jpg";
import chromotherapyLED from "@/assets/gallery/chromotherapy-led-treatment.jpg";

const GalleryTeaser = memo(() => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const images = [
    { src: facialRingLight, label: "Premium Facial Treatment", category: "Spa Suite", span: "md:col-span-2 md:row-span-2" },
    { src: hairStyling, label: "Hair Styling Services", category: "Lounge", span: "" },
    { src: facialDevice, label: "Advanced Skincare Therapy", category: "Spa Suite", span: "" },
    { src: manicurePedicure, label: "Nail Care Services", category: "Lounge", span: "md:row-span-2" },
    { src: facialProcedure, label: "Professional Facial Care", category: "Spa Suite", span: "" },
    { src: chromotherapyLED, label: "LED Chromotherapy", category: "Spa Suite", span: "" },
  ];

  const lightboxSlides = images.map(img => ({ src: img.src, alt: img.label }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements with parallax */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl transition-transform duration-1000"
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-transform duration-1000"
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-50px)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
              <Sparkles className="w-4 h-4 text-gold animate-pulse-slow" />
              <span className="text-sm font-medium">Gallery</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-deep via-primary to-gold bg-clip-text text-transparent">
                Experience Our Sanctuary
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
              Discover a sanctuary where tranquility meets sophistication. Our serene, thoughtfully designed spaces create the perfect atmosphere for relaxation and renewal.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-gold" />
              <span>Every detail designed for your comfort</span>
            </div>
          </div>

          {/* Enhanced Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in ${image.span} transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleImageClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.label} in fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
              >
                {!imagesLoaded[index] && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                  src={image.src}
                  alt={image.label}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Gradient overlay with glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold text-white">{image.category}</span>
                </div>
                
                {/* Label and view button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="font-semibold text-sm mb-1">{image.label}</p>
                      <p className="text-xs opacity-80">{image.category}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs font-medium">View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Elegant CTA Card */}
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/90 via-gold/80 to-primary-deep/90 cursor-pointer group aspect-square flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${images.length * 100}ms` }}
              onClick={() => navigate('/gallery')}
              role="button"
              tabIndex={0}
              aria-label="View full gallery"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/gallery');
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center text-white p-6 relative z-10">
                <Sparkles className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-2">View Full Gallery</h3>
                <p className="text-sm opacity-90 mb-3">Explore all {images.length + 2} images</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium">
                  <span>See More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={lightboxSlides}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            }}
          />

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => navigate('/gallery')}
              className="btn-hero group"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

GalleryTeaser.displayName = "GalleryTeaser";

export default GalleryTeaser;
