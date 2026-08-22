import { BookOpen, ArrowRight, Lock, KeyRound } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';
import SafeImage from './SafeImage';

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
              className="w-full sm:w-auto px-7 py-4 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-base sm:text-lg uppercase border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_0px_#1a1a1a] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Lock className="w-5 h-5 text-[#ffdc00] group-hover:rotate-12 transition-transform" />
              <span>{t.vaultButton}</span>
              <KeyRound className="w-4 h-4 text-white/80" />
            </button>

            <button
              onClick={() => handleNav('book')}
              className="w-full sm:w-auto px-5 py-2.5 bg-transparent hover:bg-white text-[#1a1a1a] font-heading font-black text-sm uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_0px_#1a1a1a] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#ff4e00]" />
              <span>{t.heroReadBookBtn}</span>
            </button>
          </div>
        </div>

        {/* 3 Main Pillars of the Game */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Pillar 1 */}
          <div className="bg-white border-2 border-[#1a1a1a] p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
            <div className="w-10 h-10 bg-[#ff4e00] text-white border-2 border-[#1a1a1a] flex items-center justify-center text-xl mb-3 shadow-[2px_2px_0px_0px_#1a1a1a]">
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
          <div className="bg-white border-2 border-[#1a1a1a] p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
            <div className="w-10 h-10 bg-[#ffdc00] text-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center text-xl mb-3 shadow-[2px_2px_0px_0px_#1a1a1a]">
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
          <div className="bg-white border-2 border-[#1a1a1a] p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
            <div className="w-10 h-10 bg-[#00e5ff] text-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center text-xl mb-3 shadow-[2px_2px_0px_0px_#1a1a1a]">
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
        <div>
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
                  <div className="border-2 border-[#1a1a1a] overflow-hidden mb-3 bg-[#1a1a1a] relative h-36">
                    <SafeImage
                      src={monster.imageUrl!}
                      alt={monster.name}
                      fallbackIcon={monster.icon}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                    <span className="absolute top-2 right-2 text-[10px] font-mono-code font-black bg-[#ff4e00] text-sticker px-2 py-0.5 border border-[#1a1a1a] uppercase shadow-[1px_1px_0px_0px_#000] z-10">
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

      </div>
    </section>
  );
}


