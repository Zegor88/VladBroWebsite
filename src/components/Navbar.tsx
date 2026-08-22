import { useState } from 'react';
import { Sparkles, ShieldAlert, BookOpen, Hammer, Gamepad2, History, Menu, X } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDanceParty?: () => void;
  soundEnabled?: boolean;
  setSoundEnabled?: (val: boolean) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  soundEnabled = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.navHome, icon: Sparkles },
    { id: 'monsters', label: t.navMonsters, icon: ShieldAlert, badge: '🐙' },
    { id: 'book', label: t.navBook, icon: BookOpen, badge: t.badge16Chapters },
    { id: 'bunker', label: t.navBunker, icon: Hammer },
    { id: 'games', label: t.navGames, icon: Gamepad2 },
    { id: 'devstory', label: t.navDevStory, icon: History },
  ];

  const handleNavClick = (id: string) => {
    if (soundEnabled) playClickSound();
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#1a1a1a] shadow-[0_2px_0px_0px_#1a1a1a]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Compact Logo - Vlad's Project */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer transition-transform active:scale-95 flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-[#1a1a1a] bg-[#ffdc00] flex items-center justify-center text-lg sm:text-xl font-black shadow-[2px_2px_0px_0px_#1a1a1a] group-hover:rotate-6 transition-transform">
              👓
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono-code font-black tracking-wider uppercase text-[#ff4e00] leading-none">
                {t.authorTag}
              </span>
              <h1 className="font-heading font-black text-sm sm:text-base tracking-tight text-[#1a1a1a] leading-none mt-0.5 uppercase">
                {t.appTitle}
              </h1>
            </div>
          </button>

          {/* Desktop Nav Items - Compact and Neat */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-heading font-black uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'border-2 border-[#1a1a1a] bg-[#ff4e00] text-sticker shadow-[2px_2px_0px_0px_#1a1a1a]'
                      : 'border-2 border-transparent text-[#1a1a1a] hover:bg-[#ffdc00] hover:border-[#1a1a1a]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1 font-mono-code ${isActive ? 'bg-[#1a1a1a] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Switcher */}
            <LanguageSelector soundEnabled={soundEnabled} />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] shadow-[1.5px_1.5px_0px_0px_#1a1a1a] cursor-pointer"
              title={mobileMenuOpen ? t.menuClose : t.menuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfcf8] border-b-2 border-[#1a1a1a] px-3 pt-2 pb-3 space-y-1.5 shadow-[0_4px_0px_0px_#1a1a1a]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 border-2 border-[#1a1a1a] font-heading font-black text-xs uppercase transition-all ${
                  isActive
                    ? 'bg-[#ff4e00] text-sticker shadow-[2px_2px_0px_0px_#1a1a1a]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffdc00]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono-code font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

