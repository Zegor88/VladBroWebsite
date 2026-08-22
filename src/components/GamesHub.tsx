import { useState } from 'react';
import ShadowDetectorGame from './ShadowDetectorGame';
import SurvivalQuiz from './SurvivalQuiz';
import MonsterCreator from './MonsterCreator';
import { Flashlight, BrainCircuit, PlusCircle } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';

interface GamesHubProps {
  soundEnabled: boolean;
  defaultGame?: 'detector' | 'quiz' | 'creator';
}

export default function GamesHub({ soundEnabled, defaultGame = 'detector' }: GamesHubProps) {
  const { t } = useLanguage();
  const [activeGame, setActiveGame] = useState<'detector' | 'quiz' | 'creator'>(defaultGame);

  const handleSelectGame = (game: 'detector' | 'quiz' | 'creator') => {
    if (soundEnabled) playClickSound();
    setActiveGame(game);
  };

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          🎮 {t.gamesTitle}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.gamesSub}
        </p>
      </div>

      {/* Game Selector Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8">
        <button
          onClick={() => handleSelectGame('detector')}
          className={`p-4 border-3 border-[#1a1a1a] font-heading font-black text-sm sm:text-base uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeGame === 'detector'
              ? 'bg-[#ff4e00] text-sticker shadow-[5px_5px_0px_0px_#1a1a1a] -translate-y-1'
              : 'bg-white text-[#1a1a1a] hover:bg-[#ffdc00] shadow-[3px_3px_0px_0px_#1a1a1a]'
          }`}
        >
          <Flashlight className="w-5 h-5" />
          <span>{t.tabShadowGame}</span>
        </button>

        <button
          onClick={() => handleSelectGame('quiz')}
          className={`p-4 border-3 border-[#1a1a1a] font-heading font-black text-sm sm:text-base uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeGame === 'quiz'
              ? 'bg-[#ff4e00] text-sticker shadow-[5px_5px_0px_0px_#1a1a1a] -translate-y-1'
              : 'bg-white text-[#1a1a1a] hover:bg-[#ffdc00] shadow-[3px_3px_0px_0px_#1a1a1a]'
          }`}
        >
          <BrainCircuit className="w-5 h-5" />
          <span>{t.tabQuiz}</span>
        </button>

        <button
          onClick={() => handleSelectGame('creator')}
          className={`p-4 border-3 border-[#1a1a1a] font-heading font-black text-sm sm:text-base uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeGame === 'creator'
              ? 'bg-[#ff4e00] text-sticker shadow-[5px_5px_0px_0px_#1a1a1a] -translate-y-1'
              : 'bg-white text-[#1a1a1a] hover:bg-[#ffdc00] shadow-[3px_3px_0px_0px_#1a1a1a]'
          }`}
        >
          <PlusCircle className="w-5 h-5" />
          <span>{t.tabCreator}</span>
        </button>
      </div>

      {/* Embedded Active Game Component */}
      <div>
        {activeGame === 'detector' && (
          <ShadowDetectorGame soundEnabled={soundEnabled} />
        )}
        {activeGame === 'quiz' && (
          <SurvivalQuiz soundEnabled={soundEnabled} />
        )}
        {activeGame === 'creator' && (
          <MonsterCreator soundEnabled={soundEnabled} />
        )}
      </div>
    </div>
  );
}

