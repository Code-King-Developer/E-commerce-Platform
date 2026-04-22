import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useCreateProduct } from '../hooks/useAdminProducts';

interface AdminAddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminAddProductModal({ isOpen, onClose }: AdminAddProductModalProps) {
  const { mutateAsync: createProduct, isPending } = useCreateProduct();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
    galleryImage1: '',
    galleryImage2: '',
    alt: '',
    inStock: true,
    inventory: '10',
    tags: '',
    sizes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct({
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
        alt: formData.alt || formData.title,
        inStock: formData.inStock,
        inventory: Number(formData.inventory),
        tag: formData.tags || undefined,
        images: [formData.galleryImage1, formData.galleryImage2].filter(Boolean),
        sizes: formData.sizes ? formData.sizes.split(',').map(s => s.trim()) : [],
        finishes: [],
        dimensionsMaterials: [],
        shippingReturns: []
      });
      toast.success('Product instantiated successfully in the archive.');
      onClose();
      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        image: '',
        galleryImage1: '',
        galleryImage2: '',
        alt: '',
        inStock: true,
        inventory: '10',
        tags: '',
        sizes: '',
      });
    } catch {
      toast.error('Failed to instantiate product.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-surface-container-lowest z-50 overflow-y-auto border-l border-outline-variant/20 shadow-2xl"
          >
            <div className="p-10 lg:p-14">
              <div className="flex justify-between items-start mb-16">
                <div>
                  <span className="text-secondary font-manrope font-bold text-[10px] uppercase tracking-widest mb-2 block">Curation Actions</span>
                  <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-primary">New Artifact</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center bg-surface-container hover:bg-black hover:text-white transition-all rounded-full group"
                >
                  <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform duration-300" data-icon="close">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Title</label>
                    <input 
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-manrope font-medium focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="e.g. Modernist Lounge Chair"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Price ($)</label>
                    <input 
                      required
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-manrope font-medium focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Category</label>
                    <select 
                      required
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-manrope font-medium focus:ring-1 focus:ring-black outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select category</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Lighting">Lighting</option>
                      <option value="Ceramics">Ceramics</option>
                      <option value="Decor">Decor</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Description</label>
                    <textarea 
                      required
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-surface-container border-none p-4 text-sm font-body focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                      placeholder="Detail the artifact's providence, materials, and aesthetic impact..."
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Primary Image URL (1/3)</label>
                    <input 
                      required
                      name="image"
                      type="url"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-mono text-zinc-600 focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="https://example.com/primary.jpg"
                    />
                    {formData.image && (
                      <div className="mt-4 w-full h-48 bg-surface-container overflow-hidden border border-outline-variant/10">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.display = 'block')} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Gallery Image URL (2/3)</label>
                    <input 
                      name="galleryImage1"
                      type="url"
                      value={formData.galleryImage1}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-mono text-zinc-600 focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="https://example.com/gallery1.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Gallery Image URL (3/3)</label>
                    <input 
                      name="galleryImage2"
                      type="url"
                      value={formData.galleryImage2}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-mono text-zinc-600 focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="https://example.com/gallery2.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Inventory Count</label>
                    <input 
                      required
                      name="inventory"
                      type="number"
                      min="0"
                      value={formData.inventory}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-manrope font-medium focus:ring-1 focus:ring-black outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tags / Labels</label>
                    <input 
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-none p-4 text-sm font-manrope font-medium focus:ring-1 focus:ring-black outline-none transition-all"
                      placeholder="e.g. New Arrival"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-6 h-6 bg-surface-container group-hover:bg-zinc-200 transition-colors">
                      <input 
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleChange}
                        className="peer opacity-0 absolute w-full h-full cursor-pointer"
                      />
                      <span className="material-symbols-outlined text-[16px] text-black opacity-0 peer-checked:opacity-100 transition-opacity" data-icon="check">check</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Mark as Available</span>
                  </label>

                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isPending ? 'Publishing...' : 'Publish to Archive'}
                    {!isPending && <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
