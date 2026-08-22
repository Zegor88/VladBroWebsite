import { useEffect, useState } from 'react';
import { X, Sparkles, Gift, Volume2, Check } from 'lucide-react';
import { startDancePartyMusic, stopDancePartyMusic } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n';

interface DancePartyModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export default function DancePartyModal({ isOpen, onClose, soundEnabled }: DancePartyModalProps) {
  const { t, danceMonsters } = useLanguage();
  const [claimedGifts, setClaimedGifts] = useState<string[]>([]);
  const [beatPulse, setBeatPulse] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      if (soundEnabled) {
        startDancePartyMusic();
      }
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });

      const interval = setInterval(() => {
        setBeatPulse(prev => !prev);
      }, 360);

      return () => {
        clearInterval(interval);
        stopDancePartyMusic();
      };
    } else {
      stopDancePartyMusic();
    }
  }, [isOpen, soundEnabled]);

  if (!isOpen) return null;

  const handleClaimGift = (gift: string) => {
    if (!claimedGifts.includes(gift)) {
      setClaimedGifts([...claimedGifts, gift]);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#f4f1ea] border-4 border-[#1a1a1a] p-6 sm:p-8 shadow-[12px_12px_0px_0px_#1a1a1a] overflow-hidden">
        
        {/* Animated disco background glows */}
        <div className={`absolute -top-20 -left-20 w-64 h-64 bg-[#ff4e00]/10 rounded-full blur-3xl transition-transform duration-300 ${beatPulse ? 'scale-125' : 'scale-90'}`} />
        <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-[#ffdc00]/20 rounded-full blur-3xl transition-transform duration-300 ${beatPulse ? 'scale-90' : 'scale-125'}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="text-center mb-6 relative">
          <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#1a1a1a] uppercase tracking-wide">
            🎉 {t.danceModalTitle} 🎉
          </h3>
          <p className="text-slate-800 font-serif-story text-xs sm:text-base mt-1 max-w-xl mx-auto italic">
            {t.danceModalSub}
          </p>
        </div>

        {/* Dancing Monsters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-6">
          {danceMonsters.map((dancer, idx) => {
            const isClaimed = claimedGifts.includes(dancer.gift);
            return (
              <div
                key={idx}
                className="p-4 bg-white border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] text-center flex flex-col justify-between items-center group relative"
              >
                {/* Dancing emoji with pulse & wobble */}
                <div
                  className={`text-5xl my-2 p-2 bg-[#f4f1ea] border border-[#1a1a1a] transition-transform duration-300 ${
                    beatPulse ? 'scale-115 -rotate-6' : 'scale-100 rotate-6'
                  }`}
                >
                  {dancer.emoji}
                </div>

                <div className="font-heading font-black text-sm text-[#1a1a1a] uppercase">{dancer.name}</div>
                <div className="text-[11px] text-[#ff4e00] font-mono-code font-bold mt-0.5 leading-tight">
                  {dancer.move}
                </div>

                {/* Gift button */}
                <button
                  onClick={() => handleClaimGift(dancer.gift)}
                  className={`mt-3 w-full py-1.5 px-2 text-[11px] font-mono-code font-bold transition-all border-2 border-[#1a1a1a] flex items-center justify-center gap-1 cursor-pointer ${
                    isClaimed
                      ? 'bg-[#e8f5e9] text-[#1b5e20] shadow-[1px_1px_0px_0px_#1a1a1a]'
                      : 'bg-[#ffdc00] hover:bg-[#ffe633] text-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]'
                  }`}
                >
                  {isClaimed ? <Check className="w-3 h-3" /> : <Gift className="w-3 h-3" />}
                  <span>{isClaimed ? t.taken : t.giftBtn}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Claimed Inventory Preview */}
        {claimedGifts.length > 0 && (
          <div className="mb-6 p-3 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] text-xs font-mono-code text-slate-800 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[#ff4e00] font-black uppercase">
              <Sparkles className="w-4 h-4 text-[#ff4e00]" />
              {t.giftsInInventory}:
            </span>
            <span className="text-[#1a1a1a] font-bold">{claimedGifts.join(', ')}</span>
          </div>
        )}

        {/* Footer controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-[#1a1a1a]">
          <div className="flex items-center gap-2 text-xs text-[#1a1a1a] font-mono-code font-bold">
            <Volume2 className="w-4 h-4 text-[#ff4e00] animate-pulse" />
            <span>{t.soundtrackPlaying}</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-xs sm:text-sm uppercase border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] transition-all cursor-pointer"
          >
            {t.returnToBunker}
          </button>
        </div>

      </div>
    </div>
  );
}
