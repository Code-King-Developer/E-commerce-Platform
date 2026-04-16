import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAdminAuthContext } from '../hooks/useAdminAuthContext';
import { toast } from 'sonner';

export function AdminLoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginAdmin, isLoggingIn } = useAdminAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await loginAdmin({ email, password });
      toast.success('Terminal access granted.');
      navigate({ to: '/admin/overview' });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Access denied. Invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-black font-body flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white border border-slate-200 p-10 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-sm">
             <span className="material-symbols-outlined text-blue-600">terminal</span>
          </div>
          <h1 className="font-manrope font-black text-3xl tracking-tighter text-black">CURATOR</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2">Authorized Personnel Only</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
             <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="admin@curator.com"
               className="w-full bg-slate-50 border border-slate-200 text-black rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400 shadow-inner"
               required
               disabled={isLoggingIn}
             />
          </div>

          <div className="space-y-1">
             <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Terminal Passkey</label>
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="••••••••"
               className="w-full bg-slate-50 border border-slate-200 text-black rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400 tracking-widest shadow-inner"
               required
               disabled={isLoggingIn}
             />
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/10 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 rounded-lg"
          >
            {isLoggingIn ? 'Authenticating...' : 'Initialize Terminal'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
           <p className="text-[10px] text-slate-400 font-mono">SECURE CONNECTION V1.0.4</p>
        </div>
      </div>
    </div>
  );
}
