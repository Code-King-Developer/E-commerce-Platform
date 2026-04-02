import { useParams, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

export function ProductDetailsComponent() {
  const { productId } = useParams({ from: '/product/$productId' });
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0]; // fallback safely for unmapped clicks

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full">
      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-12">
          <Link to="/categories" className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Image Gallery (Editorial Asymmetry) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-surface-container-low aspect-4/5 overflow-hidden">
              <img className="w-full h-full object-cover" data-alt={product.alt} src={product.images[0] || product.image}/>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-surface-container-low aspect-square overflow-hidden">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt={product.alt} src={product.images[1] || product.image}/>
              </div>
              <div className="bg-surface-container-low aspect-square overflow-hidden mt-12">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt={product.alt} src={product.image}/>
              </div>
            </div>
            {product.images[1] && (
              <div className="bg-surface-container-low aspect-video overflow-hidden">
                <img className="w-full h-full object-cover" data-alt={product.alt} src={product.images[1]}/>
              </div>
            )}
          </div>

          {/* Right: Product Information */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-32">
              <div className="mb-2">
                <span className="text-xs tracking-widest uppercase text-on-surface-variant font-bold">{product.category} Series</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-primary leading-tight font-headline">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <p className="text-3xl font-bold text-primary">{product.price}</p>
                {product.inStock ? (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-success/10 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                    <span className="text-xs font-bold text-success uppercase tracking-wider">In Stock</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full border border-outline-variant/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Out of Stock</span>
                  </div>
                )}
                {product.tag && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary border border-secondary rounded-full">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{product.tag}</span>
                  </div>
                )}
              </div>

              <div className="space-y-10">
                {/* Description */}
                <div className="prose prose-sm text-on-surface-variant leading-relaxed font-body">
                  <p>{product.description}</p>
                </div>

                {/* Options: Size */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Select Size</span>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size, index) => (
                      <button key={size} className={`px-6 py-3 border-2 font-bold text-sm tracking-tight transition-all ${index === 0 ? 'border-primary text-primary' : 'border-outline-variant/20 text-on-surface-variant hover:border-primary'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options: Finish */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Frame Finish</span>
                  <div className="flex gap-4">
                    {product.finishes.map((finish, index) => (
                      <button 
                        key={finish.name}
                        title={finish.name}
                        className={`w-10 h-10 rounded-full ${index === 0 ? 'ring-2 ring-offset-2 ring-primary' : 'ring-0 ring-offset-2 hover:ring-2 ' + (finish.outlineColor || 'ring-outline-variant')}`}
                        style={{ backgroundColor: finish.hex }}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <button className={`w-full py-5 font-bold text-base tracking-widest uppercase transition-all flex justify-center items-center gap-3 ${product.inStock ? 'bg-primary text-on-primary hover:bg-secondary' : 'bg-surface-container text-on-surface-variant cursor-not-allowed'}`}>
                    {product.inStock ? 'Add to Cart' : 'Notify Me'}
                    <span className="material-symbols-outlined text-sm">{product.inStock ? 'arrow_forward' : 'notifications'}</span>
                  </button>
                  <p className="text-[10px] text-center mt-4 text-on-surface-variant tracking-widest uppercase">Complimentary white-glove delivery included</p>
                </div>
              </div>

              {/* Details Accordion-style (Minimalist) */}
              <div className="mt-16 border-t border-outline-variant/20 pt-8 space-y-6">
                <div>
                  <div 
                    className="flex justify-between items-center group cursor-pointer"
                    onClick={() => toggleAccordion('dimensions')}
                  >
                    <span className="font-bold text-sm uppercase tracking-widest">Dimensions &amp; Materials</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300">
                      {openAccordion === 'dimensions' ? 'remove' : 'add'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openAccordion === 'dimensions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-sm text-on-surface-variant font-body leading-relaxed space-y-2">
                          {product.dimensionsMaterials.map((line, i) => (
                            <p key={i}><strong className="text-primary">{line.split(':')[0]}:</strong>{line.split(':')[1]}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-outline-variant/10 pt-6">
                  <div 
                    className="flex justify-between items-center group cursor-pointer"
                    onClick={() => toggleAccordion('shipping')}
                  >
                    <span className="font-bold text-sm uppercase tracking-widest">Shipping &amp; Returns</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300">
                      {openAccordion === 'shipping' ? 'remove' : 'add'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openAccordion === 'shipping' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-sm text-on-surface-variant font-body leading-relaxed space-y-2">
                          {product.shippingReturns.map((line, i) => (
                            <p key={i}><strong className="text-primary">{line.split(':')[0]}:</strong>{line.split(':')[1]}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="mt-32 pt-24 border-t border-outline-variant/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-md">
              <h2 className="text-4xl font-headline font-black tracking-tighter mb-4">The Verdict</h2>
              <p className="text-on-surface-variant font-body leading-relaxed">Honest feedback from our community of collectors and designers.</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-2 justify-end">
                <span className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">4.9 / 5.0 (28 Reviews)</span>
            </div>
          </div>
          {/* Reviews Bento-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {product.featuredReview && (
              <div className="bg-surface-container-low p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold tracking-widest uppercase">{product.featuredReview.author}</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{product.featuredReview.date}</span>
                </div>
                <p className="text-lg font-bold leading-tight tracking-tight">"{product.featuredReview.quote}"</p>
                <div className="pt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">verified_user</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Verified Curator</span>
                </div>
              </div>
            )}
            <div className="bg-surface-container-lowest p-10 space-y-6 border border-outline-variant/10">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest uppercase">Elena V.</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">January 2024</span>
              </div>
              <p className="text-lg font-bold leading-tight tracking-tight">"Surprisingly comfortable. It looks rigid but the ergonomics are perfectly handled."</p>
              <div className="pt-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Verified Curator</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 space-y-6 lg:mt-12">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest uppercase">Julian R.</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">December 2023</span>
              </div>
              <p className="text-lg font-bold leading-tight tracking-tight">"The shipping was impeccable. White-glove delivery handled the unboxing with extreme care."</p>
              <div className="pt-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Verified Curator</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
