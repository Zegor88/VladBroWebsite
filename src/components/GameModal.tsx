import { X, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../i18n';
import { playClickSound } from '../utils/soundEffects';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled?: boolean;
}

export default function GameModal({ isOpen, onClose, soundEnabled = false }: GameModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleClose = () => {
    if (soundEnabled) playClickSound();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e14]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#1a2332] border-4 border-[#1a1a1a] shadow-[10px_10px_0px_0px_#00e5ff] p-6 sm:p-8 text-[#f4f1ea] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-[#ffdc00] hover:bg-[#ffe600] text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all z-10"
        >
          <X className="w-5 h-5 font-black" />
        </button>

        <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#ffdc00] mb-3 flex items-start gap-2.5">
          <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-0.5" /> <span>{t.gameModalTitle}</span>
        </h3>

        <div className="p-4 bg-[#0e1622] border-2 border-[#00e5ff] shadow-[4px_4px_0px_0px_#000] space-y-3 mb-6">
          <p className="font-serif-story text-slate-200 text-sm sm:text-base leading-relaxed">
            {t.gameModalDesc}
          </p>

          <div className="p-3 bg-[#16202f] border border-slate-700 font-mono-code text-xs text-slate-300 space-y-1">
            <div className="text-[#00e5ff] font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>GODOT 4 TARGET SPECS:</span>
            </div>
            <div>• Core Engine: Godot 4.3 LTS (Forward+ & Compatibility WebGL)</div>
            <div>• Platform Target: HTML5 / WebGL 2.0 & Windows/Mac Executable</div>
            <div>• Status: Gameplay prototype under active development</div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-[#00e5ff] hover:bg-[#33ebff] text-[#1a1a1a] font-heading font-black text-sm uppercase border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.gameCloseBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
