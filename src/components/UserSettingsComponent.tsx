import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';

export function UserSettingsComponent() {
  const [notifications, setNotifications] = useState({
    newCollectionDrops: true,
    weeklyDigest: false,
    orderStatusUpdates: true,
  });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex max-w-screen-2xl w-full md:-mt-10 lg:-mx-12">
      <SideNavBarComponent />

      {/* Main Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 px-8 md:px-16 py-12 w-full max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <header className="mb-20">
          <h1 className="font-manrope text-5xl md:text-6xl font-black tracking-tighter text-primary mb-4 uppercase">Configuration</h1>
          <p className="text-on-surface-variant font-body text-lg max-w-xl leading-relaxed">
            Tailor your digital environment. These settings define how you interact with our curated marketplace and global editorial feed.
          </p>
        </header>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 gap-24">
          {/* Personal Information Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="font-manrope text-xl font-bold tracking-tight uppercase mb-2 text-primary">Personal Information</h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest leading-loose">Public identity and contact details used for logistics.</p>
            </div>
            <div className="md:col-span-8 space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <p className="text-sm font-medium text-primary py-2 border-b border-transparent">Alexander Sterling</p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <p className="text-sm font-medium text-primary py-2 border-b border-transparent">sterling@curator.digital</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Biography</label>
                <p className="text-sm font-medium text-primary py-2 leading-relaxed border-b border-transparent">Collector of modern mid-century artifacts and high-performance minimalist tech.</p>
              </div>
              <div className="flex justify-start pt-4">
                <button
                  className="bg-primary text-on-primary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all border border-transparent"
                  onClick={() => setIsUpdateModalOpen(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </section>

          {/* Tonal Shift Divider */}
          <div className="h-px bg-surface-container-high w-full"></div>

          {/* Security Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="font-manrope text-xl font-bold tracking-tight uppercase mb-2 text-primary">Security</h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest leading-loose">Manage your credentials and authentication protocols.</p>
            </div>
            <div className="md:col-span-8">
              <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 flex flex-col gap-8 shadow-sm">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">Two-Factor Authentication</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Add an extra layer of security to your account.</p>
                  </div>
                  <div className="w-12 h-6 bg-secondary flex items-center px-1 rounded-full cursor-pointer transition-colors">
                    <div className="w-4 h-4 bg-white shadow-sm ml-auto rounded-full"></div>
                  </div>
                </div>
                <div className="h-px bg-surface-container"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">Current Password</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Last updated 4 months ago.</p>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-secondary hover:underline underline-offset-4">Change Password</button>
                </div>
                <div className="h-px bg-surface-container"></div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">Active Sessions</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Logged in on 3 devices.</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tonal Shift Divider */}
          <div className="h-px bg-surface-container-high w-full"></div>

          {/* Notification Preferences Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h3 className="font-manrope text-xl font-bold tracking-tight uppercase mb-2 text-primary">Notifications</h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest leading-loose">Control how the curator communicates new finds to you.</p>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-8">
                <div className={`flex items-start gap-6 cursor-pointer transition-opacity ${notifications.newCollectionDrops ? '' : 'opacity-80 hover:opacity-100 group'}`} onClick={() => toggleNotification('newCollectionDrops')}>
                  <div className={`w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center mt-1 transition-colors ${notifications.newCollectionDrops ? 'border-primary' : 'border-outline-variant'}`}>
                    {notifications.newCollectionDrops && <div className="w-2.5 h-2.5 bg-primary"></div>}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">New Collection Drops</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">Receive immediate alerts when new limited editorial collections are released.</p>
                  </div>
                </div>
                <div className={`flex items-start gap-6 cursor-pointer transition-opacity ${notifications.weeklyDigest ? '' : 'opacity-80 hover:opacity-100 group'}`} onClick={() => toggleNotification('weeklyDigest')}>
                  <div className={`w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center mt-1 transition-colors ${notifications.weeklyDigest ? 'border-primary' : 'border-outline-variant'}`}>
                    {notifications.weeklyDigest && <div className="w-2.5 h-2.5 bg-primary"></div>}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">Weekly Digest</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">A summary of the week's most influential design trends and curated objects.</p>
                  </div>
                </div>
                <div className={`flex items-start gap-6 cursor-pointer transition-opacity ${notifications.orderStatusUpdates ? '' : 'opacity-80 hover:opacity-100 group'}`} onClick={() => toggleNotification('orderStatusUpdates')}>
                  <div className={`w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center mt-1 transition-colors ${notifications.orderStatusUpdates ? 'border-primary' : 'border-outline-variant'}`}>
                    {notifications.orderStatusUpdates && <div className="w-2.5 h-2.5 bg-primary"></div>}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-primary">Order Status Updates</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">Critical tracking information for your physical acquisitions.</p>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-surface-container py-6 px-8 gap-4 border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Danger Zone</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-error border border-error/50 px-6 py-3 hover:bg-error hover:text-white transition-all w-full sm:w-auto text-center">
                  Deactivate Account
                </button>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
      <AnimatePresence>
        {isUpdateModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsUpdateModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white relative z-10 w-full max-w-md p-8 shadow-2xl border border-outline-variant/20"
            >
              <h2 className="font-manrope text-2xl font-bold uppercase tracking-tight text-primary mb-6">Edit Profile</h2>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input className="bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-3 text-sm font-medium transition-all text-primary" type="text" defaultValue="Alexander Sterling" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input className="bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-3 text-sm font-medium transition-all text-primary" type="email" defaultValue="sterling@curator.digital" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Biography</label>
                  <textarea className="bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-3 text-sm font-medium transition-all resize-none text-primary" rows={3} defaultValue="Collector of modern mid-century artifacts and high-performance minimalist tech." />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  className="bg-primary text-on-primary w-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsUpdateModalOpen(false)}
                >
                  Save Changes
                </button>
                <button
                  className="border border-outline-variant text-primary w-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors"
                  onClick={() => setIsUpdateModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
