import { useState } from 'react';
import { Volume2, Flashlight, Lightbulb, ArrowRight, Check, Eye, Backpack, BookOpen } from 'lucide-react';
import { playClickSound, playMonsterSound, playFlashlightSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';
import SafeImage from './SafeImage';

interface MonsterGalleryProps {
  selectedMonsterId?: string;
  soundEnabled: boolean;
}

export default function MonsterGallery({ selectedMonsterId, soundEnabled }: MonsterGalleryProps) {
  const { t, monsters } = useLanguage();
  const [activeMonsterId, setActiveMonsterId] = useState<string>(selectedMonsterId || monsters[0].id);
  const [mimicSpotlightOn, setMimicSpotlightOn] = useState<boolean>(false);

  const activeMonster = monsters.find(m => m.id === activeMonsterId) || monsters[0];

  const handleSelectMonster = (id: string) => {
    if (soundEnabled) playClickSound();
    setActiveMonsterId(id);
    setMimicSpotlightOn(false);
  };

  const handlePlaySound = (id: string) => {
    playMonsterSound(id);
  };

  const toggleSpotlight = () => {
    if (soundEnabled) playFlashlightSound();
    setMimicSpotlightOn(!mimicSpotlightOn);
  };

  return (
    <section className="py-6 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.heroMonstersHeader}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.gallerySub}
        </p>
      </div>

      {/* 4 Monster Big Select Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {monsters.map((monster) => {
          const isSelected = activeMonsterId === monster.id;
          return (
            <button
              key={monster.id}
              onClick={() => handleSelectMonster(monster.id)}
              className={`p-3 sm:p-4 text-left transition-all relative border-3 border-[#1a1a1a] flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? 'bg-[#ff4e00] text-sticker shadow-[6px_6px_0px_0px_#1a1a1a] -translate-y-1'
                  : 'bg-white text-[#1a1a1a] hover:bg-[#fff9e6] shadow-[3px_3px_0px_0px_#1a1a1a]'
              }`}
            >
              <div>
                {/* Thumbnail Image */}
                {monster.imageUrl && (
                  <div className="border-2 border-[#1a1a1a] overflow-hidden mb-2.5 bg-[#1a1a1a] relative aspect-square">
                    <SafeImage
                      src={monster.imageUrl}
                      alt={monster.name}
                      fallbackIcon={monster.icon}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                    <span className={`absolute top-1.5 right-1.5 text-[9px] font-mono-code font-black px-1.5 py-0.5 border border-[#1a1a1a] uppercase z-10 ${
                      isSelected ? 'bg-[#1a1a1a] text-white' : 'bg-[#ffdc00] text-[#1a1a1a]'
                    }`}>
                      {monster.dangerLevel}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg">{monster.icon}</span>
                  <span className="text-[10px] font-mono-code font-bold uppercase opacity-80 truncate ml-2">
                    {monster.threatType}
                  </span>
                </div>
                <h3 className="font-heading font-black text-sm sm:text-base uppercase leading-tight">
                  {monster.name}
                </h3>
              </div>

              <div className="mt-2 pt-2 border-t-2 border-current/20 flex items-center justify-between text-xs font-mono-code font-bold">
                <span className="inline-flex items-center gap-1">{isSelected ? <Check className="w-3.5 h-3.5" /> : t.openMonsterDossier}</span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Monster Details Showcase */}
      <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1a1a1a]">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-[#1a1a1a] pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl p-2.5 bg-[#ffdc00] border-3 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a]">
              {activeMonster.icon}
            </div>
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono-code font-black bg-[#ff4e00] text-sticker px-2 py-0.5 border border-[#1a1a1a] uppercase">
                  {t.dangerLevelLabel}: {activeMonster.dangerLevel}
                </span>
                <span className="text-xs font-mono-code text-slate-700 font-bold">
                  {t.sizeLabel}: {activeMonster.size}
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#1a1a1a] uppercase mt-1">
                {activeMonster.name}
              </h3>
              <p className="text-sm font-mono-code text-[#ff4e00] font-black">
                {activeMonster.codename}
              </p>
            </div>
          </div>

          {/* Audio sound button */}
          <button
            onClick={() => handlePlaySound(activeMonster.id)}
            className="self-start sm:self-center px-4 py-3 bg-[#ffdc00] hover:bg-[#ffe633] text-[#1a1a1a] font-heading font-black text-xs sm:text-sm uppercase border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] flex items-center gap-2 cursor-pointer transition-all active:translate-y-0.5"
          >
            <Volume2 className="w-4 h-4 text-[#ff4e00]" />
            <span>{t.audioTestBtn}</span>
          </button>
        </div>

        {/* Large Monster Artwork Banner & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
          
          {/* Left Column: High-Res Monster Artwork */}
          {activeMonster.imageUrl && (
            <div className="lg:col-span-5">
              <div className="border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] overflow-hidden bg-[#1a1a1a]">
                <div className="relative h-72 sm:h-80">
                  <SafeImage
                    src={activeMonster.imageUrl}
                    alt={activeMonster.name}
                    fallbackIcon={activeMonster.icon}
                    fallbackClassName="text-6xl"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#1a1a1a]/90 text-[#ffdc00] px-2.5 py-1 text-xs font-mono-code font-bold border border-white/40 flex items-center gap-1.5 z-10">
                    <span>{activeMonster.name}</span>
                    <span>✨</span>
                  </div>
                </div>
                <div className="p-3 bg-[#fff9e6] border-t-2 border-[#1a1a1a] font-serif-story text-xs text-slate-800 italic">
                  <strong>{t.monsterTestQuote}:</strong> {activeMonster.quote}
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Key Details & Weaknesses */}
          <div className={activeMonster.imageUrl ? 'lg:col-span-7 space-y-6' : 'lg:col-span-12 space-y-6'}>
            
            {/* Appearance */}
            <div className="bg-[#faf8f2] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              <span className="text-xs font-mono-code font-black text-[#ff4e00] mb-1 uppercase flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> {t.appearanceLabel || t.threatTypeLabel}:
              </span>
              <p className="text-slate-800 text-sm sm:text-base font-serif-story leading-relaxed mb-2">
                {activeMonster.appearance}
              </p>
              <p className="text-slate-800 text-xs sm:text-sm font-serif-story leading-relaxed border-t border-[#1a1a1a]/20 pt-2">
                <strong>{t.habitatLabel}:</strong> {activeMonster.habitat}
              </p>
              <p className="text-slate-800 text-xs sm:text-sm font-serif-story leading-relaxed mt-1">
                <strong>{t.behaviorLabel}:</strong> {activeMonster.behavior}
              </p>
            </div>

            {/* How to defeat */}
            <div className="bg-[#e8f5e9] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              <span className="text-xs font-mono-code font-black text-[#1b5e20] block mb-2 uppercase flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-[#2e7d32]" />
                {t.weaknessLabel}:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-900 font-serif-story">
                {activeMonster.weakness.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2e7d32] flex-shrink-0 mt-0.5" />
                    <span className="font-bold">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Loot */}
            <div className="bg-[#e0f7fa] border-2 border-[#1a1a1a] p-3.5 shadow-[3px_3px_0px_0px_#1a1a1a]">
              <span className="text-xs font-mono-code font-black text-[#006064] mb-0.5 uppercase flex items-center gap-1.5">
                <Backpack className="w-3.5 h-3.5" /> {t.lootLabel}:
              </span>
              <p className="text-slate-900 text-xs sm:text-sm font-serif-story font-bold leading-relaxed">
                {activeMonster.loot}
              </p>
            </div>

          </div>
        </div>

        {/* Special Interactive Spotlight for Mimic */}
        {activeMonster.id === 'mimic' && (
          <div className="bg-[#1a1a1a] text-white p-5 border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#ff4e00] mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono-code font-black text-[#ffdc00] uppercase flex items-center gap-1.5">
                  <Flashlight className="w-3.5 h-3.5" /> {t.shadowTitle}
                </span>
                <h4 className="font-heading font-black text-xl uppercase mt-0.5">
                  {t.shadowSub}
                </h4>
                <p className="text-slate-300 font-serif-story text-sm mt-1">
                  {t.flashlightHint}
                </p>
              </div>

              <button
                onClick={toggleSpotlight}
                className={`px-5 py-3 border-2 border-white font-heading font-black text-xs sm:text-sm uppercase flex items-center gap-2 cursor-pointer transition-all shadow-[3px_3px_0px_0px_#fff] ${
                  mimicSpotlightOn
                    ? 'bg-[#ffdc00] text-[#1a1a1a]'
                    : 'bg-[#ff4e00] text-sticker hover:bg-[#ff3b00]'
                }`}
              >
                <Flashlight className="w-4 h-4" />
                <span>{mimicSpotlightOn ? t.flashlightModeOff : t.flashlightModeOn}</span>
              </button>
            </div>

            {mimicSpotlightOn && (
              <div className="mt-4 p-4 bg-white text-[#1a1a1a] border-2 border-white animate-fade-in flex flex-col sm:flex-row items-center gap-4">
                <div className="text-4xl p-2 bg-[#ffdc00] border-2 border-[#1a1a1a]">
                  📦 ➡️ 🐙
                </div>
                <div>
                  <h5 className="font-heading font-black text-base text-[#ff4e00] uppercase">
                    {t.identifyResultMimic}
                  </h5>
                  <p className="text-xs sm:text-sm font-serif-story text-slate-800 font-bold">
                    {t.shadowHint}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Short Fun Story from Diary */}
        <div className="p-4 bg-[#fdfcf8] border-2 border-dashed border-[#1a1a1a]">
          <span className="text-xs font-mono-code font-black text-[#ff4e00] uppercase mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> {t.storySnippetLabel}:
          </span>
          <p className="text-slate-800 font-serif-story italic text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {activeMonster.storySnippet}
          </p>
        </div>

      </div>
    </section>
  );
}

