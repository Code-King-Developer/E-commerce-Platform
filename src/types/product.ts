export interface ProductFinish {
  name: string;
  hex: string;
  outlineColor?: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  inventory: number;
  featured: boolean;
  tag?: string;
  sizes: string[];
  finishes: ProductFinish[];
  dimensionsMaterials: string[];
  shippingReturns: string[];
  createdAt: string;
  updatedAt: string;
}
