import watchBengali from "@/assets/watch-bengali.jpg";
import watchAutomatic from "@/assets/watch-automatic.jpg";
import tableClock from "@/assets/table-clock.jpg";
import watchOdia from "@/assets/watch-odia.jpg";
import heroWatch from "@/assets/hero-watch.jpg";
import wallClock from "@/assets/wall-clock.jpg";
import legacyredux1 from "@/assets/legacyredux1.jpg";
import legacyredux2 from "@/assets/legacyredux2.jpg";
import legacyredux3 from "@/assets/legacyredux3.jpg";
import legacyredux4 from "@/assets/legacyredux4.jpg";
import legacyredux5 from "@/assets/legacyredux5.jpg";
import legacyredux6 from "@/assets/legacyredux6.jpg";
import legacyredux7 from "@/assets/legacyredux7.jpg";
import legacyredux8 from "@/assets/legacyredux8.jpg";
import watchautomatic1 from "@/assets/watch-automatic1.jpg";
import watchautomatic2 from "@/assets/watch-automatic2.jpg";
import watchautomatic3 from "@/assets/watch-automatic3.jpg";
import tableclock1 from "@/assets/table-clock1.jpg";
import tableclock2 from "@/assets/table-clock2.jpg";
import wallclockbig from "@/assets/wall-clock-big.jpg";
import wallclock2 from "@/assets/wall-clock2.jpg";
import wallclock3 from "@/assets/wall-clock3.jpg";
import wallclock4 from "@/assets/wall-clock4.jpg";
import watchbengali1 from "@/assets/watch-bengali1.jpg";
import watchbengali2 from "@/assets/watch-bengali2.jpg";
import watchbengali3 from "@/assets/watch-bengali3.jpg";
import watchbengali4 from "@/assets/watch-bengali4.jpg";
import watchbengali5 from "@/assets/watch-bengali5.jpg";
import watchbengali6 from "@/assets/watch-bengali6.jpg";
import watchbengali7 from "@/assets/watch-bengali7.jpg";
import watchbengali8 from "@/assets/watch-bengali8.jpg";
import watchbengali9 from "@/assets/watch-bengali9.jpg";
import watchbose from "@/assets/watch-bose.jpg";
import watchbose1 from "@/assets/watch-bose1.jpg";
import watchodia1 from "@/assets/watch-odia1.jpg";
import watchodia2 from "@/assets/watch-odia2.jpg";
import watchodia3 from "@/assets/watch-odia3.jpg";

import { V } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";


export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  price: string;
  originalPrice?: string;
  badge: "Bestseller" | "Premium" | "Limited Stock" | "Upcoming" | "New" | "Sale";
  category: "watch" | "clock" | "accessory";
  inStock: boolean;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  deliveryInfo: string;
}

