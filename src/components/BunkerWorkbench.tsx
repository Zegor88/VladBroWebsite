import { useState } from 'react';
import { Hammer, Flame } from 'lucide-react';
import { playClickSound, playCraftSound, playApexFlareLaunchSound } from '../utils/soundEffects';
import bunkerApexFlareImg from '../assets/images/bunker_apex_flare_1787032147716.jpg';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n';

interface BunkerWorkbenchProps {
  soundEnabled: boolean;
}

export default function BunkerWorkbench({ soundEnabled }: BunkerWorkbenchProps) {
  const { t, workbenchLevels, apexIngredients } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [installedIngredients, setInstalledIngredients] = useState<string[]>([]);
  const [flareCrafted, setFlareCrafted] = useState<boolean>(false);
  const [launched, setLaunched] = useState<boolean>(false);

  const currentLevelData = workbenchLevels.find(l => l.level === selectedLevel) || workbenchLevels[0];

  const handleToggleIngredient = (id: string) => {
    if (soundEnabled) playClickSound();
    if (installedIngredients.includes(id)) {
      setInstalledIngredients(installedIngredients.filter(item => item !== id));
      setFlareCrafted(false);
    } else {
      const next = [...installedIngredients, id];
      setInstalledIngredients(next);
      if (next.length === apexIngredients.length) {
        if (soundEnabled) playCraftSound();
        setFlareCrafted(true);
      }
    }
  };

  const handleLaunchFlare = () => {
    if (soundEnabled) playApexFlareLaunchSound();
    setLaunched(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="py-6 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] text-white text-xs font-mono-code mb-3 uppercase font-bold tracking-wider">
          <Hammer className="w-3.5 h-3.5 text-[#ffdc00]" />
          <span>{t.workbenchHeader}</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          🛠️ {t.workbenchSub}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.craftSub}
        </p>
      </div>

      {/* 4 Level Selection Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {workbenchLevels.map((lvl) => {
          const isSelected = selectedLevel === lvl.level;
          return (
            <button
              key={lvl.level}
              onClick={() => {
                if (soundEnabled) playClickSound();
                setSelectedLevel(lvl.level);
              }}
              className={`p-4 text-left border-3 border-[#1a1a1a] transition-all relative cursor-pointer ${
                isSelected
                  ? 'bg-[#ff4e00] text-white shadow-[6px_6px_0px_0px_#1a1a1a] -translate-y-1'
                  : 'bg-white text-[#1a1a1a] hover:bg-[#ffdc00] shadow-[3px_3px_0px_0px_#1a1a1a]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-mono-code font-black ${isSelected ? 'text-white' : 'text-[#ff4e00]'}`}>
                  {t.levelLabel} {lvl.level}
                </span>
                <span className="text-xl">{lvl.level === 1 ? '🪵' : lvl.level === 2 ? '🔩' : lvl.level === 3 ? '⚡' : '🚀'}</span>
              </div>
              <h4 className="font-heading font-black text-sm uppercase truncate">{lvl.name}</h4>
            </button>
          );
        })}
      </div>

      {/* Level Info Card */}
      <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1a1a1a] mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#1a1a1a] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl p-2 bg-[#ffdc00] border-2 border-[#1a1a1a]">
              {selectedLevel === 1 ? '🪓' : selectedLevel === 2 ? '📻' : selectedLevel === 3 ? '⚡' : '🔮'}
            </span>
            <div>
              <span className="text-xs font-mono-code font-black text-[#ff4e00] uppercase">
                {t.levelLabel} {selectedLevel}
              </span>
              <h3 className="font-heading font-black text-2xl text-[#1a1a1a] uppercase">
                {currentLevelData.name}
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono-code font-bold bg-[#f4f1ea] px-3 py-1 border-2 border-[#1a1a1a]">
            {currentLevelData.look}
          </span>
        </div>

        {/* Level Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Unlocked Rooms */}
          <div className="bg-[#faf8f2] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
            <span className="text-xs font-mono-code font-black text-[#1a1a1a] uppercase block mb-2">
              🚪 {t.roomsUnlocked}:
            </span>
            <ul className="space-y-1 text-sm font-serif-story text-slate-800">
              {currentLevelData.unlockedRooms.map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#ff4e00] font-black">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Crafts */}
          <div className="bg-[#fff9e6] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
            <span className="text-xs font-mono-code font-black text-[#1a1a1a] uppercase block mb-2">
              🔨 {t.craftableItems}:
            </span>
            <ul className="space-y-1 text-sm font-serif-story text-slate-800">
              {currentLevelData.keyCrafts.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#ff4e00] font-black">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Defense */}
          <div className="bg-[#e8f5e9] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
            <span className="text-xs font-mono-code font-black text-[#1b5e20] uppercase block mb-2">
              🛡️ {t.defenseUpgrades}:
            </span>
            <ul className="space-y-1 text-sm font-serif-story text-slate-800">
              {currentLevelData.defenseUpgrades.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#2e7d32] font-black">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Level Note */}
        <div className="p-3.5 bg-[#f4f1ea] border-2 border-[#1a1a1a] text-xs sm:text-sm font-mono-code font-bold text-slate-800">
          💡 <strong>{t.marginNotes}:</strong> {currentLevelData.note}
        </div>
      </div>

      {/* Interactive Apex Flare Rocket Launch Module with Visual Art */}
      <div className="bg-[#1a1a1a] text-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#ff4e00]">
        
        {/* Banner with Rocket Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8 pb-6 border-b border-white/20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff4e00] text-white text-xs font-mono-code mb-2 uppercase font-black">
              <Flame className="w-3.5 h-3.5 text-[#ffdc00]" />
              <span>{t.flareStageLabel}</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase">
              🚀 {t.flareTitle}
            </h3>
            <p className="text-slate-300 font-serif-story text-sm sm:text-base mt-2 leading-relaxed">
              {t.flareDesc}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-white shadow-[4px_4px_0px_0px_#ffdc00] overflow-hidden bg-[#262626]">
              <img
                src={bunkerApexFlareImg}
                alt="Apex Flare Launch"
                referrerPolicy="no-referrer"
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="p-1.5 bg-[#262626] text-[#ffdc00] text-center font-mono-code text-[10px] uppercase font-bold">
                {t.flareTitle} 🌟
              </div>
            </div>
          </div>
        </div>

        {/* 3 Ingredients Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {apexIngredients.map((item) => {
            const isInstalled = installedIngredients.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleToggleIngredient(item.id)}
                className={`p-4 border-2 text-left transition-all cursor-pointer ${
                  isInstalled
                    ? 'bg-[#ffdc00] text-[#1a1a1a] border-white shadow-[3px_3px_0px_0px_#fff]'
                    : 'bg-[#262626] text-white border-slate-700 hover:border-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-xs font-mono-code font-black px-2 py-0.5 border ${
                    isInstalled ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : 'bg-black text-slate-400 border-slate-700'
                  }`}>
                    {isInstalled ? '✓' : item.from}
                  </span>
                </div>
                <h4 className="font-heading font-black text-sm uppercase leading-tight">{item.name}</h4>
                <p className="text-xs opacity-80 mt-1">{item.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Launch Trigger */}
        <div className="text-center">
          {launched ? (
            <div className="p-5 bg-[#ffdc00] text-[#1a1a1a] border-3 border-white animate-fade-in max-w-xl mx-auto shadow-[6px_6px_0px_0px_#ff4e00]">
              <div className="text-4xl mb-2">🚁✨🎉</div>
              <h4 className="font-heading font-black text-2xl uppercase">
                {t.flareSuccessTitle}
              </h4>
              <p className="font-serif-story text-sm sm:text-base font-bold mt-1">
                {t.flareSuccessDesc}
              </p>
            </div>
          ) : (
            <button
              onClick={handleLaunchFlare}
              disabled={!flareCrafted}
              className={`px-8 py-4 font-heading font-black text-base sm:text-lg uppercase border-3 border-white transition-all ${
                flareCrafted
                  ? 'bg-[#ff4e00] hover:bg-[#e04500] text-white shadow-[6px_6px_0px_0px_#ffdc00] cursor-pointer animate-pulse'
                  : 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed opacity-60'
              }`}
            >
              {flareCrafted ? `🚀 ${t.launchFlareBtn}` : t.flareAssemblePrompt}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

