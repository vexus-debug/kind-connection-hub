import { Facebook, Instagram } from "lucide-react";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=100046318225985"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/90 to-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30 hover:border-gold hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-gradient-to-r from-primary to-gold text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg hidden md:block">
          Follow on Facebook
        </span>
      </a>
      
      <a
        href="https://www.instagram.com/fedo_beauty_spa?igsh=NTc4MTIwNjQ2YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/90 to-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30 hover:border-gold hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-gradient-to-r from-primary to-gold text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg hidden md:block">
          Follow on Instagram
        </span>
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
