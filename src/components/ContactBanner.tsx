import { useNavigate } from "react-router-dom";
import { Calendar, MessageSquare, MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactBanner = () => {
  const navigate = useNavigate();

  const handleGetDirections = () => {
    window.open("https://maps.google.com/maps?q=Mall+of+Dubai+Garki+Abuja", "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Visit Our Spa</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Experience Tranquility at
            <span className="block text-primary mt-2">Faridaz Spa</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conveniently located in Garki & Wuse, Abuja. Your sanctuary for 
            complete wellness, beauty, and rejuvenation awaits.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Location Card */}
          <div className="card-elegant p-8 hover:shadow-2xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground">Easy to find, convenient to visit</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Main Location</p>
                  <p className="text-sm text-foreground">Shop No. 14, 2nd Floor, Mall of Dubai</p>
                  <p className="text-sm text-muted-foreground">Gimbiya Street, Area 11, Garki</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Alternative Location</p>
                  <p className="text-sm text-foreground">No. 3 Lakota Street, Zone 4, Wuse</p>
                  <p className="text-sm text-muted-foreground">Behind Febson Apartment</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleGetDirections}
              className="w-full btn-gold group"
            >
              <Navigation className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get Directions
            </Button>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            {/* Opening Hours */}
            <div className="card-elegant p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Opening Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 9:00 AM - 10:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: 12:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="card-elegant p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-3">Contact Us</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+2347068121733"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="group-hover/link:underline">0706 812 1733</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="section-gold rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-xs text-muted-foreground">Premium Services</div>
              </div>
              <div className="section-gold rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-gold mb-1">4.9★</div>
                <div className="text-xs text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-deep to-gold p-1">
            <div className="bg-background rounded-[22px] p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Ready to Begin Your Wellness Journey?
                </h3>
                <p className="text-muted-foreground">
                  Book your appointment today and discover the perfect blend of traditional care and modern luxury.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={() => navigate('/booking')}
                  size="lg"
                  className="btn-gold w-full sm:w-auto group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Appointment
                </Button>
                
                <a 
                  href="https://wa.me/2347068121733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full group border-2 hover:bg-secondary"
                  >
                    <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
