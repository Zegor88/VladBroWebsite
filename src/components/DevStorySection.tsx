import { History, Sparkles, MessageSquare, Code2, Compass } from 'lucide-react';
import heroVladBunkerImg from '../assets/images/hero_vlad_bunker_1787032082197.jpg';
import { useLanguage } from '../i18n';

export default function DevStorySection({ soundEnabled }: { soundEnabled?: boolean }) {
  const { t, devMilestones } = useLanguage();

  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header Badge */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] text-white text-xs font-mono-code mb-3 uppercase font-bold tracking-wider shadow-[2px_2px_0px_0px_#ff4e00]">
          <History className="w-3.5 h-3.5 text-[#ffdc00]" />
          <span>{t.devStoryBadge}</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#1a1a1a] uppercase tracking-tight">
          {t.devStoryHeader}
        </h2>
        <p className="text-slate-800 font-serif-story italic text-base sm:text-lg mt-2">
          {t.devStorySub}
        </p>
      </div>

      {/* Author Greeting & Presentation Banner (Vlad's Speech & Photo) */}
      <div className="bg-white border-3 border-[#1a1a1a] p-5 sm:p-7 shadow-[8px_8px_0px_0px_#1a1a1a] mb-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Vlad's Speech */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff4e00] text-white text-xs font-mono-code font-black uppercase shadow-[2px_2px_0px_0px_#1a1a1a]">
              {t.heroAuthorIntro} 👦👓
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#1a1a1a] uppercase leading-tight">
              {t.heroAuthorTitle}
            </h3>
            <p className="text-slate-800 text-base sm:text-lg font-serif-story italic leading-relaxed bg-[#faf8f2] p-4 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#ffdc00]">
              {t.heroAuthorSpeech}
            </p>
          </div>

          {/* Photo Art */}
          <div className="lg:col-span-5">
            <div className="border-3 border-[#1a1a1a] shadow-[5px_5px_0px_0px_#ff4e00] overflow-hidden bg-[#f4f1ea]">
              <img
                src={heroVladBunkerImg}
                alt="Vlad and dog in bunker"
                referrerPolicy="no-referrer"
                className="w-full h-60 sm:h-72 object-cover"
              />
              <div className="p-2.5 bg-[#1a1a1a] text-[#ffdc00] text-center font-mono-code text-xs font-bold uppercase flex items-center justify-center gap-2">
                <span>{t.authorTag}</span>
                <span>• 🐕⚡</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Authors Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Vlad Card */}
        <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-7 shadow-[8px_8px_0px_0px_#ff4e00] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#ffdc00] border-2 border-[#1a1a1a] flex items-center justify-center text-3xl shadow-[3px_3px_0px_0px_#1a1a1a]">
                👦
              </div>
              <div>
                <span className="text-xs font-mono-code bg-[#ff4e00] text-white px-2 py-0.5 border border-[#1a1a1a] font-black uppercase">
                  {t.vladRole}
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#1a1a1a] uppercase mt-1">
                  Vlad (10 yo)
                </h3>
              </div>
            </div>
            <p className="text-slate-800 font-serif-story text-sm leading-relaxed border-t-2 border-[#1a1a1a] pt-3 mt-2">
              {t.vladBio}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-dashed border-[#1a1a1a]/30 font-mono-code text-xs text-[#ff4e00] font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Идея, лор, дизайн монстров и механик</span>
          </div>
        </div>

        {/* Egor Card */}
        <div className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-7 shadow-[8px_8px_0px_0px_#00e5ff] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#00e5ff] border-2 border-[#1a1a1a] flex items-center justify-center text-3xl shadow-[3px_3px_0px_0px_#1a1a1a]">
                👨‍💻
              </div>
              <div>
                <span className="text-xs font-mono-code bg-[#1a1a1a] text-white px-2 py-0.5 border border-[#1a1a1a] font-black uppercase">
                  {t.egorRole}
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#1a1a1a] uppercase mt-1">
                  Egor (Dad)
                </h3>
              </div>
            </div>
            <p className="text-slate-800 font-serif-story text-sm leading-relaxed border-t-2 border-[#1a1a1a] pt-3 mt-2">
              {t.egorBio}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-dashed border-[#1a1a1a]/30 font-mono-code text-xs text-[#1a1a1a] font-bold flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#00a8bb]" />
            <span>Архитектура GDD, код Godot 4 & веб-версия</span>
          </div>
        </div>
      </div>

      {/* Dev Milestones Timeline */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h3 className="font-heading font-black text-lg sm:text-xl text-[#1a1a1a] uppercase mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#ff4e00]" />
          <span>{t.timelineTitle}:</span>
        </h3>

        {devMilestones.map((m, idx) => (
          <div
            key={idx}
            className="bg-white border-3 border-[#1a1a1a] p-6 sm:p-7 shadow-[8px_8px_0px_0px_#1a1a1a] relative overflow-hidden"
          >
            {/* Stage header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#1a1a1a] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-[#ffdc00] text-[#1a1a1a] border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-black font-mono-code shadow-[1px_1px_0px_0px_#1a1a1a]">
                  0{idx + 1}
                </span>
                <span className="font-mono-code text-xs font-black text-[#ff4e00] uppercase">
                  {m.stage}
                </span>
              </div>
              <span className="text-xs font-mono-code text-[#1a1a1a] font-bold bg-[#f4f1ea] px-2.5 py-1 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]">
                {m.date} • {t.authorLabel}: {m.author}
              </span>
            </div>

            <h4 className="font-heading font-black text-xl text-[#1a1a1a] uppercase mb-2">
              {m.title}
            </h4>

            <p className="text-slate-800 font-serif-story text-base sm:text-lg leading-relaxed mb-4">
              {m.description}
            </p>

            {/* Key Decisions */}
            <div className="bg-[#faf8f2] p-4 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] mb-4">
              <span className="text-xs font-mono-code text-[#1a1a1a] block mb-2 font-black uppercase">
                {t.keyDecisionsLabel}:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-mono-code font-bold">
                {m.keyDecisions.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ff4e00] font-black">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="p-3.5 bg-[#fff8cc] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs sm:text-sm italic font-serif-story flex items-center gap-2.5 shadow-[2px_2px_0px_0px_#1a1a1a]">
              <MessageSquare className="w-4 h-4 text-[#ff4e00] flex-shrink-0" />
              <span>{m.quote}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack & Philosophy Box */}
      <div className="mt-12 bg-white border-3 border-[#1a1a1a] p-6 sm:p-8 max-w-4xl mx-auto shadow-[8px_8px_0px_0px_#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono-code font-black bg-[#ffdc00] px-2 py-0.5 border border-[#1a1a1a] uppercase text-[#1a1a1a]">
            {t.devStoryBadge}
          </span>
          <h4 className="font-heading font-black text-2xl text-[#1a1a1a] uppercase mt-2">
            Godot 4 • WebGL & PC • Vibe-Coding
          </h4>
          <p className="text-slate-800 font-serif-story text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            {t.gameEngineDesc}
          </p>
        </div>
      </div>

    </section>
  );
}

