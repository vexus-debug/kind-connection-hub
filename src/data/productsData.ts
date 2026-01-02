export interface Product {
  id: string;
  name: string;
  price: string;
  size: string;
  description: string;
  benefits: string[];
  category: string;
}

export const productsData: Product[] = [
  {
    id: "body-cream-500ml",
    name: "Luxury Body Cream",
    price: "₦40,000 - ₦60,000",
    size: "500ml",
    category: "Body Care",
    description: "Transform your skin with our premium body cream, formulated with natural ingredients to deeply nourish and hydrate.",
    benefits: [
      "Deep moisturizing formula for 24-hour hydration",
      "Enriched with vitamins and antioxidants",
      "Improves skin elasticity and texture",
      "Non-greasy, fast-absorbing formula"
    ]
  },
  {
    id: "body-cream-250ml",
    name: "Premium Body Cream",
    price: "₦25,000 - ₦35,000",
    size: "250ml",
    category: "Body Care",
    description: "Experience radiant skin with our perfectly sized premium body cream, ideal for daily use and travel.",
    benefits: [
      "Perfect travel-friendly size",
      "Luxurious texture that melts into skin",
      "Restores skin's natural glow",
      "Suitable for all skin types"
    ]
  },
  {
    id: "face-cream",
    name: "Radiance Face Cream",
    price: "₦4,000 - ₦20,000",
    size: "30ml - 60ml",
    category: "Facial Care",
    description: "Reveal your natural beauty with our face cream that targets aging signs while providing intense hydration.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Brightens and evens skin tone",
      "Lightweight, non-comedogenic formula",
      "Protects against environmental damage"
    ]
  },
  {
    id: "face-wash",
    name: "Purifying Face Wash",
    price: "₦3,500 - ₦15,000",
    size: "30ml - 60ml",
    category: "Facial Care",
    description: "Start your skincare routine right with our gentle yet effective face wash that cleanses without stripping.",
    benefits: [
      "Deep cleanses pores and removes impurities",
      "Maintains skin's natural pH balance",
      "Refreshes and revitalizes complexion",
      "Prepares skin for better product absorption"
    ]
  },
  {
    id: "face-mask",
    name: "Rejuvenating Face Mask",
    price: "₦3,000 - ₦10,000",
    size: "30ml - 60ml",
    category: "Facial Care",
    description: "Indulge in spa-quality care at home with our intensive face mask that delivers instant results.",
    benefits: [
      "Deeply nourishes and revitalizes skin",
      "Minimizes pores and refines texture",
      "Instant radiance and glow",
      "Weekly treatment for lasting results"
    ]
  },
  {
    id: "face-scrub",
    name: "Exfoliating Face Scrub",
    price: "₦8,000 - ₦12,000",
    size: "30ml - 60ml",
    category: "Facial Care",
    description: "Buff away dullness and reveal smoother, brighter skin with our gentle yet effective exfoliating scrub.",
    benefits: [
      "Natural exfoliants remove dead skin cells",
      "Unclogs pores and prevents breakouts",
      "Improves product penetration",
      "Reveals softer, smoother skin texture"
    ]
  },
  {
    id: "fruity-black-soap",
    name: "Fruity Black Soap",
    price: "₦30,000",
    size: "500ml",
    category: "Cleansing",
    description: "Experience the traditional benefits of African black soap enhanced with natural fruit extracts for a luxurious cleanse.",
    benefits: [
      "Natural antibacterial properties",
      "Gentle on sensitive skin",
      "Rich in vitamins and minerals",
      "Versatile for face and body use"
    ]
  },
  {
    id: "anti-aging-cream",
    name: "Anti-Aging Shower Cream",
    price: "₦45,000",
    size: "1000ml",
    category: "Body Care",
    description: "Turn your daily shower into an anti-aging ritual with our advanced formula that firms and rejuvenates skin.",
    benefits: [
      "Firms and tightens skin",
      "Reduces appearance of aging signs",
      "Deeply hydrates while cleansing",
      "Long-lasting family size"
    ]
  },
  {
    id: "liquid-black-soap",
    name: "Fruity Liquid Black Soap",
    price: "₦30,000",
    size: "500ml",
    category: "Cleansing",
    description: "Enjoy the convenience of liquid form with all the benefits of traditional black soap, infused with fruity freshness.",
    benefits: [
      "Easy-to-use liquid formula",
      "Natural cleansing and detoxifying",
      "Fresh fruity fragrance",
      "Suitable for daily use"
    ]
  }
];

export const whatsappNumber = "2347068121733";

export const generateWhatsAppLink = (productName: string, price: string) => {
  const message = `Hi! I'm interested in purchasing the ${productName} (${price}). Please provide more details.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
