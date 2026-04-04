
import { motion } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';

export function UserProfileComponent() {
  return (
    <div className="flex max-w-screen-2xl w-full md:-mt-10 lg:-mx-12">
      <SideNavBarComponent />

      {/* Main Content Canvas */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 px-8 md:px-16 py-12 w-full max-w-7xl mx-auto"
      >
        {/* User Header */}
        <section className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Membership Status</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-none uppercase mb-6 font-manrope">
              ALEXANDER<br />VOGUE
            </h1>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-widest uppercase rounded-full">PLATINUM COLLECTOR</span>
              <div className="h-px w-12 bg-outline-variant/40"></div>
              <span className="text-on-surface-variant text-sm italic">Curating since October 2022</span>
            </div>
          </div>
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 border border-outline-variant/20 transition-all group-hover:inset-0"></div>
            <img alt="Alexander Vogue Profile" className="w-48 h-48 md:w-64 md:h-64 object-cover grayscale brightness-95" src="/images/profile/profile1.jpg" />
          </div>
        </section>

        {/* Dashboard Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between aspect-square md:aspect-auto h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Total Orders</span>
            <div className="flex items-baseline gap-2">
              <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">24</h2>
              <span className="text-secondary material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Active Wishlist</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">08</h2>
          </div>
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Member Since</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">‘22</h2>
          </div>
        </section>

        {/* Recent Activity & Wishlist Split */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          {/* Recent Orders */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4 mb-8">
              <h3 className="text-xl font-black tracking-tight uppercase font-manrope text-primary">Recent Activity</h3>
              <a className="text-xs font-bold tracking-widest uppercase text-secondary hover:underline transition-all" href="#">View All</a>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-20 h-24 bg-surface-container overflow-hidden shrink-0">
                  <img alt="Order Product" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" src="/images/profile/order1.jpg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold tracking-tight text-primary">SCULPT-01 ARCHIVE RUNNER</h4>
                    <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded-full">SHIPPED</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">Order #DC-92831 • Oct 12, 2023</p>
                  <p className="text-sm font-medium">$420.00</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-20 h-24 bg-surface-container overflow-hidden shrink-0">
                  <img alt="Order Product" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" src="/images/profile/order2.jpg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold tracking-tight text-primary">RAW TEXTURE COTTON TEE</h4>
                    <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded-full">PROCESSING</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">Order #DC-92844 • Oct 14, 2023</p>
                  <p className="text-sm font-medium">$125.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Curated Wishlist */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4 mb-8">
              <h3 className="text-xl font-black tracking-tight uppercase font-manrope text-primary">Wishlist</h3>
              <a className="text-xs font-bold tracking-widest uppercase text-secondary hover:underline transition-all" href="#">Curate</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group aspect-3/4 overflow-hidden bg-surface-container cursor-pointer">
                <img alt="Wishlist Item" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" src="/images/profile/wishlist1.jpg" />
                <div className="absolute bottom-0 left-0 p-4 w-full bg-black/40 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] font-bold uppercase text-white truncate">Studio Master H1</p>
                </div>
              </div>
              <div className="relative group aspect-3/4 overflow-hidden bg-surface-container cursor-pointer">
                <img alt="Wishlist Item" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" src="/images/profile/wishlist2.jpg" />
                <div className="absolute bottom-0 left-0 p-4 w-full bg-black/40 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] font-bold uppercase text-white truncate">The Linear Timepiece</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Settings */}
        <section className="mb-8">
          <div className="border-t border-outline-variant/40 pt-12">
            <h3 className="text-xl font-black tracking-tight uppercase mb-8 font-manrope text-primary">Account Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary">lock</span>
                </div>
                <div>
                  <h4 className="font-bold tracking-tight mb-1 uppercase text-sm text-primary">Security Credentials</h4>
                  <p className="text-xs text-on-surface-variant mb-4 max-w-xs">Update your primary password and manage two-factor authentication for the curator vault.</p>
                  <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">Reset Password</button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                </div>
                <div>
                  <h4 className="font-bold tracking-tight mb-1 uppercase text-sm text-primary">Logistic Directives</h4>
                  <p className="text-xs text-on-surface-variant mb-4 max-w-xs">Primary delivery address: 742 Editorial Avenue, Design District, NY 10012.</p>
                  <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">Update Address</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
