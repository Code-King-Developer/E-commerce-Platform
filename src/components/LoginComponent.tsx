import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from '@tanstack/react-router';
import { OTPInput } from './OTPInput';
import { useAuthContext } from '../hooks/useAuthContext';

export function LoginComponent() {
  const navigate = useNavigate();
  const { sendOtp, verifyOtp, isSendingOtp } = useAuthContext();
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="w-full max-w-md">
      <div className="mb-12">
        <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary mb-4">
          Welcome back.
        </h1>
        <p className="text-on-surface-variant font-body text-sm tracking-wide">
          ACCESS YOUR CURATED SELECTIONS AND PERSONALIZED EDITORIALS.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step === 'credentials' ? (
          <motion.form 
            key="credentials"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-10"
            onSubmit={async (e) => { 
                e.preventDefault(); 
                try {
                    await sendOtp({ email });
                    setStep('otp'); 
                } catch (err) {
                    console.error('Failed to send OTP', err);
                    alert('Failed to send OTP. Please try again.');
                }
            }}
          >
            <div className="space-y-6">
              <div className="flex gap-4 mb-4">
                <button type="button" onClick={() => setMethod('email')} className={`text-[10px] font-label font-bold uppercase tracking-widest transition-opacity ${method === 'email' ? 'text-primary' : 'text-outline hover:opacity-70'}`}>Use Email</button>
                <button type="button" onClick={() => setMethod('phone')} className={`text-[10px] font-label font-bold uppercase tracking-widest transition-opacity ${method === 'phone' ? 'text-primary' : 'text-outline hover:opacity-70'}`}>Use Phone</button>
              </div>

              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">{method === 'email' ? 'Email Address' : 'Phone Number'}</label>
                <div className="ghost-border transition-all duration-300">
                  <input 
                    type={method === 'email' ? 'email' : 'tel'} 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-none px-0 py-3 text-primary placeholder:text-outline focus:ring-0 focus:outline-none font-body text-sm" 
                    placeholder={method === 'email' ? 'name@domain.com' : '+1 (555) 000-0000'} 
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Password</label>
                  <a className="text-[10px] uppercase tracking-widest text-secondary font-bold hover:opacity-70 transition-opacity" href="#">Forgot Password?</a>
                </div>
                <div className="ghost-border transition-all duration-300">
                  <input type="password" required className="w-full bg-transparent border-none px-0 py-3 text-primary placeholder:text-outline focus:ring-0 focus:outline-none font-body text-sm" placeholder="••••••••" />
                </div>
              </div>
            </div>

            <button 
              className="w-full bg-primary text-on-primary font-headline font-bold py-5 tracking-widest text-xs uppercase hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50" 
              type="submit"
              disabled={isSendingOtp}
            >
              {isSendingOtp ? 'Sending...' : 'Sign In'}
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-outline-variant opacity-20"></div>
              <span className="flex-shrink mx-4 text-[10px] font-label text-on-surface-variant uppercase tracking-[0.3em]">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant opacity-20"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                className="flex items-center justify-center gap-3 border border-outline-variant border-opacity-30 py-4 px-6 hover:bg-surface-container-low transition-colors active:scale-[0.98]" 
                type="button"
                onClick={() => window.location.href = 'http://localhost:8000/api/auth/google'}
              >
                <span className="material-symbols-outlined text-sm">globe</span>
                <span className="font-label text-[10px] uppercase tracking-widest font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 border border-outline-variant border-opacity-30 py-4 px-6 hover:bg-surface-container-low transition-colors active:scale-[0.98]" type="button">
                <span className="material-symbols-outlined text-sm">ios</span>
                <span className="font-label text-[10px] uppercase tracking-widest font-bold">Apple</span>
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                New to the platform? 
                <Link to="/signup" className="text-secondary font-bold ml-2 hover:underline">Create an Account</Link>
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.form 
            key="otp"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-10"
            onSubmit={(e) => { e.preventDefault(); alert('Logged in successfully!'); }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-headline font-bold mb-2">Verify {method === 'email' ? 'Email' : 'Phone'}</h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">We've sent a 6-digit code to your {method}.</p>
            </div>
            
            <div className="flex justify-center mt-4 mb-4">
              <OTPInput onComplete={async (code) => {
                try {
                  await verifyOtp({ email, otp: code });
                  navigate({ to: '/' });
                } catch (err) {
                  console.error('Verification failed', err);
                  alert('Verification failed. Invalid OTP.');
                }
              }} />
            </div>

            <div className="text-center mt-6">
              <button type="button" onClick={() => setStep('credentials')} className="text-[10px] uppercase tracking-widest text-secondary font-bold hover:underline">
                &larr; Back to login
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
