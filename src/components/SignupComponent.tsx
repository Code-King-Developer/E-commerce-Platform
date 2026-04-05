import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from '@tanstack/react-router';
import { OTPInput } from './OTPInput';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'sonner';

export function SignupComponent() {
  const navigate = useNavigate();
  const { sendOtp, verifyOtp, refetchUser, isSendingOtp } = useAuthContext();
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendOtp({ email: formData.email });
      setStep('otp');
    } catch (err) {
      console.error('Failed to send OTP:', err);
      toast.error('Failed to send verification code. Please check your email and try again.');
    }
  };

  const handleVerifyOtp = async (code: string) => {
    try {
      // 1. Verify the OTP and Register
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      
      await verifyOtp({ 
        email: formData.email, 
        code, 
        name: formData.name,
        password: formData.password 
      });
      
      // 2. Refetch user data and Redirect
      await refetchUser();
      toast.success('Authentication successful');
      navigate({ to: '/' });
    } catch (err) {
      console.error('Registration failed:', err);
      toast.error('Verification failed. Invalid or expired code.');
    }
  };

  return (
    <div className="w-full flex-grow flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 'details' ? (
          <motion.div 
            key="details"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center mt-[-3rem]"
          >
            <div className="hidden md:block md:col-span-5 lg:col-span-6">
              <div className="space-y-12">
                <h1 className="text-[3.5rem] lg:text-[5rem] leading-none font-extrabold tracking-tighter text-primary font-headline">
                  JOIN THE <br/> COLLECTIVE.
                </h1>
                <div className="bg-surface-container-low p-10 space-y-6">
                  <p className="text-on-surface-variant font-body leading-relaxed text-lg max-w-md">
                    Access a filtered perspective on modern design, editorial precision, and aesthetic curation. Your journey into the extraordinary begins here.
                  </p>
                  <div className="h-px w-20 bg-primary"></div>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">Issue 01 // Registration</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
              <div className="bg-white p-8 md:p-12 shadow-xl shadow-black/5 border border-black/5 lg:border-transparent lg:shadow-none lg:bg-transparent">
                <div className="mb-10">
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2 font-headline text-primary">Create Account</h2>
                  <p className="text-on-surface-variant font-body text-sm">Step into the gallery of curated excellence.</p>
                </div>
                
                <form 
                  className="space-y-6"
                  onSubmit={handleSendOtp}
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block font-label">Full Name</label>
                      <div className="ghost-border transition-all duration-300">
                        <input 
                          className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 placeholder:text-outline text-primary transition-all font-body text-sm outline-none" 
                          placeholder="ALEXANDER VOGUE" 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block font-label">Email Address</label>
                      <div className="ghost-border transition-all duration-300">
                        <input 
                          className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 placeholder:text-outline text-primary transition-all font-body text-sm outline-none" 
                          placeholder="CURATOR@DIGITAL.COM" 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block font-label">Password</label>
                        <div className="ghost-border transition-all duration-300">
                          <input 
                            className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 placeholder:text-outline text-primary transition-all font-body text-sm outline-none" 
                            placeholder="••••••••" 
                            type="password" 
                            required 
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block font-label">Confirm Password</label>
                        <div className="ghost-border transition-all duration-300">
                          <input 
                            className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 placeholder:text-outline text-primary transition-all font-body text-sm outline-none" 
                            placeholder="••••••••" 
                            type="password" 
                            required 
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 py-2 mt-4">
                    <input className="h-4 w-4 rounded-none border-primary text-primary focus:ring-0 outline-none accent-secondary" id="terms" type="checkbox" required />
                    <label className="text-sm text-on-surface-variant font-body" htmlFor="terms">
                      I agree to the <a className="text-secondary hover:underline underline-offset-4" href="#">Terms & Conditions</a>
                    </label>
                  </div>
                  
                  <button 
                    className="w-full bg-primary text-on-primary py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all active:scale-[0.98] mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3" 
                    type="submit"
                    disabled={isSendingOtp}
                  >
                    {isSendingOtp ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : 'Send OTP Verification'}
                  </button>
                </form>

                <div className="mt-12">
                  <div className="relative flex items-center justify-center mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-outline-variant/20"></div>
                    </div>
                    <span className="relative bg-white lg:bg-background px-4 text-[10px] uppercase tracking-widest text-outline font-label">Or join with</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/40 hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                      <span className="material-symbols-outlined text-sm">globe</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest font-label text-primary">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/40 hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                      <span className="material-symbols-outlined text-sm">ios</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest font-label text-primary">Apple</span>
                    </button>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-sm font-body text-on-surface-variant">
                    Already have an account? 
                    <Link className="text-secondary font-bold hover:underline underline-offset-4 ml-2" to="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            key="otp"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full max-w-md space-y-10 bg-white p-8 md:p-12 shadow-xl border border-black/5"
            onSubmit={(e) => { e.preventDefault(); toast.success('Account Verified & Created successfully!'); }}
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-headline font-bold mb-3 text-primary tracking-tight">Verify Contact</h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label leading-relaxed">We've sent a 6-digit verification code to your email and phone.</p>
            </div>
            
            <div className="flex justify-center mt-8 mb-8">
              <OTPInput onComplete={handleVerifyOtp} />
            </div>

            <div className="text-center mt-6">
              <button type="button" onClick={() => setStep('details')} className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold hover:underline">
                &larr; Back to details
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
