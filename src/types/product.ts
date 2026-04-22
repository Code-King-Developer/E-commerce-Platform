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
  alt?: string;
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

export type CreateProductPayload = Omit<Product, '_id' | 'createdAt' | 'updatedAt' | 'inventory' | 'featured'> & {
  inventory?: number;
  featured?: boolean;
};
