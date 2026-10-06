export interface AntiqueItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  description: string;
  imageUrl: string;
  features: string[];
  tag: string;
}

export const CATEGORIES = [
  "All Objects",
  "Brass & Metal",
  "Vintage Clocks",
  "Vintage Cameras & Electronics",
  "Traditional Figurines & Idols",
  "Decorative Antiques",
  "Vintage Household Objects",
  "Collectibles & Curiosities",
] as const;

export const ANTIQUE_COLLECTION: AntiqueItem[] = [
  {
    id: "brass-uruli-peacock",
    title: "Heavy Hand-Cast Brass Uruli",
    category: "Brass & Metal",
    caption: "Echoes of timeless craftsmanship.",
    description: "Classic South Indian traditional vessel cast with high-density brass and ornate peacocks, bearing genuine antique patina.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80",
    features: ["Heavy Bell Brass", "Traditional Peedam Base", "Warm Aged Patina"],
    tag: "Brass & Metal",
  },
  {
    id: "pendulum-wall-clock",
    title: "Key-Wound Mechanical Pendulum Clock",
    category: "Vintage Clocks",
    caption: "Pieces from another era.",
    description: "Vintage handcrafted wooden cabinet pendulum clock with brass Roman numeral dial, key-wound chimes, and glass aperture.",
    imageUrl: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=80",
    features: ["Carved Teak Housing", "Mechanical Movement", "Dual Key-Wind System"],
    tag: "Vintage Clocks",
  },
  {
    id: "bronze-murugan-deepam",
    title: "Traditional Bronze Sacred Deepam",
    category: "Traditional Figurines & Idols",
    caption: "Collected with passion and divine reverence.",
    description: "Handcrafted traditional temple brass five-wick deepam crowned with auspicious divine motifs, preserved with deep golden warmth.",
    imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?auto=format&fit=crop&w=900&q=80",
    features: ["Temple Bell Bronze", "Five Wick Oil Well", "Auspicious Crest"],
    tag: "Traditional Figurines & Idols",
  },
  {
    id: "vintage-tlr-camera",
    title: "Classic Twin-Lens Reflex Camera",
    category: "Vintage Cameras & Electronics",
    caption: "Timeless curiosities.",
    description: "Mid-century analogue optical marvel featuring dual matching lenses, mechanical shutter release, and textured leatherette casing.",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    features: ["Mechanical Shutter", "Dual Optical Glass", "Analogue Viewfinder"],
    tag: "Vintage Cameras & Electronics",
  },
  {
    id: "carved-wooden-panel",
    title: "Heritage Chettinad Carved Wood Panel",
    category: "Decorative Antiques",
    caption: "Objects with a story.",
    description: "Solid country-wood panel depicting floral vine arabesques and heritage architectural carvings, salvaged from historic homes.",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    features: ["Aged Country Wood", "Hand-Chiseled Relief", "Natural Wax Finish"],
    tag: "Decorative Antiques",
  },
  {
    id: "traditional-brass-padi",
    title: "Traditional Brass Padi & Measure Sets",
    category: "Vintage Household Objects",
    caption: "Patina shaped by generations.",
    description: "Authentic cylindrical grain-measuring vessels stamped with regional seal markings, used across ancestral South Indian kitchens.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    features: ["Authentic Stamp Marks", "Heavy Gauge Sheet Brass", "Generational Wear"],
    tag: "Vintage Household Objects",
  },
  {
    id: "maritime-brass-compass",
    title: "Antique Brass Gimbal Pocket Compass",
    category: "Collectibles & Curiosities",
    caption: "Timeless curiosities.",
    description: "Solid maritime navigational compass in brass screw-top casing with engraved cardinal directions and floating magnetic needle.",
    imageUrl: "https://images.unsplash.com/photo-1527769929977-c2a394db1755?auto=format&fit=crop&w=900&q=80",
    features: ["Engraved Compass Rose", "Threaded Brass Lid", "Collector Quality"],
    tag: "Collectibles & Curiosities",
  },
  {
    id: "vintage-mantel-clock",
    title: "Arched Mahogany Mantel Clock",
    category: "Vintage Clocks",
    caption: "Pieces from another era.",
    description: "Elegant tabletop timepiece with brass bezel, cream porcelain dial, and melodic mechanical chime mechanism.",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    features: ["Mahogany Veneer", "Porcelain Roman Dial", "Brass Bezel"],
    tag: "Vintage Clocks",
  },
  {
    id: "sacred-brass-nandi",
    title: "Sacred South Indian Brass Figurine",
    category: "Traditional Figurines & Idols",
    caption: "Divine grace preserved through time.",
    description: "Traditional lost-wax brass cast icon adorned with ritual bells and garlands, capturing serene temple iconography.",
    imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=900&q=80",
    features: ["Lost-Wax Cast", "Intricate Bell Garlands", "Rich Temple Patina"],
    tag: "Traditional Figurines & Idols",
  },
  {
    id: "brass-coal-iron",
    title: "Antique Heavy Brass Coal Iron",
    category: "Vintage Household Objects",
    caption: "Objects with a story.",
    description: "Solid brass box iron with rooster latch, interior cast baffle, and polished turned rosewood handle.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    features: ["Rooster Locking Latch", "Turned Rosewood Handle", "Charcoal Chamber"],
    tag: "Vintage Household Objects",
  },
  {
    id: "vintage-rangefinder",
    title: "35mm Mechanical Rangefinder Camera",
    category: "Vintage Cameras & Electronics",
    caption: "Echoes of timeless craftsmanship.",
    description: "Classic rangefinder camera with precision-ground glass optics, manual dial aperture controls, and leatherette strap.",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    features: ["Mechanical Shutter", "Metal Body Construction", "Manual Focus Dial"],
    tag: "Vintage Cameras & Electronics",
  },
  {
    id: "vintage-brass-padlock",
    title: "Hand-Forged Antique Brass Trick Lock",
    category: "Brass & Metal",
    caption: "Collected with passion.",
    description: "Intricately engineered multi-lever brass puzzle padlock with concealed keyway and hand-cut brass key.",
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80",
    features: ["Concealed Keyway", "Heavy Brass Shackle", "Original Hand-Cut Key"],
    tag: "Brass & Metal",
  }
];

export const STORE_INFO = {
  name: "ARUN COLLECTIONS",
  tagline: "Adding Values to Lives.",
  category: "Antique Store / Vintage Collectibles",
  address: "94/3, Adam Street, Alamelu Manga Puram, Sankarapuram, Mylapore, Chennai, Tamil Nadu, India",
  locality: "Mylapore, Chennai",
  phone: "9710394404",
  phoneDisplay: "97103 94404",
  phoneInternational: "+919710394404",
  instagram: "aruncollections2024",
  instagramHandle: "@aruncollections2024",
  instagramUrl: "https://www.instagram.com/aruncollections2024/",
  instagramFollowers: "12.2K",
  rating: 4.6,
  reviewCount: 40,
  services: ["In-store shopping", "In-store pickup"],
  googleMapsUrl: "https://maps.google.com/?q=94/3,+Adam+Street,+Alamelu+Manga+Puram,+Mylapore,+Chennai",
  whatsappUrl: "https://wa.me/919710394404",
};
