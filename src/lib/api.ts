import axios from 'axios';
import type { SendOtpPayload, VerifyOtpPayload, AuthResponse, User, UpdateProfilePayload, AdminUser, AdminLoginPayload } from '../types/auth';
import type { Order, CreateOrderPayload } from '../types/order';
import type { Product, CreateProductPayload } from '../types/product';
import type { Cart, AddToCartPayload, UpdateCartItemPayload } from '../types/cart';
import type { Wishlist, AddToWishlistPayload } from '../types/wishlist';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true, // Required for HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  sendOtp: async (payload: SendOtpPayload): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/send-otp', payload);
    return data;
  },

  verifyOtp: async (payload: VerifyOtpPayload): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/verify-otp', payload);
    return data;
  },

  getProfile: async (): Promise<User> => {
    const { data } = await api.get<User>('/auth/profile');
    return data;
  },

  updateUser: async (id: string, payload: UpdateProfilePayload): Promise<User> => {
    const { data } = await api.put<User>(`/users/${id}`, payload);
    return data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },
};

export const adminApi = {
  loginAdmin: async (payload: AdminLoginPayload): Promise<AdminUser> => {
    const { data } = await api.post<AdminUser>('/admin/login', payload);
    return data;
  },

  getAdminProfile: async (): Promise<AdminUser> => {
    const { data } = await api.get<AdminUser>('/admin/me');
    return data;
  },

  logoutAdmin: async (): Promise<void> => {
    await api.post('/admin/logout');
  },

  getAdminStats: async (): Promise<{ totalRevenue: number, averageOrderValue: number, conversionRate: number, totalOrders: number, pendingFulfillment: number }> => {
    const { data } = await api.get('/admin/stats');
    return data;
  },
};

export const orderApi = {
  createOrder: async (payload: CreateOrderPayload): Promise<Order> => {
    const { data } = await api.post<Order>('/orders', payload);
    return data;
  },

  getMyOrders: async (): Promise<Order[]> => {
    const { data } = await api.get<Order[]>('/orders/myorders');
    return data;
  },

  getOrderDetails: async (id: string): Promise<Order> => {
    const { data } = await api.get<Order>(`/orders/${id}`);
    return data;
  },

  getAllOrders: async (): Promise<Order[]> => {
    const { data } = await api.get<Order[]>('/orders');
    return data;
  },

  deliverOrder: async (id: string): Promise<Order> => {
    const { data } = await api.put<Order>(`/orders/${id}/deliver`);
    return data;
  },
};

export const productApi = {
  getProducts: async (category?: string): Promise<Product[]> => {
    const url = category && category !== 'All Objects' ? `/products?category=${category}` : '/products';
    const { data } = await api.get<Product[]>(url);
    return data;
  },

  getProductById: async (id: string): Promise<Product> => {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },

  createProduct: async (payload: CreateProductPayload): Promise<Product> => {
    const { data } = await api.post<Product>('/products', payload);
    return data;
  },
};

export const cartApi = {
  getCart: async (): Promise<Cart> => {
    const { data } = await api.get<Cart>('/cart');
    return data;
  },

  addToCart: async (payload: AddToCartPayload): Promise<Cart> => {
    const { data } = await api.post<Cart>('/cart/add', payload);
    return data;
  },

  updateCartItem: async (productId: string, payload: UpdateCartItemPayload): Promise<Cart> => {
    const { data } = await api.put<Cart>(`/cart/update/${productId}`, payload);
    return data;
  },

  removeFromCart: async (productId: string, size?: string, finish?: string): Promise<Cart> => {
    let url = `/cart/remove/${productId}`;
    const params = new URLSearchParams();
    if (size) params.append('selectedSize', size);
    if (finish) params.append('selectedFinish', finish);
    if (params.toString()) url += `?${params.toString()}`;
    
    const { data } = await api.delete<Cart>(url);
    return data;
  },

  clearCart: async (): Promise<void> => {
    await api.delete('/cart/clear');
  },
};

export const wishlistApi = {
  getWishlist: async (): Promise<Wishlist> => {
    const { data } = await api.get<Wishlist>('/wishlist');
    return data;
  },

  addToWishlist: async (payload: AddToWishlistPayload): Promise<Wishlist> => {
    const { data } = await api.post<Wishlist>('/wishlist/add', payload);
    return data;
  },

  removeFromWishlist: async (productId: string): Promise<Wishlist> => {
    const { data } = await api.delete<Wishlist>(`/wishlist/remove/${productId}`);
    return data;
  },

  clearWishlist: async (): Promise<void> => {
    await api.delete('/wishlist/clear');
  },
};

export default api;

