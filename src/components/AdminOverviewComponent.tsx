
import { Link as RouterLink } from '@tanstack/react-router';
import { useAdminMetrics } from '../hooks/useAdminMetrics';

export function AdminOverviewComponent() {
  const { data: stats, isLoading } = useAdminMetrics();
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed inset-y-0 left-0 flex flex-col z-40 h-screen w-64 border-r border-transparent bg-slate-50 font-manrope tracking-tight font-medium text-sm">
        <div className="px-8 py-10">
          <h1 className="font-manrope font-black text-2xl tracking-tighter text-black ">CURATOR</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mt-1">Admin Terminal</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {/* Overview Tab (Active) */}
          <RouterLink className="flex items-center gap-3 px-4 py-3 text-black font-bold border-l-2 border-blue-600 bg-slate-100 transition-colors duration-200" to="/admin/overview">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Overview</span>
          </RouterLink>
          <RouterLink className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200" to="/admin/products">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Products</span>
          </RouterLink>
          <RouterLink className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200" to="/admin/orders">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            <span>Orders</span>
          </RouterLink>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 :bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span>Customers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 :bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
            <span>Content</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 :bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span>Analytics</span>
          </a>
        </nav>
        <div className="p-4 border-t border-transparent">
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 :bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="ml-64 min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-64 flex items-center justify-between px-8 z-30 h-16 w-full bg-white/80 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-400 text-lg" data-icon="search">search</span>
              <input className="bg-surface-container border-none text-[10px] tracking-widest px-10 py-2 w-64 focus:ring-1 focus:ring-zinc-200 uppercase font-manrope" placeholder="SEARCH ASSETS..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
            <div className="h-8 w-8 bg-zinc-200 rounded-full overflow-hidden border border-outline-variant/20">
              <img alt="Chief Curator Profile" className="w-full h-full object-cover" data-alt="Professional studio portrait of a male curator with minimal lighting and clean composition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9f9EQXnP-594iMbqArd67QAG4uH3KJ_0FEbv9nVX8R8JnLxo83N2oHjdPR7_201QAnE6RiRFZMB0txETHuVzP0z3e9ToGqUmQaCIPqdAkFbq8LjcMnjN4HAtBECTnGXr2lNrj2LaBHo3FQfAGDR_Mq_fXJHFPkqS7Ux66s-qZxZTPRbEs7P6mi0L29d3WZwvfHaYlUMhz8KIq3Ws1sjsrsZmpp0aOb6xPkj9MkJj2VraWxDxv8i7OtD7NHKkBia7ph22r_wJ4KYgP"/>
            </div>
          </div>
        </header>

        {/* Canvas */}
        <div className="mt-16 p-10 max-w-7xl mx-auto space-y-12">
          {/* Hero Editorial Header */}
          <section className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-0">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-extrabold tracking-tighter text-primary leading-none">OVERVIEW</h2>
              <p className="text-on-surface-variant mt-4 font-body leading-relaxed max-w-md">The pulse of the digital showroom. Monitor performance trajectories and optimize the curation experience in real-time.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-surface-container-highest px-6 py-3 text-primary text-[11px] font-bold tracking-widest uppercase hover:bg-surface-container transition-colors">Export Report</button>
              <button className="bg-primary px-6 py-3 text-on-primary text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">Live Showroom</button>
            </div>
          </section>

          {/* Sales Metrics Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between h-48 border border-outline-variant/10 hover:bg-surface-container-low transition-colors group">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">GMV Growth</span>
                <span className="material-symbols-outlined text-secondary text-lg" data-icon="trending_up">trending_up</span>
              </div>
              <div>
                <div className="text-4xl font-extrabold tracking-tighter">
                  {isLoading ? '...' : `$${stats?.totalRevenue?.toLocaleString() ?? '0.00'}`}
                </div>
                <div className="text-[11px] text-secondary font-bold mt-1">+12.4% <span className="text-zinc-400 font-normal">vs last month</span></div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between h-48 border border-outline-variant/10 hover:bg-surface-container-low transition-colors group">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">Average Order Value</span>
                <span className="material-symbols-outlined text-zinc-400 text-lg" data-icon="payments">payments</span>
              </div>
              <div>
                <div className="text-4xl font-extrabold tracking-tighter">
                  {isLoading ? '...' : `$${stats?.averageOrderValue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? '0.00'}`}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">Consistent performance based on {stats?.totalOrders ?? 0} orders</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between h-48 border border-outline-variant/10 hover:bg-surface-container-low transition-colors group">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">Conversion Rate</span>
                <span className="material-symbols-outlined text-zinc-400 text-lg" data-icon="ads_click">ads_click</span>
              </div>
              <div>
                <div className="text-4xl font-extrabold tracking-tighter">
                  {isLoading ? '...' : `${stats?.conversionRate ?? 0}%`}
                </div>
                <div className="text-[11px] text-error font-bold mt-1">-0.8% <span className="text-zinc-400 font-normal">from peak period</span></div>
              </div>
            </div>
          </section>

          {/* Revenue Trends Chart Section */}
          <section className="bg-surface-container-lowest p-10 border border-outline-variant/10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">REVENUE TRENDS</h3>
                <p className="text-[11px] text-on-surface-variant uppercase tracking-widest mt-1">Fiscal Period: Oct 1 - Oct 31</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Revenue</span>
              </div>
            </div>

            {/* Mock Line Chart */}
            <div className="h-[300px] w-full flex items-end gap-1 relative overflow-hidden group">
              {/* Grid Lines (Subtle) */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
                <div className="border-t border-primary w-full"></div>
                <div className="border-t border-primary w-full"></div>
                <div className="border-t border-primary w-full"></div>
                <div className="border-t border-primary w-full"></div>
              </div>
              {/* Chart Visual (SVG) */}
              <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 1000 300">
                <path d="M0,280 L100,240 L200,260 L300,180 L400,200 L500,120 L600,140 L700,60 L800,90 L900,40 L1000,70" fill="none" stroke="#124af0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                <path d="M0,280 L100,240 L200,260 L300,180 L400,200 L500,120 L600,140 L700,60 L800,90 L900,40 L1000,70 V300 H0 Z" fill="url(#chartGradient)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#124af0"></stop>
                    <stop offset="100%" stopColor="#f9f9f9"></stop>
                  </linearGradient>
                </defs>
              </svg>
              {/* Bottom Axis */}
              <div className="absolute bottom-0 w-full flex justify-between px-2 text-[10px] text-zinc-400 font-mono">
                <span>WEEK 01</span>
                <span>WEEK 02</span>
                <span>WEEK 03</span>
                <span>WEEK 04</span>
              </div>
            </div>
          </section>

          {/* Two-Column Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Recent Orders (3/5) */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-extrabold tracking-tight">RECENT ORDERS</h3>
                <a className="text-[11px] font-bold text-secondary uppercase tracking-widest hover:underline" href="#">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/10 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
                      <th className="pb-4 font-bold">Reference</th>
                      <th className="pb-4 font-bold">Customer</th>
                      <th className="pb-4 font-bold">Status</th>
                      <th className="pb-4 font-bold text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-outline-variant/5 hover:bg-surface-container-low transition-colors">
                      <td className="py-5 font-mono text-zinc-500">#ORD-9021</td>
                      <td className="py-5 font-bold">Alexander Vance</td>
                      <td className="py-5">
                        <span className="px-2 py-1 bg-blue-50 text-[10px] font-bold text-secondary uppercase tracking-widest rounded-full">Processing</span>
                      </td>
                      <td className="py-5 font-bold text-right">$895.00</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5 hover:bg-surface-container-low transition-colors">
                      <td className="py-5 font-mono text-zinc-500">#ORD-9020</td>
                      <td className="py-5 font-bold">Elena Rossi</td>
                      <td className="py-5">
                        <span className="px-2 py-1 bg-green-50 text-[10px] font-bold text-green-600 uppercase tracking-widest rounded-full">Delivered</span>
                      </td>
                      <td className="py-5 font-bold text-right">$1,240.00</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5 hover:bg-surface-container-low transition-colors">
                      <td className="py-5 font-mono text-zinc-500">#ORD-9019</td>
                      <td className="py-5 font-bold">Julian Thorne</td>
                      <td className="py-5">
                        <span className="px-2 py-1 bg-red-50 text-[10px] font-bold text-error uppercase tracking-widest rounded-full">Cancelled</span>
                      </td>
                      <td className="py-5 font-bold text-right">$320.00</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5 hover:bg-surface-container-low transition-colors">
                      <td className="py-5 font-mono text-zinc-500">#ORD-9018</td>
                      <td className="py-5 font-bold">Sophia Chen</td>
                      <td className="py-5">
                        <span className="px-2 py-1 bg-green-50 text-[10px] font-bold text-green-600 uppercase tracking-widest rounded-full">Delivered</span>
                      </td>
                      <td className="py-5 font-bold text-right">$2,100.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Performing Collections (2/5) */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-xl font-extrabold tracking-tight">TOP COLLECTIONS</h3>
              <div className="space-y-4">
                {/* Collection Item 1 */}
                <div className="flex items-center gap-4 bg-surface-container-lowest p-4 border border-outline-variant/10 hover:border-secondary/40 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-zinc-100 flex-shrink-0">
                    <img alt="Minimalist Watch" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Minimalist wrist watch with clean white face and black leather strap on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApDvV27GZC_hKzeLLeC5aLwBcib0wEYY680_ne-MhubREoqlpNPGA4fKhx7cfJMxnuJG3CrZ7rQA1msamarbXGhrWjCaDS56iUjeLtMehCQtmhq3bGdhKVdXqhxswr3uYaRKhe5U2GM6qKPmJuFiyNppme97p8sqJY-TtakvnrXQYhtJ_CPIICwgG5lT77JFyKQdieUwHRA150CqXSFu-444Ebt_bw9MuPrL-cdQl5wSjKNo_9C61xoecnRpPnac7Bln-IRInITO2"/>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Winter 2024</div>
                    <div className="font-bold text-primary">MONOCHROME ESSENTIALS</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">$42.5k</div>
                    <div className="text-[10px] text-green-600 font-bold">+18%</div>
                  </div>
                </div>
                {/* Collection Item 2 */}
                <div className="flex items-center gap-4 bg-surface-container-lowest p-4 border border-outline-variant/10 hover:border-secondary/40 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-zinc-100 flex-shrink-0">
                    <img alt="Red Sneaker" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Vibrant red sports sneaker angled dramatically on a clean studio surface with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkcGmF6HnyywfEiqAbvhqYMTx04WlhXAbsbr7F0h1Id6yulX7ASvISxRl5hI9NaC5CkwCM8Ttab4es3LjiGcW4z7mIsrTihuEs_z4p17CiyzFqHfc4zniYIsQU70NIrNgGz43VP4VYordqgjsE-5UxA912sUe5Gt7h-HpxDLmm_Sq0RcS4bsDhqYzSzw95mjiko669WOndEPYEnFarJ20-jwcAl64vsIEIVwILIIi7aWLlowTNL3E7WHwprjbPmWB_O9fWVOA4V4r"/>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Active Series</div>
                    <div className="font-bold text-primary">KINETIC PERFORMANCE</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">$38.2k</div>
                    <div className="text-[10px] text-green-600 font-bold">+12%</div>
                  </div>
                </div>
                {/* Collection Item 3 */}
                <div className="flex items-center gap-4 bg-surface-container-lowest p-4 border border-outline-variant/10 hover:border-secondary/40 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-zinc-100 flex-shrink-0">
                    <img alt="Headphones" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Sleek black wireless headphones with brushed metal finish on a textured gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGraX8_wrbZT2EmXEiJVtImk3wQXoRlrjCAt2ArjZIxtJ51px4mYCYM9KWrvXyaDcRpoQpm6piKlTbDF1JkiPhDUEdigl-kVDzOUrWzcugYyorvzTqNLpt02QH99GuucDP7XKVJTUyHucgh7uWmkIJy0uoeL8MOjGoxHJkfmWv7RaDSmDX00UqRoPyJqimR-FOnLWmM7op-oRclDO76XdHHsX6wxXGA_1NO939mOQ1zV57kNc1yUbsBYe_60T-Fje6JjuH-jKiC_Vd"/>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Audio Lab</div>
                    <div className="font-bold text-primary">ACOUSTIC LUXURY</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">$29.1k</div>
                    <div className="text-[10px] text-zinc-400 font-bold">0%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contextual FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all z-50 rounded-full">
        <span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
      </button>
    </div>
  );
}
