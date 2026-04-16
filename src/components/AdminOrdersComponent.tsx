import { Link } from '@tanstack/react-router'

export function AdminOrdersComponent() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      {/* SideNavBar Execution */}
      <aside className="fixed inset-y-0 left-0 flex flex-col z-40 h-screen w-64 border-r border-transparent bg-slate-50 dark:bg-zinc-950 font-manrope tracking-tight font-medium text-sm">
        <div className="px-8 py-10">
          <span className="font-manrope font-black text-2xl tracking-tighter text-black dark:text-white">CURATOR</span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mt-1">Admin Terminal</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" to="/admin/overview">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link className="flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" to="/admin/products">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span>Products</span>
          </Link>
          {/* Active State Logic: Orders is active */}
          <Link className="flex items-center gap-3 px-8 py-3 text-black dark:text-white font-bold border-l-2 border-blue-600 dark:border-blue-500 bg-slate-100 dark:bg-zinc-900" to="/admin/orders">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            <span>Orders</span>
          </Link>
          <a className="flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span>Customers</span>
          </a>
          <a className="flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
            <span>Content</span>
          </a>
          <a className="flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span>Analytics</span>
          </a>
          <a className="mt-auto flex items-center gap-3 px-8 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="p-8 border-t border-slate-100 dark:border-zinc-900 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] text-white">AC</div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">Admin user profile</p>
            <p className="text-[10px] text-zinc-400">Chief Curator</p>
          </div>
        </div>
      </aside>

      {/* TopNavBar Execution */}
      <header className="fixed top-0 right-0 left-64 h-16 flex items-center justify-between px-8 z-30 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-transparent">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md focus-within:ring-1 focus-within:ring-zinc-200 transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" data-icon="search">search</span>
            <input className="w-full bg-surface-container border-none h-10 pl-10 pr-4 font-manrope text-[10px] uppercase tracking-widest focus:ring-0" placeholder="SEARCH ORDERS, CUSTOMERS, SKUS..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
          </div>
          <span className="font-manrope font-black text-lg text-black dark:text-white tracking-tighter">THE DIGITAL CURATOR</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pl-64 pt-16 min-h-screen">
        <div className="p-12 max-w-7xl mx-auto">
          {/* Page Header (Editorial Precision) */}
          <div className="flex justify-between items-end mb-20">
            <div className="space-y-4">
              <h1 className="text-[5rem] leading-none font-extrabold tracking-tighter text-primary">Orders</h1>
              <p className="text-on-surface-variant font-body max-w-md">Refining the logistical flow. Manage pending fulfillments and curate customer interactions.</p>
            </div>
            <div className="flex gap-4 mb-2">
              <button className="bg-surface-container-highest px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">Export CSV</button>
              <button className="bg-primary text-on-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">New Manual Order</button>
            </div>
          </div>

          {/* Bento Status Overview */}
          <div className="grid grid-cols-12 gap-5 mb-20">
            <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-8 border-l-4 border-secondary">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">Pending Fulfillment</p>
              <p className="text-5xl font-black tracking-tighter">124</p>
              <div className="mt-8 flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                <span className="text-[10px] font-bold">+12% vs last week</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-8">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">Average Processing Time</p>
              <p className="text-5xl font-black tracking-tighter">1.8d</p>
              <div className="mt-8 flex items-center gap-2 text-zinc-400">
                <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
                <span className="text-[10px] font-bold">In-line with KPI</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">System Health</p>
                <p className="text-xl font-bold mt-2">Operational</p>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <div className="h-1 flex-1 bg-black"></div>
                <div className="h-1 flex-1 bg-black"></div>
                <div className="h-1 flex-1 bg-black"></div>
                <div className="h-1 flex-1 bg-secondary"></div>
                <div className="h-1 flex-1 bg-secondary"></div>
              </div>
            </div>
          </div>

          {/* Master List Table */}
          <div className="bg-surface-container-lowest overflow-hidden">
            <div className="p-8 border-b border-surface-container-low flex justify-between items-center">
              <div className="flex gap-8">
                <button className="text-xs font-bold border-b-2 border-black pb-1">ALL ORDERS</button>
                <button className="text-xs font-medium text-zinc-400 hover:text-black transition-colors">UNFULFILLED</button>
                <button className="text-xs font-medium text-zinc-400 hover:text-black transition-colors">SHIPPED</button>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-zinc-400 cursor-pointer" data-icon="filter_list">filter_list</span>
                <span className="material-symbols-outlined text-zinc-400 cursor-pointer" data-icon="sort">sort</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-[10px] uppercase tracking-widest text-on-surface-variant">
                    <th className="px-8 py-5 font-semibold">Order ID</th>
                    <th className="px-8 py-5 font-semibold">Customer</th>
                    <th className="px-8 py-5 font-semibold">Status</th>
                    <th className="px-8 py-5 font-semibold">Total</th>
                    <th className="px-8 py-5 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {/* Row 1: Placed */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-10">
                      <p className="text-xs font-bold">#ORD-99210</p>
                      <p className="text-[10px] text-zinc-400 mt-1">OCT 24, 2023</p>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-zinc-400" data-icon="person">person</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Julianne Vough</p>
                          <p className="text-[10px] text-zinc-400">julianne@vough.design</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Placed</span>
                      </div>
                    </td>
                    <td className="px-8 py-10 font-bold text-xs">$1,240.00</td>
                    <td className="px-8 py-10 text-right">
                      <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline">Fulfill</button>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">Contact</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2: Paid */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-10">
                      <p className="text-xs font-bold">#ORD-99209</p>
                      <p className="text-[10px] text-zinc-400 mt-1">OCT 24, 2023</p>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-3">
                        <img alt="Customer avatar" className="w-10 h-10 object-cover" data-alt="studio portrait of middle-aged man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApTVMOj01VewdpStYaCLapfmg-1KzMt_7_kAg8MW4YwiCOJLCtl4_RgGcdnsAugh4Nezt_bya6KKxe3U9ImiCKh06ZY6oIwVe4zARK-8Qt3HiwzC9XdQXvq4xBz3kSlBi_N3P950daek4donERPxq-6umz4fdS0HhEXdEvVWhs6vIvqVm15SIsRa5xZFDPzq7Wj2T4qCJ11yyAkRVdYC4_UXts51Q81wfIIMT4AayyltUMsLgtePKGJWW64XLiv3eX_ygd6wbNozGU"/>
                        <div>
                          <p className="text-xs font-bold">Marcus Thorne</p>
                          <p className="text-[10px] text-zinc-400">m.thorne@atlier.co</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Paid</span>
                      </div>
                    </td>
                    <td className="px-8 py-10 font-bold text-xs">$3,100.50</td>
                    <td className="px-8 py-10 text-right">
                      <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline">Fulfill</button>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">Contact</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3: Shipped */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-10">
                      <p className="text-xs font-bold">#ORD-99208</p>
                      <p className="text-[10px] text-zinc-400 mt-1">OCT 23, 2023</p>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-zinc-400" data-icon="person">person</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold">Elena Rossi</p>
                          <p className="text-[10px] text-zinc-400">e.rossi@milan.it</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Shipped</span>
                      </div>
                    </td>
                    <td className="px-8 py-10 font-bold text-xs">$890.00</td>
                    <td className="px-8 py-10 text-right">
                      <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline">Track</button>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">Contact</button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4: Delivered */}
                  <tr className="group hover:bg-surface-container-low transition-colors">
                    <td className="px-8 py-10">
                      <p className="text-xs font-bold">#ORD-99207</p>
                      <p className="text-[10px] text-zinc-400 mt-1">OCT 22, 2023</p>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-3">
                        <img alt="Customer avatar" className="w-10 h-10 object-cover" data-alt="portrait of a young woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxIgEnB28D0hIfDLAsIUe149bmYbjImr65MnXOpjr5e4OX25oBpgrTrOGJXu6vaGqz8VpIOejRO38Cq5qz7-cKuEK86CmbEuNNZbRg-vIlICJgRxZGC9jKDTQsqLGIqznlEBgWp1OAofP6OvJAK3YsxClDNiSNxGz22pDBKAf91qgh2TJdz2FfSv_zabyPA-IQrusTYLbF48iTmewZxG-yWxp0fEbIV9klhMIkNSSuNbqCo8bm9ivR5aYljjUUEdhpqVL4QaDfGGhV"/>
                        <div>
                          <p className="text-xs font-bold">Sarah Jenkins</p>
                          <p className="text-[10px] text-zinc-400">s.jenkins@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Delivered</span>
                      </div>
                    </td>
                    <td className="px-8 py-10 font-bold text-xs">$520.00</td>
                    <td className="px-8 py-10 text-right">
                      <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">View Archive</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination */}
            <div className="p-8 border-t border-surface-container-low flex justify-between items-center">
              <p className="text-[10px] font-medium text-zinc-400">SHOWING 4 OF 1,240 ORDERS</p>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center bg-surface-container text-black hover:bg-black hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-black text-white">1</button>
                <button className="w-8 h-8 flex items-center justify-center bg-surface-container text-black hover:bg-black hover:text-white transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center bg-surface-container text-black hover:bg-black hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Selection / Editorial Card */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-primary text-on-primary p-12 flex flex-col justify-between aspect-video md:aspect-auto">
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold tracking-tighter leading-tight">Reviewing the <br/>Collection Flow</h3>
                <p className="text-on-primary-fixed-variant text-sm font-body max-w-xs">Weekly optimization report: Fulfillment speed increased by 8.4% since the last batch update.</p>
              </div>
              <a className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group" href="#">
                View Logistical Insights
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between border-t-4 border-black">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Curator's Note</p>
                <p className="text-xl font-bold tracking-tight">"Each order is a curated experience. Speed never compromises the presentation."</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden">
                  <img alt="Chief Curator" className="w-full h-full object-cover" data-alt="Close up portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRcPdlEsKbPxyqrDI0qgE4dUKVFPjW4Q3pskVuxDDPFc3D3vWMmAuD2yg1M_QFunqdMy4BlhFgRF2BWbohzONnzZMovGEGDfOZKHwryeASWOUoWDD0sxiG-TFZ5WG22YJnVYeMiJcduwZZqgOu3tNUFVK3Hwzja1Wb9Ge3ZxdJDYBUPTKFkPPzKhtDjo4fGfNQJ337Qkc_uS0YzDqtVuTsVpbBaAZ6KpgHKLUkWh3T8KnCDN5VcpxwUH1HCzo5z5rcnvTxv-kQ2XUm"/>
                </div>
                <div>
                  <p className="text-xs font-bold">Elena Thorne</p>
                  <p className="text-[10px] text-zinc-400">Chief Curator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
