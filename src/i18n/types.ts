import { MonsterDossier, BookChapter, WorkbenchLevel, DevMilestone, QuizQuestion } from '../types';

export type Language = 'en' | 'ru' | 'sr';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}

export interface PresetMonsterIdea {
  id: string;
  name: string;
  nickname: string;
  threatCategory: string;
  appearance: string;
  trick: string;
  weakness: string;
  loot: string;
  authorName: string;
}

export interface GameTranslations {
  ui: {
    // Nav
    authorTag: string;
    appTitle: string;
    pageTitle: string;
    pageDescription: string;
    navHome: string;
    navMonsters: string;
    navBook: string;
    navBunker: string;
    navGames: string;
    navDevStory: string;
    dancePartyBtn: string;
    badge16Chapters: string;
    badgeMonsters: string;
    soundOn: string;
    soundOff: string;
    menuOpen: string;
    menuClose: string;
    selectLanguage: string;

    // Hero Section
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    heroFeatures: {
      mechanic: string;
      mechanicDesc: string;
      defense: string;
      defenseDesc: string;
      noHorror: string;
      noHorrorDesc: string;
    };
    heroAuthorIntro: string;
    heroAuthorTitle: string;
    heroAuthorSpeech: string;
    heroMonstersHeader: string;
    heroMonstersSub: string;
    heroViewAllMonsters: string;
    heroBookHeader: string;
    heroBookSub: string;
    heroReadBookBtn: string;
    heroWorkbenchPreview: string;
    heroExploreBunkerBtn: string;
    heroLaunchPartyBtn: string;

    // Monster Gallery
    galleryHeader: string;
    gallerySub: string;
    selectMonsterHint: string;
    tabCodename: string;
    threatTypeLabel: string;
    dangerLevelLabel: string;
    sizeLabel: string;
    habitatLabel: string;
    behaviorLabel: string;
    soundSignatureLabel: string;
    howToSpotLabel: string;
    weaknessLabel: string;
    lootLabel: string;
    geekNoteLabel: string;
    storySnippetLabel: string;
    flashlightModeOn: string;
    flashlightModeOff: string;
    flashlightHint: string;
    audioTestBtn: string;
    audioPlaying: string;
    monsterTestQuote: string;

    // Book Reader
    bookHeader: string;
    bookSub: string;
    searchChapterPlaceholder: string;
    allChaptersFilter: string;
    monstersFilter: string;
    bunkerFilter: string;
    chapterOf: string;
    prevChapter: string;
    nextChapter: string;
    doodleTitle: string;
    relatedMonster: string;
    openMonsterDossier: string;
    readTimeMin: string;
    audioStoryBtn: string;
    audioStoryStop: string;

    // Bunker & Workbench
    bunkerHeader: string;
    bunkerSub: string;
    bunkerTierTab: string;
    workbenchAppearance: string;
    unlockedRoomsLabel: string;
    keyCraftsLabel: string;
    defenseUpgradesLabel: string;
    geekAdviceLabel: string;
    apexRocketHeader: string;
    apexRocketSub: string;
    apexComponent1: string;
    apexComponent1Desc: string;
    apexComponent2: string;
    apexComponent2Desc: string;
    apexComponent3: string;
    apexComponent3Desc: string;
    launchRocketSimBtn: string;
    launchingRocket: string;
    rocketReady: string;

    // Games Hub
    gamesHeader: string;
    gamesSub: string;
    tabShadowGame: string;
    tabQuiz: string;
    tabCreator: string;

    // Shadow Detector Game
    shadowTitle: string;
    shadowSub: string;
    flashlightPower: string;
    testObjectBtn: string;
    identifyResultSafe: string;
    identifyResultMimic: string;
    shadowScore: string;
    shadowStreak: string;
    nextSubjectBtn: string;
    throwRockBtn: string;
    sprayInkBtn: string;
    shadowHint: string;
    detectorBadge: string;
    detectorTitle: string;
    detectorSub: string;
    roundLabel: string;
    scoreLabel: string;
    spotlightOn: string;
    turnOnSpotlight: string;
    mimicShadowText: string;
    shadowInstruction: string;
    shadowBingo: string;
    shadowMistake: string;
    shadowLabel: string;
    darknessNoLight: string;
    clickIfMimic: string;
    nextRound: string;
    reset: string;
    mimicName: string;

    // Quiz
    quizTitle: string;
    quizSub: string;
    questionOf: string;
    quizScore: string;
    selectAnswerPrompt: string;
    nextQuestionBtn: string;
    restartQuizBtn: string;
    quizPassedTitle: string;
    quizPassedDesc: string;
    quizBadge: string;
    rankMaster: string;
    rankMasterDesc: string;
    rankPartner: string;
    rankPartnerDesc: string;
    rankNovice: string;
    rankNoviceDesc: string;
    question: string;
    of: string;
    correctAnswers: string;
    situationOnIsland: string;
    viewResults: string;
    nextQuestion: string;
    finalStatus: string;
    yourScore: string;
    points: string;
    retakeQuiz: string;

    // Monster Creator
    creatorTitle: string;
    creatorSub: string;
    creatorFormName: string;
    creatorFormNickname: string;
    creatorFormCategory: string;
    creatorFormAppearance: string;
    creatorFormTrick: string;
    creatorFormWeakness: string;
    creatorFormLoot: string;
    creatorFormAuthor: string;
    creatorSubmitBtn: string;
    creatorPresetBtn: string;
    createdMonstersList: string;
    deleteCustomMonster: string;
    appearanceLabel: string;
    appearancePlaceholder: string;
    trickLabel: string;
    trickPlaceholder: string;
    weaknessPlaceholder: string;
    lootPlaceholder: string;
    authorLabel: string;
    authorPlaceholder: string;
    addToDiary: string;
    copied: string;
    copyCard: string;
    namePlaceholder: string;
    nicknamePlaceholder: string;
    createdListTitle: string;

    // Dev Story
    devStoryHeader: string;
    devStorySub: string;
    devStoryBadge: string;
    vladRole: string;
    egorRole: string;
    vladBio: string;
    egorBio: string;
    vladContributionTag: string;
    egorContributionTag: string;
    timelineTitle: string;
    keyDecisionsLabel: string;
    gameEngineTitle: string;
    gameEngineDesc: string;

    // Dance Party Modal
    partyTitle: string;
    partySub: string;
    partyMusicPlaying: string;
    partyMusicPause: string;
    partyGiftCollected: string;
    partyCollectGift: string;
    partyCloseBtn: string;
    partyMonsterStatus: string;
    danceRadioStation: string;
    danceModalTitle: string;
    danceModalSub: string;
    taken: string;
    giftBtn: string;
    giftsInInventory: string;
    soundtrackPlaying: string;
    returnToBunker: string;

    // Footer
    footerTagline: string;
    footerCopyright: string;
    footerMadeBy: string;
    footerSchoolProject: string;
    cheatDance: string;
    cheatNoah: string;
    cheatMimic: string;
    cheatApex: string;
    cheatInvalid: string;
    footerAbout: string;
    footerEngine: string;
    footerSections: string;
    secretTerminalTitle: string;
    cheatPlaceholder: string;
    footerCredits: string;
    footerMotto: string;
    navOverview: string;

    // Additional UI keys
    share: string;
    chapterMonsterAppears: string;
    marginNotes: string;
    workbenchHeader: string;
    workbenchSub: string;
    craftSub: string;
    levelLabel: string;
    roomsUnlocked: string;
    craftableItems: string;
    defenseUpgrades: string;
    flareStageLabel: string;
    flareTitle: string;
    flareDesc: string;
    flareSuccessTitle: string;
    flareSuccessDesc: string;
    launchFlareBtn: string;
    flareAssemblePrompt: string;
    badgeGames: string;
    gamesTitle: string;
    selectAvatar: string;
    bookBadge: string;
    bookTitle: string;
    chapterLabel: string;
    selectChapter: string;
    bookmark: string;
    bookmarked: string;

    // Vault Door / Bunker Entrance
    vaultButton: string;
    vaultSubtitle: string;
    vaultDoorTitle: string;
    vaultDoorDesc: string;
    vaultCodePlaceholder: string;
    vaultSubmitBtn: string;
    vaultAccessDeniedTitle: string;
    vaultAccessDeniedDesc: string;
    vaultCloseBtn: string;
    vaultKeypadClear: string;
    vaultRetryBtn: string;

    // Easter Egg Modals
    noahModalTitle: string;
    noahModalDesc: string;
    noahCloseBtn: string;
    gameModalTitle: string;
    gameModalDesc: string;
    gameCloseBtn: string;

    // Shadow Detector Enhanced Animations
    rockThrowAction: string;
    throwingRock: string;
    mimicEscaping: string;
    mimicCaughtPlayer: string;
    slimeSquirtedLabel: string;
    mimicStoleSandwichTitle: string;
  };
  monsters: MonsterDossier[];
  chapters: BookChapter[];
  workbenchLevels: WorkbenchLevel[];
  devMilestones: DevMilestone[];
  quizQuestions: QuizQuestion[];
  creatorPresets: PresetMonsterIdea[];
  shadowObjects: { type: string; label: string; emoji: string; shadow: string }[];
  danceMonsters: { emoji: string; name: string; move: string; gift: string }[];
  apexIngredients: { id: string; icon: string; name: string; from: string; desc: string }[];
}
