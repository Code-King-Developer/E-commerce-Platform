import type { Product } from './product';

export interface CartItem {
  product: Product;
  name: string;
  qty: number;
  image: string;
  price: number;
  selectedSize?: string;
  selectedFinish?: string;
  _id?: string;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface AddToCartPayload {
  productId: string;
  qty: number;
  selectedSize?: string;
  selectedFinish?: string;
}

export interface UpdateCartItemPayload {
  qty: number;
}
