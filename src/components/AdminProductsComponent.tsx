import { Link } from '@tanstack/react-router'

export function AdminProductsComponent() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed inset-y-0 left-0 flex flex-col z-40 h-screen w-64 border-r border-transparent bg-slate-50">
        <div className="px-8 py-8">
          <h1 className="font-manrope font-black text-2xl tracking-tighter text-black uppercase">CURATOR</h1>
          <p className="text-[10px] tracking-[0.2em] font-manrope font-medium text-zinc-400 mt-1 uppercase">Admin Terminal</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <Link to="/admin/overview" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Overview</span>
          </Link>
          <Link to="/admin/products" className="flex items-center gap-3 px-4 py-3 text-black font-bold border-l-2 border-blue-600 bg-slate-100 group">
            <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Products</span>
          </Link>
          <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Orders</span>
          </Link>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Customers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group" href="#">
            <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Content</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-slate-100 transition-colors duration-200 group" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-manrope tracking-tight font-medium text-sm">Settings</span>
          </a>
        </nav>
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-zinc-200 overflow-hidden rounded-full">
              <img alt="Chief Curator Profile" className="h-full w-full object-cover" data-alt="Professional headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCocBuqyThOzSfWm_HmVohwmciq3QLsHWot37kRrTL2YKlZI_a8WB1rZELtQ1BFf0wIZgfJBZVMacuTZf1yGMmHkXS0F2Z99HhX4RIHjm_ho2rtGH3YWSt7VntkoH8SlZqzHh7bOZOLOzwdvDBN6opjCZ3lXz-8NGuheIaTXi3jLaaPKvXR2SvzLftUVQu0KvJJgWalLnwurvXaF_HK9nvsCHBbhZ2iXSfUGBOk-_7jdpsSWChqQ9bfgLQmrgeWTk2CWefR6bPqmY9i"/>
            </div>
            <div>
              <p className="text-xs font-bold">Erik V.</p>
              <p className="text-[10px] text-zinc-400">Chief Curator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="pl-64 pt-16 min-h-screen">
        {/* Top Navbar */}
        <header className="fixed top-0 right-0 left-64 h-16 flex items-center justify-between px-8 z-30 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <h2 className="font-manrope font-black text-xl text-black tracking-tighter">THE DIGITAL CURATOR</h2>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-zinc-400" data-icon="search">search</span>
              <input className="bg-surface-container border-none text-xs px-10 py-2 w-64 focus:ring-1 focus:ring-zinc-200 font-manrope uppercase tracking-widest outline-none" placeholder="Search Inventory..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="text-zinc-500 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </button>
          </div>
        </header>

        {/* Editorial Content Section */}
        <div className="p-12 max-w-7xl mx-auto">
          {/* Header & Action Row */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-secondary font-manrope font-bold text-xs uppercase tracking-widest mb-4 block">Archive Management</span>
              <h3 className="font-headline text-5xl font-extrabold tracking-tighter text-primary leading-none">Inventory Control</h3>
              <p className="mt-6 text-on-surface-variant font-body leading-relaxed max-w-md">Refine the collection. Manage stock levels, curation status, and market positioning for the seasonal rotation.</p>
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined" data-icon="add">add</span>
              <span className="font-manrope font-bold text-xs uppercase tracking-widest">New Product</span>
            </button>
          </div>

          {/* Filter Bar: Editorial Style */}
          <div className="flex flex-wrap items-center gap-10 mb-12 py-6 border-y border-outline-variant/20">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Category</span>
              <select className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer">
                <option>All Collections</option>
                <option>Furniture</option>
                <option>Ceramics</option>
                <option>Lighting</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Availability</span>
              <select className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer text-secondary">
                <option>All Items</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Price Range</span>
              <select className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer">
                <option>All Tiers</option>
                <option>Premium ($1000+)</option>
                <option>Mid-Range</option>
              </select>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Displaying 24 of 142 Products</span>
            </div>
          </div>

          {/* Product Table */}
          <div className="bg-surface-container-lowest overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500">Thumbnail</th>
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500">Product Details</th>
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500">SKU</th>
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 text-right">Price</th>
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 text-center">Stock</th>
                  <th className="py-5 px-6 font-manrope text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Product 1 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-6 px-6">
                    <div className="h-20 w-16 bg-surface-container overflow-hidden">
                      <img alt="Carrara Marble Chair" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Minimalist white marble chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs0enbLM2bW1jp9DaaQnVm1_qiBLuosaySb7J_AtzTWfwibNOwC4dLtr9QCwZPJILINcQZooow9xofJxFJ7MAf7utXDrpuV0__siBBe0-bw3PSUDlN-IpLOPprFRpArm8hmwvQselulETnpefn_DszfS8wK67r4bw7c70vJbuiU-ly6j34E9c-2A12gYVNO5sPsk-PF39qZtXW00JmjNVZRiVmOw9wVG3f-e_ADApDL9iDD3yYy9YVP9xnqkGvjxbX8n3sgHJCmuDO"/>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="font-manrope font-bold text-sm tracking-tight">Carrara Marble Study Chair</p>
                    <p className="text-xs text-on-surface-variant mt-1">Interior / Seating</p>
                  </td>
                  <td className="py-6 px-6 font-mono text-[10px] text-zinc-400">CH-MARB-001</td>
                  <td className="py-6 px-6 text-right font-manrope font-bold text-sm">$2,450.00</td>
                  <td className="py-6 px-6 text-center">
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-surface-container text-[10px] font-bold tracking-widest uppercase">
                      12 Units
                    </div>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="text-zinc-300 hover:text-black transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </td>
                </tr>
                {/* Product 2 (Low Stock) */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-6 px-6">
                    <div className="h-20 w-16 bg-surface-container overflow-hidden">
                      <img alt="Aura Table Lamp" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Modernist geometric table lamp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtekHyPjVuEfDRrCa18ApB1uvZQbkEUSh9X1MJ_NR0NnAKpglsGU0-L030W7KoaHFDXiJ0LUs1ETKZFrFi0QMj9J7gtvsVkror_jnaROJ2_Jk19HjNWWw8ifx4zArl9iEmtRF1hL51hIvkfGtxXPImcGw9JLt9-wpfv_8Q0Uuo1m9VC2xv_wYvgf6yVlkq3Upo5ABJmwHpcq5Cpb7gJmdDJdr-am3obZGsu3St0BwlOCQu69D99KSN1B8gP2Rog5K-uD7VuWU8EnRS"/>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="font-manrope font-bold text-sm tracking-tight">Aura Brass Table Lamp</p>
                    <p className="text-xs text-on-surface-variant mt-1">Lighting / Table</p>
                  </td>
                  <td className="py-6 px-6 font-mono text-[10px] text-zinc-400">LT-AURA-99</td>
                  <td className="py-6 px-6 text-right font-manrope font-bold text-sm">$890.00</td>
                  <td className="py-6 px-6 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <div className="px-3 py-1 bg-error-container text-error text-[10px] font-bold tracking-widest uppercase">
                        2 Units Left
                      </div>
                      <span className="text-[9px] text-error font-bold uppercase tracking-tighter">Critically Low</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="text-zinc-300 hover:text-black transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </td>
                </tr>
                {/* Product 3 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-6 px-6">
                    <div className="h-20 w-16 bg-surface-container overflow-hidden">
                      <img alt="Lunar Ceramic Vessel" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Handcrafted textured ceramic vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSdzuZoZWqaQmd3nf0bfqTdm7V7wlFvGv2p2NmX1PoQT9KCxSlclm0Sq2dD0mETY-TVwpOl-q3ay_hF-x9vdBvZsXX6xrqURXP9VVYF_NVpPLZLVeSJWlifQgcGYjMSmHDWWa5nXOpYW4yWWqq_D-kUkM_6vNok7gLACPgZYFKAgCmKDeK4QxU7NKXSo3JN0oMdo4DI3AhZtC3S2DJN6iCHn8Hy0TJ9K6Znm49i8OnvIhKiQSUCGpwbDvIlcxA4BGPaYvP6jGwjMS7"/>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="font-manrope font-bold text-sm tracking-tight">Lunar Ceramic Vessel No. 4</p>
                    <p className="text-xs text-on-surface-variant mt-1">Decor / Ceramics</p>
                  </td>
                  <td className="py-6 px-6 font-mono text-[10px] text-zinc-400">DC-LUN-04</td>
                  <td className="py-6 px-6 text-right font-manrope font-bold text-sm">$420.00</td>
                  <td className="py-6 px-6 text-center">
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-surface-container text-[10px] font-bold tracking-widest uppercase">
                      48 Units
                    </div>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="text-zinc-300 hover:text-black transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </td>
                </tr>
                {/* Product 4 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-6 px-6">
                    <div className="h-20 w-16 bg-surface-container overflow-hidden">
                      <img alt="Noir Oak Table" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Minimalist dark oak dining table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByircYJJs5Z9wL1MrQ2h9LTj86II9ugsvmcIQ34HObp4cesbpcc54Kj_XaUJfXZOXTR9aO3iyKe0wcIVYXiSAFACjsZGRKwrzOl7Ceb_6SO4A5lG9im9ju39oHzi1s0jT9jKHPBrpKeCOAcYB0h3C4t4UNWVHF5w9mBPBs7tXjp7BWFhtT-qsMfXEKIUfU3kJpjbdrTFM3F8c8ZCH09KoRgPH_CsWrXUEQArrFpQkitaZ384P0LCE17r4qKAGMlHzKcYHyhZeLVK55"/>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="font-manrope font-bold text-sm tracking-tight">Noir Solid Oak Dining Table</p>
                    <p className="text-xs text-on-surface-variant mt-1">Furniture / Tables</p>
                  </td>
                  <td className="py-6 px-6 font-mono text-[10px] text-zinc-400">FN-OAK-600</td>
                  <td className="py-6 px-6 text-right font-manrope font-bold text-sm">$4,800.00</td>
                  <td className="py-6 px-6 text-center">
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-surface-container text-[10px] font-bold tracking-widest uppercase">
                      5 Units
                    </div>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="text-zinc-300 hover:text-black transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination: Minimalist */}
          <div className="mt-12 flex justify-between items-center">
            <button className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors" data-icon="arrow_back">arrow_back</span>
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest">Previous Page</span>
            </button>
            <div className="flex gap-4">
              <span className="font-manrope font-bold text-sm border-b-2 border-black pb-1">01</span>
              <span className="font-manrope font-bold text-sm text-zinc-300 hover:text-black transition-colors cursor-pointer">02</span>
              <span className="font-manrope font-bold text-sm text-zinc-300 hover:text-black transition-colors cursor-pointer">03</span>
              <span className="font-manrope font-bold text-sm text-zinc-300">...</span>
              <span className="font-manrope font-bold text-sm text-zinc-300 hover:text-black transition-colors cursor-pointer">06</span>
            </div>
            <button className="flex items-center gap-2 group">
              <span className="font-manrope font-bold text-[10px] uppercase tracking-widest">Next Page</span>
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      {/* Contextual Summary Panel (Asymmetric Placement) */}
      <section className="fixed bottom-12 right-12 w-80 bg-white p-8 border border-outline-variant/10 shadow-2xl z-20">
        <h4 className="font-manrope font-black text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">Inventory Health</h4>
        <div className="space-y-6">
          <div className="flex justify-between items-baseline">
            <span className="text-[10px] uppercase font-bold text-zinc-500">Total Asset Value</span>
            <span className="text-xl font-manrope font-extrabold">$248,150</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-[10px] uppercase font-bold text-zinc-500">Low Stock Alerts</span>
            <span className="text-xl font-manrope font-extrabold text-error">03</span>
          </div>
          <div className="pt-6 border-t border-outline-variant/10">
            <div className="w-full h-1 bg-surface-container relative">
              <div className="absolute inset-y-0 left-0 bg-secondary w-3/4"></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[9px] uppercase font-bold text-zinc-400">Warehouse Capacity</span>
              <span className="text-[9px] uppercase font-bold text-zinc-400">75%</span>
            </div>
          </div>
        </div>
        <button className="w-full mt-8 py-3 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
      </section>
    </div>
  )
}
