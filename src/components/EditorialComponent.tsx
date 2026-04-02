export function EditorialComponent() {
  return (
    <div className="w-full max-w-screen-2xl">
      {/* Hero Section: Featured Story */}
      <section className="w-full lg:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8 overflow-hidden">
          <img
            alt="Minimalist interior"
            className="w-full h-[716px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
            data-alt="Minimalist design studio with floor-to-ceiling windows, soft morning light, monochromatic furniture, and a single sculptural chair in a gallery-like setting."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRO_DNStqq_OSanssL-bvCIhwRWF07nbGYCIGpOEhf8y4f9QRh_LS1_sVnNABNweTuQvHv5a42raAfnAI_Z1aRh_1Rysf61RZF1fzadZ9sfSx0_Dvf0FboHcUNefQOCAypD5pDt1qoDduPBrXv1zPAP66uPUwoCaV9-8daMRv-GJCnw9kG53FWU6RbpS-MQLWWCl_cXxoIkNbrX24b3ac7zYXG9C1dzlMbBl5wN9b3N5HVD8JJpMaMh5lp8ju9J8Q-41vXi-jyHnvA"
          />
        </div>
        <div className="lg:col-span-4 flex flex-col items-start gap-6 pb-4">
          <span className="font-manrope text-xs tracking-widest uppercase text-secondary font-bold">COVER STORY</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            The New <br />Minimalism:
          </h1>
          <p className="font-headline text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            A Conversation with <br />Elena V.
          </p>
          <p className="body-md text-on-surface-variant max-w-sm">
            In an era of digital noise, Elena V. discusses the power of silence in architectural design and why the most profound statements are often the quietest.
          </p>
          <a className="mt-4 font-manrope text-sm font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all" href="#">READ FULL INTERVIEW</a>
        </div>
      </section>

      {/* Articles Grid (Asymmetrical) */}
      <section className="-mx-6 px-6 md:px-12 py-20 bg-surface-container-low w-[calc(100%+3rem)]">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter">LATEST CURATIONS</h2>
          <div className="hidden md:block h-px flex-1 mx-12 bg-outline-variant opacity-20"></div>
          <span className="font-manrope text-xs tracking-widest uppercase text-on-surface-variant">VOLUME 04 / 2024</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Article 1 */}
          <div className="group flex flex-col gap-6">
            <div className="overflow-hidden bg-surface-container-lowest">
              <img
                alt="Ceramic art"
                className="w-full aspect-4/5 object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Close-up of a hand-crafted ceramic vase with organic textures, soft shadows, and warm neutral tones against a concrete background."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH0KFEXewG4Lg0Y1z_7wIeNBU-mKLHYMW18uh3X3TJbxxCIW0DWgkQQy7628gzW4B31W7GEsA-HILlRk6xGgGmLRY9-JlaUeM7SYfWfUSwU7kOu1qx40utKdHtO-VY7ZFjK0igLZGkTOeMpyep4a1AXbVc6LPTuo_0gHVpDqJLnUgnP4DToFPxqyjUogvoAYAApcbK6FSc5hVFu85VHofBnU_OF0NdfUfRGcfADkNmegXLXYh9T802powx-e4sQhh2O2dEAowgMxnd"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-manrope text-xs tracking-[0.2em] font-bold text-secondary">DESIGN</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors">Tactile Forms: The Return of Brutalist Ceramics</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">Exploring the resurgence of raw, unglazed textures in modern tabletop aesthetics and the artists leading the movement.</p>
              <a className="inline-flex items-center gap-2 font-manrope text-xs font-bold uppercase mt-2 group-hover:gap-4 transition-all" href="#">
                Read More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group flex flex-col gap-6 md:mt-24">
            <div className="overflow-hidden bg-surface-container-lowest">
              <img
                alt="High fashion archive"
                className="w-full aspect-4/5 object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Vintage 90s minimalist fashion runway shot featuring a silk slip dress in oyster white, sharp tailoring, and clean studio lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApzwF0KdM1fB-2JXyO7HTLmtxQtjUTz7ozoI97C4_zZjjrxGPzu6BMUbUvheFSfp0jNfwBPOTtYeNMTuBwsId3fpr4sfhGjGUZ-eBmEj2N3RIApWULS-Y1tWX1GKzzdD1sXvceaPPNd4j4_WmYxSUo_15jwvpEK9SQAVQ_g-dRlZpEiuVw7-W4IEzVOfQ7aI1IOXmf-ghirKSz6tLd-xGkDMOw9Sihteqd2R3UgVlmsShmPX2R1Up3bYsgZNKOevhoqLCbFDAPGKvS"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-manrope text-xs tracking-[0.2em] font-bold text-secondary">ARCHIVE</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors">90s Redux: Why the Slip Dress Still Rules</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">From the archives of Calvin Klein to modern-day silhouettes, we track the evolution of fashion's most effortless staple.</p>
              <a className="inline-flex items-center gap-2 font-manrope text-xs font-bold uppercase mt-2 group-hover:gap-4 transition-all" href="#">
                Read More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group flex flex-col gap-6">
            <div className="overflow-hidden bg-surface-container-lowest">
              <img
                alt="Modernist architecture"
                className="w-full aspect-4/5 object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Interior of a modernist library with soaring concrete columns, geometric bookshelves, and soft natural light filtering through high windows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmk0ngKlduoe7It5QedZQdWJcsMEOJP6hd9FWc0kgM0RDU9_XMYMUFknYPxW95kMUpiM4LGAz28zVuF7nJfL_KipU3faCqOnjnU34ji0nQOWBke2H7QdbGDPI1rRhl1cmnaPwCk6R2Mp71hpT_UtCN_X4DKuVJz3yNlIsR-na8ymRIv9cVsGkm1Ay4oSe8lPgUYdMWeq57ZVwLGe1cUHoP54_ITi84aXyWK5Xc10uAF7QHfHgtIHd6yoGfkFhpT9NOIPls-Euf49kh"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-manrope text-xs tracking-[0.2em] font-bold text-secondary">INTERVIEW</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors">The Digital Nomad’s Sanctuary</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">Inside the Kyoto workspace of designer Kenji Matsuo, where ancient tradition meets high-performance modernism.</p>
              <a className="inline-flex items-center gap-2 font-manrope text-xs font-bold uppercase mt-2 group-hover:gap-4 transition-all" href="#">
                Read More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Spotlight Section */}
      <section className="-mx-6 px-6 md:px-12 py-32 bg-primary text-on-primary w-[calc(100%+3rem)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 hidden lg:block"></div>
            <img
              alt="Designer portrait"
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              data-alt="Portrait of a visionary product designer in a dark turtleneck, looking thoughtfully aside, cinematic lighting with high contrast and deep shadows."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDajw9GkI1D4iY1n_S6r0RhHq2pjUaP_zTnLZfdOB9ugLPCmFEZLj_pQReoH3fjv7-S-czHQn2R3upkMwQJOA48J4SZYl8o5ek_ODrgBR2MgWMxfhbSI4W-Y_1uELCdCvyFB6_KBU_5Zsr0LaAHi3w_7IM-3Xz1lbwAQdOcSmY2sZWUCah4PwFeoV_UH7rGW09TWGN7mztlP--0h38zm2Ax47DzLheo8tsd_Pj-0fGOrZ2InfPlx3zHQOE6GokVcJoz-NrsbPhMrmGB"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <span className="font-manrope text-xs tracking-[0.3em] uppercase opacity-60">DESIGNER SPOTLIGHT</span>
            <h2 className="font-headline text-5xl font-black leading-tight tracking-tighter">THOMAS REED <br />&amp; THE NEW UTILITY</h2>
            <blockquote className="font-headline text-2xl italic font-light leading-relaxed border-l-2 border-secondary pl-8">
              "Good design is not about what we can add, but about discovering what we can no longer take away."
            </blockquote>
            <p className="text-surface-variant font-light text-lg">
              Reed's latest collection for the Curator's Archive redefines functionalism for the digital age, focusing on modularity and emotional longevity.
            </p>
            <button className="bg-surface-container-lowest text-primary px-10 py-4 font-manrope text-sm font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors duration-300">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* The Curator's Journal */}
      <section className="w-full lg:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-headline text-3xl font-extrabold tracking-tighter mb-4">THE CURATOR'S <br />JOURNAL</h2>
          <p className="text-on-surface-variant text-base mb-8">Daily reflections on the intersections of technology, art, and timeless design.</p>
          <div className="h-1 w-20 bg-secondary"></div>
        </div>
        <div className="lg:col-span-8 flex flex-col divide-y divide-outline-variant/20">
          {/* Journal Entry 1 */}
          <div className="group py-10 first:pt-0 flex gap-8 items-start hover:pl-4 transition-all duration-300">
            <div className="hidden sm:block w-32 h-32 shrink-0 bg-surface-container overflow-hidden">
              <img
                alt="Journal thumbnail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Abstract macro shot of architectural details, clean lines, and neutral gray tones with soft bokeh."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzPXU5PsNoXNz33Uj3uN3XX3eyV5aVneKH1_yy3dMSc4BusSwg0Pn359ckXUeCkggvQr2UZI2SEfvtpjuL_Dau0PFAn2Bcf_UgvpvnwQslYpQ9IHMi6fp1eNK4gY8AVCsN6hVlRzSuo2iaPNUIFvTwgVXO2VvSIXYYKlTIuNJFHIwASBx_2_TTmdcMpAYqjag2hOO8NUtjq6wM5ZV1Yv4Y21qsthbW9tLGkXVPF3WwnTU-vj4uITVB0PmdF_nsuEPzbXUfs0cEb4cK"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">MARCH 12, 2024</span>
                <span className="material-symbols-outlined text-secondary text-lg" data-icon="push_pin">push_pin</span>
              </div>
              <h4 className="font-headline text-xl font-bold tracking-tight">The Digital Detox: Creating Spaces of Focus</h4>
              <p className="text-sm text-on-surface-variant max-w-xl">How physical environment influences mental bandwidth in an increasingly connected world.</p>
              <a className="inline-block text-xs font-bold border-b border-primary/20 group-hover:border-secondary transition-colors" href="#">READ ENTRY</a>
            </div>
          </div>

          {/* Journal Entry 2 */}
          <div className="group py-10 flex gap-8 items-start hover:pl-4 transition-all duration-300">
            <div className="hidden sm:block w-32 h-32 shrink-0 bg-surface-container overflow-hidden">
              <img
                alt="Journal thumbnail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="A collection of minimalist leather accessories arranged neatly on a limestone surface, morning sun creating long shadows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg-dFPCSMTjacLVCtSAiOm1ra0lwtU9rhHbBGf0tsaGC4_v8vk789RfEaRkcUtu9WF96F37ogGE0AknArL235NHfnV20q2_aEcSlbyv_IBzvDfF2wqNXXaG9c_qKkKeJwpxBrgn71XEv71_Q4PNJLa-YrjqOQRgOXe_fKaxZ5nAv4VHJht6ULOa1MCyU3vwK9r4S4OBWgQmoCK8cjlkiPBTMoo1E1LfszMRLCii14hSdG0egkcYX-RUqpPL9yp4XVYN0IpC9-6OZmY"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">MARCH 08, 2024</span>
              </div>
              <h4 className="font-headline text-xl font-bold tracking-tight">Curation as Craft: Less but Better</h4>
              <p className="text-sm text-on-surface-variant max-w-xl">Discussing the philosophy of DIETER RAMS in the context of modern interface design.</p>
              <a className="inline-block text-xs font-bold border-b border-primary/20 group-hover:border-secondary transition-colors" href="#">READ ENTRY</a>
            </div>
          </div>

          {/* Journal Entry 3 */}
          <div className="group py-10 flex gap-8 items-start hover:pl-4 transition-all duration-300">
            <div className="hidden sm:block w-32 h-32 shrink-0 bg-surface-container overflow-hidden">
              <img
                alt="Journal thumbnail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="High-end coffee table book open on a white linen bedsheet with a single cup of black coffee beside it, moody natural light."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCMKlxfeOfo_i6GrIqYNk0ac964D1n8FPFyd3fJMpSc8HJcBeYKNFEC6Ifuk_mYgPli8e0fkIbSEWJDjXk9Lfb_bBgq_tJdjtTuWpCdo9LjdHdjSi0gwBZ9J5rXj7c9N6F4CuXLvWRFR6oeHePhBQwmAN3RU0q1rg6nWcdg5U-v5XusP_X9HDdUZ1vwAGdAJV8D3Gd-wcv_MLKfJjQQ8ETn6w6hD7dwqlLHmtzcFbr7vrWpfy7WBmEB79RTBeVT9gSx3ycWORND8Le"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant">MARCH 04, 2024</span>
              </div>
              <h4 className="font-headline text-xl font-bold tracking-tight">The Beauty of Impermanence</h4>
              <p className="text-sm text-on-surface-variant max-w-xl">Wabi-sabi in the age of pixel perfection. Why we crave the organic in a digital world.</p>
              <a className="inline-block text-xs font-bold border-b border-primary/20 group-hover:border-secondary transition-colors" href="#">READ ENTRY</a>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="-mx-6 px-6 md:px-12 py-32 border-t border-outline-variant/10 w-[calc(100%+3rem)]">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <span className="font-manrope text-xs tracking-[0.4em] uppercase text-secondary font-bold">STAY INFORMED</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter">JOIN THE CURATOR'S <br />INNER CIRCLE</h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            A weekly digest of the world’s most refined designs, delivered straight to your inbox. No noise, just precision.
          </p>
          <form className="flex flex-col md:flex-row gap-0 border-b border-primary pb-2 max-w-xl mx-auto focus-within:border-secondary transition-colors">
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 shadow-none font-manrope text-sm tracking-widest p-4 uppercase outline-none"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
            />
            <button className="font-manrope text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:text-secondary transition-colors" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
}
