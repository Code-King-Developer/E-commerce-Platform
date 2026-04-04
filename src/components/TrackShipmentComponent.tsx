
export function TrackShipmentComponent() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-screen-2xl mx-auto">
        <div className="space-y-2">
          <p className="font-headline text-xs font-bold uppercase tracking-widest text-secondary">
            Shipping Update
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-primary">
            Order Status
          </h1>
          <p className="text-2xl font-headline font-bold text-outline">
            #DC-98421
          </p>
        </div>
        <div className="md:text-right">
          <span className="inline-flex items-center px-4 py-2 bg-surface-container text-primary text-xs font-bold uppercase tracking-widest">
            Confirmed Payment
          </span>
        </div>
      </header>
      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 max-w-screen-2xl mx-auto">
        {/* Left Column: Tracking Details */}
        <div className="lg:col-span-8 space-y-20">
          {/* Delivery Window */}
          <section className="bg-surface-container-low p-10 md:p-16">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
              Estimated Arrival
            </p>
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">
              Delivering Tomorrow
            </h2>
            <p className="text-xl text-on-surface-variant mt-2 font-medium">
              Between 10:00 AM — 2:00 PM
            </p>
            {/* Progress Tracker */}
            <div className="mt-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-3/4 h-[2px] bg-[#22c55e] -translate-y-1/2 transition-all duration-1000"></div>
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e] border-4 border-surface ring-2 ring-[#22c55e] z-10"></div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-primary">
                    Order Placed
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e] border-4 border-surface ring-2 ring-[#22c55e] z-10"></div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-primary">
                    Processing
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e] border-4 border-surface ring-2 ring-[#22c55e] z-10"></div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-primary">
                    Shipped
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-surface-container-highest border-4 border-surface ring-2 ring-outline-variant z-10"></div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-outline">
                    Out for Delivery
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Carrier & Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <section className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant pb-4">
                Carrier Details
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">
                    Carrier
                  </p>
                  <p className="text-xl font-headline font-bold uppercase">
                    FedEx Express
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">
                    Tracking Number
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-mono">1Z999AA1012345678</p>
                    <button className="text-secondary hover:opacity-70">
                      <span className="material-symbols-outlined text-sm">
                        content_copy
                      </span>
                    </button>
                  </div>
                </div>
                <a
                  className="inline-block text-xs font-bold uppercase tracking-widest text-secondary underline underline-offset-8"
                  href="#"
                >
                  Visit Carrier Website
                </a>
              </div>
            </section>
            <section className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant pb-4">
                Shipment Timeline
              </h3>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-2 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant">
                <div className="relative pl-8">
                  <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-secondary ring-4 ring-surface"></div>
                  <p className="text-[10px] font-bold uppercase text-secondary">
                    Today
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    10:30 AM — Out for delivery
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Local Distribution Center, London
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-outline-variant ring-4 ring-surface"></div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                    Today
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    8:15 AM — Arrived at local facility
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    North Hub Parcel Center
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-outline-variant ring-4 ring-surface"></div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                    Yesterday
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    11:45 PM — Departed sort facility
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    International Transit Hub
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Product Summary */}
          <section className="bg-surface-container-lowest p-8 border border-outline-variant/20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">
              In this Shipment
            </h3>
            <div className="flex gap-6 items-center">
              <div className="w-24 h-32 bg-surface-container overflow-hidden rounded">
                <img
                  alt="Mono-Chair"
                  className="w-full h-full object-cover grayscale"
                  src="/images/track/chair.jpg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-headline font-bold">Mono-Chair</p>
                <p className="text-xs uppercase text-on-surface-variant">
                  Finish: Matte Obsidian
                </p>
                <p className="text-sm font-bold mt-4">$1,240.00</p>
              </div>
            </div>
          </section>
          {/* Support Section */}
          <section className="bg-primary text-on-primary p-10 space-y-6">
            <h3 className="text-xl font-headline font-bold tracking-tight">
              Need assistance?
            </h3>
            <p className="text-sm text-on-primary/70 leading-relaxed">
              Our concierge team is available 24/7 to help with complex delivery
              requirements or rerouting requests.
            </p>
            <button className="w-full py-4 bg-surface text-primary text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300">
              Contact Concierge
            </button>
          </section>
          {/* Map Decoration */}
          <div className="w-full h-64 bg-surface-container-low overflow-hidden rounded grayscale opacity-50 contrast-125">
            <img
              alt="Location Map"
              className="w-full h-full object-cover"
              src="/images/track/map.jpg"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
