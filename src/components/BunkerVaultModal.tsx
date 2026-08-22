import { useState, type FormEvent } from 'react';
import { X, Lock, KeyRound, AlertTriangle, ShieldCheck, ArrowLeft, Terminal } from 'lucide-react';
import vaultDoorImg from '../assets/images/bunker_vault_door_1787391774855.jpg';
import { useLanguage } from '../i18n';
import { playClickSound } from '../utils/soundEffects';

interface BunkerVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled?: boolean;
}

export default function BunkerVaultModal({ isOpen, onClose, soundEnabled = false }: BunkerVaultModalProps) {
  const { t } = useLanguage();
  const [code, setCode] = useState<string>('');
  const [attempted, setAttempted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDigit = (digit: string) => {
    if (soundEnabled) playClickSound();
    if (code.length < 8) {
      setCode(prev => prev + digit);
    }
  };

  const handleClear = () => {
    if (soundEnabled) playClickSound();
    setCode('');
  };

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (soundEnabled) playClickSound();
    setAttempted(true);
  };

  const handleReset = () => {
    if (soundEnabled) playClickSound();
    setAttempted(false);
    setCode('');
  };

  const handleClose = () => {
    if (soundEnabled) playClickSound();
    setAttempted(false);
    setCode('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0e14]/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#121922] border-4 border-[#1a1a1a] shadow-[12px_12px_0px_0px_#ff4e00] text-[#f4f1ea] rounded-xs flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#1a2332] border-b-3 border-[#1a1a1a]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#ff4e00] border-2 border-[#1a1a1a] flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#000]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono-code font-black text-[#ffdc00] uppercase tracking-wider block leading-none">
                VAULT PROTOCOL • SECTOR 01
              </span>
              <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-white mt-0.5">
                {t.vaultDoorTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 sm:p-2 bg-[#ffdc00] hover:bg-[#ffe600] text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all active:translate-y-0.5"
            title={t.vaultCloseBtn}
          >
            <X className="w-5 h-5 font-black" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Atmospheric Vault Door Art */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] max-w-[340px] border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#000] overflow-hidden bg-[#060a0f] group">
              <img
                src={vaultDoorImg}
                alt="Bunker Vault Door"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[#121922]/90 border-2 border-[#ff4e00] shadow-[2px_2px_0px_0px_#000]">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#ffdc00]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4e00] animate-ping" />
                  <span>STATUS: ARMORED LOCKDOWN</span>
                </div>
                <p className="text-[11px] text-slate-300 font-mono-code mt-0.5">
                  Class-4 Reinforced Blast Door
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Keypad or Access Denied Screen */}
          <div className="lg:col-span-6 flex flex-col">
            {!attempted ? (
              <div className="bg-[#182230] border-3 border-[#1a1a1a] p-5 sm:p-6 shadow-[6px_6px_0px_0px_#ff4e00] space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#ffdc00] text-[#1a1a1a] text-[10px] font-mono-code font-black uppercase border border-[#1a1a1a]">
                    <KeyRound className="w-3 h-3 text-[#ff4e00]" />
                    <span>ELECTRO-KEYPAD</span>
                  </div>
                  <h4 className="font-heading font-black text-lg sm:text-xl uppercase text-white">
                    {t.vaultDoorTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif-story text-slate-300 leading-relaxed">
                    {t.vaultDoorDesc}
                  </p>
                </div>

                {/* Digital Code Screen */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={10}
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      placeholder={t.vaultCodePlaceholder}
                      className="w-full bg-[#0b1017] border-2 border-[#ff4e00] px-4 py-3 text-center text-lg sm:text-xl font-mono-code font-black tracking-widest text-[#ffdc00] placeholder:text-slate-600 focus:outline-none focus:border-[#ffdc00] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    />
                    <div className="absolute right-3 top-3.5 text-xs font-mono-code text-slate-500 font-bold">
                      {code.length}/8
                    </div>
                  </div>

                  {/* 10-Digit Interactive Numpad */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleDigit(num)}
                        className="py-2.5 bg-[#223044] hover:bg-[#2c3d56] active:bg-[#ffdc00] active:text-[#1a1a1a] text-white font-mono-code font-black text-base border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all active:translate-y-0.5"
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={handleClear}
                      className="py-2.5 bg-[#3b2323] hover:bg-[#4d2d2d] text-[#ff8080] font-mono-code font-black text-xs uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all"
                    >
                      {t.vaultKeypadClear}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDigit('0')}
                      className="py-2.5 bg-[#223044] hover:bg-[#2c3d56] active:bg-[#ffdc00] active:text-[#1a1a1a] text-white font-mono-code font-black text-base border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all active:translate-y-0.5"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      className="py-2.5 bg-[#ff4e00] hover:bg-[#e04500] text-white font-mono-code font-black text-xs uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all"
                    >
                      ENTER ↵
                    </button>
                  </div>

                  {/* Primary Unlock Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#ffdc00] hover:bg-[#ffe600] text-[#1a1a1a] font-heading font-black text-sm uppercase border-3 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#ff4e00] hover:shadow-[5px_5px_0px_0px_#ff4e00] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <KeyRound className="w-4 h-4 text-[#ff4e00]" />
                    <span>{t.vaultSubmitBtn}</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Access Restricted Sealed Screen */
              <div className="bg-[#1f2937] border-3 border-[#ff4e00] p-6 shadow-[6px_6px_0px_0px_#000] space-y-4 animate-fade-in text-center">
                <div className="w-14 h-14 mx-auto bg-[#ff4e00]/20 border-2 border-[#ff4e00] rounded-full flex items-center justify-center text-[#ff4e00] shadow-[2px_2px_0px_0px_#000]">
                  <AlertTriangle className="w-7 h-7 animate-bounce" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono-code font-black text-[#ff8080] bg-[#3a1c1c] px-2 py-0.5 border border-[#ff4e00] uppercase">
                    SEALED PROTOCOL • ACCESS RESTRICTED
                  </span>
                  <h4 className="font-heading font-black text-xl sm:text-2xl uppercase text-[#ffdc00] pt-1">
                    {t.vaultAccessDeniedTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif-story text-slate-300 leading-relaxed pt-1">
                    {t.vaultAccessDeniedDesc}
                  </p>
                </div>

                <div className="p-3.5 bg-[#121922] border-2 border-dashed border-slate-600 text-left font-mono-code text-xs text-slate-400 space-y-1">
                  <div className="text-[#ffdc00] font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SYSTEM DIAGNOSTIC:</span>
                  </div>
                  <div>• Vault Integrity: 100% Secure</div>
                  <div>• Life Support: Standby Mode</div>
                  <div>• Multi-profile save & customizable bunks: In Development</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 bg-[#2c3d56] hover:bg-[#394f6e] text-white font-mono-code font-black text-xs uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Попробовать снова</span>
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-5 py-2.5 bg-[#ff4e00] hover:bg-[#e04500] text-white font-heading font-black text-xs uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] cursor-pointer"
                  >
                    {t.vaultCloseBtn}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
