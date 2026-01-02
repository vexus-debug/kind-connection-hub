import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, MapPin, Shield, Leaf, Clock, Star, Calendar, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = memo(() => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Excellence You Can Trust",
      description: "4.9-star Google rating with glowing reviews. Our customers often describe their experience with one word — unforgettable.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Training & Development Hub",
      description: "We're raising the next generation of wellness professionals through structured training programs, teaching aspiring therapists hands-on skills from experts.",
      color: "gold"
    },
    {
      icon: MapPin,
      title: "Premium Home Service",
      description: "Select services such as massages and facials available at your doorstep — bringing the Faridaz experience directly to your home.",
      color: "primary"
    },
    {
      icon: Star,
      title: "Certified Professionals",
      description: "Our team of certified professionals deliver world-class treatments with an unmatched level of care in a warm, serene atmosphere.",
      color: "gold"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-deep via-primary to-accent-green bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                Beyond a Spa
              </span>
              <br />
              <span className="text-foreground">A Complete Wellness Experience</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From advanced treatments to professional training and home service options, Faridaz Spa offers comprehensive wellness solutions for every need.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass = feature.color === 'gold' ? 'text-gold bg-gold/10' : 'text-primary bg-primary/10';
              
              return (
                <div 
                  key={index}
                  className="group card-elegant p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Location & CTA Banner */}
          <div className="card-elegant p-8 md:p-10 bg-gradient-to-br from-primary/15 via-background to-gold/15 border-2 border-primary/40 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left - Location Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium">Visit Us</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Find Your Sanctuary in Garki
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    📍 Shop No. 14, 2nd Floor, Mall of Dubai, Gimbiya Street, Opp. H-Medix, Area 11, Garki, Abuja
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    📍 No. 3 Lakota Street, Behind Febson Apartment, Zone 4, Wuse, Abuja
                  </p>
                  <p className="text-base text-muted-foreground">
                    📞 +234 706 812 1733 | 📧 faridazspa@gmail.com
                  </p>
                </div>
              </div>

              {/* Right - CTAs */}
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={() => navigate('/booking')}
                  size="lg"
                  className="group w-full"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Your Escape
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  size="lg"
                  className="group w-full"
                >
                  Get Directions
                  <MapPin className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;
