import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Order from './models/Order.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

const productsData = [
  {
    category: 'Objects',
    title: 'KOBE SCULPTURAL VASE',
    price: '$420.00',
    tag: 'New Arrival',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYbU7QO7ZzYDPoW76GOPED7yJtXUhe3G_BloUUilaKfwwrs8CACCBSPP0OXFwQY_XIN8gEP0wc67A-mXPl3BiZPMmSSrUz6ZG94FBoMWpB8Cmq3Q2CSvmG-MfpUfi05337KZuNrQyvJ2ulaH9JRr3i5ByA8EuuPQYtDh0Utm0UDECqW-E3hzuOAuRB747uO6ZXoH5owAAEA2PPw5Ah3Xfu6Nx_f7D8ayiBuiISuBq25TeYCv4g3qBhWdw1za4sVo9DAKjp1jwbW1U3",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYbU7QO7ZzYDPoW76GOPED7yJtXUhe3G_BloUUilaKfwwrs8CACCBSPP0OXFwQY_XIN8gEP0wc67A-mXPl3BiZPMmSSrUz6ZG94FBoMWpB8Cmq3Q2CSvmG-MfpUfi05337KZuNrQyvJ2ulaH9JRr3i5ByA8EuuPQYtDh0Utm0UDECqW-E3hzuOAuRB747uO6ZXoH5owAAEA2PPw5Ah3Xfu6Nx_f7D8ayiBuiISuBq25TeYCv4g3qBhWdw1za4sVo9DAKjp1jwbW1U3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKI2kE0rTbEHgffwLR9k7YZlTzZwcRzK2c4hYdu4LKXFftc6bywmHn1TAwBy_8AFA5LXCX05_7WCN7kbD24zhy_s2BuZ-yffwvwjnENWv8Iblgf3fIxTv8EWK7ZMXBnCZcY_d1hjT8x5-ZP_wWki3aN-eDp4xr1VibDsTv6CevkUjh3tLWvDnD761KTadKjnMEwOTsLGkakJxuysvgwDEGBf3fTySwJ_ns1mV6FzETMZbBBx931jZmSa4Fu9pc06aMmMNIb03A3Zro"
    ],
    inStock: true,
    inventory: 45,
    featured: true,
    alt: "Sculptural ceramic vessel",
    description: "A masterclass in restraint. The Kobe Sculptural Vase blends Japanese wabi-sabi philosophy with stark modernist geometries. Cast by hand in small batches, the textured ceramic body creates dynamic shadows that change throughout the day.",
    sizes: ['Small', 'Large'],
    finishes: [
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Charcoal', hex: '#3c3b3b' },
      { name: 'Putty', hex: '#f0f1f1', outlineColor: 'ring-outline-variant' }
    ],
    dimensionsMaterials: [
      "Dimensions: Small (H 30cm x Dia 15cm) / Large (H 45cm x Dia 22cm)",
      "Materials: High-fire stoneware, unglazed matte exterior, glazed waterproof interior.",
      "Care: Wipe clean with a damp cloth. Do not use abrasive cleaners."
    ],
    shippingReturns: [
      "Dispatch: Ships within 2-3 business days.",
      "Delivery: Complimentary white-glove service included for all domestic orders.",
      "Returns: 14-day return policy in original packaging."
    ]
  },
  {
    category: 'Electronics',
    title: 'MONOLITH CHRONO',
    price: '$1,250.00',
    tag: 'Limited',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqeWnDSxbSr1PCqbAL2rFuvZ85yMV9C5WPDAn6wp_jd7TeKRROmKupLHXHDR64Hr6zMlXyLtmZDhv7hMCA8gDDFLNiNcorbxUA6u1u2001_FS01ZABN1bnuY0QUTFlC4jCEd9o12afpq2OYj14ZRyXHnt35D6aLe5VdfOBUfVeIwTQ0hIjqPJ24DQT1fH2we82y4t_qwt35GLL0EVplr84SavzqXfRkD8kz1_u3STrwX0SmACVFUuFLo6jg9FNW7QHSmDcfZFtda",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9YqeWnDSxbSr1PCqbAL2rFuvZ85yMV9C5WPDAn6wp_jd7TeKRROmKupLHXHDR64Hr6zMlXyLtmZDhv7hMCA8gDDFLNiNcorbxUA6u1u2001_FS01ZABN1bnuY0QUTFlC4jCEd9o12afpq2OYj14ZRyXHnt35D6aLe5VdfOBUfVeIwTQ0hIjqPJ24DQT1fH2we82y4t_qwt35GLL0EVplr84SavzqXfRkD8kz1_u3STrwX0SmACVFUuFLo6jg9FNW7QHSmDcfZFtda"
    ],
    inStock: true,
    inventory: 12,
    featured: true,
    alt: "High-end minimal white watch",
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
    shippingReturns: [
      "Dispatch: Ships within 5 business days.",
      "Delivery: Global priority white-glove service.",
      "Returns: Final collection. Exchange only."
    ]
  },
  {
    category: 'Objects',
    title: 'ATELIER CHAIR',
    price: '$890.00',
    tag: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvKHAILcYj1I1meFhshKaNhV8OrwvaSDnpAQKDB4VzldhIHiV-cc8Cr5_Xl83qFeUAwnZiTs5Ucbx8_3F0Z3-rEI2xFtS8saGyr8LmarLjcFvdCB_Ao8LMwBED5mKDM7t990FNZ97_51DX3d2iM9voLpdT73NXnMzSuOTTKpJi_GFD1DtfSCnhv_tvMMEb5QZtNf3nECnHp_3IKPr4W8fpR-QM42jbFk-ETs5TJTlrdNiAewB9G1SLK19KyY2NgeoFlE_toFQVQLIk",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvKHAILcYj1I1meFhshKaNhV8OrwvaSDnpAQKDB4VzldhIHiV-cc8Cr5_Xl83qFeUAwnZiTs5Ucbx8_3F0Z3-rEI2xFtS8saGyr8LmarLjcFvdCB_Ao8LMwBED5mKDM7t990FNZ97_51DX3d2iM9voLpdT73NXnMzSuOTTKpJi_GFD1DtfSCnhv_tvMMEb5QZtNf3nECnHp_3IKPr4W8fpR-QM42jbFk-ETs5TJTlrdNiAewB9G1SLK19KyY2NgeoFlE_toFQVQLIk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkEKFKGMND8-L-FzR6buiLUaJcCkyLN7sB8dO66ASVHIYMNaE8TAEToVHLh_x_j3nrZmDuacavty1OvAtn_GBlHNzodfhj7QARcQOqs8kOOnbksw2_EOqnni38W8lIq7_8j7KJsAmf-ihGxb53PMqEb4QvjuUOjXDl89C_H2vBaRU1N2jeyumPmPKGVYWM-lmX_uae1g5CEbPlGGzOec9QsutgUjl3MQPEhoQosDZRvnW_6o_3l_xZV2kjrlG2QUtikvxSL-v7yilO"
    ],
    inStock: true,
    inventory: 8,
    featured: false,
    alt: "Modern black sculptural chair",
    description: "A study in geometric tension and organic warmth. The Atelier Chair balances a brutalist matte steel frame with hand-finished European oak. Designed to be the centerpiece of any contemporary interior, it offers an uncompromising silhouette without sacrificing ergonomic comfort.",
    sizes: ['Standard', 'Grand'],
    finishes: [
      { name: 'European Oak', hex: '#c19a6b' },
      { name: 'Dark Ash', hex: '#2c2c2c' }
    ],
    dimensionsMaterials: [
      "Dimensions: H 68cm x W 82cm x D 76cm",
      "Seat Height: 42cm",
      "Materials: Solid European Oak frame, high-density foam, commercial-grade woven textile."
    ],
    shippingReturns: [
      "Dispatch: 2-3 weeks.",
      "Delivery: White-glove assembly included.",
      "Returns: 14-day policy."
    ]
  },
  {
    category: 'Electronics',
    title: 'SONIC ARCHIVE 01',
    price: '$550.00',
    tag: 'Best Seller',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNAYzPI4sFmo97WCgzElhWKd5YKgsT76Oc2UFLOAjS78iAJSaVdNnrjLtfJ9I-f1WP83ztothNA7RWmBLnklTV_xoQoDoPNmtDjE9yiWKiJV9farzoRSUncWl_CJcGWvXzN5Be2ighzSOoXz5IYof_QfOen3Er-PyPte-C28Vai50YUQ1Igt1T5RC7T70RSw5N7kWhiB3SbSA1Cskpa1iaaKDv289NknRiwab2ArkfcWODcQzoWSzM_2xtfkE0gBTzRadLS6p9yjnU",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNAYzPI4sFmo97WCgzElhWKd5YKgsT76Oc2UFLOAjS78iAJSaVdNnrjLtfJ9I-f1WP83ztothNA7RWmBLnklTV_xoQoDoPNmtDjE9yiWKiJV9farzoRSUncWl_CJcGWvXzN5Be2ighzSOoXz5IYof_QfOen3Er-PyPte-C28Vai50YUQ1Igt1T5RC7T70RSw5N7kWhiB3SbSA1Cskpa1iaaKDv289NknRiwab2ArkfcWODcQzoWSzM_2xtfkE0gBTzRadLS6p9yjnU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZjyGZyUr1o2yk_Nvc7wFBslZqUDOB1c49Dv9kyj2JUaUVoPaPHks_CxIitRm7uSZkee-VGlpWXvz8AcuZeKxTtoqPywr9ba0t5Z143b5AhPSlzKEz7vISSvha_a-23vm5M1RlWQYMIl9tfPeiWE6siO0iT7_Joh8_idZe3YC1kh57nr4qp0ML9_AsY9RXeDaMdMuH0vsN8YVq20BBldgbhwkHG0TuLV84wiH1_y4SCDkEv4JTUnxzpPSJsp6v0kQcXhjM-6CIcrU"
    ],
    inStock: true,
    inventory: 30,
    featured: true,
    alt: "Professional studio headphones",
    description: "Reference-grade studio audio encased in aeronautical aluminum. Engineered for those who demand uncolored, hyper-accurate sound reproduction. Memory foam pads ensure comfort through hours of deep listening sessions.",
    sizes: ['Universal'],
    finishes: [
      { name: 'Anodized Silver', hex: '#e2e2e2', outlineColor: 'ring-outline-variant' },
      { name: 'Stealth Black', hex: '#1a1c1c' }
    ],
    dimensionsMaterials: [
      "Weight: 310 grams.",
      "Materials: Aeronautical grade aluminum, Alcantara headband, proprietary foam core.",
      "Tech: 50mm planar magnetic drivers."
    ],
    shippingReturns: [
      "Dispatch: Ships within 24 hours.",
      "Delivery: Standard and Express options.",
      "Returns: 30-day trial period."
    ]
  },
  {
    category: 'Fashion',
    title: 'SILK TRENCH',
    price: '$1,850.00',
    tag: 'Limited Edition',
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop",
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&fit=crop"],
    inStock: true,
    inventory: 4,
    featured: false,
    alt: "Minimalist fashion coat",
    description: "Fluidity meets tailoring. This trench coat dissolves the rigid history of military rainwear into a diaphanous, draping silhouette. Woven entirely from Japanese heavy silk crêpe de chine.",
    sizes: ['S', 'M', 'L'],
    finishes: [
      { name: 'Bone', hex: '#f6f5f3', outlineColor: 'ring-outline-variant' },
      { name: 'Obsidian', hex: '#111111' }
    ],
    dimensionsMaterials: ["100% Japanese Heavy Silk Crêpe de Chine", "Horn buttons", "Made in France"],
    shippingReturns: ["Dry clean only", "Specialist care required"]
  },
  {
    category: 'Home & Furniture',
    title: 'LUMINA FLOOR LAMP',
    price: '$920.00',
    tag: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&fit=crop",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&fit=crop"],
    inStock: true,
    inventory: 15,
    featured: false,
    alt: "Modern floor lamp",
    description: "Light treated as a sculptural mass. The Lumina commands any room not by dominating its space, but by controlling its atmosphere.",
    sizes: ['Tall (180cm)'],
    finishes: [{ name: 'Brushed Steel', hex: '#d1d5db' }],
    dimensionsMaterials: ["Solid travertine base", "Custom LED array", "2700K Warm White"],
    shippingReturns: ["White-glove delivery", "3-year warranty"]
  }
];

const cleanPrice = (priceStr: string): number => {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
};

const seed = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected.');

    // Clear existing
    console.log('Clearing existing products and orders...');
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log('Collections cleared.');

    // Seed Products
    console.log('Seeding products...');
    const mappedProducts = productsData.map(p => ({
      ...p,
      price: cleanPrice(p.price)
    }));
    await Product.insertMany(mappedProducts);
    console.log(`${mappedProducts.length} products seeded.`);

    console.log('Seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seed();
