import { useState, type FormEvent } from 'react';
import { CustomMonster } from '../types';
import { PlusCircle, Sparkles, Copy, Check, Wand2, BookOpen } from 'lucide-react';
import { playClickSound, playCraftSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';

const EMOJI_OPTIONS = ['🦇', '🦂', '🍄', '🤖', '🦝', '🦑', '🐺', '🕷️', '🐸', '🐊', '🦔', '🦤'];

export default function MonsterCreator({ soundEnabled }: { soundEnabled: boolean }) {
  const { t, creatorPresets } = useLanguage();
  const [monster, setMonster] = useState<CustomMonster>({
    name: '',
    nickname: '',
    threatCategory: 'Visual Deception / Trap',
    appearance: '',
    trick: '',
    weakness: '',
    loot: '',
    authorName: ''
  });

  const [selectedEmoji, setSelectedEmoji] = useState<string>('🦇');
  const [copied, setCopied] = useState<boolean>(false);
  const [createdList, setCreatedList] = useState<CustomMonster[]>(creatorPresets);

  const handleApplyPreset = (preset: CustomMonster) => {
    if (soundEnabled) playClickSound();
    setMonster(preset);
  };

  const handleSaveMonster = (e: FormEvent) => {
    e.preventDefault();
    if (!monster.name.trim()) return;

    if (soundEnabled) playCraftSound();
    setCreatedList([monster, ...createdList]);
  };

  const handleCopyCard = () => {
    if (soundEnabled) playClickSound();
    const formatted = `📋 ${t.creatorTitle}
${t.creatorFormName}: ${selectedEmoji} ${monster.name || '---'}
${t.creatorFormNickname}: ${monster.nickname || '---'}
${t.threatTypeLabel}: ${monster.threatCategory}
${t.appearanceLabel}: ${monster.appearance || '---'}
${t.trickLabel}: ${monster.trick || '---'}
${t.weaknessLabel}: ${monster.weakness || '---'}
${t.lootLabel}: ${monster.loot || '---'}
${t.authorLabel}: ${monster.authorName || '---'}`;

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] text-white text-xs font-mono-code mb-3 uppercase font-bold tracking-wider">
          <PlusCircle className="w-3.5 h-3.5 text-[#ffdc00]" />
          <span>{t.tabCreator || 'CREATOR LAB'}</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.creatorTitle}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.creatorSub}
        </p>
      </div>

      {/* Preset Inspirations */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <span className="text-xs font-mono-code text-slate-700 font-black uppercase mr-2 flex items-center gap-1">
          <Wand2 className="w-3.5 h-3.5 text-[#ff4e00]" />
          {t.creatorPresetBtn}:
        </span>
        {creatorPresets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handleApplyPreset(preset)}
            className="px-3 py-1.5 bg-white hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] text-xs font-bold border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] transition-all cursor-pointer"
          >
            {preset.name} ({preset.authorName})
          </button>
        ))}
      </div>

      {/* Main Grid: Form + Live Card Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Column */}
        <form onSubmit={handleSaveMonster} className="lg:col-span-6 bg-white border-3 border-[#1a1a1a] p-6 sm:p-7 shadow-[8px_8px_0px_0px_#1a1a1a] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-3 mb-2">
            <h3 className="font-heading font-black text-lg text-[#1a1a1a] uppercase">
              {t.creatorTitle}
            </h3>
            <span className="text-xs font-mono-code font-bold bg-[#ffdc00] px-2 py-0.5 border border-[#1a1a1a]">Survival Nights V1</span>
          </div>

          {/* Emoji selector */}
          <div>
            <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1.5 uppercase">{t.selectAvatar || 'Select Avatar'}:</label>
            <div className="flex flex-wrap gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  onClick={() => {
                    if (soundEnabled) playClickSound();
                    setSelectedEmoji(emoji);
                  }}
                  className={`w-9 h-9 text-lg flex items-center justify-center border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                    selectedEmoji === emoji
                      ? 'bg-[#ff4e00] text-white shadow-[2px_2px_0px_0px_#1a1a1a] -translate-y-0.5'
                      : 'bg-[#f4f1ea] text-[#1a1a1a] hover:bg-white'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Nickname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.creatorFormName}:</label>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                value={monster.name}
                onChange={(e) => setMonster({ ...monster, name: e.target.value })}
                className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-bold focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
                required
              />
            </div>
            <div>
              <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.creatorFormNickname}:</label>
              <input
                type="text"
                placeholder={t.nicknamePlaceholder}
                value={monster.nickname}
                onChange={(e) => setMonster({ ...monster, nickname: e.target.value })}
                className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-bold focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.threatTypeLabel}:</label>
            <input
              type="text"
              value={monster.threatCategory}
              onChange={(e) => setMonster({ ...monster, threatCategory: e.target.value })}
              className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-bold focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
            />
          </div>

          {/* Appearance */}
          <div>
            <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.appearanceLabel}:</label>
            <textarea
              rows={2}
              placeholder={t.appearancePlaceholder}
              value={monster.appearance}
              onChange={(e) => setMonster({ ...monster, appearance: e.target.value })}
              className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-serif-story focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
            />
          </div>

          {/* Special Trick */}
          <div>
            <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.trickLabel}:</label>
            <input
              type="text"
              placeholder={t.trickPlaceholder}
              value={monster.trick}
              onChange={(e) => setMonster({ ...monster, trick: e.target.value })}
              className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-serif-story focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
            />
          </div>

          {/* Weakness */}
          <div>
            <label className="text-xs font-mono-code font-black text-[#ff4e00] block mb-1 uppercase">{t.weaknessLabel}:</label>
            <input
              type="text"
              placeholder={t.weaknessPlaceholder}
              value={monster.weakness}
              onChange={(e) => setMonster({ ...monster, weakness: e.target.value })}
              className="w-full bg-[#fff8cc] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-serif-story font-bold focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
            />
          </div>

          {/* Loot & Author */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-mono-code font-black text-emerald-700 block mb-1 uppercase">{t.lootLabel}:</label>
              <input
                type="text"
                placeholder={t.lootPlaceholder}
                value={monster.loot}
                onChange={(e) => setMonster({ ...monster, loot: e.target.value })}
                className="w-full bg-[#e8f5e9] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1b5e20] font-serif-story font-bold focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
              />
            </div>
            <div>
              <label className="text-xs font-mono-code font-bold text-slate-700 block mb-1 uppercase">{t.authorLabel}:</label>
              <input
                type="text"
                placeholder={t.authorPlaceholder}
                value={monster.authorName}
                onChange={(e) => setMonster({ ...monster, authorName: e.target.value })}
                className="w-full bg-[#fcfbf7] border-2 border-[#1a1a1a] px-3.5 py-2 text-sm text-[#1a1a1a] font-bold focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#1a1a1a]"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 py-3 bg-[#ff4e00] hover:bg-[#e04500] text-white font-heading font-black text-sm uppercase transition-all shadow-[3px_3px_0px_0px_#1a1a1a] border-2 border-[#1a1a1a] cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.addToDiary}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCard}
              className="px-4 py-3 bg-white hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-bold text-sm border-2 border-[#1a1a1a] transition-all flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#1a1a1a]"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? t.copied : t.copyCard}</span>
            </button>
          </div>
        </form>

        {/* Live Preview Column (Geek's Notebook Spread) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="notebook-paper border-3 border-[#1a1a1a] p-6 sm:p-7 shadow-[8px_8px_0px_0px_#1a1a1a] text-[#1a1a1a] transform rotate-1">
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#1a1a1a] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl p-1 bg-white border border-[#1a1a1a]">{selectedEmoji}</span>
                <div>
                  <h4 className="font-heading font-black text-xl text-[#1a1a1a] uppercase">
                    {monster.name || t.namePlaceholder}
                  </h4>
                  <p className="text-xs font-hand font-bold text-[#ff4e00]">
                    {monster.nickname || t.nicknamePlaceholder}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono-code bg-[#ffdc00] px-2 py-1 border border-[#1a1a1a] text-[#1a1a1a] font-black uppercase">
                {monster.threatCategory}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-mono-code text-slate-800">
              <div className="p-3 bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]">
                <span className="font-bold text-[#1a1a1a] block text-[11px] uppercase">{t.appearanceLabel}:</span>
                <p className="mt-0.5 text-slate-800 font-serif-story text-sm leading-relaxed">{monster.appearance || t.appearancePlaceholder}</p>
              </div>

              <div className="p-3 bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]">
                <span className="font-bold text-[#1a1a1a] block text-[11px] uppercase">{t.trickLabel}:</span>
                <p className="mt-0.5 text-slate-800 font-serif-story text-sm leading-relaxed">{monster.trick || t.trickPlaceholder}</p>
              </div>

              <div className="p-3 bg-[#fff8cc] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]">
                <span className="font-bold text-[#ff4e00] block text-[11px] uppercase">💡 {t.weaknessLabel}:</span>
                <p className="mt-0.5 text-[#1a1a1a] font-serif-story font-bold text-sm leading-relaxed">{monster.weakness || t.weaknessPlaceholder}</p>
              </div>

              <div className="p-3 bg-[#e8f5e9] border-2 border-[#2e7d32] shadow-[2px_2px_0px_0px_#1a1a1a]">
                <span className="font-bold text-[#1b5e20] block text-[11px] uppercase">📦 {t.lootLabel}:</span>
                <p className="mt-0.5 text-[#1b5e20] font-serif-story font-bold text-sm leading-relaxed">{monster.loot || t.lootPlaceholder}</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-dashed border-[#1a1a1a] flex items-center justify-between text-xs">
              <span className="font-hand font-bold text-[#1a1a1a] text-base">
                {t.authorLabel}: {monster.authorName || t.authorPlaceholder} ✏️
              </span>
              <span className="font-mono-code text-slate-700 font-bold uppercase">
                Survival Nights Bestiary
              </span>
            </div>
          </div>

          {/* Created List Cards */}
          {createdList.length > 0 && (
            <div className="bg-white border-2 border-[#1a1a1a] p-4 shadow-[4px_4px_0px_0px_#1a1a1a]">
              <h4 className="font-heading font-black text-xs text-[#1a1a1a] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#ff4e00]" />
                {t.createdListTitle} ({createdList.length}):
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {createdList.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-[#f4f1ea] border-2 border-[#1a1a1a] flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-[#1a1a1a] font-heading uppercase">{item.name}</strong>
                      <span className="text-slate-600 text-[11px] ml-2">({item.authorName})</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-[#ffdc00] text-[#1a1a1a] border border-[#1a1a1a] font-mono-code font-bold">
                      {item.threatCategory}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

