import axios from 'axios';
import type { SendOtpPayload, VerifyOtpPayload, AuthResponse, User, UpdateProfilePayload } from '../types/auth';

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

export default api;

