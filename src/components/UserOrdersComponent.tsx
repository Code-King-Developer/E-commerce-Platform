import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';
import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { orderApi } from '../lib/api';

export function UserOrdersComponent() {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const { data: orders, isLoading, isError } = useQuery({
    queryKey: ['orders', 'my'],
    queryFn: orderApi.getMyOrders,
  });

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

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(new Date(dateString)).toUpperCase();
  };

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
                  className="absolute top-full right-0 mt-2 w-56 bg-surface border bg-white border-outline-variant/20 shadow-xl z-50 py-2 origin-top-right text-black"
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
          {isLoading ? (
            <div className="flex flex-col gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="h-72 w-full bg-surface-container-low animate-pulse border border-outline-variant/10"></div>
              ))}
            </div>
          ) : isError ? (
            <div className="p-20 text-center border border-dashed border-outline-variant/30">
              <h3 className="font-manrope text-2xl font-bold text-primary mb-4">FAILED TO RETRIEVE ARCHIVE</h3>
              <p className="text-on-surface-variant font-body">Our curation server is currently experiencing a connection difficulty.</p>
            </div>
          ) : !orders || orders.length === 0 ? (
            <div className="p-20 text-center bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-5xl text-outline mb-6">inventory_2</span>
              <h3 className="font-manrope text-3xl font-bold tracking-tight mb-4 text-primary uppercase">No Selections Yet</h3>
              <p className="text-on-surface-variant font-body text-lg mb-8 max-w-md mx-auto">
                Your archive is currently empty. Begin your journey by exploring our curated collections.
              </p>
              <Link to="/" className="inline-block bg-primary text-on-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Explore The Collection
              </Link>
            </div>
          ) : (
            <>
              {orders.map((order, idx) => (
                <article key={order._id} className={`${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'} border border-outline-variant/10 group transition-all duration-500 hover:shadow-sm`}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-72 h-72 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0 bg-neutral-100">
                      <img 
                        alt={order.orderItems[0]?.name || 'Product'} 
                        className="w-full h-full object-cover" 
                        src={order.orderItems[0]?.image || '/images/profile/order_placeholder.jpg'} 
                      />
                    </div>
                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            {order.status === 'Processing' && <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5">NEW ARCHIVE</span>}
                            <span className="text-xs text-on-surface-variant font-medium">Order #{order._id.slice(-7).toUpperCase()}</span>
                          </div>
                          <h3 className="font-manrope text-2xl font-bold tracking-tight mb-2 text-primary">
                            {order.orderItems.length > 0 ? order.orderItems[0].name : 'Selection Content'}
                            {order.orderItems.length > 1 && ` + ${order.orderItems.length - 1} more`}
                          </h3>
                          <p className="text-on-surface-variant text-sm max-w-md">
                            Item quantity: {order.orderItems.reduce((acc, item) => acc + item.qty, 0)} • {order.paymentMethod} • Curated Acquisition
                          </p>
                        </div>
                        <div className="text-left md:text-right">
                          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Placed On</p>
                          <p className="font-manrope font-bold text-lg tracking-tight text-primary">
                            {formatDate(order.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-outline-variant/20 pt-8 gap-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                          <div className={`flex items-center gap-2 ${order.status === 'Delivered' ? 'text-emerald-600' : 'text-secondary'}`}>
                            <span className="material-symbols-outlined text-lg">
                              {order.status === 'Delivered' ? 'check_circle' : order.status === 'Cancelled' ? 'cancel' : 'local_shipping'}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">{order.status}</span>
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            {order.isPaid ? 'Payment Verified' : 'Awaiting Payment Confirmation'}
                          </div>
                        </div>
                        <div className="flex items-center gap-8 self-stretch md:self-auto justify-between md:justify-end">
                          <span className="font-manrope text-2xl font-light tracking-tighter text-primary">${order.totalPrice.toLocaleString()}</span>
                          <Link to="/track" className="bg-primary text-on-primary px-6 md:px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors whitespace-nowrap">
                            Order Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Assistance Card */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">
                <article className="xl:col-span-2 bg-surface-container-lowest border border-outline-variant/10 p-10 flex flex-col justify-center items-center text-center group">
                  <h3 className="font-manrope text-3xl font-bold tracking-tight mb-4 text-primary uppercase">Curated Support</h3>
                  <p className="text-on-surface-variant font-body max-w-lg mb-8">
                    Your acquisitions are handled with meticulous care. For logistics inquiries or aesthetic consulting regarding your collection, our curators are at your disposal.
                  </p>
                  <button className="bg-primary text-on-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                    Inquire via Concierge
                  </button>
                </article>
                <article className="bg-primary text-on-primary p-10 flex flex-col justify-center items-center text-center">
                  <span className="material-symbols-outlined text-4xl mb-4 text-white">help_outline</span>
                  <h4 className="font-manrope text-xl font-bold mb-4 text-white uppercase">Archive Inquiry</h4>
                  <p className="text-[10px] text-on-primary-fixed-variant leading-relaxed mb-8 uppercase tracking-[0.2em] opacity-80">Reference your order ID for optimized priority assistance.</p>
                  <button className="border border-on-primary-fixed-variant/30 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Open Channel
                  </button>
                </article>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
