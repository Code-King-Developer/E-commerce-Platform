export interface User {
  _id: string;
  name: string;
  email: string;
  biography?: string;
  googleId?: string;
  appleId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfilePayload {
  name?: string;
  biography?: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
  token?: string; // If using JWT
}

export interface SendOtpPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}
