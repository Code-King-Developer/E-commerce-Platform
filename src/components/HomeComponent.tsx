
export function HomeComponent() {
  return (
    <div className="space-y-20 md:space-y-40 pb-40">
      <section className="relative h-[921px] w-full overflow-hidden flex items-center px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-10">
          <div className="md:col-span-5 z-10">
            <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase block mb-4">Summer Collection 2024</span>
            <h1 className="text-display-lg font-manrope font-black tracking-tighter leading-[0.9] text-primary mb-8 text-6xl md:text-8xl">
              SILENT<br />AUTHORITY
            </h1>
            <p className="text-on-surface-variant text-lg max-w-sm mb-10 leading-relaxed font-light">
              A curated selection of monochromatic essentials designed for the modern minimalist. Precision in every thread.
            </p>
            <div className="flex items-center space-x-6">
              <button className="bg-primary text-on-primary px-10 py-5 font-manrope font-bold text-sm tracking-widest uppercase transition-all hover:bg-surface-container-highest active:scale-95">
                Shop The Edit
              </button>
              <button className="text-primary font-manrope font-bold text-sm tracking-widest uppercase border-b border-primary/20 hover:border-primary transition-all">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="md:col-span-7 h-full relative group">
            <div className="absolute -inset-4 bg-surface-container-low -z-10 transition-transform duration-700 group-hover:scale-[1.02]"></div>
            <img alt="Editorial Product Shot" className="w-full h-full object-cover grayscale brightness-105" data-alt="high-fashion editorial photography of a model in a minimalist black outfit against a stark white studio wall with dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQe-pODeaJ2pVIFtNeyu253czO72keQHYiVZAgqdgYKYMzn2Nws8jUv0vlQjKtiElxuira8h7b6RBKnYKi2btgcjo8xW57V_zf8sjdMvy8k8Hv3McK03HKFs97VhxqUq7QjyeJ_DbfYJ0OO6-v0dFoIn3foxQ9y8653xl1jcs4taizlaGq0dbyNuQfK_XFBr9_4Sz0GeQ5cbMXnpIyiHCaRI-xO3vAQoYKK57Yd3iSMfSaUtgiAketLK4jNGH_h56VLPeq9kaQXhLa" />
          </div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-manrope font-extrabold tracking-tighter text-primary">Departmental Focus</h2>
            <p className="text-on-surface-variant mt-2">Explore our core curated categories</p>
          </div>
          <button className="text-secondary font-bold text-sm tracking-widest uppercase flex items-center group">
            View All <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[700px]">
          <div className="md:col-span-2 relative overflow-hidden group bg-surface-container-low">
            <img alt="Electronics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="ultra minimalist high-end camera body on a white marble pedestal with sharp focus and professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTEy6BQy8LWzZR_Vdy9KCloxSevRcKRx5PrSuUjTSbJcgcmqxyOtfb8P65D4v_4xUVjcr5njSUcuXaaOuUdP1sag52H4z7CnOUTn0-hE2UuvKADLpUZobjlcx2hFLM84FYzsur7GUUd-lckJUKyahY_kycsMm6SzwmGX7IuMa-nNuG-x6BYVtF_wGNeSDQ1iIbYvA5Ega6cIWl6gPSPMkjAST7U8Agz_trKoLtzslsasv3MwE8NIofaUEfhDLG-baTx-XJV_G7nzlA" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="label-sm font-bold tracking-widest uppercase opacity-70">Curated</span>
              <h3 className="text-4xl font-manrope font-black mt-2">Electronics</h3>
            </div>
          </div>
          <div className="relative overflow-hidden group bg-surface-container-low">
            <img alt="Fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="luxury silk garment hanging on a minimal steel rail in a white boutique setting with soft ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBbjWKwXE6pgn8mW1kQeDxn7gKalEd5GE5wARAmlgYYzFsNX71tG58TA-Xc9UrHfo7qjW70L5zETMQjUT_SvOE1W3Em87ZHUBwlXZalL2kZQIrRRwrnmTSgvFeeisyA8o4XEL7jpRRTl9QN60sT7amMHY_JnACrACJKY8Q2TcmWHP0d58tuZPDouMm7shf6NILS1ayAdx_urEqgYdkIBfkhXgYyFNrre-6VwCJfu5O_2OYMfEmtOFQCX5-2etYNEgsRkSk8kUIIGte" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-manrope font-black">Fashion</h3>
            </div>
          </div>
          <div className="relative overflow-hidden group bg-surface-container-low">
            <img alt="Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="designer brutalist concrete lounge chair in an airy white living room with a single green palm leaf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuhSXVhfJP8LLhPy4M__IhAGNG16PAxgLgqS3TYGz-iMMRx5ToCxq-WwWJyPeBFo3V-w_S7nWGjjYFLNm4PDuBAu5B8siSJ52MAmzA7hgD01dcXo9rDFlaAKL2lyBOgBLyE7qEIsiYtHIiR8Xlvp8Is8mFXX7DdaFQkNH04qcBkNZ9FTimUXhB81xMhZu26N2EH4Fuf9HLMZsKD2xZC7SS_RvuSNMx8j3XWg-nb4cHyro1nyKeNaJwyy5Nznu1GpYFpCQDcNSQ3b9T" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-manrope font-black">Home</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 overflow-hidden">
        <div className="px-8 max-w-screen-2xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">The Now</span>
            <h2 className="text-5xl md:text-6xl font-manrope font-black tracking-tighter text-primary mt-4">Trending Pieces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] bg-[var(--color-surface-container-lowest)] overflow-hidden mb-6 relative">
                <img alt="Product 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_tqmFNA5Jsljd2hyK1vqkRCpcKepft4wSexYmrp_3IePyY1OEcgYNjbTjb28vWTt7ZTKQxQwUd3n4BM_yIKuU8MmqUXeiKE1hyehDPlchveQe0IxQjNSrU8mRFUMCQZVRsAgilFCCIxUCWrSTmInFGT3sQHbPunJRFyAy44wNrlUPPDxKtg3P4KuR_ocLEjAapocw3OTDFarN-sBjKLejwOhgCIC6qQKSG3r7KEPoqJg7pbkCy9oh4u5L6wpuKXZiB1pEMltqV7N" />
                <button className="absolute top-6 right-6 w-12 h-12 bg-white flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-primary">favorite</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary">
                  <button className="w-full text-white font-bold text-xs tracking-widest uppercase py-3">Add to Bag</button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-manrope font-bold text-xl text-primary">Velocity Runner</h4>
                  <p className="text-on-surface-variant text-sm mt-1">High-Performance Footwear</p>
                </div>
                <span className="text-xl font-manrope font-black">$240</span>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[3/4] bg-[var(--color-surface-container-lowest)] overflow-hidden mb-6 relative">
                <div className="absolute top-6 left-6 z-10 bg-[var(--color-status-error)] text-white text-[10px] px-3 py-1 font-bold tracking-widest uppercase">Only 2 Left</div>
                <img alt="Product 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCvmeYPk2BvyCkWO-sMzX35j6qsKqt4R4qFYySVXnwU4nO2t19FrJdej716YVZQZ776Ah1zAnoXHJHboUvM6EeCSUtFDE9TcVNSChMe3_JG0SsrejosLRrNXBFkm1D5A5WUcHH_fHYSxbQxyUEZ93y-gkp9HXLs14d-W2XtggDBTaKH4TN4sev6LAf72dmI1wAJ2HjHiFXLgjT0mRCLkaa66zEeOKIWoE7-0MqL0KCsPVu4TP0-hJHGrDPByuhpY2wR_xehgKgVitG" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary">
                  <button className="w-full text-white font-bold text-xs tracking-widest uppercase py-3">Add to Bag</button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-manrope font-bold text-xl text-primary">Studio Pro X</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Sonic Precision Audio</p>
                </div>
                <span className="text-xl font-manrope font-black">$450</span>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[3/4] bg-[var(--color-surface-container-lowest)] overflow-hidden mb-6 relative">
                <img alt="Product 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApZwjjQ8ABV8Ami2FtQbUUAk0pfmuEjsk7UVA9LRZdBPC7zT7koJxp1no-5Hf1nBIjHx7M7AzPrXixb12LZPfjdgZ2_i_JtY6oQEtIVoL4mxAcSuhbhyL8r8z9CuaGJVD6inQStUZ39cUJvBHgj5MbuRfdINzgD1OUZHrPjms3SKZyTV5I118ioYn-ITEJzI5eHql8KtHFpWI3ACcFiJJ9_MwHDSS5A3yxJQcxsgYIo5acIkX3XWn8pbe3ac1SkIGz1HF_7bOH-H6O" />
                <div className="absolute top-6 right-6 z-10 text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary">
                  <button className="w-full text-white font-bold text-xs tracking-widest uppercase py-3">Add to Bag</button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-manrope font-bold text-xl text-primary">Datum Watch</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Swiss Movement horology</p>
                </div>
                <span className="text-xl font-manrope font-black">$890</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-manrope font-black tracking-tighter text-primary leading-tight">
            Beyond The Purchase.<br />The CURATOR Experience.
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <h5 className="font-bold text-primary">Global Priority Delivery</h5>
                <p className="text-on-surface-variant text-sm mt-1">Next-day white-glove service in 40+ major metropolitan areas worldwide.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h5 className="font-bold text-primary">Lifetime Authenticity</h5>
                <p className="text-on-surface-variant text-sm mt-1">Every piece is verified by our master curators. Guaranteed forever.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full aspect-video bg-[var(--color-surface-container)] overflow-hidden group">
          <img alt="Service Image" className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU45PDwYhanYDEId33Ch4YGqrgP3b2TI6rkWZXVRdUcro2wd63l-ANWzzG76ezTOX-11sy_RrTn0xo8gtlW8Z2_Hgkxqt2paXl0apXwU3Fz-a3fwYSj-fvS-cdJC95oWIeDdQrBDzZmyRl0bTZ1YKFRzdtWNVakqk3u9rVb1LGXVD9wGyZ-GF-VHRSelWAkx1_Y-U_DEZleWp25ShLM1NmBHq8TL9tfA3FoPKJ0vEd2EoEp8jE3gnTrucjpz87x0m3QRqJIDsOELPh" />
        </div>
      </section>
    </div>
  );
}
