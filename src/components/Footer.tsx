import { useState, type FormEvent } from 'react';
import { Terminal } from 'lucide-react';
import { playClickSound, playCraftSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n';

interface FooterProps {
  onOpenDanceParty: () => void;
  onOpenNoahModal?: () => void;
  onOpenGameModal?: () => void;
  onOpenVaultDoor?: () => void;
  onNavigate: (tab: string) => void;
  soundEnabled?: boolean;
}

export default function Footer({
  onOpenDanceParty,
  onOpenNoahModal,
  onOpenGameModal,
  onOpenVaultDoor,
  onNavigate,
  soundEnabled = false,
}: FooterProps) {
  const { t } = useLanguage();
  const [cheatCode, setCheatCode] = useState<string>('');
  const [cheatResult, setCheatResult] = useState<string>('');

  const handleCheatSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (soundEnabled) playClickSound();

    const code = cheatCode.trim().toUpperCase();

    if (code === 'DANCE' || code === 'ПАТИ' || code === 'ДИСКО' || code === 'DANCE PARTY') {
      if (soundEnabled) playCraftSound();
      setCheatResult(`🎵 ${t.cheatDance}`);
      onOpenDanceParty();
    } else if (code === 'NOAH' || code === 'КОВЧЕГ' || code === 'BARK') {
      if (soundEnabled) playCraftSound();
      setCheatResult(`🚁 ${t.cheatNoah}`);
      confetti({ particleCount: 100, spread: 80 });
      if (onOpenNoahModal) onOpenNoahModal();
    } else if (code === 'GAME' || code === 'ИГРА' || code === 'GODOT' || code === 'PLAY') {
      if (soundEnabled) playCraftSound();
      setCheatResult(`🎮 ${t.gameModalTitle}`);
      if (onOpenGameModal) onOpenGameModal();
    } else if (code === 'VAULT' || code === 'БУНКЕР' || code === 'LOCK' || code === 'DOOR') {
      if (soundEnabled) playCraftSound();
      if (onOpenVaultDoor) onOpenVaultDoor();
    } else if (code === 'MIMIC' || code === 'ОСЬМИНОГ' || code === 'МИМИК') {
      if (soundEnabled) playCraftSound();
      setCheatResult(`🐙 ${t.cheatMimic}`);
      onNavigate('games');
    } else if (code === 'APEX' || code === 'РАКЕТА' || code === 'ROCKET') {
      if (soundEnabled) playCraftSound();
      setCheatResult(`🎆 ${t.cheatApex}`);
      onNavigate('bunker');
    } else {
      setCheatResult(`❌ ${t.cheatInvalid}`);
    }
  };

  return (
    <footer className="border-t-3 border-[#1a1a1a] bg-[#1a1a1a] py-10 text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Col 1: About */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl p-1 bg-[#ffdc00] border-2 border-white shadow-[2px_2px_0px_0px_#fff]">👓</span>
              <span className="font-heading font-black text-2xl text-white tracking-tight uppercase">
                SURVIVAL NIGHTS
              </span>
            </div>
            <p className="text-sm text-slate-300 font-serif-story leading-relaxed max-w-sm">
              {t.footerAbout}
            </p>
            <p className="text-xs text-[#ffdc00] font-mono-code font-bold">
              {t.footerEngine}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-xs sm:text-sm font-mono-code">
            <h4 className="font-heading font-black text-[#ffdc00] uppercase text-xs tracking-wider mb-3">
              {t.footerSections}:
            </h4>
            <div><button onClick={() => onNavigate('home')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">🌟 {t.navOverview}</button></div>
            <div><button onClick={() => onNavigate('monsters')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">🐙 {t.navMonsters}</button></div>
            <div><button onClick={() => onNavigate('book')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">📖 {t.navBook}</button></div>
            <div><button onClick={() => onNavigate('bunker')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">🛠️ {t.navBunker}</button></div>
            <div><button onClick={() => onNavigate('games')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">🎮 {t.navGames}</button></div>
            <div><button onClick={() => onNavigate('devstory')} className="hover:text-[#ff4e00] transition-colors cursor-pointer text-left">👨‍👦 {t.navDevStory}</button></div>
          </div>

          {/* Col 3: Secret Terminal Easter Egg */}
          <div className="md:col-span-4 bg-[#262626] border-2 border-white p-4 shadow-[5px_5px_0px_0px_#ff4e00]">
            <div className="flex items-center justify-between border-b-2 border-white/40 pb-2 mb-3">
              <span className="text-xs font-mono-code text-[#ffdc00] font-black uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#ff4e00]" />
                {t.secretTerminalTitle}
              </span>
              <span className="text-[10px] font-mono-code text-slate-300 font-bold bg-[#1a1a1a] px-1.5 py-0.5 border border-white/30">v1.05</span>
            </div>

            <form onSubmit={handleCheatSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t.cheatPlaceholder}
                  value={cheatCode}
                  onChange={(e) => setCheatCode(e.target.value)}
                  className="flex-1 bg-[#1a1a1a] border-2 border-white/60 px-3 py-1.5 text-xs text-white font-mono-code font-bold focus:outline-none focus:border-[#ffdc00] uppercase shadow-[2px_2px_0px_0px_#000]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-[#ffdc00] hover:bg-[#ffe633] text-[#1a1a1a] font-heading font-black text-xs uppercase border-2 border-white shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                  OK
                </button>
              </div>

              {cheatResult && (
                <div className="text-[11px] font-mono-code text-[#1a1a1a] p-2 bg-[#ffdc00] border-2 border-[#1a1a1a] font-bold mt-2 shadow-[2px_2px_0px_0px_#ff4e00]">
                  {cheatResult}
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <div>
            {t.footerCredits}
          </div>
          <div className="flex items-center gap-2 text-white font-bold">
            <span>{t.footerMotto}</span>
            <span>👓✨</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

