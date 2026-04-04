

export function ShoppingCartComponent() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 w-full">
      <div className="mb-16">
        <h1 className="text-5xl font-extrabold font-manrope tracking-tighter uppercase mb-4 text-primary">Your Selection</h1>
        <p className="text-on-surface-variant font-body text-lg">Review your curated items before proceeding to checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-12">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/20">
            <div className="w-full md:w-48 h-64 bg-surface-container-low overflow-hidden shrink-0">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Archive Chrono 01" src="/images/cart/cart_watch.jpg" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-manrope tracking-tight mb-1 text-primary">ARCHIVE CHRONO 01</h3>
                  <p className="text-on-surface-variant text-sm font-body uppercase tracking-widest">Matte Ceramic / Swiss Movement</p>
                </div>
                <span className="text-2xl font-bold font-manrope tracking-tighter text-primary">$420.00</span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center bg-surface-container px-4 py-2 gap-6">
                  <button className="text-on-surface hover:text-secondary transition-colors"><span className="material-symbols-outlined">remove</span></button>
                  <span className="font-bold text-primary w-4 text-center">1</span>
                  <button className="text-on-surface hover:text-secondary transition-colors"><span className="material-symbols-outlined">add</span></button>
                </div>
                <button className="text-xs font-body uppercase tracking-widest font-bold text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">delete</span> Remove
                </button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/20">
            <div className="w-full md:w-48 h-64 bg-surface-container-low overflow-hidden shrink-0">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Sonic Isolator Pro" src="/images/cart/cart_headphones.jpg" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-manrope font-bold tracking-tight mb-1 text-primary">SONIC ISOLATOR PRO</h3>
                  <p className="text-on-surface-variant font-body text-sm uppercase tracking-widest">Acoustic Leather / Titanium Core</p>
                </div>
                <span className="text-2xl font-manrope font-bold tracking-tighter text-primary">$890.00</span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center bg-surface-container px-4 py-2 gap-6">
                  <button className="text-on-surface hover:text-secondary transition-colors"><span className="material-symbols-outlined">remove</span></button>
                  <span className="font-bold text-primary w-4 text-center">1</span>
                  <button className="text-on-surface hover:text-secondary transition-colors"><span className="material-symbols-outlined">add</span></button>
                </div>
                <button className="text-xs uppercase font-body tracking-widest font-bold text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">delete</span> Remove
                </button>
              </div>
            </div>
          </div>

          {/* Shipping Info (Info Blue) */}
          <div className="bg-secondary-container/30 border border-secondary/20 p-8 flex gap-6 items-start">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <div>
              <h4 className="font-bold font-manrope text-secondary text-sm uppercase tracking-widest mb-2">Shipping Information</h4>
              <p className="text-on-secondary-container font-body text-sm leading-relaxed max-w-2xl">
                Complimentary express shipping applied to your order. Delivery estimated within 2-3 business days. Signature required upon arrival for all curated archival items.
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest p-10 border border-outline-variant/10 sticky top-[130px] shadow-sm">
            <h2 className="text-3xl font-manrope font-black tracking-tighter uppercase mb-10 text-primary">Order Summary</h2>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Subtotal</span>
                <span className="font-bold font-manrope text-primary">$1,310.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Shipping</span>
                <span className="font-bold font-manrope text-secondary uppercase text-[10px]">Complimentary</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Estimated Tax</span>
                <span className="font-bold font-manrope text-primary">$104.80</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                <span className="text-lg font-manrope font-black tracking-tighter uppercase text-primary">Total</span>
                <span className="text-4xl font-manrope font-black tracking-tighter text-primary">$1,414.80</span>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary py-6 px-8 font-black font-manrope uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all active:scale-[0.98] duration-150 mb-6">
              Proceed to Checkout
            </button>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[10px] font-body uppercase tracking-widest font-bold text-on-surface-variant">
                <span className="material-symbols-outlined text-xs">lock</span> 100% Secure Transaction
              </div>
              <div className="flex items-center gap-3 text-[10px] font-body uppercase tracking-widest font-bold text-on-surface-variant">
                <span className="material-symbols-outlined text-xs">verified</span> Authenticity Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
