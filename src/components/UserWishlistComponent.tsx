import { motion, AnimatePresence } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { wishlistApi, cartApi } from '../lib/api';
import { Link } from '@tanstack/react-router';
import { toast } from 'sonner';

export function UserWishlistComponent() {
  const queryClient = useQueryClient();

  const { data: wishlist, isLoading } = useQuery({
    queryKey: ['wishlist'],
    queryFn: () => wishlistApi.getWishlist(),
  });

  const removeFromWishlistMutation = useMutation({
    mutationFn: (productId: string) => wishlistApi.removeFromWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.info('Object archived from collection');
    },
  });

  const addToCartMutation = useMutation({
    mutationFn: (payload: { productId: string, qty: number }) => cartApi.addToCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Object acquired in shopping bag');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Acquisition failed');
    }
  });

  if (isLoading) {
    return (
      <div className="flex max-w-screen-2xl w-full md:-mt-10 lg:-mx-12 min-h-[60vh] items-center justify-center">
        <div className="w-12 h-12 border-2 border-outline-variant border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const products = wishlist?.products || [];

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
            <p className="text-4xl font-manrope font-light text-primary">{products.length.toString().padStart(2, '0')}</p>
          </div>
        </header>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <AnimatePresence mode="popLayout">
            {products.length > 0 ? (
              products.map((product, index) => {
                const isLarge = index === 0;
                return (
                  <motion.div 
                    layout
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`${isLarge ? 'md:col-span-8' : 'md:col-span-4'} group relative bg-surface-container-lowest border border-outline-variant/10 transition-all duration-500 overflow-hidden flex flex-col`}
                  >
                    <Link 
                      to="/product/$productId" 
                      params={{ productId: product._id }}
                      className={`${isLarge ? 'aspect-video md:aspect-[16/9]' : 'aspect-square md:aspect-auto flex-1'} overflow-hidden bg-surface-container`}
                    >
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={product.title} />
                    </Link>
                    
                    <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <Link 
                          to="/product/$productId" 
                          params={{ productId: product._id }}
                          className="font-manrope text-xl md:text-2xl font-bold tracking-tight text-primary uppercase hover:opacity-70 transition-opacity"
                        >
                          {product.title}
                        </Link>
                        <p className="text-on-surface-variant font-body text-xs mt-1 uppercase tracking-widest">{product.category} Series</p>
                        <p className="text-lg font-manrope font-semibold text-primary mt-3 md:mt-4">${product.price.toLocaleString()}</p>
                      </div>

                      <div className="flex flex-col gap-3 items-start sm:items-end w-full sm:w-auto mt-4 sm:mt-0">
                        <button 
                          onClick={() => addToCartMutation.mutate({ productId: product._id, qty: 1 })}
                          disabled={addToCartMutation.isPending}
                          className="bg-primary text-on-primary px-8 py-3 w-full sm:w-auto text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors whitespace-nowrap active:scale-95"
                        >
                          {addToCartMutation.isPending ? 'Processing...' : 'Add to Bag'}
                        </button>
                        <button 
                          onClick={() => removeFromWishlistMutation.mutate(product._id)}
                          disabled={removeFromWishlistMutation.isPending}
                          className="text-on-surface-variant text-[10px] uppercase tracking-widest hover:text-error flex items-center gap-1 transition-colors self-end sm:self-auto group/remove"
                        >
                          <span className="material-symbols-outlined text-sm group-hover/remove:rotate-90 transition-transform duration-300">close</span> 
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="md:col-span-12 py-32 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/20 rounded-lg">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-6">folder_open</span>
                <p className="text-xl font-bold uppercase tracking-widest text-on-surface-variant/50">Your archive is currently empty</p>
                <Link 
                  to="/categories" 
                  className="mt-8 text-primary font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:border-secondary hover:text-secondary transition-all"
                >
                  Explore Collection
                </Link>
              </div>
            )}

            {/* Always visible "Add More" Card if wishlist is not empty and has space */}
            {products.length > 0 && products.length < 12 && (
              <Link 
                to="/categories"
                className="md:col-span-4 border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-primary transition-all aspect-square md:aspect-auto min-h-[300px]"
              >
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors mb-4">add_circle</span>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant group-hover:text-primary">Continue Curating</p>
              </Link>
            )}
          </AnimatePresence>
        </div>

        {/* Suggestion Banner */}
        <section className="mt-32 p-8 md:p-16 bg-primary text-on-primary flex flex-col md:flex-row justify-between items-center overflow-hidden relative gap-10 border border-primary">
          <div className="relative z-10 w-full text-center md:text-left">
            <h2 className="font-manrope text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-2">The Winter Edit</h2>
            <p className="font-body text-sm text-on-surface-variant tracking-wide uppercase opacity-80">New additions to the archive available now</p>
            <Link to="/editorial" className="inline-block mt-8 border border-white px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Editorial
            </Link>
          </div>
          <div className="md:absolute right-0 top-0 h-48 md:h-full w-full md:w-1/3 opacity-30 md:opacity-40 pointer-events-none">
            <img className="w-full h-full object-cover grayscale" src="/images/profile/wish_winter_edit.jpg" alt="Winter Edit Texture" />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
