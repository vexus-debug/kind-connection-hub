import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visit Us Today
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
              Located in Garki & Wuse, Abuja. We're easily accessible 
              and ready to welcome you to your wellness sanctuary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                   <div>
                      <h4 className="font-semibold text-foreground mb-1">Our Locations</h4>
                      <p className="text-elegant leading-relaxed mb-3">
                        <strong>Main Location:</strong><br />
                        Shop No. 14, 2nd Floor<br />
                        Mall of Dubai, Gimbiya Street<br />
                        Opp. H-Medix, Area 11, Garki, Abuja
                      </p>
                      <p className="text-elegant leading-relaxed">
                        <strong>Alternative Location:</strong><br />
                        No. 3 Lakota Street<br />
                        Behind Febson Apartment<br />
                        Zone 4, Wuse, Abuja
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <div className="space-y-1">
                        <a 
                          href="tel:+2347068121733"
                          className="block text-elegant hover:text-primary transition-colors"
                        >
                          0706 812 1733
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                      <div className="text-elegant space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 10:00 PM</p>
                        <p>Sunday: 12:00 PM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com/nayaspal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Visit Us */}
              <div className="section-gold rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Visit Faridaz Spa?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-elegant">Services Available</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-gold mb-2">5★</div>
                    <div className="text-sm text-elegant">Customer Rating</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-elegant">Happy Clients</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-gold mb-2">6</div>
                    <div className="text-sm text-elegant">Days a Week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="card-elegant p-2">
              <div className="relative rounded-xl overflow-hidden bg-muted h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Interactive Map
                  </h4>
                  <p className="text-elegant mb-4">
                    📍 Shop No. 14, 2nd Floor, Mall of Dubai, Gimbiya Street, Area 11, Garki, Abuja<br />
                    📍 No. 3 Lakota Street, Behind Febson Apartment, Zone 4, Wuse, Abuja
                  </p>
                  <a 
                    href="https://maps.google.com/maps?q=Mall+of+Dubai+Garki+Abuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-3">How to Find Us</h4>
                <ul className="space-y-2 text-sm text-elegant">
                  <li>• Garki location: Mall of Dubai, 2nd Floor</li>
                  <li>• Wuse location: Lakota Street, Zone 4</li>
                  <li>• Easy access from major city landmarks</li>
                  <li>• Convenient parking available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;