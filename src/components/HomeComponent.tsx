import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '../lib/api';

export function HomeComponent() {
  const { data: trendingProducts, isLoading } = useQuery({
    queryKey: ['products', 'trending'],
    queryFn: () => productApi.getProducts(),
    select: (data) => data.slice(0, 3), // Get top 3 for the trending section
  });

  return (
    <div className="space-y-20 md:space-y-40 pb-40">
      <section className="relative h-[921px] w-full overflow-hidden flex items-center px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-10">
          <div className="md:col-span-5 z-10">
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase block mb-4">Summer Collection 2024</span>
            <h1 className="text-display-lg font-manrope font-black tracking-tighter leading-[0.9] text-primary mb-8 text-6xl md:text-8xl uppercase">
              SILENT<br />AUTHORITY
            </h1>
            <p className="text-on-surface-variant text-lg max-w-sm mb-10 leading-relaxed font-light">
              A curated selection of monochromatic essentials designed for the modern minimalist. Precision in every thread.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/categories" className="bg-primary text-on-primary px-10 py-5 font-manrope font-bold text-sm tracking-widest uppercase transition-all hover:bg-neutral-800 active:scale-95">
                Shop The Edit
              </Link>
              <button className="text-primary font-manrope font-bold text-sm tracking-widest uppercase border-b border-primary/20 hover:border-primary transition-all">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="md:col-span-7 h-full relative group">
            <div className="absolute -inset-4 bg-surface-container-low -z-10 transition-transform duration-700 group-hover:scale-[1.02]"></div>
            <img alt="Editorial Product Shot" className="w-full h-full object-cover grayscale brightness-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQe-pODeaJ2pVIFtNeyu253czO72keQHYiVZAgqdgYKYMzn2Nws8jUv0vlQjKtiElxuira8h7b6RBKnYKi2btgcjo8xW57V_zf8sjdMvy8k8Hv3McK03HKFs97VhxqUq7QjyeJ_DbfYJ0OO6-v0dFoIn3foxQ9y8653xl1jcs4taizlaGq0dbyNuQfK_XFBr9_4Sz0GeQ5cbMXnpIyiHCaRI-xO3vAQoYKK57Yd3iSMfSaUtgiAketLK4jNGH_h56VLPeq9kaQXhLa" />
          </div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-manrope font-extrabold tracking-tighter text-primary uppercase">Departmental Focus</h2>
            <p className="text-on-surface-variant mt-2">Explore our core curated categories</p>
          </div>
          <Link to="/categories" className="text-secondary font-bold text-sm tracking-widest uppercase flex items-center group">
            View All <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[700px]">
          <div className="md:col-span-2 relative overflow-hidden group bg-surface-container-low">
            <img alt="Electronics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTEy6BQy8LWzZR_Vdy9KCloxSevRcKRx5PrSuUjTSbJcgcmqxyOtfb8P65D4v_4xUVjcr5njSUcuXaaOuUdP1sag52H4z7CnOUTn0-hE2UuvKADLpUZobjlcx2hFLM84FYzsur7GUUd-lckJUKyahY_kycsMm6SzwmGX7IuMa-nNuG-x6BYVtF_wGNeSDQ1iIbYvA5Ega6cIWl6gPSPMkjAST7U8Agz_trKoLtzslsasv3MwE8NIofaUEfhDLG-baTx-XJV_G7nzlA" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="label-sm font-bold tracking-widest uppercase opacity-70">Curated</span>
              <h3 className="text-4xl font-manrope font-black mt-2 uppercase">Electronics</h3>
            </div>
          </div>
          <div className="relative overflow-hidden group bg-surface-container-low">
            <img alt="Fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBbjWKwXE6pgn8mW1kQeDxn7gKalEd5GE5wARAmlgYYzFsNX71tG58TA-Xc9UrHfo7qjW70L5zETMQjUT_SvOE1W3Em87ZHUBwlXZalL2kZQIrRRwrnmTSgvFeeisyA8o4XEL7jpRRTl9QN60sT7amMHY_JnACrACJKY8Q2TcmWHP0d58tuZPDouMm7shf6NILS1ayAdx_urEqgYdkIBfkhXgYyFNrre-6VwCJfu5O_2OYMfEmtOFQCX5-2etYNEgsRkSk8kUIIGte" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-manrope font-black uppercase">Fashion</h3>
            </div>
          </div>
          <div className="relative overflow-hidden group bg-surface-container-low">
            <img alt="Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuhSXVhfJP8LLhPy4M__IhAGNG16PAxgLgqS3TYGz-iMMRx5ToCxq-WwWJyPeBFo3V-w_S7nWGjjYFLNm4PDuBAu5B8siSJ52MAmzA7hgD01dcXo9rDFlaAKL2lyBOgBLyE7qEIsiYtHIiR8Xlvp8Is8mFXX7DdaFQkNH04qcBkNZ9FTimUXhB81xMhZu26N2EH4Fuf9HLMZsKD2xZC7SS_RvuSNMx8j3XWg-nb4cHyro1nyKeNaJwyy5Nznu1GpYFpCQDcNSQ3b9T" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-manrope font-black uppercase">Home</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 overflow-hidden">
        <div className="px-8 max-w-screen-2xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">The Now</span>
            <h2 className="text-5xl md:text-6xl font-manrope font-black tracking-tighter text-primary mt-4 uppercase">Trending Pieces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-surface-container-lowest animate-pulse"></div>
              ))
            ) : trendingProducts?.map((product) => (
              <Link to="/product/$productId" params={{ productId: product._id }} key={product._id} className="group block cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container-lowest overflow-hidden mb-6 relative">
                  <img alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src={product.image} />
                  {product.inventory < 5 && product.inventory > 0 && (
                    <div className="absolute top-6 left-6 z-10 bg-error text-white text-[10px] px-3 py-1 font-bold tracking-widest uppercase">Only {product.inventory} Left</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary">
                    <div className="w-full text-center text-white font-bold text-xs tracking-widest uppercase py-3">View Details</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-manrope font-bold text-xl text-primary uppercase tracking-tight">{product.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-1 uppercase tracking-widest">{product.category}</p>
                  </div>
                  <span className="text-xl font-manrope font-black">${product.price.toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-manrope font-black tracking-tighter text-primary leading-tight uppercase">
            Beyond The Purchase.<br />The CURATOR Experience.
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <h5 className="font-bold text-primary uppercase tracking-widest text-sm">Global Priority Delivery</h5>
                <p className="text-on-surface-variant text-sm mt-1 uppercase text-[10px] tracking-widest opacity-70">Next-day white-glove service in 40+ major metropolitan areas worldwide.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h5 className="font-bold text-primary uppercase tracking-widest text-sm">Lifetime Authenticity</h5>
                <p className="text-on-surface-variant text-sm mt-1 uppercase text-[10px] tracking-widest opacity-70">Every piece is verified by our master curators. Guaranteed forever.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full aspect-video bg-surface-container overflow-hidden group">
          <img alt="Service Image" className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU45PDwYhanYDEId33Ch4YGqrgP3b2TI6rkWZXVRdUcro2wd63l-ANWzzG76ezTOX-11sy_RrTn0xo8gtlW8Z2_Hgkxqt2paXl0apXwU3Fz-a3fwYSj-fvS-cdJC95oWIeDdQrBDzZmyRl0bTZ1YKFRzdtWNVakqk3u9rVb1LGXVD9wGyZ-GF-VHRSelWAkx1_Y-U_DEZleWp25ShLM1NmBHq8TL9tfA3FoPKJ0vEd2EoEp8jE3gnTrucjpz87x0m3QRqJIDsOELPh" />
        </div>
      </section>
    </div>
  );
}
