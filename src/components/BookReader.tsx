import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Share2, Check, ArrowRight, BookOpen, PenLine } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import { useLanguage } from '../i18n';
import SafeImage from './SafeImage';

interface BookReaderProps {
  onOpenMonster: (monsterId: string) => void;
  soundEnabled: boolean;
}

export default function BookReader({ onOpenMonster, soundEnabled }: BookReaderProps) {
  const { t, chapters, monsters } = useLanguage();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [bookmarkedChapter, setBookmarkedChapter] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('survival_nights_bookmark');
      if (saved) {
        setBookmarkedChapter(parseInt(saved, 10));
      }
    } catch {
      // ignore
    }
  }, []);

  const chapter = chapters[currentChapterIndex] || chapters[0];

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      if (soundEnabled) playClickSound();
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      if (soundEnabled) playClickSound();
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const toggleBookmark = () => {
    if (soundEnabled) playClickSound();
    const newBookmark = bookmarkedChapter === chapter.id ? null : chapter.id;
    setBookmarkedChapter(newBookmark);
    try {
      if (newBookmark) {
        localStorage.setItem('survival_nights_bookmark', newBookmark.toString());
      } else {
        localStorage.removeItem('survival_nights_bookmark');
      }
    } catch {
      // ignore
    }
  };

  const copyChapterLink = () => {
    if (soundEnabled) playClickSound();
    navigator.clipboard.writeText(
      `📖 «${t.appTitle}: ${t.bookTitle}» — ${t.chapterLabel} ${chapter.id}: ${chapter.title}!\n\n${chapter.storyText[0]}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const monsterData = chapter.monsterPreview ? monsters.find(m => m.id === chapter.monsterPreview) : null;

  return (
    <section className="py-6 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="flex justify-center mb-2">
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.bookTitle}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.bookSub}
        </p>
      </div>

      {/* Chapter Carousel Buttons 1..16 — one row on wide screens, wraps only when space truly runs out */}
      <div className="bg-white border-3 border-[#1a1a1a] p-3 sm:p-4 mb-6 shadow-[6px_6px_0px_0px_#1a1a1a]">
        <div className="text-xs font-mono-code font-black text-[#1a1a1a] uppercase mb-2">
          {t.selectChapter}:
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {chapters.map((ch, idx) => {
            const isCurrent = idx === currentChapterIndex;
            const isBookmarked = bookmarkedChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  if (soundEnabled) playClickSound();
                  setCurrentChapterIndex(idx);
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#1a1a1a] font-heading font-black text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#ff4e00] text-sticker shadow-[2px_2px_0px_0px_#1a1a1a] scale-105'
                    : 'bg-[#f4f1ea] hover:bg-[#ffdc00] text-[#1a1a1a]'
                }`}
                title={`${t.chapterLabel} ${ch.id}: ${ch.title}`}
              >
                {ch.id}
                {isBookmarked && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ffdc00] rounded-full border border-[#1a1a1a]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Chapter Card */}
      <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#1a1a1a] relative">
        
        {/* Top Chapter Metadata & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#1a1a1a] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#ffdc00] text-[#1a1a1a] border-2 border-[#1a1a1a] font-mono-code font-black text-xs sm:text-sm shadow-[2px_2px_0px_0px_#1a1a1a]">
              {t.chapterLabel.toUpperCase()} {chapter.id}
            </span>
            <span className="text-xs font-mono-code font-bold text-[#ff4e00] uppercase">
              {chapter.tag}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleBookmark}
              className={`w-11 h-11 flex items-center justify-center border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                bookmarkedChapter === chapter.id
                  ? 'bg-[#ffdc00] text-[#1a1a1a]'
                  : 'bg-[#f4f1ea] hover:bg-white text-[#1a1a1a]'
              }`}
              title={bookmarkedChapter === chapter.id ? t.bookmarked : t.bookmark}
              aria-label={bookmarkedChapter === chapter.id ? t.bookmarked : t.bookmark}
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={copyChapterLink}
              className="w-11 h-11 flex items-center justify-center bg-[#f4f1ea] hover:bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] cursor-pointer transition-all"
              title={copied ? t.copied : t.share}
              aria-label={copied ? t.copied : t.share}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Chapter Title */}
        <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#1a1a1a] uppercase tracking-tight mb-2">
          {chapter.title}
        </h3>
        <p className="text-[#ff4e00] font-mono-code font-bold text-sm sm:text-base mb-6">
          {chapter.subtitle}
        </p>

        {/* Story Text Paragraphs with Big Kid-Friendly Font */}
        <div className="space-y-4 text-[#1a1a1a] font-serif-story text-base sm:text-xl leading-relaxed">
          {chapter.storyText.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Monster link banner if applicable */}
        {monsterData && (
          <div className="mt-8 p-4 bg-[#fff9e6] border-2 border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#1a1a1a]">
            <div className="flex items-center gap-3">
              {monsterData.imageUrl ? (
                <div className="w-14 h-14 border-2 border-[#1a1a1a] overflow-hidden flex-shrink-0 bg-[#1a1a1a] relative">
                  <SafeImage
                    src={monsterData.imageUrl}
                    alt={monsterData.name}
                    fallbackIcon={monsterData.icon}
                    fallbackClassName="text-2xl"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <span className="text-3xl p-1 bg-white border-2 border-[#1a1a1a]">
                  {monsterData.icon}
                </span>
              )}
              <div>
                <span className="text-[10px] font-mono-code font-black text-[#ff4e00] uppercase block">
                  {t.chapterMonsterAppears}
                </span>
                <h4 className="font-heading font-black text-base text-[#1a1a1a] uppercase">
                  {monsterData.name}
                </h4>
                <p className="text-xs font-serif-story text-slate-700">
                  {monsterData.codename}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenMonster(monsterData.id)}
              className="px-4 py-2 bg-[#ff4e00] hover:bg-[#e04500] text-sticker font-heading font-black text-xs uppercase border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] flex items-center gap-1 cursor-pointer transition-all flex-shrink-0"
            >
              <span>{t.openMonsterDossier}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Geek Hand-Drawn Notebook Note / Blueprint */}
        <div className="mt-8 p-5 bg-[#faf8f2] border-2 border-dashed border-[#1a1a1a]">
          <div className="flex items-center justify-between border-b border-[#1a1a1a]/20 pb-2 mb-3">
            <span className="text-xs font-mono-code font-black text-[#1a1a1a] uppercase flex items-center gap-1.5">
              <PenLine className="w-3.5 h-3.5" /> {t.marginNotes}: {chapter.geekDoodle.title}
            </span>
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm font-mono-code text-slate-800 font-bold mb-3">
            {chapter.geekDoodle.details.map((d, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-[#ff4e00]">►</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="p-3 bg-white border-2 border-[#1a1a1a] text-xs sm:text-sm font-hand font-bold text-[#1a1a1a]">
            «{chapter.geekDoodle.handwrittenNote}»
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t-3 border-[#1a1a1a]">
          <button
            onClick={handlePrev}
            disabled={currentChapterIndex === 0}
            className="px-4 sm:px-6 py-3 border-2 border-[#1a1a1a] bg-white hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#1a1a1a] text-[#1a1a1a] font-heading font-black text-xs sm:text-sm uppercase shadow-[3px_3px_0px_0px_#1a1a1a] flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.prevChapter}</span>
          </button>

          <span className="text-xs font-mono-code font-bold text-slate-700">
            {currentChapterIndex + 1} / {chapters.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentChapterIndex === chapters.length - 1}
            className="px-4 sm:px-6 py-3 border-2 border-[#1a1a1a] bg-[#ff4e00] hover:bg-[#e04500] disabled:opacity-30 text-sticker font-heading font-black text-xs sm:text-sm uppercase shadow-[3px_3px_0px_0px_#1a1a1a] flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <span>{t.nextChapter}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