export const products: Product[] = [
  {
    id: "legacy-redux-1",
    name: "Legacy Redux (-1)",
    tagline: "An elegant comeback of the OG",
    description:
      "The Legacy Redux (-1) is our flagship timepiece — a minimalist watch designed for those who appreciate understated elegance. Featuring an ultra-thin 4.45mm case, this unisex watch pairs perfectly with both formal and casual attire. The ivory dial with no second hand creates a serene, timeless aesthetic.",
    images: [legacyredux1, legacyredux2, legacyredux3, legacyredux4, legacyredux5, legacyredux6, legacyredux7, legacyredux8],
    price: "₹2,950",
    badge: "Bestseller",
    category: "watch",
    inStock: true,
    features: [
      "38–39 mm dial (Unisex)",
      "Ultra-thin case (4.45 mm)",
      "Narrow bezels, Ivory dial",
      "Miyota Quartz Movement",
      "Croc-pattern leather straps",
      "1 Year Warranty",
      "Wooden Presentation Box",
      "Water resistant (3 ATM)",
    ],
    specifications: [
      { label: "Case Diameter", value: "38-39 mm" },
      { label: "Case Thickness", value: "4.45 mm" },
      { label: "Case Material", value: "Stainless Steel" },
      { label: "Dial Color", value: "Ivory" },
      { label: "Movement", value: "Miyota Quartz" },
      { label: "Strap Material", value: "Genuine Leather (Croc-pattern)" },
      { label: "Strap Width", value: "18 mm" },
      { label: "Water Resistance", value: "3 ATM" },
      { label: "Crystal", value: "Mineral Glass" },
      { label: "Warranty", value: "1 Year" },
    ],
    deliveryInfo: "Ships within 2-4 weeks",
  },
  {
    id: "swayam-automatic",
    name: "স্বয়ং — Automatic",
    tagline: "Bengali Automatic Movement Watch",
    description:
      "The স্বয়ং (Swayam) is our premium automatic timepiece — a celebration of Bengali craftsmanship meeting Swiss-inspired engineering. Featuring an exhibition caseback that reveals the intricate automatic movement, this watch is for collectors who appreciate the art of horology.",
    images: [watchAutomatic, watchautomatic2, watchautomatic1, watchautomatic3],
    price: "Coming Soon",
    badge: "Premium",
    category: "watch",
    inStock: false,
    features: [
      "Automatic movement (self-winding)",
      "Rose gold / Black dial options",
      "Bengali numerals",
      "Exhibition caseback",
      "Premium leather strap",
      "Collector's edition",
      "Limited to 500 pieces",
      "2 Year Warranty",
    ],
    specifications: [
      { label: "Case Diameter", value: "40 mm" },
      { label: "Case Thickness", value: "10 mm" },
      { label: "Case Material", value: "316L Stainless Steel" },
      { label: "Dial Options", value: "Rose Gold / Black" },
      { label: "Movement", value: "Automatic (Miyota 9015)" },
      { label: "Power Reserve", value: "42 hours" },
      { label: "Strap Material", value: "Italian Leather" },
      { label: "Water Resistance", value: "5 ATM" },
      { label: "Crystal", value: "Sapphire Glass" },
      { label: "Edition", value: "Limited (500 pieces)" },
    ],
    deliveryInfo: "Pre-orders opening soon",
  },
  {
    id: "heritage-table-clock",
    name: "Heritage Table Clock",
    tagline: "Limited edition handcrafted clocks",
    description:
      "A tribute to vintage Bengali households, this handcrafted table clock features traditional Bengali numerals on an elegant dial. Perfect for studies, offices, or heritage interiors. Each piece is individually numbered.",
    images: [tableClock, tableclock1, tableclock2],
    price: "₹999",
    badge: "Limited Stock",
    category: "clock",
    inStock: true,
    features: [
      "25.9 × 14.5 × 5.8 cm",
      "Mahogany wood case",
      "Bengali numeral dial",
      "Alarm feature",
      "Brass accents",
      "Perfect for studies",
      "Battery powered",
      "Gift ready packaging",
    ],
    specifications: [
      { label: "Dimensions", value: "25.9 × 14.5 × 5.8 cm" },
      { label: "Case Material", value: "Mahogany Wood" },
      { label: "Dial", value: "Bengali Numerals" },
      { label: "Movement", value: "Quartz" },
      { label: "Features", value: "Alarm" },
      { label: "Accents", value: "Brass" },
      { label: "Power", value: "1 × AA Battery" },
      { label: "Weight", value: "450g" },
    ],
    deliveryInfo: "Shipping this week",
  },
  {
    id: "odia-heritage",
    name: "ଓଡ଼ିଆ — Odia Heritage",
    tagline: "Our first venture beyond Bengal",
    description:
      "ଏବେ ସମୟ ଚାଲିବ ଓଡ଼ିଆ ଷ୍ଟାଇଲ୍‌ରେ — Now time will run in Odia style. This watch is a cultural tribute to Odisha, featuring Odia script numerals on an elegant teal dial. A celebration of India's diverse heritage.",
    images: [watchOdia, watchodia3, watchodia1, watchodia2],
    price: "Coming Soon",
    badge: "Upcoming",
    category: "watch",
    inStock: false,
    features: [
      "Odia script numerals",
      "Teal/emerald dial",
      "Silver case",
      "Quartz movement",
      "Cultural tribute to Odisha",
      "Pre-orders opening soon",
      "1 Year Warranty",
      "Traditional packaging",
    ],
    specifications: [
      { label: "Case Diameter", value: "38 mm" },
      { label: "Case Thickness", value: "7 mm" },
      { label: "Case Material", value: "Stainless Steel (Silver)" },
      { label: "Dial Color", value: "Teal/Emerald" },
      { label: "Movement", value: "Miyota Quartz" },
      { label: "Strap Material", value: "Genuine Leather" },
      { label: "Water Resistance", value: "3 ATM" },
      { label: "Crystal", value: "Mineral Glass" },
    ],
    deliveryInfo: "Pre-orders opening soon",
  },
  {
    id: "netaji-tribute",
    name: "LEGACY REDUX হিন্দ",
    tagline: "Handwritten script from Subhas Chandra Bose",
    description:
      "A special edition watch featuring handwritten Bengali scripts inspired by letters of Netaji Subhas Chandra Bose. Each dial is hand-processed with archival-quality reproduction of historical manuscripts. A collector's piece celebrating Indian independence.",
    images: [watchbose, watchbose1],
    price: "₹4,500",
    badge: "Premium",
    category: "watch",
    inStock: true,
    features: [
      "Handwritten script dial",
      "Historical manuscript design",
      "40mm case",
      "Miyota Quartz Movement",
      "Brown leather strap",
      "Numbered collector's edition",
      "Certificate of authenticity",
      "Wooden presentation box",
    ],
    specifications: [
      { label: "Case Diameter", value: "40 mm" },
      { label: "Case Thickness", value: "8 mm" },
      { label: "Case Material", value: "Antique Gold PVD" },
      { label: "Dial", value: "Cream with handwritten script" },
      { label: "Movement", value: "Miyota Quartz" },
      { label: "Strap Material", value: "Vintage Brown Leather" },
      { label: "Water Resistance", value: "3 ATM" },
      { label: "Edition", value: "Limited (200 pieces)" },
    ],
    deliveryInfo: "Ships within 3-4 weeks",
  },
  {
    id: "rabindra-lipi",
    name: "রবি লিপি",
    tagline: "Typography inspired by Rabindranath Tagore",
    description:
      "The Rabindra Lipi celebrates the unique handwriting style of Rabindranath Tagore. The dial features Bengali numerals rendered in Tagore's distinctive calligraphic style, making each watch a wearable piece of literary heritage.",
    images: [watchBengali, watchbengali1, watchbengali2, watchbengali3, watchbengali4, watchbengali5, watchbengali6, watchbengali7, watchbengali8, watchbengali9],
    price: "₹3,800",
    badge: "New",
    category: "watch",
    inStock: true,
    features: [
      "Tagore's calligraphy style",
      "Rose gold case",
      "White dial",
      "36mm unisex size",
      "Miyota Quartz Movement",
      "Burgundy leather strap",
      "Literary heritage design",
      "1 Year Warranty",
    ],
    specifications: [
      { label: "Case Diameter", value: "36 mm" },
      { label: "Case Thickness", value: "6 mm" },
      { label: "Case Material", value: "Rose Gold PVD" },
      { label: "Dial", value: "White with Rabindra Lipi numerals" },
      { label: "Movement", value: "Miyota Quartz" },
      { label: "Strap Material", value: "Burgundy Italian Leather" },
      { label: "Water Resistance", value: "3 ATM" },
      { label: "Crystal", value: "Mineral Glass" },
    ],
    deliveryInfo: "Ships within 2 weeks",
  },
  {
    id: "jamini-roy-art",
    name: "Jamini Roy Art Series",
    tagline: "Folk art inspired dial design",
    description:
      "Inspired by the iconic folk art style of Jamini Roy, this watch features bold lines and earthy colors reminiscent of Bengal's rich artistic tradition. The dial showcases motifs from Roy's famous paintings, making it a wearable piece of art.",
    images: [watchautomatic2, watchautomatic1, watchautomatic3, watchAutomatic ],
    price: "₹4,200",
    badge: "New",
    category: "watch",
    inStock: true,
    features: [
      "Jamini Roy art motifs",
      "Bold folk art design",
      "Earthy color palette",
      "42mm case",
      "Japanese Quartz Movement",
      "Canvas strap option",
      "Art collector's piece",
      "Handcrafted dial",
    ],
    specifications: [
      { label: "Case Diameter", value: "42 mm" },
      { label: "Case Thickness", value: "9 mm" },
      { label: "Case Material", value: "Matte Black Steel" },
      { label: "Dial", value: "Terracotta with folk art" },
      { label: "Movement", value: "Japanese Quartz" },
      { label: "Strap Options", value: "Canvas / Leather" },
      { label: "Water Resistance", value: "3 ATM" },
      { label: "Artistic Style", value: "Bengal Folk Art" },
    ],
    deliveryInfo: "Ships within 2-3 weeks",
  },
  {
    id: "heritage-wall-clock",
    name: "Heritage Wall Clock 4.0",
    tagline: "Statement piece for heritage interiors",
    description:
      "The Heritage Wall Clock 4.0 is a large-format clock designed for living rooms and offices. Featuring Bengali numerals and a vintage aesthetic, it brings old-world charm to modern spaces.",
    images: [wallclock4, wallClock, wallclock2, wallclock3, wallclockbig],
    price: "₹2,499",
    badge: "Limited Stock",
    category: "clock",
    inStock: true,
    features: [
      "30 cm diameter",
      "Wooden frame",
      "Bengali numerals",
      "Silent quartz movement",
      "Vintage brass finish",
      "Wall mounting kit included",
      "Battery powered",
      "1 Year Warranty",
    ],
    specifications: [
      { label: "Diameter", value: "30 cm" },
      { label: "Depth", value: "4 cm" },
      { label: "Frame Material", value: "Solid Wood" },
      { label: "Finish", value: "Vintage Brass" },
      { label: "Movement", value: "Silent Quartz" },
      { label: "Dial", value: "Bengali Numerals" },
      { label: "Power", value: "1 × AA Battery" },
      { label: "Mounting", value: "Wall mount included" },
    ],
    deliveryInfo: "Pending verification",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => ["Bestseller", "Premium", "New"].includes(p.badge));
};
