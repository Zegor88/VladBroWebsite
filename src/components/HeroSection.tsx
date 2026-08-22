import { BookOpen, ShieldAlert, Gamepad2, ArrowRight, Lock, KeyRound } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenVaultDoor?: () => void;
  soundEnabled?: boolean;
}

export default function HeroSection({ onNavigate, onOpenVaultDoor, soundEnabled = false }: HeroSectionProps) {
  const { t, monsters } = useLanguage();

  const handleNav = (tab: string) => {
    if (soundEnabled) playClickSound();
    onNavigate(tab);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 border-b-3 border-[#1a1a1a] bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title & Concept in Bold Comic Style */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-[#1a1a1a] tracking-tight uppercase leading-[1.05]">
            {t.heroTitle}
          </h1>

          <p className="font-serif-story text-lg sm:text-2xl text-slate-800 font-bold mt-4 leading-relaxed max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>

          {/* Prominent 'Enter Bunker' Vault Teaser CTA (Requirement 8) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                if (soundEnabled) playClickSound();
                if (onOpenVaultDoor) onOpenVaultDoor();
              }}
              className="w-full sm:w-auto px-7 py-4 bg-[#ff4e00] hover:bg-[#e04500] text-white font-heading font-black text-base sm:text-lg uppercase border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_0px_#1a1a1a] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Lock className="w-5 h-5 text-[#ffdc00] group-hover:rotate-12 transition-transform" />
              <span>{t.vaultButton}</span>
              <KeyRound className="w-4 h-4 text-white/80" />
            </button>

            <button
              onClick={() => handleNav('book')}
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-[#fff9e6] text-[#1a1a1a] font-heading font-black text-sm sm:text-base uppercase border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#1a1a1a] hover:shadow-[7px_7px_0px_0px_#1a1a1a] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-[#ff4e00]" />
              <span>{t.heroReadBookBtn}</span>
            </button>
          </div>
        </div>

        {/* 3 Main Pillars of the Game */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-white border-3 border-[#1a1a1a] p-6 shadow-[6px_6px_0px_0px_#1a1a1a]">
            <div className="w-12 h-12 bg-[#ff4e00] text-white border-2 border-[#1a1a1a] flex items-center justify-center text-2xl mb-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              🧠
            </div>
            <h3 className="font-heading font-black text-xl text-[#1a1a1a] uppercase mb-2">
              {t.heroFeatures.mechanic}
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-serif-story leading-relaxed">
              {t.heroFeatures.mechanicDesc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border-3 border-[#1a1a1a] p-6 shadow-[6px_6px_0px_0px_#1a1a1a]">
            <div className="w-12 h-12 bg-[#ffdc00] text-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center text-2xl mb-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              🐙
            </div>
            <h3 className="font-heading font-black text-xl text-[#1a1a1a] uppercase mb-2">
              {t.heroFeatures.noHorror}
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-serif-story leading-relaxed">
              {t.heroFeatures.noHorrorDesc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border-3 border-[#1a1a1a] p-6 shadow-[6px_6px_0px_0px_#1a1a1a]">
            <div className="w-12 h-12 bg-[#00e5ff] text-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center text-2xl mb-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              🚀
            </div>
            <h3 className="font-heading font-black text-xl text-[#1a1a1a] uppercase mb-2">
              {t.heroFeatures.defense}
            </h3>
            <p className="text-slate-800 text-sm sm:text-base font-serif-story leading-relaxed">
              {t.heroFeatures.defenseDesc}
            </p>
          </div>
        </div>

        {/* 4 Monsters Quick Teaser Cards */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#1a1a1a] uppercase flex items-center gap-2">
              <span>👾</span> {t.heroMonstersHeader}
            </h3>
            <button
              onClick={() => handleNav('monsters')}
              className="text-xs sm:text-sm font-mono-code font-black text-[#ff4e00] hover:text-[#1a1a1a] underline flex items-center gap-1 cursor-pointer"
            >
              <span>{t.heroViewAllMonsters}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {monsters.map((monster) => (
              <button
                key={monster.id}
                onClick={() => handleNav('monsters')}
                className="bg-white hover:bg-[#fff9e6] border-3 border-[#1a1a1a] p-3 text-left shadow-[5px_5px_0px_0px_#1a1a1a] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="border-2 border-[#1a1a1a] overflow-hidden mb-3 bg-[#1a1a1a] relative">
                    <img
                      src={monster.imageUrl}
                      alt={monster.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 text-[10px] font-mono-code font-black bg-[#ff4e00] text-white px-2 py-0.5 border border-[#1a1a1a] uppercase shadow-[1px_1px_0px_0px_#000]">
                      {monster.dangerLevel}
                    </span>
                  </div>
                  <h4 className="font-heading font-black text-lg text-[#1a1a1a] uppercase">{monster.name}</h4>
                  <p className="text-xs text-slate-700 font-serif-story mt-1 line-clamp-2">
                    {monster.quote}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#1a1a1a]/20 text-[11px] font-mono-code font-bold text-[#ff4e00] flex items-center justify-between">
                  <span>{t.openMonsterDossier}</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons Hub */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleNav('monsters')}
            className="px-6 py-3.5 bg-[#ff4e00] hover:bg-[#e04500] text-white font-heading font-black text-base uppercase border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#1a1a1a] hover:shadow-[7px_7px_0px_0px_#1a1a1a] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldAlert className="w-5 h-5" />
            <span>{t.heroMonstersHeader} →</span>
          </button>

          <button
            onClick={() => handleNav('games')}
            className="px-6 py-3.5 bg-[#ffdc00] hover:bg-[#ffe633] text-[#1a1a1a] font-heading font-black text-base uppercase border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#1a1a1a] hover:shadow-[7px_7px_0px_0px_#1a1a1a] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Gamepad2 className="w-5 h-5 text-[#1a1a1a]" />
            <span>{t.navGames} 🎮</span>
          </button>
        </div>

      </div>
    </section>
  );
}


