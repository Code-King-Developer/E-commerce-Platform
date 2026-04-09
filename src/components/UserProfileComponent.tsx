import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SideNavBarComponent } from './SideNavBarComponent';
import { useAuthContext } from '../hooks/useAuthContext';

export function UserProfileComponent() {
  const { user, updateProfile } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(user?.name || '');
  const [tempBio, setTempBio] = useState(user?.biography || '');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      await updateProfile({
        name: tempName,
        biography: tempBio,
      });
      setSaveStatus('success');
      setTimeout(() => {
        setSaveStatus('idle');
        setIsEditing(false);
      }, 1500);
    } catch (e) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
      console.log(e);

    }
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'October 2022';

  const memberYearShort = user?.createdAt
    ? `'${new Date(user.createdAt).getFullYear().toString().slice(-2)}`
    : '‘22';

  if (!user) return null;

  return (
    <div className="flex max-w-screen-2xl w-full md:-mt-10 lg:-mx-12 min-h-screen">
      <SideNavBarComponent />

      {/* Main Content Canvas */}
      <motion.div
        key={user._id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 px-8 md:px-16 py-12 w-full max-w-7xl mx-auto"
      >
        {/* User Header */}
        <section className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-2xl w-full">
            <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Membership Status</span>

            <div className="relative group mb-6">
              {isEditing ? (
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-none uppercase font-manrope bg-transparent border-b-2 border-primary focus:outline-none w-full py-2"
                  placeholder="Your Name"
                  autoFocus
                />
              ) : (
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-none uppercase font-manrope">
                  {user.name}
                </h1>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-widest uppercase rounded-full">PLATINUM COLLECTOR</span>
              <div className="h-px w-12 bg-outline-variant/40"></div>
              <span className="text-on-surface-variant text-xs italic">Curating since {memberSince}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 w-full md:w-auto">
            <div className="relative group shrink-0">
              <div className="absolute -inset-4 border border-outline-variant/20 transition-all group-hover:inset-2"></div>
              <img
                alt={`${user.name} Profile`}
                className="w-48 h-48 md:w-56 md:h-56 object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              />
            </div>

            <div className="flex gap-4 items-center">
              <AnimatePresence mode="wait">
                {isEditing ? (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex gap-3"
                  >
                    <button
                      onClick={() => setIsEditing(false)}
                      className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saveStatus === 'saving'}
                      className="px-6 py-2 bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all disabled:opacity-50"
                    >
                      {saveStatus === 'saving' ? 'Saving...' :
                        saveStatus === 'success' ? 'Saved' :
                          saveStatus === 'error' ? 'Error' : 'Save Profile'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => setIsEditing(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20 px-8 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Edit Identity
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary mb-6">Personal Narrative</h3>
            {isEditing ? (
              <textarea
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                className="w-full bg-surface-container-lowest p-6 text-sm text-on-surface-variant leading-relaxed border border-outline-variant/30 focus:border-primary outline-none min-h-[150px] font-serif italic"
                placeholder="Share your curation journey..."
              />
            ) : (
              <p className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed font-serif italic opacity-80">
                {user.biography || "No personal narrative has been curated yet. Click 'Edit Identity' to share your journey through the world of design."}
              </p>
            )}
          </div>
        </section>

        {/* Dashboard Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Total Collections</span>
            <div className="flex items-baseline gap-2">
              <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">12</h2>
              <span className="text-secondary material-symbols-outlined text-sm">auto_awesome</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Acquired Items</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">08</h2>
          </div>
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 flex flex-col justify-between h-48 group hover:bg-surface-container-low transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Curator Since</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary font-manrope">{memberYearShort}</h2>
          </div>
        </section>

        {/* Security & Settings */}
        <section className="mb-8 border-t border-outline-variant/20 pt-16">
          <h3 className="text-xl font-black tracking-tight uppercase mb-12 font-manrope text-primary tracking-[0.1em]">System Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 flex items-center justify-center bg-surface-container-low rounded-full shrink-0 group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">key</span>
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 uppercase text-[10px] text-primary">Identity Access</h4>
                <p className="text-xs text-on-surface-variant/70 mb-4 max-w-xs leading-relaxed font-medium">Verified Email: <span className="text-primary italic">{user.email}</span></p>
                <button className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">Account Security</button>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 flex items-center justify-center bg-surface-container-low rounded-full shrink-0 group-hover:bg-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">hub</span>
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 uppercase text-[10px] text-primary">Connected Nexus</h4>
                <p className="text-xs text-on-surface-variant/70 mb-4 max-w-xs leading-relaxed font-medium">
                  {user.googleId ? 'Google Authentication Active' : 'No external connections established.'}
                </p>
                <button className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">Manage Nodes</button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
