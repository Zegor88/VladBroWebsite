import { useState, useEffect, useCallback } from 'react';
import { Flashlight, Trophy, RotateCcw, Check, Disc } from 'lucide-react';
import { playClickSound, playFlashlightSound, playMonsterSound } from '../utils/soundEffects';
import mimicImg from '../assets/images/monster_mimic_1787032096973.jpg';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n';

interface FarmObject {
  id: number;
  type: 'box' | 'barrel' | 'pumpkin' | 'stone' | 'mimic';
  label: string;
  emoji: string;
  realShadow: string;
  isMimic: boolean;
}

export default function ShadowDetectorGame({ soundEnabled }: { soundEnabled: boolean }) {
  const { t, shadowObjects } = useLanguage();
  const [objects, setObjects] = useState<FarmObject[]>([]);
  const [flashlightOn, setFlashlightOn] = useState<boolean>(false);
  const [selectedObjectId, setSelectedObjectId] = useState<number | null>(null);
  const [isThrowing, setIsThrowing] = useState<boolean>(false);
  const [throwingTargetId, setThrowingTargetId] = useState<number | null>(null);
  const [mimicEscaped, setMimicEscaped] = useState<boolean>(false);
  const [sandwichStolen, setSandwichStolen] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [feedback, setFeedback] = useState<string>('');

  const generateRound = useCallback((currentRound: number) => {
    const mimicIndex = Math.floor(Math.random() * 4);
    const newObjects: FarmObject[] = [];

    for (let i = 0; i < 4; i++) {
      if (i === mimicIndex) {
        const disguise = Math.random() > 0.5 ? shadowObjects[0] : shadowObjects[1];
        newObjects.push({
          id: i,
          type: 'mimic',
          label: `${disguise.label} #${i + 1}`,
          emoji: disguise.emoji,
          realShadow: t.mimicShadowText,
          isMimic: true,
        });
      } else {
        const obj = shadowObjects[i % shadowObjects.length];
        newObjects.push({
          id: i,
          type: obj.type as FarmObject['type'],
          label: `${obj.label} #${i + 1}`,
          emoji: obj.emoji,
          realShadow: obj.shadow,
          isMimic: false,
        });
      }
    }

    setObjects(newObjects);
    setFlashlightOn(false);
    setSelectedObjectId(null);
    setIsThrowing(false);
    setThrowingTargetId(null);
    setMimicEscaped(false);
    setSandwichStolen(false);
    setGameState('playing');
    setFeedback(`${t.roundLabel} ${currentRound}: ${t.shadowInstruction}`);
  }, [shadowObjects, t.mimicShadowText, t.roundLabel, t.shadowInstruction]);

  useEffect(() => {
    generateRound(1);
  }, [generateRound]);

  const handleToggleFlashlight = () => {
    if (soundEnabled) playFlashlightSound();
    setFlashlightOn(!flashlightOn);
  };

  const handleSelectObject = (obj: FarmObject) => {
    if (gameState !== 'playing' || isThrowing) return;
    if (soundEnabled) playClickSound();
    
    setIsThrowing(true);
    setThrowingTargetId(obj.id);
    setSelectedObjectId(obj.id);
    setFeedback(t.throwingRock || 'Бросаем камень...');

    // Throw trajectory delay
    setTimeout(() => {
      setIsThrowing(false);
      
      if (obj.isMimic) {
        if (soundEnabled) playMonsterSound('mimic');
        setMimicEscaped(true);
        setScore(prev => prev + 1);
        setGameState('won');
        setFeedback(`🎉 ${t.shadowBingo} • ${t.mimicEscaping}`);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setSandwichStolen(true);
        setGameState('lost');
        setFeedback(`❌ ${t.shadowMistake} ${obj.label}`);
        
        // Auto clear sandwich popup after 2.5s
        setTimeout(() => {
          setSandwichStolen(false);
        }, 2800);
      }
    }, 550);
  };

  const handleNextRound = () => {
    if (soundEnabled) playClickSound();
    const nextR = round + 1;
    setRound(nextR);
    generateRound(nextR);
  };

  const handleRestart = () => {
    if (soundEnabled) playClickSound();
    setScore(0);
    setRound(1);
    generateRound(1);
  };

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.detectorTitle}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.detectorSub}
        </p>
      </div>

      {/* Game Dashboard Card */}
      <div className={`bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1a1a1a] max-w-4xl mx-auto relative ${
        flashlightOn ? 'cursor-[crosshair]' : ''
      }`}>
        
        {/* Top Score Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#1a1a1a] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs px-3 py-1.5 bg-[#f4f1ea] text-[#1a1a1a] border-2 border-[#1a1a1a] font-bold shadow-[2px_2px_0px_0px_#1a1a1a]">
              {t.roundLabel}: {round}
            </span>
            <span className="font-mono-code text-xs px-3 py-1.5 bg-[#ffdc00] text-[#1a1a1a] border-2 border-[#1a1a1a] font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1a1a1a]">
              <Trophy className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.scoreLabel}: {score}
            </span>
          </div>

          {/* Flashlight Mode Switch */}
          <button
            onClick={handleToggleFlashlight}
            className={`px-4 py-2.5 text-xs sm:text-sm font-black transition-all flex items-center gap-2 border-2 border-[#1a1a1a] cursor-pointer shadow-[3px_3px_0px_0px_#1a1a1a] active:translate-y-0.5 ${
              flashlightOn
                ? 'bg-[#ffdc00] text-[#1a1a1a]'
                : 'bg-[#ff4e00] hover:bg-[#e04500] text-sticker'
            }`}
          >
            <Flashlight className="w-4 h-4" />
            <span>{flashlightOn ? `🔦 ${t.spotlightOn}` : `💡 ${t.turnOnSpotlight}`}</span>
          </button>
        </div>

        {/* Feedback Banner */}
        <div className={`p-4 mb-6 text-sm font-mono-code font-bold text-center border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] transition-colors ${
          gameState === 'won'
            ? 'bg-[#e8f5e9] text-[#1b5e20]'
            : gameState === 'lost'
            ? 'bg-[#ffebee] text-[#c62828]'
            : isThrowing
            ? 'bg-[#fff8cc] text-[#1a1a1a] animate-pulse'
            : 'bg-[#faf8f2] text-[#1a1a1a]'
        }`}>
          {feedback}
        </div>

        {/* Farm Objects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {objects.map((obj) => {
            const isSelected = selectedObjectId === obj.id;
            const isTargetOfThrow = throwingTargetId === obj.id && isThrowing;
            const revealMimic = gameState !== 'playing' && obj.isMimic;

            return (
              <button
                key={obj.id}
                onClick={() => handleSelectObject(obj)}
                disabled={gameState !== 'playing' || isThrowing}
                className={`p-5 border-2 sm:border-3 border-[#1a1a1a] text-center transition-all flex flex-col justify-between items-center group relative cursor-pointer ${
                  isSelected
                    ? obj.isMimic
                      ? 'bg-[#fff8cc] shadow-[5px_5px_0px_0px_#1a1a1a] -translate-y-1'
                      : 'bg-[#ffebee] shadow-[5px_5px_0px_0px_#1a1a1a]'
                    : 'bg-[#faf8f2] hover:bg-white shadow-[2px_2px_0px_0px_#1a1a1a]'
                }`}
              >
                {/* Throwing Stone flying animation overlay */}
                {isTargetOfThrow && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                    <div className="text-3xl animate-bounce">🪨💨</div>
                  </div>
                )}

                {/* Mimic Escaping Slime trail Animation */}
                {revealMimic && mimicEscaped && (
                  <div className="absolute -top-3 right-0 bg-[#00e676] text-[#004d40] text-[10px] font-mono-code font-black px-2 py-0.5 border border-[#1a1a1a] shadow-[2px_2px_0px_0px_#000] animate-bounce z-10">
                    {t.slimeSquirtedLabel}
                  </div>
                )}

                {/* Object Emoji or Image on reveal */}
                <div className="w-20 h-20 my-2 transition-transform group-hover:scale-105 p-1 bg-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center overflow-hidden relative">
                  {revealMimic ? (
                    <img
                      src={mimicImg}
                      alt="Revealed Mimic"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover animate-pulse"
                    />
                  ) : (
                    <span className="text-4xl">{obj.emoji}</span>
                  )}
                </div>

                <div className="font-heading font-black text-sm text-[#1a1a1a] mb-2 uppercase">
                  {revealMimic ? `🐙 ${t.mimicName}!` : obj.label}
                </div>

                {/* Shadow Box */}
                <div className={`w-full p-2.5 text-xs font-mono-code transition-colors border border-[#1a1a1a] ${
                  flashlightOn
                    ? obj.isMimic
                      ? 'bg-[#ffdc00] text-[#1a1a1a] font-black shadow-[inset_0_0_8px_rgba(255,140,0,0.5)]'
                      : 'bg-white text-slate-800 font-bold'
                    : 'bg-[#f4f1ea] text-slate-600'
                }`}>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">{t.shadowLabel}:</div>
                  <div className="truncate mt-0.5 font-bold">
                    {flashlightOn ? obj.realShadow : `🌑 ${t.darknessNoLight}`}
                  </div>
                </div>

                {gameState === 'playing' && (
                  <span className="mt-3 text-[11px] font-mono-code text-[#ff4e00] font-black group-hover:underline uppercase flex items-center gap-1">
                    <span>🪨</span>
                    <span>{t.rockThrowAction}</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls when Round Finishes */}
        {gameState !== 'playing' && (
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleNextRound}
              className="px-6 py-3 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-sm uppercase transition-all shadow-[3px_3px_0px_0px_#1a1a1a] cursor-pointer flex items-center gap-2 border-2 border-[#1a1a1a]"
            >
              <Check className="w-4 h-4" />
              <span>{t.nextRound} ({round + 1})</span>
            </button>
            <button
              onClick={handleRestart}
              className="px-4 py-3 bg-white hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-bold text-sm transition-all border-2 border-[#1a1a1a] flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#1a1a1a]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.reset}</span>
            </button>
          </div>
        )}

      </div>

      {/* Sandwich Stolen Cartoon Animation Popup */}
      {sandwichStolen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in pointer-events-none">
          <div className="bg-[#fff3e0] border-4 border-[#1a1a1a] p-6 sm:p-8 max-w-md shadow-[10px_10px_0px_0px_#ff4e00] text-center space-y-3 animate-bounce">
            <div className="text-5xl">🐙🥪😋</div>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-[#d84315] uppercase">
              {t.mimicStoleSandwichTitle}
            </h4>
            <p className="font-serif-story text-slate-800 text-sm sm:text-base">
              {t.mimicCaughtPlayer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}


