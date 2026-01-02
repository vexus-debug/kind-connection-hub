import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuickContact = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-secondary/30 to-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Our Location</h4>
                <p className="text-sm text-muted-foreground leading-snug">
                  Shop No. 14, 2nd Floor<br />
                  Mall of Dubai, Gimbiya Street, Garki
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                <a 
                  href="tel:+2347068121733"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  0706 812 1733
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                <p className="text-sm text-muted-foreground leading-snug">
                  Mon-Sat: 9AM - 10PM<br />
                  Sun: 12PM - 8PM
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center md:justify-end">
              <Button 
                onClick={() => navigate('/contact')}
                className="btn-outline-gold group"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
