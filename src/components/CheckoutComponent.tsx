import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartApi, orderApi } from '../lib/api';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import type { CreateOrderPayload } from '../types/order';

export function CheckoutComponent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  // Fetch cart to get items and calculate totals
  const { data: cart, isLoading: isCartLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getCart(),
  });

  const clearCartMutation = useMutation({
    mutationFn: () => cartApi.clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
  });

  const createOrderMutation = useMutation({
    mutationFn: (payload: CreateOrderPayload) => orderApi.createOrder(payload),
    onSuccess: async () => {
      // Order created successfully, empty cart
      await clearCartMutation.mutateAsync();
      toast.success('Order placed successfully.');
      navigate({ to: '/profile/orders' });
    },
    onError: (error: Error | { response?: { data?: { message?: string } } } | unknown) => {
      // @ts-expect-error: Custom axios response type bridging
      toast.error(error?.response?.data?.message || 'Failed to place order.');
    }
  });

  if (isCartLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto px-8 w-full py-20 flex justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-outline-variant border-t-primary rounded-full animate-spin"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Intializing Checkout</span>
        </div>
      </div>
    );
  }

  const items = cart?.items || [];
  
  if (items.length === 0 && !createOrderMutation.isSuccess) {
    return (
      <div className="max-w-screen-2xl mx-auto px-8 w-full py-32 text-center">
        <h1 className="text-4xl font-extrabold font-manrope tracking-tighter uppercase mb-6 text-primary">Your bag is empty</h1>
        <p className="text-on-surface-variant font-body text-lg mb-12">Return to the gallery to add items before checking out.</p>
        <button onClick={() => navigate({ to: '/categories' })} className="bg-primary text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all inline-block">
          Explore Collection
        </button>
      </div>
    );
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.country) {
      toast.error('Please complete all shipping address fields.');
      return;
    }

    const orderPayload: CreateOrderPayload = {
      orderItems: items.map(i => ({
        product: i.product._id!,
        name: i.name,
        qty: i.qty,
        image: i.image,
        price: i.price,
      })),
      shippingAddress,
      paymentMethod,
      taxPrice: tax,
      shippingPrice: 0, // Complimentary
      totalPrice: total,
    };

    createOrderMutation.mutate(orderPayload);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 w-full py-12">
      <div className="mb-16 pb-4 border-b border-outline-variant/20">
        <h1 className="text-5xl font-extrabold font-manrope tracking-tighter uppercase mb-4 text-primary">Secure Checkout</h1>
        <p className="text-on-surface-variant font-body text-lg">Finalize your details to complete your curation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold font-manrope tracking-tight mb-6 uppercase">1. Shipping Address</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Street Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={shippingAddress.address}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 p-4 font-body focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="123 Gallery Row"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">City</label>
                    <input 
                      type="text" 
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 p-4 font-body focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Postal Code</label>
                    <input 
                      type="text" 
                      name="postalCode"
                      value={shippingAddress.postalCode}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 p-4 font-body focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Country</label>
                  <input 
                    type="text" 
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 p-4 font-body focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="United States"
                    required
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-manrope tracking-tight mb-6 uppercase">2. Payment Method</h2>
              <div className="space-y-4">
                <label className={`block border ${paymentMethod === 'Credit Card' ? 'border-primary ring-1 ring-primary' : 'border-outline-variant/20'} p-6 cursor-pointer bg-surface-container-lowest transition-all`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="Credit Card"
                      checked={paymentMethod === 'Credit Card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <div>
                      <span className="font-bold text-sm block">Credit Card</span>
                      <span className="text-xs text-on-surface-variant">Processed securely via our payment gateway.</span>
                    </div>
                  </div>
                </label>
                
                <label className={`block border ${paymentMethod === 'PayPal' ? 'border-primary ring-1 ring-primary' : 'border-outline-variant/20'} p-6 cursor-pointer bg-surface-container-lowest transition-all`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="PayPal"
                      checked={paymentMethod === 'PayPal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <div>
                      <span className="font-bold text-sm block">PayPal</span>
                      <span className="text-xs text-on-surface-variant">You will be redirected to PayPal to complete your purchase.</span>
                    </div>
                  </div>
                </label>
              </div>
            </section>

          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest p-10 border border-outline-variant/10 sticky top-[130px] shadow-sm">
            <h2 className="text-3xl font-manrope font-black tracking-tighter uppercase mb-8 text-primary border-b border-outline-variant/10 pb-6">Summary</h2>
            
            <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-4 thin-scrollbar">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-20 w-16 bg-surface-container-low shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-sm uppercase truncate max-w-[200px]">{item.name}</h4>
                    <span className="text-xs text-on-surface-variant">Qty: {item.qty}</span>
                  </div>
                  <div className="flex shrink-0 items-center justify-end font-bold">
                    ${(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Subtotal</span>
                <span className="font-bold font-manrope text-primary">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Shipping</span>
                <span className="font-bold font-manrope text-secondary uppercase text-[10px]">Complimentary</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body uppercase tracking-widest text-xs font-bold">Estimated Tax</span>
                <span className="font-bold font-manrope text-primary">${tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                <span className="text-lg font-manrope font-black tracking-tighter uppercase text-primary">Total</span>
                <span className="text-4xl font-manrope font-black tracking-tighter text-primary">${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
            
            <button 
              type="submit"
              form="checkout-form"
              disabled={createOrderMutation.isPending || clearCartMutation.isPending}
              className="w-full bg-primary text-on-primary py-6 px-8 font-black font-manrope uppercase tracking-widest text-sm hover:bg-neutral-800 transition-all active:scale-[0.98] duration-150 disabled:opacity-50 flex justify-center items-center gap-3"
            >
              {(createOrderMutation.isPending || clearCartMutation.isPending) ? (
                <>
                  <div className="w-5 h-5 border-2 border-outline-variant border-t-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : 'Place Order'}
            </button>
            <p className="text-[10px] uppercase font-bold tracking-widest text-center text-on-surface-variant mt-6">
              By placing your order, you agree to our Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
