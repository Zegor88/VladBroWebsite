import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, GameTranslations, LanguageOption } from './types';
import { enTranslations } from './locales/en';
import { ruTranslations } from './locales/ru';
import { srTranslations } from './locales/sr';

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU', flag: '🇷🇺' },
  { code: 'sr', label: 'Srpski', shortLabel: 'SR', flag: '🇷🇸' },
];

const translationsMap: Record<Language, GameTranslations> = {
  en: enTranslations,
  ru: ruTranslations,
  sr: srTranslations,
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: GameTranslations['ui'];
  monsters: GameTranslations['monsters'];
  chapters: GameTranslations['chapters'];
  workbenchLevels: GameTranslations['workbenchLevels'];
  devMilestones: GameTranslations['devMilestones'];
  quizQuestions: GameTranslations['quizQuestions'];
  creatorPresets: GameTranslations['creatorPresets'];
  shadowObjects: GameTranslations['shadowObjects'];
  danceMonsters: GameTranslations['danceMonsters'];
  apexIngredients: GameTranslations['apexIngredients'];
  currentLocale: GameTranslations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'island_game_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ru' || saved === 'sr') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en'; // Default English as requested
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const currentLocale = translationsMap[language] || enTranslations;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = currentLocale.ui.pageTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentLocale.ui.pageDescription);
  }, [language, currentLocale]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: currentLocale.ui,
    monsters: currentLocale.monsters,
    chapters: currentLocale.chapters,
    workbenchLevels: currentLocale.workbenchLevels,
    devMilestones: currentLocale.devMilestones,
    quizQuestions: currentLocale.quizQuestions,
    creatorPresets: currentLocale.creatorPresets,
    shadowObjects: currentLocale.shadowObjects,
    danceMonsters: currentLocale.danceMonsters,
    apexIngredients: currentLocale.apexIngredients,
    currentLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
