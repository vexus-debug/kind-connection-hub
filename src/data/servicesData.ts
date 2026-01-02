import { 
  Sparkles, 
  Heart, 
  Scissors, 
  Star,
  Waves,
  Droplet,
  Zap,
  Bath,
  Wind,
  Palette,
  Gift,
  ShoppingBag
} from "lucide-react";

export interface Service {
  name: string;
  price: string;
  duration?: string;
  note?: string;
}

export interface ServiceCategory {
  category: string;
  iconName: string;
  badge?: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    category: "Massage Services",
    iconName: "Waves",
    badge: "Popular",
    services: [
      { name: "Aroma therapy", price: "₦40,000.00", duration: "60 mins" },
      { name: "Swedish Massage", price: "₦40,000.00", duration: "60 mins" },
      { name: "Swedish Massage (couple)", price: "₦75,000.00", duration: "60 mins" },
      { name: "Deep Tissue Massage", price: "₦50,000.00", duration: "60 mins" },
      { name: "Deep Tissue Massage (couple)", price: "₦80,000.00", duration: "60 mins" },
      { name: "Reflexology", price: "₦30,000.00", duration: "30 mins" },
      { name: "Hot Stone With Deep Tissue", price: "₦60,000.00", duration: "1 hr 30 mins" },
      { name: "Hot Stone With Swedish", price: "₦60,000.00", duration: "1 hr 30 mins" },
      { name: "Head, Shoulder, Back Massage", price: "₦30,000.00", duration: "45 mins" },
      { name: "Four Hands Massage", price: "₦50,000.00", duration: "60 mins" }
    ]
  },
  {
    category: "Waxing Services",
    iconName: "Zap",
    badge: "Featured",
    services: [
      { name: "Full Body", price: "₦50,000.00", duration: "1 hr 30 mins" },
      { name: "Half Body (upper Body)", price: "₦25,000.00", duration: "60 mins" },
      { name: "Vajacial", price: "₦20,000.00", duration: "45 mins" },
      { name: "Hollywood", price: "₦30,000.00", duration: "45 mins" },
      { name: "Bikini", price: "₦10,000.00", duration: "10 mins" },
      { name: "Full Face", price: "₦15,000.00", duration: "30 mins" },
      { name: "Chin", price: "₦10,000.00", duration: "30 mins" },
      { name: "Under Arm", price: "₦8,000.00", duration: "10 mins" },
      { name: "Full Leg (waist Downwards)", price: "₦25,000.00", duration: "45 mins" },
      { name: "Half Leg (knee Downwards)", price: "₦15,000.00", duration: "30 mins" },
      { name: "Eye Brow", price: "₦5,000.00", duration: "10 mins" },
      { name: "Upper Lip", price: "₦5,000.00", duration: "10 mins" },
      { name: "Jacuzzi Bath", price: "₦20,000.00", duration: "30 mins" },
      { name: "Sauna Only", price: "₦35,000.00", duration: "1 hour" },
      { name: "Sauna Only", price: "₦20,000.00", duration: "30 mins" },
      { name: "Steam Only", price: "₦20,000.00", duration: "30 mins" }
    ]
  },
  {
    category: "Peels & Advanced Treatments",
    iconName: "Sparkles",
    badge: "Luxury",
    services: [
      { name: "Chemical Peel (clarity)", price: "₦80,000.00" },
      { name: "Back Peel With Any Peel", price: "₦250,000.00" },
      { name: "Knuckle Chemical Peel", price: "₦50,000.00" },
      { name: "Feet Chemical Peel", price: "₦50,000.00" },
      { name: "Neck Chemical Peel", price: "₦75,000.00" },
      { name: "Full Body Peel (excluding Face)", price: "₦75,000.00" },
      { name: "Algea Peel", price: "₦80,000.00" },
      { name: "Chemical Peel + Microneedling", price: "₦120,000.00" },
      { name: "Butt Facial", price: "₦60,000.00" },
      { name: "Butt Peel", price: "₦120,000.00" },
      { name: "Inner Thigh Facials", price: "₦60,000.00" },
      { name: "Inner Thigh Peel", price: "₦120,000.00" },
      { name: "Acne Facial For Men With Bumps Treatment", price: "₦100,000.00" },
      { name: "Bumbs Fibro Blast Treatment With Peel For Men/women Chin", price: "₦75,000.00" },
      { name: "Keloid Injectables (Per Vial)", price: "₦40,000.00" },
      { name: "Back Peel With Algae Or Chemical Peel", price: "₦250,000.00" },
      { name: "Combination Of Microneedling And Peel", price: "₦150,000.00" },
      { name: "Combination Of Any Other Two Facials (Additional)", price: "₦30,000.00" },
      { name: "Addition Of Demaplanning To Any Facial", price: "₦20,000.00" },
      { name: "Am Pit Facial", price: "₦50,000.00" },
      { name: "Armpit Peel Both", price: "₦100,000.00" },
      { name: "Back Facial", price: "₦80,000.00" },
      { name: "Vajafacial Treatment", price: "₦30,000.00" },
      { name: "Vaja Facial With Demaplanning", price: "₦35,000.00" },
      { name: "Vaja Facial With Waxing", price: "₦50,000.00" },
      { name: "Vagi Facial + Waxing (men)", price: "₦70,000.00" }
    ]
  },
  {
    category: "Hair Cut Services",
    iconName: "Scissors",
    services: [
      { name: "Adult Haircut", price: "₦5,000.00" },
      { name: "Female Haircut", price: "₦7,000.00" },
      { name: "Teenager Haircut", price: "₦4,000.00" },
      { name: "Children Haircut", price: "₦3,000.00" },
      { name: "Haircut & Dye (black)", price: "₦7,000.00" },
      { name: "Haircut & Texturizer", price: "₦8,000.00" },
      { name: "Haircut & Hair Wash", price: "₦6,000.00" },
      { name: "Shaving", price: "₦2,000.00" },
      { name: "Hair Tint (Gold)", price: "₦10,000.00" },
      { name: "Hair Tint (other Colour)", price: "₦20,000.00" },
      { name: "Sporting Waves", price: "₦15,000.00" },
      { name: "Washing & Shaving", price: "₦4,000.00" },
      { name: "Relocking of Dread", price: "₦15,000.00" },
      { name: "Starting Dread", price: "₦35,000.00" },
      { name: "Dread Extension", price: "₦30,000.00" },
      { name: "New Born Baby", price: "₦10,000.00" },
      { name: "Whiteman Haircut", price: "₦10,000.00" }
    ]
  },
  {
    category: "Manicure Services",
    iconName: "Heart",
    services: [
      { name: "Basic Manicure", price: "₦5,000.00", duration: "45 mins" },
      { name: "Paraffin Wax Manicure", price: "₦8,000.00", duration: "60 mins" },
      { name: "Regular Polish", price: "₦2,000.00", duration: "60 mins" },
      { name: "Gel Polish", price: "₦4,000.00", duration: "60 mins" }
    ]
  }
];

export const iconMap = {
  Sparkles,
  Heart,
  Scissors,
  Star,
  Waves,
  Droplet,
  Zap,
  Bath,
  Wind,
  Palette,
  Gift,
  ShoppingBag
};

// Important Note
export const extraTimeNote = "Note: Extra time attracts extra charges.";
