import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PRODUCTS } from '../data/products';

export function CategoriesComponent() {
  const [isInStock, setIsInStock] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [selectedCategory, setSelectedCategory] = useState('All Objects');

  const CATEGORIES = ['All Objects', 'Fashion', 'Objects', 'Electronics', 'Home & Furniture', 'Editorial', 'Archive', 'Art & Prints'];



  const getLayoutClasses = (index: number) => {
    const mod = index % 4;
    if (mod === 0) return { col: 'lg:col-span-8', wrapper: '', aspect: 'aspect-16/10' };
    if (mod === 1) return { col: 'lg:col-span-4', wrapper: 'lg:pt-12', aspect: 'aspect-3/4' };
    if (mod === 2) return { col: 'lg:col-span-4', wrapper: '', aspect: 'aspect-square' };
    if (mod === 3) return { col: 'lg:col-span-8', wrapper: 'lg:-mt-24', aspect: 'aspect-video' };
    return { col: '', wrapper: '', aspect: '' };
  };

  const MAX_PRICE_LIMIT = 5000;
  const minPricePercent = (minPrice / MAX_PRICE_LIMIT) * 100;
  const maxPricePercent = (maxPrice / MAX_PRICE_LIMIT) * 100;
  return (
    <div className="w-full">
      {/* Hero Title */}
      <section className="px-6 lg:px-12 mb-16 max-w-screen-2xl mx-auto">
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-tighter leading-none mb-4">
          THE MODERN <span className="text-secondary">ARCHIVE</span>
        </h1>
        <p className="max-w-md text-on-surface-variant font-body leading-relaxed">
          A rigorous selection of sculptural forms and essential technology, curated for the discerning digital citizen.
        </p>
      </section>

      {/* Filter & Grid Container */}
      <div className="px-6 lg:px-12 flex flex-col md:flex-row gap-8 lg:gap-20 max-w-screen-2xl mx-auto">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-48 shrink-0">
          <div className="sticky top-40 space-y-12">
            <section>
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Categories</h3>
              <ul className="space-y-4 text-sm font-medium">
                {CATEGORIES.map(category => (
                  <li 
                    key={category} 
                    className={`flex items-center ${selectedCategory === category ? 'gap-3' : ''}`}
                  >
                    {selectedCategory === category && (
                      <span className="w-1 h-4 bg-secondary shrink-0"></span>
                    )}
                    <span 
                      onClick={() => setSelectedCategory(category)}
                      className={`cursor-pointer transition-colors ${selectedCategory === category ? 'text-primary' : 'text-on-surface-variant hover:text-secondary pl-4'}`}
                    >
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Price</h3>
              <div className="space-y-3">
                <div className="relative h-4 flex items-center w-full group">
                  <div className="w-full h-[2px] bg-outline-variant/30 absolute rounded-full"></div>
                  <div 
                    className="h-[2px] bg-secondary absolute transition-all duration-75" 
                    style={{ left: `${minPricePercent}%`, width: `${maxPricePercent - minPricePercent}%` }}
                  ></div>
                  <input 
                    type="range" 
                    min="0" 
                    max={MAX_PRICE_LIMIT} 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 50))} 
                    className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 
                               [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-3 
                               [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-primary 
                               [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                  />
                  <input 
                    type="range" 
                    min="0" 
                    max={MAX_PRICE_LIMIT} 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 50))} 
                    className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 
                               [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-3 
                               [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-primary 
                               [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span>${minPrice}</span>
                  <span>${maxPrice}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Availability</h3>
              <div 
                className="flex items-center gap-3 cursor-pointer group select-none"
                onClick={() => setIsInStock(!isInStock)}
              >
                <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${isInStock ? 'bg-secondary border-secondary text-white' : 'border-outline-variant group-hover:border-secondary'}`}>
                  {isInStock && (
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  )}
                </div>
                <span className="text-sm">In Stock</span>
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid: Asymmetric Layout */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-24">
            {PRODUCTS.map((product, index) => {
              const layout = getLayoutClasses(index);
              const mod = index % 4;

              return (
                <Link to="/product/$productId" params={{ productId: product.id.toString() }} key={product.id} className={`${layout.col} group cursor-pointer block ${layout.wrapper}`}>
                  <div className={`${layout.aspect} bg-surface-container-lowest overflow-hidden relative mb-6`}>
                    <img 
                      alt={product.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                      src={product.image}
                    />
                    {product.tag && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-secondary text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest">{product.tag}</span>
                      </div>
                    )}
                  </div>
                  
                  {mod === 2 ? (
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">{product.category}</p>
                      <h2 className="text-lg font-bold tracking-tight mb-2">{product.title}</h2>
                      <p className="text-lg font-light">{product.price}</p>
                      <button className="bg-primary text-on-primary w-full py-4 mt-6 text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-colors">Add to Bag</button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">{product.category}</p>
                        <h2 className={mod === 0 || mod === 3 ? "text-2xl font-bold tracking-tight" : "text-lg font-bold tracking-tight"}>{product.title}</h2>
                      </div>
                      <div className="text-right">
                        <p className={mod === 0 || mod === 3 ? "text-xl font-light" : "text-lg font-light"}>{product.price}</p>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2 hover:underline">Quick Add</button>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tonal Shift Section */}
      <section className="-mx-6 mt-40 py-40 bg-surface-container-low flex flex-col items-center text-center px-12 w-[calc(100%+3rem)]">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-8">Newsletter</span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 max-w-3xl leading-tight">
          CURATED UPDATES DELIVERED TO YOUR INBOX.
        </h2>
        <form className="w-full max-w-xl flex flex-col md:flex-row gap-0 border-b border-primary">
          <input 
            className="bg-transparent border-none focus:ring-0 w-full py-6 text-[10px] font-bold uppercase tracking-widest outline-none shadow-none" 
            placeholder="YOUR EMAIL ADDRESS" 
            type="email"
          />
          <button className="py-6 px-12 text-[10px] font-bold uppercase tracking-widest hover:text-secondary transition-colors shrink-0">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
