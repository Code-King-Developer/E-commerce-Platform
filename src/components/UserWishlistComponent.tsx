import { motion } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';

export function UserWishlistComponent() {
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
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-manrope text-5xl md:text-6xl font-black tracking-tighter text-primary uppercase mb-4">Saved Pieces</h1>
            <p className="text-on-surface-variant font-body text-lg max-w-md">Your curated selection of essential objects and seasonal highlights.</p>
          </div>
          <div className="text-left md:text-right shrink-0">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant">Total Items</span>
            <p className="text-4xl font-manrope font-light text-primary">04</p>
          </div>
        </header>

        {/* Bento Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Product Card 1 (Large Focus) */}
          <div className="md:col-span-8 group relative bg-surface-container-lowest border border-outline-variant/10 transition-all duration-500">
            <div className="aspect-video md:aspect-[16/9] overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/profile/wish_chair.jpg" alt="Sculptural Lounge Chair" />
            </div>
            <div className="p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div>
                <h3 className="font-manrope text-2xl font-bold tracking-tight text-primary">SCULPTURAL LOUNGE CHAIR</h3>
                <p className="text-on-surface-variant font-body text-sm mt-1 uppercase tracking-widest">Atelier Series / Noir</p>
                <p className="text-xl font-manrope font-semibold text-primary mt-4">$2,450.00</p>
              </div>
              <div className="flex flex-col gap-3 items-start sm:items-end w-full sm:w-auto mt-4 sm:mt-0">
                <button className="bg-primary text-on-primary px-8 py-3 w-full sm:w-auto text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors whitespace-nowrap">
                  Add to Bag
                </button>
                <button className="text-on-surface-variant text-[10px] uppercase tracking-widest hover:text-error flex items-center gap-1 transition-colors self-end sm:self-auto">
                  <span className="material-symbols-outlined text-sm">close</span> Remove
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 (Vertical) */}
          <div className="md:col-span-4 group bg-surface-container-low border border-outline-variant/10 transition-all duration-500 flex flex-col">
            <div className="aspect-square md:aspect-auto flex-1 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/profile/wish_shirt.jpg" alt="Heavyweight Cotton Shirt" />
            </div>
            <div className="p-6">
              <h3 className="font-manrope text-lg font-bold tracking-tight text-primary">HEAVYWEIGHT COTTON SHIRT</h3>
              <p className="text-on-surface-variant font-body text-xs mt-1 uppercase tracking-widest">Essential 01</p>
              <p className="text-lg font-manrope font-semibold text-primary mt-3">$185.00</p>
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-outline-variant/20">
                <button className="text-primary text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:text-secondary transition-colors">
                  Add to Bag
                </button>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">delete</span>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="md:col-span-4 group bg-surface-container-low border border-outline-variant/10 transition-all duration-500 flex flex-col">
            <div className="aspect-square md:aspect-auto flex-1 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/profile/wish_watch.jpg" alt="Chrono Matte White" />
            </div>
            <div className="p-6">
              <h3 className="font-manrope text-lg font-bold tracking-tight text-primary">CHRONO MATTE WHITE</h3>
              <p className="text-on-surface-variant font-body text-xs mt-1 uppercase tracking-widest">Timepiece / Limited</p>
              <p className="text-lg font-manrope font-semibold text-primary mt-3">$420.00</p>
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-outline-variant/20">
                <button className="text-primary text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:text-secondary transition-colors">
                  Add to Bag
                </button>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">delete</span>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="md:col-span-4 group bg-surface-container-low border border-outline-variant/10 transition-all duration-500 flex flex-col">
            <div className="aspect-square md:aspect-auto flex-1 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/profile/wish_perfume.jpg" alt="Terra Infusion No. 4" />
            </div>
            <div className="p-6">
              <h3 className="font-manrope text-lg font-bold tracking-tight text-primary">TERRA INFUSION NO. 4</h3>
              <p className="text-on-surface-variant font-body text-xs mt-1 uppercase tracking-widest">Curated Objects</p>
              <p className="text-lg font-manrope font-semibold text-primary mt-3">$95.00</p>
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-outline-variant/20">
                <button className="text-primary text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:text-secondary transition-colors">
                  Add to Bag
                </button>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">delete</span>
              </div>
            </div>
          </div>

          {/* Empty "Add More" Card */}
          <div className="md:col-span-4 border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-primary transition-all aspect-square md:aspect-auto">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors mb-4">add_circle</span>
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary">Continue Curating</p>
          </div>
        </div>

        {/* Suggestion Banner */}
        <section className="mt-32 p-8 md:p-16 bg-primary text-on-primary flex flex-col md:flex-row justify-between items-center overflow-hidden relative gap-10 border border-primary">
          <div className="relative z-10 w-full text-center md:text-left">
            <h2 className="font-manrope text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-2">The Winter Edit</h2>
            <p className="font-body text-sm text-on-surface-variant tracking-wide uppercase opacity-80">New additions to the archive available now</p>
            <button className="mt-8 border border-white px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Editorial
            </button>
          </div>
          <div className="md:absolute right-0 top-0 h-48 md:h-full w-full md:w-1/3 opacity-30 md:opacity-40">
            <img className="w-full h-full object-cover grayscale" src="/images/profile/wish_winter_edit.jpg" alt="Winter Edit Texture" />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
