import { useState } from 'react';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { playClickSound, playCraftSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n';

export default function SurvivalQuiz({ soundEnabled }: { soundEnabled: boolean }) {
  const { t, quizQuestions } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQ = quizQuestions[currentIdx] || quizQuestions[0];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    if (soundEnabled) playClickSound();
    setSelectedOption(index);
    setIsAnswered(true);

    if (currentQ.options[index].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (soundEnabled) playClickSound();
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (soundEnabled) playCraftSound();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    if (soundEnabled) playClickSound();
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getRank = () => {
    if (score === quizQuestions.length) {
      return {
        title: `${t.rankMaster} 🏆`,
        desc: t.rankMasterDesc
      };
    }
    if (score >= Math.ceil(quizQuestions.length * 0.6)) {
      return {
        title: `${t.rankPartner} 🛠️`,
        desc: t.rankPartnerDesc
      };
    }
    return {
      title: `${t.rankNovice} 🪂`,
      desc: t.rankNoviceDesc
    };
  };

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.quizTitle}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.quizSub}
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1a1a1a]">
        
        {!quizFinished ? (
          <div>
            {/* Progress bar */}
            <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-4 mb-6">
              <span className="text-xs font-mono-code bg-[#ffdc00] text-[#1a1a1a] px-2 py-0.5 border border-[#1a1a1a] font-black uppercase">
                {t.question} {currentIdx + 1} {t.of} {quizQuestions.length}
              </span>
              <span className="text-xs font-mono-code text-[#1a1a1a] font-bold">
                {t.correctAnswers}: {score}
              </span>
            </div>

            {/* Scenario */}
            <div className="mb-6 bg-[#f4f1ea] border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a]">
              <span className="text-xs font-mono-code text-[#ff4e00] font-black block mb-1 uppercase tracking-wider">
                {t.situationOnIsland}:
              </span>
              <h3 className="font-serif-story text-lg sm:text-xl text-[#1a1a1a] font-bold leading-relaxed">
                {currentQ.scenario}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isChosen = selectedOption === idx;
                let btnStyle = 'bg-[#faf8f2] border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-white shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-[#e8f5e9] border-2 border-[#2e7d32] text-[#1b5e20] shadow-[3px_3px_0px_0px_#1a1a1a] font-bold';
                  } else if (isChosen) {
                    btnStyle = 'bg-[#ffebee] border-2 border-[#c62828] text-[#c62828] shadow-[3px_3px_0px_0px_#1a1a1a] font-bold';
                  } else {
                    btnStyle = 'bg-[#f4f1ea] border border-slate-400 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 text-left text-sm sm:text-base font-medium transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <div className="w-6 h-6 border-2 border-[#1a1a1a] bg-white flex items-center justify-center text-xs font-mono-code font-black flex-shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_#1a1a1a]">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <div className="font-serif-story font-bold">{opt.text}</div>
                      {isAnswered && (isChosen || opt.isCorrect) && (
                        <div className={`mt-2 text-xs font-mono-code font-bold ${opt.isCorrect ? 'text-[#1b5e20]' : 'text-[#c62828]'}`}>
                          {opt.explanation}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            {isAnswered && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-sm uppercase transition-all shadow-[3px_3px_0px_0px_#1a1a1a] border-2 border-[#1a1a1a] cursor-pointer flex items-center gap-2"
                >
                  <span>{currentIdx === quizQuestions.length - 1 ? t.viewResults : t.nextQuestion}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Quiz Results */
          <div className="text-center py-6 space-y-6">
            <div className="w-20 h-20 bg-[#ffdc00] border-3 border-[#1a1a1a] flex items-center justify-center text-4xl mx-auto shadow-[4px_4px_0px_0px_#1a1a1a]">
              {score >= 4 ? '🏆' : score >= 3 ? '🛠️' : '🪂'}
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#1a1a1a] uppercase">
                {getRank().title}
              </h3>
              <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2 max-w-md mx-auto">
                {getRank().desc}
              </p>
            </div>

            <div className="p-4 bg-[#f4f1ea] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] inline-block font-mono-code text-sm text-[#1a1a1a]">
              {t.yourScore}: <strong className="text-[#ff4e00] text-xl">{score}</strong> {t.of} {quizQuestions.length} {t.points}
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-sm uppercase transition-all shadow-[3px_3px_0px_0px_#1a1a1a] border-2 border-[#1a1a1a] cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.retakeQuiz}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

