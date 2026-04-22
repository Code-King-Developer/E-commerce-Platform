import { useParams, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { orderApi } from '../lib/api';

export function TrackShipmentComponent() {
  const { orderId } = useParams({ from: '/track/$orderId' });

  const { data: order, isLoading, isError } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => orderApi.getOrderDetails(orderId),
    enabled: !!orderId,
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-surface-container-lowest">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-4 border-outline-variant border-t-primary rounded-full animate-spin"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">Locating Shipment</span>
        </div>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-surface-container-lowest px-8 text-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-6">error_outline</span>
        <h2 className="text-3xl font-bold tracking-tighter mb-4 uppercase">Archive Not Found</h2>
        <p className="text-on-surface-variant max-w-md mb-8">The requested tracking identifier could not be resolved in our system.</p>
        <Link to="/profile/orders" className="bg-primary text-on-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
          Back to Order History
        </Link>
      </div>
    );
  }

  const isShipped = order.status === 'Shipped' || order.status === 'Delivered';
  const isDelivered = order.isDelivered || order.status === 'Delivered';
  const isProcessing = order.status !== 'Cancelled';

  // Calculate progress bar logic based on stages
  let progressWidth = "w-0";
  if (isDelivered) progressWidth = "w-full";
  else if (isShipped) progressWidth = "w-[66%]";
  else if (isProcessing) progressWidth = "w-[33%]";

  // Style helper for nodes
  const activeNodeClass = "w-4 h-4 rounded-full bg-[#22c55e] border-4 border-surface ring-2 ring-[#22c55e] z-10 transition-all duration-1000";
  const inactiveNodeClass = "w-4 h-4 rounded-full bg-surface-container-highest border-4 border-surface ring-2 ring-outline-variant z-10 transition-all duration-1000";

  // Date formatters
  const orderDate = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  // Predict delivery window (Mock logic for ETA)
  const deliveryDate = new Date(order.createdAt);
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDelivery = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="w-full">
      {/* Hero Header */}
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-screen-2xl mx-auto px-8 md:px-0">
        <div className="space-y-2">
          <p className="font-headline text-xs font-bold uppercase tracking-widest text-secondary">
            Shipping Update
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-primary">
            Order Status
          </h1>
          <p className="text-2xl font-headline font-bold text-outline uppercase">
            #{order._id.slice(-8)}
          </p>
        </div>
        <div className="md:text-right">
          <span className="inline-flex items-center px-4 py-2 bg-surface-container text-primary text-xs font-bold uppercase tracking-widest">
            {order.isPaid ? 'Confirmed Payment' : 'Payment Pending'}
          </span>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 max-w-screen-2xl mx-auto px-8 md:px-0">
        
        {/* Left Column: Tracking Details */}
        <div className="lg:col-span-8 space-y-20">
          {/* Delivery Window */}
          <section className="bg-surface-container-lowest p-10 md:p-16 border border-outline-variant/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
              Estimated Arrival
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-primary">
              {isDelivered ? 'Delivered successfully' : formattedDelivery}
            </h2>
            {!isDelivered && (
              <p className="text-xl text-on-surface-variant mt-2 font-medium">
                Between 10:00 AM — 2:00 PM
              </p>
            )}

            {/* Progress Tracker */}
            <div className="mt-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2"></div>
              <div className={`absolute top-1/2 left-0 h-[2px] bg-[#22c55e] -translate-y-1/2 transition-all duration-1000 ${progressWidth}`}></div>
              
              <div className="relative flex justify-between">
                
                <div className="flex flex-col items-center gap-4">
                  <div className={activeNodeClass}></div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter text-primary`}>
                    Order Placed
                  </span>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className={isProcessing ? activeNodeClass : inactiveNodeClass}></div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${isProcessing ? 'text-primary' : 'text-outline'}`}>
                    Processing
                  </span>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className={isShipped ? activeNodeClass : inactiveNodeClass}></div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${isShipped ? 'text-primary' : 'text-outline'}`}>
                    Shipped
                  </span>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className={isDelivered ? activeNodeClass : inactiveNodeClass}></div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${isDelivered ? 'text-primary' : 'text-outline'}`}>
                    Delivered
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
                    Bespoke Courier
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">
                    Tracking Number
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-mono">{order._id.toUpperCase()}</p>
                    <button className="text-secondary hover:opacity-70" onClick={() => navigator.clipboard.writeText(order._id)}>
                      <span className="material-symbols-outlined text-sm">
                        content_copy
                      </span>
                    </button>
                  </div>
                </div>
                <p className="text-[10px] uppercase text-on-surface-variant">Signature required upon delivery.</p>
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant pb-4">
                Shipment Timeline
              </h3>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-2 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant">
                
                {isShipped && (
                  <div className="relative pl-8">
                    <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-secondary ring-4 ring-surface"></div>
                    <p className="text-[10px] font-bold uppercase text-secondary">
                      Update
                    </p>
                    <p className="text-sm font-bold text-primary mt-1">
                      {isDelivered ? 'Delivered' : 'Out for delivery via Courier'}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Local Distribution Center
                    </p>
                  </div>
                )}
                
                {isProcessing && (
                  <div className="relative pl-8">
                    <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-outline-variant ring-4 ring-surface"></div>
                    <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                      Previous
                    </p>
                    <p className="text-sm font-bold text-primary mt-1">
                      Order Processed
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Global Fulfillment Hub
                    </p>
                  </div>
                )}

                <div className="relative pl-8">
                  <div className="absolute left-[5px] top-1.5 w-1.5 h-1.5 rounded-full bg-outline-variant ring-4 ring-surface"></div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                    {orderDate}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    Order received
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Digital System
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          
          {/* Product Summary */}
          <section className="bg-surface-container-lowest p-8 border border-outline-variant/20 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-8 border-b border-outline-variant pb-2">
              In this Shipment
            </h3>
            
            <div className="flex flex-col gap-6">
              {order.orderItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-center">
                  <div className="w-16 h-20 bg-surface-container overflow-hidden rounded shrink-0">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover grayscale"
                      src={item.image || '/images/track/chair.jpg'}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-headline font-bold uppercase max-w-[150px] truncate">{item.name}</p>
                    <p className="text-[10px] uppercase text-on-surface-variant">
                      Qty: {item.qty}
                    </p>
                    <p className="text-xs font-bold mt-2">${item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Shipment Total</span>
              <span className="text-sm font-bold">${order.totalPrice.toLocaleString()}</span>
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
          
        </aside>
      </div>
    </div>
  );
}
