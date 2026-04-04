import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';
import { Link } from '@tanstack/react-router';
export function UserOrdersComponent() {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex max-w-screen-2xl w-full md:-mt-10 lg:-mx-12">
      <SideNavBarComponent />

      {/* Main Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 px-8 md:px-16 py-12 w-full max-w-7xl mx-auto"
      >
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="font-manrope text-5xl font-extrabold tracking-tighter text-primary mb-4 uppercase">Order History</h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              A definitive record of your curated selections and acquisitions. Each piece reflects a moment in your evolving aesthetic journey.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 relative z-50" ref={filterRef}>
            <div
              className="bg-surface-container px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-surface-container-high transition-colors"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <span className="material-symbols-outlined text-lg">filter_list</span>
              <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
              <span className={`material-symbols-outlined text-lg transition-transform ${filterOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </div>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 w-56 bg-surface border bg-white border-outline-variant/20 shadow-xl z-[100] py-2 origin-top-right"
                >
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Status</div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                    <span className="text-sm font-manrope font-medium">In Transit</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    <span className="text-sm font-manrope font-medium">Delivered</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">cancel</span>
                    <span className="text-sm font-manrope font-medium">Cancelled</span>
                  </div>
                  <div className="h-px bg-outline-variant/20 my-2"></div>
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Timeframe</div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span className="text-sm font-manrope font-medium">Last 30 Days</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">history</span>
                    <span className="text-sm font-manrope font-medium">Past 6 Months</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-container cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">inventory_2</span>
                    <span className="text-sm font-manrope font-medium">Archive (2023)</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        <div className="space-y-12">
          {/* Order Card 01 */}
          <article className="bg-surface-container-lowest border border-outline-variant/10 group transition-all duration-500 hover:shadow-sm">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-72 h-72 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                <img alt="Architectural chair" className="w-full h-full object-cover" src="/images/profile/order_chair.jpg" />
              </div>
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5">NEW ARCHIVE</span>
                      <span className="text-xs text-on-surface-variant font-medium">Order #DC-98421</span>
                    </div>
                    <h3 className="font-manrope text-2xl font-bold tracking-tight mb-2 text-primary">The Bauhaus Collection: Mono-Chair</h3>
                    <p className="text-on-surface-variant text-sm max-w-md">Item quantity: 1 • Curated from 'Minimalist Living' series • Priority Shipping</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Placed On</p>
                    <p className="font-manrope font-bold text-lg tracking-tight text-primary">OCT 24, 2023</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-outline-variant/20 pt-8 gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Processing</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">Estimated arrival: Nov 02</div>
                  </div>
                  <div className="flex items-center gap-8 self-stretch md:self-auto justify-between md:justify-end">
                    <span className="font-manrope text-2xl font-light tracking-tighter text-primary">$1,240.00</span>
                    <Link to="/track" className="bg-primary text-on-primary px-6 md:px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors whitespace-nowrap">
                      Track Shipment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Order Card 02 */}
          <article className="bg-surface-container-low border border-outline-variant/10 group transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-72 h-72 overflow-hidden relative grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 shrink-0">
                <img alt="Minimalist watch" className="w-full h-full object-cover" src="/images/profile/order_watch.jpg" />
              </div>
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-on-surface-variant font-medium">Order #DC-97305</span>
                    </div>
                    <h3 className="font-manrope text-2xl font-bold tracking-tight mb-2 text-primary">Vanguard Horology: Series 01</h3>
                    <p className="text-on-surface-variant text-sm max-w-md">Item quantity: 1 • Limited Edition Archive • Signature Authenticated</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Placed On</p>
                    <p className="font-manrope font-bold text-lg tracking-tight text-primary">SEP 15, 2023</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-outline-variant/20 pt-8 gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Delivered</span>
                    </div>
                    <div className="text-xs text-on-surface-variant">Arrived: Sep 19, 2023</div>
                  </div>
                  <div className="flex items-center gap-8 self-stretch md:self-auto justify-between md:justify-end">
                    <span className="font-manrope text-2xl font-light tracking-tighter text-primary">$850.00</span>
                    <button className="bg-surface-container-highest text-primary px-6 md:px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors whitespace-nowrap">
                      Review Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Order Card 03 (Asymmetric Bento Style Element) */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <article className="xl:col-span-2 bg-surface-container-lowest border border-outline-variant/10 p-8 md:p-10 flex flex-col justify-between group">
              <div className="flex flex-col sm:flex-row justify-between mb-12 gap-6">
                <div>
                  <span className="text-xs text-on-surface-variant font-medium">Order #DC-96211</span>
                  <h3 className="font-manrope text-3xl font-bold tracking-tight mt-2 text-primary">Abstract Form: No. 4 Studio Print</h3>
                  <p className="text-on-surface-variant mt-2 text-sm">A signed Giclée print on archival paper.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs text-emerald-600 font-bold uppercase tracking-widest">Delivered</span>
                  <p className="font-manrope font-bold text-xl mt-1 text-primary">AUG 30</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant/20 pt-8">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                    <img alt="Art" className="w-full h-full object-cover" src="/images/profile/order_art.jpg" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black text-[10px] text-white font-bold">
                    +2
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-manrope text-2xl font-light tracking-tighter text-primary">$420.00</span>
                  <span className="material-symbols-outlined text-neutral-300 group-hover:text-black transition-all cursor-pointer">arrow_forward_ios</span>
                </div>
              </div>
            </article>
            <article className="bg-primary text-on-primary p-10 flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-4xl mb-4 text-white">help_outline</span>
              <h4 className="font-manrope text-xl font-bold mb-4 text-white">Need Assistance?</h4>
              <p className="text-xs text-on-primary-fixed-variant leading-relaxed mb-8 uppercase tracking-widest opacity-80">Our curators are available for support regarding your order logistics.</p>
              <button className="border border-on-primary-fixed-variant/30 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Open Concierge
              </button>
            </article>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
