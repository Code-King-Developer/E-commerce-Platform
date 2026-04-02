import { Outlet, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function RootComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="flex justify-between items-center w-full px-6 py-6 md:py-8 max-w-screen-2xl mx-auto font-manrope tracking-tight min-h-[88px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSearchActive ? (
              <motion.div
                key="nav-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center w-full"
              >
                <div className="text-2xl font-black tracking-tighter text-primary uppercase">
                  <Link to="/" activeProps={{ className: "text-primary opacity-100" }} activeOptions={{ exact: true }}>THE DIGITAL CURATOR</Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                  <Link to="/" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Shop</Link>
                  <Link to="/categories" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Categories</Link>
                  <Link to="/collections" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Collections</Link>
                  <Link to="/editorial" activeProps={{ className: "text-primary font-bold opacity-100 border-b-2 border-primary pb-1" }} activeOptions={{ exact: true }} className="text-on-surface-variant hover:opacity-70 transition-opacity duration-300">Editorial</Link>
                </nav>
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsSearchActive(true)} className="material-symbols-outlined scale-95 active:duration-150 transition-colors hover:opacity-70">search</button>
                  <Link to="/login" activeProps={{ className: "text-primary opacity-100 font-bold" }} className="material-symbols-outlined scale-95 active:duration-150 transition-colors hover:opacity-70">person</Link>
                  <button className="material-symbols-outlined scale-95 active:duration-150 transition-colors hover:opacity-70">shopping_bag</button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                ref={searchContainerRef}
                key="search-input"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center w-full relative h-full"
              >
                <input
                  ref={searchInputRef}
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim() !== '') {
                      console.log('Running query:', searchQuery);
                      setIsSearchActive(false);
                      setSearchQuery('');
                    }
                  }}
                  placeholder="SEARCH ARCHIVE..."
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 hover:border-outline-variant focus:border-primary text-2xl md:text-3xl font-manrope font-black tracking-tighter text-primary placeholder:text-on-surface-variant/30 py-4 pr-16 outline-none transition-colors duration-300 rounded-none shadow-none ring-0 focus:ring-0"
                />
                <button
                  onClick={() => {
                    if (searchQuery.trim() === '') {
                      setIsSearchActive(false);
                    } else {
                      console.log('Running query:', searchQuery);
                      setIsSearchActive(false);
                      setSearchQuery('');
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-end text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-3xl md:text-4xl">
                    {searchQuery.trim() === '' ? 'close' : 'search'}
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
