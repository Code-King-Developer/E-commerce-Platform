import { Outlet, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function RootComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down past 80px: hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-on-surface">
      <header className={`bg-white fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center w-full px-6 py-6 md:py-8 max-w-screen-2xl mx-auto font-manrope tracking-tight">
          <div className="text-2xl font-black tracking-tighter text-primary uppercase">
            <Link to="/" activeProps={{ className: "text-primary opacity-100" }} activeOptions={{ exact: true }}>THE DIGITAL CURATOR</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Shop</Link>
            <Link to="/categories" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Categories</Link>
            <Link to="/" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Editorial</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" activeProps={{ className: "text-primary opacity-100 font-bold" }} className="material-symbols-outlined scale-95 active:duration-150 ">person</Link>
            <button className="material-symbols-outlined scale-95 active:duration-150">shopping_bag</button>
          </div>
        </div>
      </header>

      <main className="flex-grow grow flex items-center justify-center pt-32 pb-20 px-6 w-full">
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 border-t border-outline-variant border-opacity-10 max-w-screen-2xl mx-auto font-manrope text-[10px] uppercase tracking-widest">
          <div className="text-sm font-bold text-primary mb-6 md:mb-0">
            THE DIGITAL CURATOR
          </div>
          <div className="text-on-surface-variant mb-6 md:mb-0">
            © 2026 THE DIGITAL CURATOR. EDITORIAL PRECISION.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary transition-colors text-on-surface-variant">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors text-on-surface-variant">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors text-on-surface-variant">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
