import { memo } from "react";
import { Sparkles, Heart, Users, Award } from "lucide-react";
import massageImg from "@/assets/gallery/facial-treatment-ring-light.jpg";
import facialImg from "@/assets/gallery/facial-steamer-treatment.jpg";
import pedicureImg from "@/assets/gallery/pedicure-service.jpg";

const StorySection = memo(() => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium">Our Story</span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  A Haven of <span className="bg-gradient-to-r from-primary via-primary-deep to-gold bg-clip-text text-transparent">Luxury & Rejuvenation</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Welcome to Faridaz Spa, created with one purpose — to give every person who walks through our doors an escape. Located at the heart of Abuja, we believe beauty is more than appearance — it is how you feel inside.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From deeply therapeutic massages to scientifically advanced skincare, our team of certified professionals deliver world-class treatments with an unmatched level of care. Every treatment, every touch, and every detail in our space is designed to soothe, restore, and elevate your entire being.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our atmosphere is warm, serene, and thoughtfully curated to help you unwind the moment you arrive. With a 4.9-star Google rating and glowing reviews from satisfied clients, Faridaz Spa is recognized for its professionalism, top-tier services, and deeply relaxing environment.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">4.9★</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users className="w-5 h-5 sm:w-7 sm:h-7 text-gold" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">Certified</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Professionals</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">World-Class</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Treatments</div>
                </div>
              </div>
            </div>

            {/* Right - Image Bento Grid */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Large image - top left */}
              <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={massageImg}
                  alt="Professional facial treatment at Faridaz Spa Abuja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>

              {/* Top right */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={facialImg}
                  alt="Relaxing facial steamer treatment at Faridaz Spa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent"></div>
              </div>

              {/* Bottom right */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={pedicureImg}
                  alt="Premium pedicure service at Faridaz Spa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

StorySection.displayName = "StorySection";

export default StorySection;
