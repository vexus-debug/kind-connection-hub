import { MapPin, Phone, Clock, Mail, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FooterRevamped = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background via-secondary/30 to-primary/5 border-t border-border/50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Faridaz Spa" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for authentic traditional spa and health club treatments in Abuja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/products", label: "Products" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">
                  Mall of Dubai, Garki & Lakota Street, Wuse, Abuja
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <div className="space-y-1">
                  <a href="tel:+2347068121733" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    0706 812 1733
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:faridazspa@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  faridazspa@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Opening Hours
            </h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl p-4 border border-primary/10">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Mon - Sat</span>
                    <span className="font-semibold text-primary">9am - 10pm</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-primary">12pm - 8pm</span>
                  </div>
                </div>
              </div>
              <Link 
                to="/booking"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Faridaz Spa. Made with 
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              in Abuja
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRevamped;
