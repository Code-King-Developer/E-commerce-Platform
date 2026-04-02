export interface ProductFinish {
  name: string;
  hex: string;
  outlineColor?: string;
}

export interface Product {
  id: string; // Ensure string parity for URL lookups easily
  category: string;
  title: string;
  price: string;
  tag: string | null;
  image: string; // Main image for grids
  images: string[]; // For product details gallery
  alt: string;
  inStock: boolean;
  description: string;
  sizes: string[];
  finishes: ProductFinish[];
  dimensionsMaterials: string[];
  shippingReturns: string[];
  featuredReview?: {
    author: string;
    date: string;
    quote: string;
  };
}

const defaultFinishes: ProductFinish[] = [
  { name: 'Matte Black', hex: '#000000' },
  { name: 'Charcoal', hex: '#3c3b3b' },
  { name: 'Putty', hex: '#f0f1f1', outlineColor: 'ring-outline-variant' }
];

const defaultDimensions = [
  "Dimensions: H 68cm x W 82cm x D 76cm",
  "Seat Height: 42cm",
  "Materials: Solid European Oak frame, high-density foam, commercial-grade woven textile.",
  "Care: Vacuum regularly. Professional cleaning recommended for stains."
];

const defaultShipping = [
  "Dispatch: Ships within 2-3 business days.",
  "Delivery: Complimentary white-glove service included for all domestic orders. International shipping calculated at checkout.",
  "Returns: 14-day return policy in original packaging. Restocking fees may apply."
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    category: 'Objects',
    title: 'KOBE SCULPTURAL VASE',
    price: '$420.00',
    tag: 'New Arrival',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYbU7QO7ZzYDPoW76GOPED7yJtXUhe3G_BloUUilaKfwwrs8CACCBSPP0OXFwQY_XIN8gEP0wc67A-mXPl3BiZPMmSSrUz6ZG94FBoMWpB8Cmq3Q2CSvmG-MfpUfi05337KZuNrQyvJ2ulaH9JRr3i5ByA8EuuPQYtDh0Utm0UDECqW-E3hzuOAuRB747uO6ZXoH5owAAEA2PPw5Ah3Xfu6Nx_f7D8ayiBuiISuBq25TeYCv4g3qBhWdw1za4sVo9DAKjp1jwbW1U3",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYbU7QO7ZzYDPoW76GOPED7yJtXUhe3G_BloUUilaKfwwrs8CACCBSPP0OXFwQY_XIN8gEP0wc67A-mXPl3BiZPMmSSrUz6ZG94FBoMWpB8Cmq3Q2CSvmG-MfpUfi05337KZuNrQyvJ2ulaH9JRr3i5ByA8EuuPQYtDh0Utm0UDECqW-E3hzuOAuRB747uO6ZXoH5owAAEA2PPw5Ah3Xfu6Nx_f7D8ayiBuiISuBq25TeYCv4g3qBhWdw1za4sVo9DAKjp1jwbW1U3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKI2kE0rTbEHgffwLR9k7YZlTzZwcRzK2c4hYdu4LKXFftc6bywmHn1TAwBy_8AFA5LXCX05_7WCN7kbD24zhy_s2BuZ-yffwvwjnENWv8Iblgf3fIxTv8EWK7ZMXBnCZcY_d1hjT8x5-ZP_wWki3aN-eDp4xr1VibDsTv6CevkUjh3tLWvDnD761KTadKjnMEwOTsLGkakJxuysvgwDEGBf3fTySwJ_ns1mV6FzETMZbBBx931jZmSa4Fu9pc06aMmMNIb03A3Zro" // Minimalist white vase
    ],
    alt: "Minimalist sculptural ceramic vessel",
    inStock: true,
    description: "A masterclass in restraint. The Kobe Sculptural Vase blends Japanese wabi-sabi philosophy with stark modernist geometries. Cast by hand in small batches, the textured ceramic body creates dynamic shadows that change throughout the day.",
    sizes: ['Small', 'Large'],
    finishes: defaultFinishes,
    dimensionsMaterials: [
      "Dimensions: Small (H 30cm x Dia 15cm) / Large (H 45cm x Dia 22cm)",
      "Materials: High-fire stoneware, unglazed matte exterior, glazed waterproof interior.",
      "Care: Wipe clean with a damp cloth. Do not use abrasive cleaners."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "2",
    category: 'Electronics',
    title: 'MONOLITH CHRONO',
    price: '$1,250.00',
    tag: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqeWnDSxbSr1PCqbAL2rFuvZ85yMV9C5WPDAn6wp_jd7TeKRROmKupLHXHDR64Hr6zMlXyLtmZDhv7hMCA8gDDFLNiNcorbxUA6u1u2001_FS01ZABN1bnuY0QUTFlC4jCEd9o12afpq2OYj14ZRyXHnt35D6aLe5VdfOBUfVeIwTQ0hIjqPJ24DQT1fH2we82y4t_qwt35GLL0EVplr84SavzqXfRkD8kz1_u3STrwX0SmACVFUuFLo6jg9FNW7QHSmDcfZFtda",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqeWnDSxbSr1PCqbAL2rFuvZ85yMV9C5WPDAn6wp_jd7TeKRROmKupLHXHDR64Hr6zMlXyLtmZDhv7hMCA8gDDFLNiNcorbxUA6u1u2001_FS01ZABN1bnuY0QUTFlC4jCEd9o12afpq2OYj14ZRyXHnt35D6aLe5VdfOBUfVeIwTQ0hIjqPJ24DQT1fH2we82y4t_qwt35GLL0EVplr84SavzqXfRkD8kz1_u3STrwX0SmACVFUuFLo6jg9FNW7QHSmDcfZFtda"
    ],
    alt: "High-end minimal white watch",
    inStock: true,
    description: "Swiss micro-mechanics encased in pure white ceramic. The Monolith Chrono deletes everything unnecessary, presenting time in its most absolute form. Features an invisible sapphire crystal display that only reveals complications under direct sunlight.",
    sizes: ['40mm', '44mm'],
    finishes: [
      { name: 'Ceramic White', hex: '#ffffff', outlineColor: 'ring-outline-variant' },
      { name: 'Space Black', hex: '#111111' }
    ],
    dimensionsMaterials: [
      "Case: White High-Tech Ceramic, 40mm/44mm diameter.",
      "Movement: Swiss Automatic Caliber 701.",
      "Crystal: Anti-reflective sapphire.",
      "Water Resistance: 5 ATM."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "3",
    category: 'Objects',
    title: 'ATELIER CHAIR',
    price: '$890.00',
    tag: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvKHAILcYj1I1meFhshKaNhV8OrwvaSDnpAQKDB4VzldhIHiV-cc8Cr5_Xl83qFeUAwnZiTs5Ucbx8_3F0Z3-rEI2xFtS8saGyr8LmarLjcFvdCB_Ao8LMwBED5mKDM7t990FNZ97_51DX3d2iM9voLpdT73NXnMzSuOTTKpJi_GFD1DtfSCnhv_tvMMEb5QZtNf3nECnHp_3IKPr4W8fpR-QM42jbFk-ETs5TJTlrdNiAewB9G1SLK19KyY2NgeoFlE_toFQVQLIk",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvKHAILcYj1I1meFhshKaNhV8OrwvaSDnpAQKDB4VzldhIHiV-cc8Cr5_Xl83qFeUAwnZiTs5Ucbx8_3F0Z3-rEI2xFtS8saGyr8LmarLjcFvdCB_Ao8LMwBED5mKDM7t990FNZ97_51DX3d2iM9voLpdT73NXnMzSuOTTKpJi_GFD1DtfSCnhv_tvMMEb5QZtNf3nECnHp_3IKPr4W8fpR-QM42jbFk-ETs5TJTlrdNiAewB9G1SLK19KyY2NgeoFlE_toFQVQLIk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkEKFKGMND8-L-FzR6buiLUaJcCkyLN7sB8dO66ASVHIYMNaE8TAEToVHLh_x_j3nrZmDuacavty1OvAtn_GBlHNzodfhj7QARcQOqs8kOOnbksw2_EOqnni38W8lIq7_8j7KJsAmf-ihGxb53PMqEb4QvjuUOjXDl89C_H2vBaRU1N2jeyumPmPKGVYWM-lmX_uae1g5CEbPlGGzOec9QsutgUjl3MQPEhoQosDZRvnW_6o_3l_xZV2kjrlG2QUtikvxSL-v7yilO" // Monolithic chair photo
    ],
    alt: "Modern black sculptural chair",
    inStock: true,
    description: "A study in geometric tension and organic warmth. The Atelier Chair balances a brutalist matte steel frame with hand-finished European oak. Designed to be the centerpiece of any contemporary interior, it offers an uncompromising silhouette without sacrificing ergonomic comfort.",
    sizes: ['Standard', 'Grand'],
    finishes: defaultFinishes,
    dimensionsMaterials: defaultDimensions,
    shippingReturns: defaultShipping,
    featuredReview: {
      author: "Marcus G.",
      date: "March 2024",
      quote: "A sculpture you can sit in. The precision of the joints is unlike anything else I own."
    }
  },
  {
    id: "4",
    category: 'Electronics',
    title: 'SONIC ARCHIVE 01',
    price: '$550.00',
    tag: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNAYzPI4sFmo97WCgzElhWKd5YKgsT76Oc2UFLOAjS78iAJSaVdNnrjLtfJ9I-f1WP83ztothNA7RWmBLnklTV_xoQoDoPNmtDjE9yiWKiJV9farzoRSUncWl_CJcGWvXzN5Be2ighzSOoXz5IYof_QfOen3Er-PyPte-C28Vai50YUQ1Igt1T5RC7T70RSw5N7kWhiB3SbSA1Cskpa1iaaKDv289NknRiwab2ArkfcWODcQzoWSzM_2xtfkE0gBTzRadLS6p9yjnU",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNAYzPI4sFmo97WCgzElhWKd5YKgsT76Oc2UFLOAjS78iAJSaVdNnrjLtfJ9I-f1WP83ztothNA7RWmBLnklTV_xoQoDoPNmtDjE9yiWKiJV9farzoRSUncWl_CJcGWvXzN5Be2ighzSOoXz5IYof_QfOen3Er-PyPte-C28Vai50YUQ1Igt1T5RC7T70RSw5N7kWhiB3SbSA1Cskpa1iaaKDv289NknRiwab2ArkfcWODcQzoWSzM_2xtfkE0gBTzRadLS6p9yjnU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZjyGZyUr1o2yk_Nvc7wFBslZqUDOB1c49Dv9kyj2JUaUVoPaPHks_CxIitRm7uSZkee-VGlpWXvz8AcuZeKxTtoqPywr9ba0t5Z143b5AhPSlzKEz7vISSvha_a-23vm5M1RlWQYMIl9tfPeiWE6siO0iT7_Joh8_idZe3YC1kh57nr4qp0ML9_AsY9RXeDaMdMuH0vsN8YVq20BBldgbhwkHG0TuLV84wiH1_y4SCDkEv4JTUnxzpPSJsp6v0kQcXhjM-6CIcrU" // Alternate headphones shot
    ],
    alt: "Studio shot of professional studio headphones",
    inStock: true,
    description: "Reference-grade studio audio encased in aeronautical aluminum. Engineered for those who demand uncolored, hyper-accurate sound reproduction. Memory foam pads ensure comfort through hours of deep listening sessions.",
    sizes: ['One Size'],
    finishes: [
      { name: 'Anodized Silver', hex: '#e2e2e2', outlineColor: 'ring-outline-variant' },
      { name: 'Stealth Black', hex: '#1a1c1c' }
    ],
    dimensionsMaterials: [
      "Weight: 310 grams.",
      "Materials: Aeronautical grade aluminum, Alcantara headband, proprietary foam core.",
      "Tech: 50mm planar magnetic drivers."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "5",
    category: 'Fashion',
    title: 'SILK TRENCH',
    price: '$1,850.00',
    tag: 'Limited Edition',
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop"
    ],
    alt: "Minimalist fashion shot of a trench coat",
    inStock: true,
    description: "Fluidity meets tailoring. This trench coat dissolves the rigid history of military rainwear into a diaphanous, draping silhouette. Woven entirely from Japanese heavy silk crêpe de chine, it cascades down the body while maintaining sharp architectural lapels.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    finishes: [
      { name: 'Bone', hex: '#f6f5f3', outlineColor: 'ring-outline-variant' },
      { name: 'Obsidian', hex: '#111111' }
    ],
    dimensionsMaterials: [
      "Fit: Oversized, relaxed drape.",
      "Materials: 100% Japanese Heavy Silk Crêpe de Chine, Horn buttons.",
      "Care: Specialist dry clean only."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "6",
    category: 'Home & Furniture',
    title: 'LUMINA FLOOR LAMP',
    price: '$920.00',
    tag: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&fit=crop"
    ],
    alt: "Modern floor lamp",
    inStock: false,
    description: "Light treated as a sculptural mass. The Lumina commands any room not by dominating its space, but by controlling its atmosphere. Features a continuous dimming capacitive touch stem and a heavy solid travertine base.",
    sizes: ['Tall (180cm)', 'Reading (120cm)'],
    finishes: [
      { name: 'Brushed Steel', hex: '#d1d5db', outlineColor: 'ring-outline-variant' },
      { name: 'Aged Brass', hex: '#b5a642' }
    ],
    dimensionsMaterials: [
      "Dimensions: Height 180cm, Base diameter 30cm.",
      "Materials: Solid travertine base, spun aluminum shade, steel stem.",
      "Tech: Custom LED array, 2700K warm white, 50,000 hour lifespan."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "7",
    category: 'Objects',
    title: 'BRASS TRAY',
    price: '$120.00',
    tag: null,
    image: "https://images.unsplash.com/photo-1611076045377-5080f5d4bf59?w=800&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611076045377-5080f5d4bf59?w=800&q=80&fit=crop"
    ],
    alt: "Minimalist brass tray",
    inStock: true,
    description: " milled from a single billet of pure brass. Left untreated, the tray will develop a unique, heavy patina over time, recording the history of its use. Ideal as a desk organizer or an entryway catch-all.",
    sizes: ['Standard'],
    finishes: [
      { name: 'Raw Brass', hex: '#d4af37' }
    ],
    dimensionsMaterials: [
      "Dimensions: W 30cm x D 15cm x H 1.5cm.",
      "Materials: 100% untreated solid brass.",
      "Care: Allow to patina naturally, or use standard brass polish to maintain a high shine."
    ],
    shippingReturns: defaultShipping
  },
  {
    id: "8",
    category: 'Art & Prints',
    title: 'NEUTRAL ABSTRACT 02',
    price: '$3,400.00',
    tag: null,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&fit=crop"
    ],
    alt: "Abstract canvas art",
    inStock: true,
    description: "An exploration of negative space and textural silence. Hand-painted using custom-mixed pigments on raw Belgian linen. This piece is part of a limited series exploring the boundaries between architectural drawings and expressionism.",
    sizes: ['100x120cm', '150x200cm'],
    finishes: [
      { name: 'Oak Frame', hex: '#c19a6b' },
      { name: 'Unframed', hex: '#ffffff', outlineColor: 'ring-outline-variant' }
    ],
    dimensionsMaterials: [
      "Dimensions: Canvas 100x120cm. Depth 4cm.",
      "Materials: Acrylic and plaster on Belgian linen. Gallery wrap.",
      "Notes: Includes certificate of authenticity. Hand-signed on verso."
    ],
    shippingReturns: defaultShipping
  }
];
