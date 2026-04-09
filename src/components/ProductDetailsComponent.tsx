import { useParams, Link } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productApi, cartApi, wishlistApi } from '../lib/api';
import { toast } from 'sonner';

export function ProductDetailsComponent() {
  const { productId } = useParams({ from: '/product/$productId' });
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const hasSetDefaults = useRef(false);
  const queryClient = useQueryClient();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => productApi.getProductById(productId),
    enabled: !!productId,
  });

  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getCart(),
  });

  const { data: wishlist } = useQuery({
    queryKey: ['wishlist'],
    queryFn: () => wishlistApi.getWishlist(),
  });

  const existingInCart = cart?.items.find(
    (item) => 
      (typeof item.product === 'string' ? item.product === productId : item.product._id === productId) &&
      item.selectedSize === selectedSize &&
      item.selectedFinish === selectedFinish
  );

  const isLimitReached = (existingInCart?.qty || 0) >= 5;

  // Check if current product is in wishlist
  const isProductInWishlist = wishlist?.products.some(p => p._id === productId);

  // Initialize selections once product is loaded
  useEffect(() => {
    if (product && !hasSetDefaults.current) {
      if (product.sizes?.length) setSelectedSize(product.sizes[0]);
      if (product.finishes?.length) setSelectedFinish(product.finishes[0].name);
      hasSetDefaults.current = true;
    }
  }, [product]);

  // Reset flag when productId changes
  useEffect(() => {
    hasSetDefaults.current = false;
  }, [productId]);

  const addToBagMutation = useMutation({
    mutationFn: (payload: { productId: string, qty: number, selectedSize?: string, selectedFinish?: string }) => 
      cartApi.addToCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Added to bag', {
        description: `${product?.title} has been added to your curated selection.`,
        className: 'bg-surface-container-lowest border-outline-variant/20 font-manrope font-bold uppercase tracking-tight',
      });
    },
    onError: () => {
      toast.error('Failed to add item', {
        description: 'Please try again later.',
      });
    }
  });

  const addToWishlistMutation = useMutation({
    mutationFn: (id: string) => wishlistApi.addToWishlist({ productId: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.success('Added to Curation', {
        description: `${product?.title} has been added to your curated archive.`,
        className: 'bg-surface-container-lowest border-outline-variant/20 font-manrope font-bold uppercase tracking-tight',
      });
    },
    onError: () => {
      toast.error('Curation Failed', {
        description: 'Object already in collection or server error.',
      });
    }
  });

  const removeFromWishlistMutation = useMutation({
    mutationFn: (id: string) => wishlistApi.removeFromWishlist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.info('Removed from Curation', {
        description: `${product?.title} has been archived from your collection.`,
        className: 'bg-surface-container-lowest border-outline-variant/20 font-manrope font-bold uppercase tracking-tight',
      });
    }
  });

  const handleAddToBag = () => {
    if (!product) return;
    addToBagMutation.mutate({
      productId: product._id,
      qty: 1,
      selectedSize: selectedSize || undefined,
      selectedFinish: selectedFinish || undefined,
    });
  };

  const handleToggleWishlist = () => {
    if (!productId) return;
    if (isProductInWishlist) {
      removeFromWishlistMutation.mutate(productId);
    } else {
      addToWishlistMutation.mutate(productId);
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-surface-container-lowest">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-4 border-outline-variant border-t-primary rounded-full animate-spin"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Curating Details</span>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-surface-container-lowest px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-6">error_outline</span>
        <h2 className="text-3xl font-bold tracking-tighter mb-4 uppercase">Object Not Found</h2>
        <p className="text-on-surface-variant max-w-md mb-8">The requested item has been moved or is no longer part of our active archive.</p>
        <Link to="/categories" className="bg-primary text-on-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
          Back to Collection
        </Link>
      </div>
    );
  }

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
              <img className="w-full h-full object-cover" alt={product.title} src={product.image}/>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {product.images.slice(0, 2).map((img, i) => (
                <div key={i} className={`bg-surface-container-low aspect-square overflow-hidden ${i === 1 ? 'mt-12' : ''}`}>
                  <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={`${product.title} view ${i + 1}`} src={img}/>
                </div>
              ))}
            </div>
            {product.images.length > 2 && (
              <div className="bg-surface-container-low aspect-video overflow-hidden">
                <img className="w-full h-full object-cover" alt={`${product.title} panoramic`} src={product.images[2]}/>
              </div>
            )}
          </div>

          {/* Right: Product Information */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-32">
              <div className="mb-2">
                <span className="text-xs tracking-widest uppercase text-on-surface-variant font-bold">{product.category} Series</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-primary leading-tight font-headline uppercase">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <p className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</p>
                {product.inStock ? (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-success/10 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                    <span className="text-xs font-bold text-success uppercase tracking-wider">Available</span>
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
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Select Proportion</span>
                    <div className="flex gap-3 flex-wrap">
                      {product.sizes.map((size) => (
                        <button 
                          key={size} 
                          onClick={() => setSelectedSize(size)}
                          className={`px-6 py-3 border-2 font-bold text-sm tracking-tight uppercase transition-all ${selectedSize === size ? 'border-primary text-primary shadow-sm' : 'border-outline-variant/20 text-on-surface-variant hover:border-primary'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Options: Finish */}
                {product.finishes && product.finishes.length > 0 && (
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Aesthetic Finish</span>
                    <div className="flex gap-4">
                      {product.finishes.map((finish) => (
                        <button 
                          key={finish.name}
                          title={finish.name}
                          onClick={() => setSelectedFinish(finish.name)}
                          className={`w-10 h-10 rounded-full border border-outline-variant/20 transition-all ${selectedFinish === finish.name ? 'ring-2 ring-offset-2 ring-primary shadow-md' : 'ring-0 ring-offset-2 hover:ring-2 ring-outline-variant'}`}
                          style={{ backgroundColor: finish.hex }}
                        ></button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Container */}
                <div className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <button 
                      onClick={handleAddToBag}
                      disabled={addToBagMutation.isPending || isLimitReached || !product.inStock}
                      className={`flex-grow h-16 font-bold text-xs tracking-widest uppercase transition-all flex justify-center items-center gap-3 ${product.inStock && !isLimitReached ? 'bg-primary text-on-primary hover:bg-neutral-800 active:scale-[0.98]' : 'bg-surface-container text-on-surface-variant cursor-not-allowed'} ${addToBagMutation.isPending ? 'opacity-70' : ''}`}
                    >
                      {addToBagMutation.isPending ? 'Processing Archive...' : 
                        isLimitReached ? 'Archive Limit Reached' : 
                        (product.inStock ? 'Acquire Object' : 'Notify Availability')}
                      {!addToBagMutation.isPending && !isLimitReached && product.inStock && (
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                      )}
                    </button>

                    <button 
                      onClick={handleToggleWishlist}
                      disabled={addToWishlistMutation.isPending || removeFromWishlistMutation.isPending}
                      className={`w-16 h-16 flex items-center justify-center border-2 transition-all duration-300 active:scale-95
                        ${isProductInWishlist 
                          ? 'border-primary bg-primary text-on-primary' 
                          : 'border-outline-variant text-primary hover:border-primary'
                        }`}
                      title={isProductInWishlist ? "Remove from Curation" : "Curate to Collection"}
                    >
                      <span 
                        className={`material-symbols-outlined transition-transform duration-500 ${isProductInWishlist ? 'scale-110' : ''}`} 
                        style={{ fontVariationSettings: `'FILL' ${isProductInWishlist ? 1 : 0}` }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-on-surface-variant tracking-widest uppercase opacity-60">Complimentary white-glove delivery included</p>
                </div>
              </div>

              {/* Details Accordion-style (Minimalist) */}
              <div className="mt-16 border-t border-outline-variant/20 pt-8 space-y-6">
                <div>
                  <div 
                    className="flex justify-between items-center group cursor-pointer"
                    onClick={() => toggleAccordion('dimensions')}
                  >
                    <span className="font-bold text-sm uppercase tracking-widest">Specifications</span>
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
                            <p key={i} className="flex gap-2">
                              <span className="text-primary font-bold min-w-[100px] uppercase text-[10px] tracking-widest">{line.includes(':') ? line.split(':')[0] : 'Note'}:</span>
                              <span>{line.includes(':') ? line.split(':')[1] : line}</span>
                            </p>
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
                    <span className="font-bold text-sm uppercase tracking-widest">Logistics & Care</span>
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
                            <p key={i} className="flex gap-2">
                              <span className="text-primary font-bold min-w-[100px] uppercase text-[10px] tracking-widest">{line.includes(':') ? line.split(':')[0] : 'Policy'}:</span>
                              <span>{line.includes(':') ? line.split(':')[1] : line}</span>
                            </p>
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

        {/* Community Verdict (Static placeholder for now, or could be dynamic) */}
        <section className="mt-32 pt-24 border-t border-outline-variant/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-md">
              <h2 className="text-4xl font-headline font-black tracking-tighter mb-4 uppercase text-primary">The Verdict</h2>
              <p className="text-on-surface-variant font-body leading-relaxed">Honest feedback from our global community of collectors.</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-2 justify-end text-primary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined fill-primary text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Verified Authority Acquisition</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-surface-container-low p-10 space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Elena V.</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">JANUARY 2024</span>
              </div>
              <p className="text-lg font-bold leading-tight tracking-tight text-primary uppercase">"THE CRAFTSMANSHIP IS UNPARALLELED. A DEFINITIVE STATEMENT PIECE."</p>
              <div className="pt-4 flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-base">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Verified Curator</span>
              </div>
            </div>
            {/* Additional reviews can be styled similarly */}
          </div>
        </section>
      </main>
    </div>
  );
}
