import { Link, useLocation } from '@tanstack/react-router';

export function SideNavBarComponent() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="hidden md:flex flex-col gap-8 py-12 w-64 border-r border-outline-variant/20 bg-surface shrink-0 min-h-[calc(100vh-160px)]">
      <div className="px-4 mb-4">
        <h3 className="text-black font-manrope font-bold text-lg uppercase tracking-widest">Account</h3>
        <p className="text-on-surface-variant text-xs font-manrope">Premium Member</p>
      </div>
      <nav className="flex flex-col font-manrope font-medium">
        <Link
          to="/profile"
          className={`flex items-center gap-3 pl-4 transition-all py-2 border-l-2 ${path === '/profile' ? 'text-black font-bold border-secondary bg-surface-container-low' : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'}`}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: path === '/profile' ? "'FILL' 1" : "'FILL' 0" }}>dashboard</span> Overview
        </Link>
        <Link
          to="/profile/orders"
          className={`flex items-center gap-3 pl-4 transition-all py-2 border-l-2 ${path === '/profile/orders' ? 'text-black font-bold border-secondary bg-surface-container-low' : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'}`}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: path === '/profile/orders' ? "'FILL' 1" : "'FILL' 0" }}>package_2</span> Orders
        </Link>
        <Link
          to="/profile/wishlist"
          className={`flex items-center gap-3 pl-4 transition-all py-2 border-l-2 ${path === '/profile/wishlist' ? 'text-black font-bold border-secondary bg-surface-container-low' : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'}`}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: path === '/profile/wishlist' ? "'FILL' 1" : "'FILL' 0" }}>favorite</span> Wishlist
        </Link>
        <Link
          to="/profile/settings"
          className={`flex items-center gap-3 pl-4 transition-all py-2 border-l-2 ${path === '/profile/settings' ? 'text-black font-bold border-secondary bg-surface-container-low' : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'}`}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: path === '/profile/settings' ? "'FILL' 1" : "'FILL' 0" }}>settings</span> Settings
        </Link>
      </nav>
    </aside>
  );
}
