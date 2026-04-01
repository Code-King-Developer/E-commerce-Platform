import { useQuery } from '@tanstack/react-query'
import { useHotkeys } from 'react-hotkeys-hook'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function HomeComponent() {
  const [pressed, setPressed] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['mockData'],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1000))
      return { message: 'Data loaded successfully via TanStack Query!' }
    },
  })

  useHotkeys('ctrl+k', (e) => {
    e.preventDefault()
    setPressed((prev) => !prev)
  })

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="space-y-8"
    >
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-black/5"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-brand-foreground)]">Theme & Motion Demonstration</h2>
        <p className="opacity-80 leading-relaxed mb-6">
          This project implements the requested color rule. The backgrounds provide the mostly 70% light base, 
          typography uses the 20% dark tones, and the semantic elements below show the 10% accented colors.
          It also smoothly animates into view using Framer Motion.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-medium text-white shadow-sm transition-colors bg-[var(--color-status-success)]"
          >
            Success
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-medium text-white shadow-sm transition-colors bg-[var(--color-status-error)]"
          >
            Error
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-medium text-[var(--color-brand-foreground)] shadow-sm transition-colors bg-[var(--color-status-warning)]"
          >
            Warning
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-medium text-white shadow-sm transition-colors bg-[var(--color-status-info)]"
          >
            Info
          </motion.button>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-black/5"
      >
        <h3 className="font-semibold text-lg mb-3 text-[var(--color-brand-foreground)]">TanStack Query Status</h3>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-black/5"
            >
              <p className="animate-pulse flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin inline-block"></span>
                Loading from API mock...
              </p>
            </motion.div>
          ) : isError ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-black/5"
            >
              <p className="text-[var(--color-status-error)]">Error loading data</p>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-4 rounded-xl bg-black/5 border border-[var(--color-status-success)]/20 shadow-sm shadow-[var(--color-status-success)]/10"
            >
              <p className="text-[var(--color-status-success)] font-medium text-lg">✨ {data?.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-black/5"
      >
        <h3 className="font-semibold text-lg mb-3 text-[var(--color-brand-foreground)]">Hotkeys Configuration</h3>
        <p className="mb-4 text-sm opacity-80">Use <kbd className="font-mono px-2 py-0.5 rounded shadow-sm bg-[var(--color-brand-light)] text-[var(--color-brand-foreground)] border border-black/10">Ctrl + K</kbd> to toggle the state of the component.</p>
        <motion.div 
          animate={{
            backgroundColor: pressed ? 'var(--color-status-info)' : 'rgba(0,0,0,0.05)',
            color: pressed ? '#ffffff' : 'var(--color-brand-foreground)',
            scale: pressed ? 1.02 : 1,
            boxShadow: pressed ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : '0 0px 0px 0px rgba(0,0,0,0)'
          }}
          transition={{ duration: 0.3 }}
          className="p-4 rounded-xl font-medium"
        >
          Hotkey Target State: {pressed ? 'ON - Active' : 'OFF - Inactive'}
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
