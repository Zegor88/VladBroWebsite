export interface MonsterDossier {
  id: string;
  name: string;
  codename: string;
  quote: string;
  threatType: string;
  dangerLevel: 'Низкий' | 'Средний' | 'Высокий' | 'Экстремальный' | 'Критический (Альфа-босс)' | string;
  size: string;
  appearance: string;
  habitat: string;
  behavior: string;
  soundSignature: string;
  howToSpot: string;
  weakness: string[];
  loot: string;
  geekNote: string;
  storySnippet: string;
  icon: string;
  imageUrl?: string;
}

export interface BookChapter {
  id: number;
  title: string;
  subtitle: string;
  storyText: string[];
  geekDoodle: {
    title: string;
    type: 'blueprint' | 'sketch' | 'warning' | 'cassette' | 'recipe';
    details: string[];
    handwrittenNote: string;
  };
  monsterPreview?: string;
  tag: string;
}

export interface WorkbenchLevel {
  level: number;
  name: string;
  look: string;
  unlockedRooms: string[];
  keyCrafts: string[];
  defenseUpgrades: string[];
  note: string;
}

export interface DevMilestone {
  stage: string;
  date: string;
  title: string;
  author: 'Влад' | 'Егор' | 'Влад и Егор';
  description: string;
  keyDecisions: string[];
  quote: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface CustomMonster {
  name: string;
  nickname: string;
  threatCategory: string;
  appearance: string;
  trick: string;
  weakness: string;
  loot: string;
  authorName: string;
}
