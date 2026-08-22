import { X, Radio, AlertOctagon } from 'lucide-react';
import noahImg from '../assets/images/noah_heli_scene_1787391787548.jpg';
import { useLanguage } from '../i18n';
import { playClickSound } from '../utils/soundEffects';

interface NoahModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled?: boolean;
}

export default function NoahModal({ isOpen, onClose, soundEnabled = false }: NoahModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleClose = () => {
    if (soundEnabled) playClickSound();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e14]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#fdfcf8] border-4 border-[#1a1a1a] shadow-[10px_10px_0px_0px_#ff4e00] p-5 sm:p-7 text-[#1a1a1a] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-[#ffdc00] hover:bg-[#ffe600] text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer transition-all z-10"
        >
          <X className="w-5 h-5 font-black" />
        </button>

        <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#1a1a1a] mb-4">
          {t.noahModalTitle}
        </h3>

        {/* Noah Scene Artwork */}
        <div className="border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#1a1a1a] overflow-hidden mb-4 bg-[#1a1a1a]">
          <img
            src={noahImg}
            alt="Noah's Ark Helicopter Scene"
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="p-2 bg-[#1a1a1a] text-[#ffdc00] text-center font-mono-code text-xs font-bold uppercase flex items-center justify-center gap-2">
            <AlertOctagon className="w-3.5 h-3.5 text-[#ff4e00]" />
            <span>WARNING: MAXIMUM HELICOPTER PAYLOAD EXCEEDED! 🐒🦛🐙</span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="font-serif-story text-slate-800 text-sm sm:text-base leading-relaxed mb-6 bg-[#faf8f2] p-4 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]">
          {t.noahModalDesc}
        </p>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-[#ffdc00] hover:bg-[#ffe600] text-[#1a1a1a] font-heading font-black text-sm uppercase border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.noahCloseBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
