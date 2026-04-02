import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CollectionsComponent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const FILTER_OPTIONS = [
    { name: 'All', icon: 'grid_view' },
    { name: 'Electronics', icon: 'headphones' },
    { name: 'Fashion', icon: 'checkroom' },
    { name: 'Objects', icon: 'category' },
    { name: 'Home', icon: 'chair' },
    { name: 'Editorial', icon: 'auto_stories' },
    { name: 'Archive', icon: 'inventory_2' }
  ];
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      {/* Hero Title Section */}
      <section className="mb-32">
        <h1 className="font-headline font-extrabold text-[5rem] md:text-[8rem] tracking-tighter leading-[0.85] text-primary">
          CURATED<br/>
          <span className="ml-20 md:ml-40 text-secondary">COLLECTIONS</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-8">
          <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed">
            A rigorous selection of modern artifacts, spanning from essential electronics to archival fashion. Each category is a curated ecosystem of design excellence.
          </p>
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="text-xs font-bold tracking-widest uppercase py-2 px-4 bg-surface-container-low flex items-center gap-2 hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              Filter: {selectedFilter}
              <motion.span 
                animate={{ rotate: isFilterOpen ? 180 : 0 }} 
                transition={{ duration: 0.2 }}
                className="material-symbols-outlined text-[16px]"
              >
                expand_more
              </motion.span>
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white border border-outline-variant/20 shadow-lg z-20 flex flex-col origin-top"
                >
                  {FILTER_OPTIONS.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => {
                        setSelectedFilter(option.name);
                        setIsFilterOpen(false);
                      }}
                      className={`text-left text-[10px] flex items-center gap-3 font-bold tracking-widest uppercase py-3 px-4 hover:bg-surface-container-low transition-colors ${selectedFilter === option.name ? 'text-primary bg-surface-container-low/50' : 'text-on-surface-variant'}`}
                    >
                      <span className="material-symbols-outlined text-[16px] opacity-70">{option.icon}</span>
                      {option.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Asymmetric Category Grid */}
      <section className="grid grid-cols-12 gap-5">
        {/* Category: Electronics (Large Spotlight) */}
        <div className="col-span-12 md:col-span-8 group cursor-pointer">
          <div className="relative aspect-video overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="minimalist high-end aluminum headphones on a sleek dark granite surface with sharp top lighting and deep shadows" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVZjyGZyUr1o2yk_Nvc7wFBslZqUDOB1c49Dv9kyj2JUaUVoPaPHks_CxIitRm7uSZkee-VGlpWXvz8AcuZeKxTtoqPywr9ba0t5Z143b5AhPSlzKEz7vISSvha_a-23vm5M1RlWQYMIl9tfPeiWE6siO0iT7_Joh8_idZe3YC1kh57nr4qp0ML9_AsY9RXeDaMdMuH0vsN8YVq20BBldgbhwkHG0TuLV84wiH1_y4SCDkEv4JTUnxzpPSJsp6v0kQcXhjM-6CIcrU"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">01 / Innovation</span>
              <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Electronics</h2>
            </div>
            <span className="material-symbols-outlined text-4xl font-light">north_east</span>
          </div>
        </div>

        {/* Category: Fashion (Vertical Impact) */}
        <div className="col-span-12 md:col-span-4 group cursor-pointer mt-12 md:mt-24">
          <div className="relative aspect-3/4 overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="close-up of textured heavy wool fabric in charcoal grey with dramatic sculptural folds and high contrast studio lighting" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJJJdlQsw0R-qIKuzHIFaJMagH5rTgJaGVOneSSeOVSW48KDVTZZ5GuzoddRNaB9YRlLGMT_asx7IL1wZaJzjweWVe-uBM6uJnxKurcMEIa_lE5jXEWcgEHE0bKRfrc7vEB-0mEC_TDrhoOyzAB4-8NPExVU_MQ1TkQWav8-kHBn6H7_RvMly_BH21X1NuI8SeUZYuxHxbhPYbncpVXDwNN8pO_7sojnM7HyVP2BgdlUmf3alCtBJUwKt6V8sKLBdvG0qbXkrdA2ZI"
            />
          </div>
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">02 / Silhouettes</span>
            <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Fashion</h2>
          </div>
        </div>

        {/* Category: Objects (Standard Modern) */}
        <div className="col-span-12 md:col-span-4 group cursor-pointer mt-12">
          <div className="relative aspect-square overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="minimalist white ceramic vase with geometric sharp angles on a stark white background with soft ambient shadows" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKI2kE0rTbEHgffwLR9k7YZlTzZwcRzK2c4hYdu4LKXFftc6bywmHn1TAwBy_8AFA5LXCX05_7WCN7kbD24zhy_s2BuZ-yffwvwjnENWv8Iblgf3fIxTv8EWK7ZMXBnCZcY_d1hjT8x5-ZP_wWki3aN-eDp4xr1VibDsTv6CevkUjh3tLWvDnD761KTadKjnMEwOTsLGkakJxuysvgwDEGBf3fTySwJ_ns1mV6FzETMZbBBx931jZmSa4Fu9pc06aMmMNIb03A3Zro"
            />
          </div>
          <div>
            <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">03 / Form</span>
            <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Objects</h2>
          </div>
        </div>

        {/* Category: Home (Large Inset) */}
        <div className="col-span-12 md:col-span-8 group cursor-pointer md:-mt-24">
          <div className="relative aspect-16/10 overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="modern brutalist interior with raw concrete walls large floor to ceiling windows and a single designer lounge chair in black leather" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN84pG1KEjXK_IeMIaAUQo14qVQ9clSwTo6XhirFeMqUy7Brm7ALRwIyT5chDXUUxZvQNbSt3DgFcdUYlKoYEXjA7azgEHHUTHmseCzUo8x6Loxu6eZQvdtWSLFncCM5WN_IsSCMPbaA6YEj4Qw_Nrwv3KoUiHXlyFPsgEqQVKI268JwSL-f8NiNaTobbOWMs_kIbM16TRP68z1iSfFvnf35GsPG5iq1cRr56Ge_XQ4Uw0iLY4G4rbPVrB8J0JrwqHk77wJKJh9QeF"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">04 / Environment</span>
              <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Home</h2>
            </div>
            <span className="material-symbols-outlined text-4xl font-light">north_east</span>
          </div>
        </div>

        {/* Category: Editorial & Archive (Split) */}
        <div className="col-span-12 md:col-span-6 group cursor-pointer mt-12">
          <div className="relative aspect-4/3 overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="stack of thick matte fashion magazines with clean typography and monochrome covers on a wooden designer table" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7Ev9PCjgM_SwH8lJYe80x-cbBiod3dha6TyhzW0asc26ZsILKuG69T-myXh-JNRLYR-Qwcj5WlPyevsslu4vaBgQ9BVKqCXc8V0i7RAqGXXfjxbKo38ckPj7TofYx-4oMJsINo0RrKghRCcSrM6SH-whqZWCtYi0NLMCx-T43HL9ge3fEUGXIIijfoJskkD5EnqMzOloe3rkS4DrDvTS7Vn16yKQcdvcuVo_MEA0XrhSCOp3q8KixDnef1zYuEII9bhn3Q1npC3R"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">05 / Narrative</span>
              <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Editorial</h2>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 group cursor-pointer mt-12 md:mt-32">
          <div className="relative aspect-4/3 overflow-hidden bg-surface-container-low mb-6">
            <img 
              className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" 
              data-alt="vintage analog camera and industrial design blueprints in a museum-like display with spotlighting and dark background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0hhZsUXb-ZbWZC221Lyy4272GioZGsZ6Wvhja8qDaHm2PZONnl4Er3_py80huXKpFtti0zy2rncCQqJjVCB8EQ98tvVQLLJ-OvAgArqO-94m8Y0mfoVdpki6wrVU0vJVKT8SjPLlo6p9UMyPIfwe4uewyVHIhA84a3_wGrARNbCiknTP7I83qzEug__K6YrOSay4Q_ZU8FEvaLjmYoOK-ueGOxdszeW-2KdnpM4CiaLi7fmEu3v6rhysT8kjjunyTrpIOCDS8QOLJ"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2 block">06 / Heritage</span>
              <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Archive</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-40 pt-20 border-t border-outline-variant/20 -mx-6 w-[calc(100%+3rem)] px-6">
        <div className="grid grid-cols-12 gap-5 max-w-screen-2xl mx-auto">
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-headline font-bold text-2xl tracking-tight text-primary uppercase mb-4">The Curator's Journal</h3>
            <p className="text-on-surface-variant text-sm">Direct dispatches on rare finds and design history.</p>
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full">
              <input 
                className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-colors text-xs py-4 px-0 font-label tracking-widest focus:ring-0 outline-none placeholder:text-neutral-400" 
                placeholder="ENTER YOUR EMAIL" 
                type="email"
              />
            </div>
            <button className="bg-primary text-on-primary px-10 py-4 font-label text-xs font-bold tracking-widest uppercase hover:bg-secondary transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
