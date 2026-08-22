import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n';
import { playClickSound } from '../utils/soundEffects';

interface LanguageSelectorProps {
  soundEnabled?: boolean;
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  soundEnabled = true,
  compact = false,
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: typeof language) => {
    if (soundEnabled) playClickSound();
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} id="language-switcher">
      <button
        type="button"
        onClick={() => {
          if (soundEnabled) playClickSound();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-1.5 px-2 py-1 border-2 border-[#1a1a1a] bg-white hover:bg-[#ffdc00] text-[#1a1a1a] font-heading font-black text-xs shadow-[2px_2px_0px_0px_#1a1a1a] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none ${
          compact ? 'h-8' : 'h-8 sm:h-9'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language / Сменить язык / Promeni jezik"
      >
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="font-mono-code font-black text-xs tracking-wide">
          {currentOption.shortLabel}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#1a1a1a] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2.5 py-1 text-[10px] font-mono-code uppercase font-bold text-neutral-500 border-b border-neutral-200 flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#ff4e00]" />
            <span>Language</span>
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                onClick={() => handleSelect(opt.code)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left text-xs font-heading font-bold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#ffdc00] text-[#1a1a1a] font-black'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-black'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm leading-none">{opt.flag}</span>
                  <span>{opt.label}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#ff4e00]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
