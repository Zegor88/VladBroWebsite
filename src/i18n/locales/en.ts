import { GameTranslations } from '../types';
import mimicImg from '../../assets/images/monster_mimic_final_1787056451535.jpg';
import krepImg from '../../assets/images/monster_krep_final_1787056466817.jpg';
import wreckerImg from '../../assets/images/monster_wrecker_final_1787056479100.jpg';
import hunterImg from '../../assets/images/monster_hunter_final_1787056495352.jpg';

export const enTranslations: GameTranslations = {
  ui: {
    authorTag: 'VLAD (10 YEARS OLD) & DAD',
    appTitle: 'SURVIVAL NIGHTS',
    navHome: 'Home',
    navMonsters: '4 Monsters',
    navBook: 'Journal',
    navBunker: 'Bunker & Rocket',
    navGames: 'Games',
    navDevStory: 'About the Author',
    dancePartyBtn: 'DANCE PARTY! 🎉',
    badge16Chapters: '16 chapters',
    badgeMonsters: '4 types',
    soundOn: 'Sound: On',
    soundOff: 'Sound: Off',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    selectLanguage: 'Language',

    heroBadge: "VLAD'S PROJECT • 10 YEARS OLD • GODOT 4 & GDD",
    heroTitle: 'SURVIVAL NIGHTS: ISLAND OF ANOMALIES',
    heroSubtitle: 'A smart survival game with no cheap jump scares — where physics, logic, and clever engineering lead to victory!',
    heroDesc: 'Welcome to the official interactive project journal! Geek the engineer crash-lands on a tropical island filled with mysterious mutants. Build and explore by day, outsmart anomalies by night!',
    heroFeatures: {
      mechanic: 'Smart Mechanics',
      mechanicDesc: 'Every monster has a physical weakness — from optical shadow checks to showering before nightfall.',
      defense: 'Bunker Progression',
      defenseDesc: '4 workbench tiers from a simple wooden desk to the Apex Flare rescue rocket.',
      noHorror: 'No Cheap Jump Scares',
      noHorrorDesc: 'A thrilling scientific adventure with humor, loyal dog Barsik, and midnight Dance Parties.'
    },
    heroAuthorIntro: 'MESSAGE FROM THE CREATOR!',
    heroAuthorTitle: "Hi, I'm Vlad, I'm 10 years old!",
    heroAuthorSpeech: "I designed this game because I was tired of generic, repetitive horror games with cheap jump scares. I wanted to build a survival experience where you defeat monsters with your brain instead of overpower guns! My dad and I recorded 16 story chapters, designed 4 unique creatures, and are developing the game in Godot 4.",
    heroMonstersHeader: '4 UNIQUE ISLAND CREATURES',
    heroMonstersSub: 'Not a single creature can be beaten with brute force. Study their habits and exploit their flaws!',
    heroViewAllMonsters: 'View full dossiers',
    heroBookHeader: "GEEK'S INTERACTIVE JOURNAL (16 CHAPTERS)",
    heroBookSub: 'The complete survival story with authentic sketches, workbench blueprints, and escape secrets.',
    heroReadBookBtn: 'Read Journal from Chapter 1',
    heroWorkbenchPreview: 'WORKBENCH & APEX FLARE ROCKET',
    heroExploreBunkerBtn: 'Explore the Bunker',
    heroLaunchPartyBtn: 'Launch Dance Party!',

    galleryHeader: 'BESTIARY: 4 ISLAND MONSTERS',
    gallerySub: "Geek's classified field dossiers. Aim the flashlight, examine the shadow, and master each creature's behavior!",
    selectMonsterHint: 'Select a creature dossier to analyze:',
    tabCodename: 'Codename',
    threatTypeLabel: 'Threat Category',
    dangerLevelLabel: 'Danger Level',
    sizeLabel: 'Size',
    habitatLabel: 'Habitat',
    behaviorLabel: 'Behavior',
    soundSignatureLabel: 'Sound Signature',
    howToSpotLabel: 'How to Detect',
    weaknessLabel: 'Weaknesses & Countermeasures',
    lootLabel: 'Loot Drop',
    geekNoteLabel: "Geek's Field Note",
    storySnippetLabel: 'Journal Incident',
    flashlightModeOn: 'Flashlight ON 🔦',
    flashlightModeOff: 'Toggle Flashlight 🔦',
    flashlightHint: 'Hover your cursor over the area to illuminate the shadow and reveal the true entity!',
    audioTestBtn: 'Creature Audio',
    audioPlaying: 'Playing sound...',
    monsterTestQuote: 'Field Recording Quote',

    bookHeader: "GEEK'S SURVIVAL JOURNAL",
    bookSub: '16 thrilling chapters: from the damaged parachute plunge to the final Apex Flare launch at sunrise.',
    searchChapterPlaceholder: 'Search chapters or text...',
    allChaptersFilter: 'All 16 chapters',
    monstersFilter: 'Creatures only',
    bunkerFilter: 'Base & Crafting',
    chapterOf: 'Chapter',
    prevChapter: '← Previous',
    nextChapter: 'Next →',
    doodleTitle: "Sketch from Geek's Notebook",
    relatedMonster: 'Related creature:',
    openMonsterDossier: 'Open Creature Dossier →',
    readTimeMin: 'min read',
    audioStoryBtn: 'Listen to chapter',
    audioStoryStop: 'Stop audio',

    bunkerHeader: "GEEK'S BUNKER & WORKBENCH",
    bunkerSub: 'Evolution of the base from a simple wooden survival table to a ceramic scientific production complex.',
    bunkerTierTab: 'Tier',
    workbenchAppearance: 'Workbench Appearance',
    unlockedRoomsLabel: 'Unlocked Bunker Rooms',
    keyCraftsLabel: 'Key Recipes & Items',
    defenseUpgradesLabel: 'Base Defense Upgrades',
    geekAdviceLabel: "Engineer's Tip",
    apexRocketHeader: 'HIGH-ALTITUDE SIGNAL ROCKET «APEX FLARE»',
    apexRocketSub: 'The only way to breach the 3,000-meter electromagnetic dome and signal the rescue helicopter.',
    apexComponent1: 'High-Tensile Titanium Hull',
    apexComponent1Desc: 'Withstands extreme g-forces and thermal resistance through atmospheric anomalies.',
    apexComponent2: 'Stabilized Isotopic Formula',
    apexComponent2Desc: 'Generates an intense 500,000-candela flare visible across 80 km of oceanic fog.',
    apexComponent3: "Henry's Encoded SOS Chip",
    apexComponent3Desc: 'Broadcasts exact digital GPS coordinates of the bunker to rescue teams.',
    launchRocketSimBtn: 'Run Launch Simulation 🚀',
    launchingRocket: 'Launching Apex Flare...',
    rocketReady: 'Rocket is primed for launch!',

    gamesHeader: 'SURVIVAL GAMES HUB',
    gamesSub: 'Test your perception, design your own creature, and prove your knowledge of island physics!',
    tabShadowGame: '🔦 Shadow Detector',
    tabQuiz: '🧠 Survival IQ Quiz',
    tabCreator: '🧪 Monster Creator',

    shadowTitle: 'MIMIC SHADOW DETECTOR',
    shadowSub: 'Items appeared around the garden. Aim your spotlight to tell whether each object is a safe crate or a disguised Mimic!',
    flashlightPower: 'Spotlight Intensity',
    testObjectBtn: 'Shine Spotlight',
    identifyResultSafe: 'Safe item! The shadow has a clean geometric shape.',
    identifyResultMimic: 'MIMIC DETECTED! The octopus shadow exposed the imposter!',
    shadowScore: "Engineer's Score",
    shadowStreak: 'Win Streak',
    nextSubjectBtn: 'Next Object →',
    throwRockBtn: 'Toss Pebble 🪨',
    sprayInkBtn: 'UV Scanner ⚡',
    shadowHint: 'Hint: A real wooden crate casts a square shadow. A disguised Mimic casts tentacle ripples!',

    quizTitle: 'ISLAND SURVIVAL IQ TEST',
    quizBadge: 'ENGINEER CERTIFICATION EXAM',
    rankMaster: 'CHIEF ENGINEER OF APEX ISLAND',
    rankMasterDesc: 'Flawless score! You know all physics laws, sound frequencies, and survival craft recipes!',
    rankPartner: 'BUNKER CHIEF SPECIALIST',
    rankPartnerDesc: 'Great job! You survive the nights and keep Geek and Barsik safe from mutants.',
    rankNovice: 'CADET RECRUIT',
    rankNoviceDesc: 'Review the 16 Journal Chapters to master monster vulnerabilities!',
    question: 'Question',
    of: 'of',
    correctAnswers: 'Correct answers',
    situationOnIsland: 'Situation on the Island',
    viewResults: 'View Final Rank',
    nextQuestion: 'Next Question →',
    finalStatus: 'FINAL EXAM RESULT',
    yourScore: 'Your Score',
    points: 'points',
    retakeQuiz: 'Retake Exam',
    detectorBadge: 'DETECTION LAB • CHAPTER 3 LOG',
    detectorTitle: 'MIMIC SHADOW DETECTOR',
    detectorSub: 'Turn on the spotlight to cast shadows. An ordinary object casts a geometry silhouette, while a Mimic casts an 8-tentacle octopus shadow!',
    roundLabel: 'Round',
    scoreLabel: 'Discovered',
    spotlightOn: 'Spotlight: ON',
    turnOnSpotlight: 'Turn On Spotlight',
    mimicShadowText: '8 Wavy Octopus Tentacles 🐙',
    shadowInstruction: 'Turn on the spotlight and click the disguised Mimic!',
    shadowBingo: 'BINGO! Mimic exposed by its octopus tentacles! +1 Score!',
    shadowMistake: 'Oops! That is just an ordinary',
    shadowLabel: 'Cast Shadow',
    darknessNoLight: 'Pitch black (Turn on light)',
    clickIfMimic: 'Click if Mimic',
    nextRound: 'Next Round',
    reset: 'Reset',
    mimicName: 'MIMIC',
    quizSub: "6 critical scenarios from Geek's journal. Prove you have what it takes to defend the base tonight!",
    questionOf: 'Question',
    quizScore: 'Correct answers',
    selectAnswerPrompt: 'Choose the optimal engineering solution:',
    nextQuestionBtn: 'Next Question →',
    restartQuizBtn: 'Retake Quiz 🔄',
    quizPassedTitle: 'Congratulations, you are a certified Chief Engineer!',
    quizPassedDesc: 'You have mastered every monster habit and bunker survival protocol.',

    creatorTitle: 'CREATURE CREATOR FOR FRIENDS & CLASSMATES',
    creatorSub: "Invent a new original monster for Vlad's game! No cheap jumpscares — just smart mechanics and clever weaknesses.",
    creatorFormName: 'Creature Name',
    creatorFormNickname: 'Codename / Motto',
    creatorFormCategory: 'Threat Category',
    creatorFormAppearance: 'Appearance & Distinct Traits',
    creatorFormTrick: 'How does it trick or harm you?',
    creatorFormWeakness: 'Clever Weakness (How to outsmart it?)',
    creatorFormLoot: 'Loot dropped upon defeat',
    creatorFormAuthor: 'Your Name (Author)',
    creatorSubmitBtn: "Save to Vlad's Game Archive 💾",
    creatorPresetBtn: "Fill with Idea by Vlad 💡",
    createdMonstersList: 'Archive of Custom Monsters',
    deleteCustomMonster: 'Delete',
    appearanceLabel: 'Appearance & Distinct Traits',
    appearancePlaceholder: 'e.g. A six-legged porcelain doll with an oil lamp on its chest...',
    trickLabel: 'How does it trick or harm you?',
    trickPlaceholder: 'e.g. Emits soft lullabies to make you fall asleep outside...',
    weaknessPlaceholder: 'e.g. Blown away by fans, afraid of lemon juice...',
    lootPlaceholder: 'e.g. Lamp glass shard, battery cell...',
    authorLabel: 'Author Name',
    authorPlaceholder: 'Your name / nickname',
    addToDiary: 'Save to Vlad’s Game Archive 💾',
    copied: 'Copied to Clipboard! ✨',
    copyCard: 'Copy Card',
    namePlaceholder: 'Monster Name',
    nicknamePlaceholder: 'Codename / Motto',
    createdListTitle: 'Archive of Custom Monsters',

    devStoryHeader: 'THE GAME CREATION STORY',
    devStorySub: 'How 10-year-old student Vlad and his dad Egor are creating an original survival game in Godot 4.',
    devStoryBadge: 'VIBECODING • GDD • INDIE DEV JOURNEY',
    vladRole: 'Original Creator, Game Designer & Creative Lead (10 years old)',
    egorRole: 'Dad, Narrative Designer, GDD Architect & Developer',
    vladBio: 'Created the concept of "smart survival without cheap horror", the Mimic shadow mechanic, the 10-eyed Krep, and the Wrecker watchtower ambush.',
    egorBio: 'Helps his son channel creative ideas into a cohesive game world, formal design documentation, and a working Godot 4 prototype.',
    timelineTitle: 'Project Development Timeline',
    keyDecisionsLabel: 'Key Stage Milestones:',
    gameEngineTitle: 'Engine & Tech Stack',
    gameEngineDesc: 'Built on Godot 4 (3D stylized low-poly aesthetic) with dynamic real-time shadows, procedural audio synthesis, and modular physics systems.',

    partyTitle: 'MIDNIGHT DANCE PARTY! 🎉',
    partySub: "The Fun Town Pizzeria broadcast station blasted 80s disco funk across the island! The monsters are pacified — dancing and gifting crafting parts!",
    partyMusicPlaying: 'Tuned to 104.2 FM • 80s Disco Funk',
    partyMusicPause: 'Music Paused',
    partyGiftCollected: 'Gift collected!',
    partyCollectGift: 'Collect Gift 🎁',
    partyCloseBtn: 'Return to Bunker',
    partyMonsterStatus: 'is grooving to the beat!',
    danceRadioStation: 'FUN TOWN PIZZERIA • RADIO 104.2 FM',
    danceModalTitle: 'NIGHT DANCE PARTY!',
    danceModalSub: 'An old radio transmitter started playing nostalgic funk! All island monsters forgot their hostility and started dancing!',
    taken: 'Claimed',
    giftBtn: 'Gift',
    giftsInInventory: 'Gifts in Inventory',
    soundtrackPlaying: 'Retro 80s chiptune synth is playing',
    returnToBunker: 'Return to Bunker',
    cheatDance: 'CHEAT ACTIVATED: Launching Midnight Dance Party!',
    cheatNoah: "EASTER EGG «NOAH'S ARK»: All island animals take off in the chopper!",
    cheatMimic: 'EASTER EGG: The box shadow is wiggling tentacles! Opening Games!',
    cheatApex: 'BLUEPRINT: Titanium Hull + Chemical Fuel + SOS Chip are primed!',
    cheatInvalid: 'Command not recognized. Access denied.',
    footerAbout: 'Showcase site for friends and classmates. Idea and lore by Vlad (10 years old), development by dad Egor.',
    footerEngine: 'Engine: Godot 4 (WebGL & PC) • Genre: Engineering Survival',
    footerSections: 'Site Sections',
    secretTerminalTitle: 'Bunker Secret Terminal',
    cheatPlaceholder: 'Enter secret access code...',
    footerCredits: 'Made with love: Vlad (10 yo, game author) and dad Egor (developer) • 2026',
    footerMotto: 'Win with your mind, not with brute force!',
    navOverview: 'Overview (1-min summary)',

    footerTagline: 'An original indie adventure by Vlad (10 yo) and dad Egor. Survive with brains, not fear!',
    footerCopyright: 'Survival Nights Project • Crafted with love for gaming and science',
    footerMadeBy: 'Vlad & Egor • 2026',
    footerSchoolProject: 'Interactive game showcase for friends and classmates',

    share: 'Share',
    chapterMonsterAppears: 'Monster Appears in this Chapter',
    marginNotes: "Geek's Notebook Notes",
    workbenchHeader: 'BUNKER & UPGRADE WORKBENCH',
    workbenchSub: 'Workbench & Shelter Progression',
    craftSub: 'From a simple wooden table to the Apex Rescue Rocket Launcher.',
    levelLabel: 'Tier',
    roomsUnlocked: 'Unlocked Rooms & Facilities',
    craftableItems: 'Key Craftable Tools & Gear',
    defenseUpgrades: 'Defensive Perimeter Upgrades',
    flareStageLabel: 'FINAL OBJECTIVE • TIER 4 APEX',
    flareTitle: 'Apex SOS Rescue Rocket Launcher',
    flareDesc: 'Assemble the three legendary components to send an ultra-bright atmospheric distress signal to mainland rescuers!',
    flareSuccessTitle: 'SOS FLARE LAUNCHED INTO THE STRATOSPHERE! 🚀✨',
    flareSuccessDesc: 'The sky glows brilliant orange! Rescuers in a helicopter have locked on to your beacon!',
    launchFlareBtn: 'Launch Apex Rescue Signal 🚀',
    flareAssemblePrompt: 'Install all 3 components to launch SOS rocket 🔒',
    badgeGames: 'MINI-GAMES & LABS',
    gamesTitle: 'Mini-Games & Interactive Lab',
    selectAvatar: 'Select Monster Avatar',
    bookBadge: 'SURVIVAL LOGS & ADVENTURE NOVEL',
    bookTitle: '16 Chapters: The Island Chronicles',
    chapterLabel: 'Chapter',
    selectChapter: 'Select Chapter',
    bookmark: 'Bookmark Chapter',
    bookmarked: 'Bookmarked',

    // Vault Door / Bunker Entrance
    vaultButton: 'Enter the Bunker',
    vaultSubtitle: "Survivor's secure private vault chamber",
    vaultDoorTitle: 'BUNKER ENTRANCE: CODE LOCK',
    vaultDoorDesc: 'The heavy armored vault door is secured with an electro-mechanical keypad. Enter access code:',
    vaultCodePlaceholder: 'ENTER ACCESS CODE...',
    vaultSubmitBtn: 'Unlock Hatch',
    vaultAccessDeniedTitle: 'ACCESS RESTRICTED: VAULT SEALED',
    vaultAccessDeniedDesc: 'The personal bunker chamber is in lockdown mode. Authorization and personal vaults will be available in upcoming updates!',
    vaultCloseBtn: 'Return to Surface',
    vaultKeypadClear: 'CLEAR',

    // Easter Egg Modals
    noahModalTitle: "EASTER EGG «NOAH'S ARK» 🚁🏝️",
    noahModalDesc: "The rescue helicopter attempted to evacuate every single wild animal and creature from the island at once... The rotor couldn't handle the immense weight and crash-landed onto the outer reef! Survival continues!",
    noahCloseBtn: 'Understood, back to survival!',
    gameModalTitle: 'GAME CLIENT (GODOT 4)',
    gameModalDesc: 'Survival Nights is currently being actively built in Godot 4! WebGL browser play and PC builds will be available very soon. Keep an eye on the journal updates!',
    gameCloseBtn: "Can't wait for release!",

    // Shadow Detector Enhanced Animations
    rockThrowAction: 'Throw Stone 🪨',
    throwingRock: 'Throwing stone...',
    mimicEscaping: 'The Mimic panicked, sprayed slime, and scuttled away!',
    mimicCaughtPlayer: 'Oops! That was a harmless item, and the real Mimic jumped out and stole your snack!',
  },
  monsters: [
    {
      id: 'mimic',
      name: 'Mimic (The Imposter)',
      codename: '«Never Trust the Second Crate»',
      quote: '«If there was one crate in your garden yesterday and two today — you have a tentacle problem!»',
      threatType: 'Visual & Deceptive Ambush',
      dangerLevel: 'High',
      size: 'Shape-Shifting (0.5 m to 2 m)',
      appearance: 'A mutant laboratory cephalopod with adaptive chromatophores and 8 flexible tentacles with suction cups. Seamlessly mimics the color, wood grain, or texture of crates, barrels, and rocks.',
      habitat: 'Garden plots, bunker supply sheds, entrance glades, tool storage areas.',
      behavior: 'Posing patiently as an inanimate object. Waits until Geek comes into point-blank range (<1.5 meters) before lashing out with tentacles. Cannot mimic human speech.',
      soundSignature: 'Dead silence, followed by a soft, wet suction pop just prior to lunging.',
      howToSpot: 'CHECK THE SHADOW! Chromatophores mimic surface textures, but under a directed beam of light, its cast shadow ALWAYS reveals an octopus shape. UV lights also expose its skin pigments.',
      weakness: [
        'Directed flashlight or spotlight beam — immediately casts an octopus shadow',
        'UV flashlight and IR cameras — disrupts its camouflage pigments',
        'Tossing a pebble from a distance — realizes it is exposed and flees into the bushes',
        'Guard dog — sniffs out organic deception and barks directly at fake crates'
      ],
      loot: 'Toxic Ink Blot — an ultra-rare cephalopod pigment used to craft perimeter smoke canisters and defensive sprays.',
      geekNote: 'Rule #1: Never open a garden crate without shining a flashlight from the side. A real crate casts a square; a Mimic casts an octopus!',
      storySnippet: `There were two crates in the garden plot.
Yesterday there was only one.
Geek paused:
— Okay. Either I crafted another crate in my sleep... or we have a tentacle issue.
He switched on his shoulder-mounted spotlight.
From the first crate fell a clean rectangular shadow.
From the second — the distinct silhouette of a giant octopus with writhing arms.
— Aha! Caught you, imposter!
The crate shuddered, suddenly sprouted eight limbs, sprayed purple ink, and scuttled away at full speed into the jungle.`,
      icon: '🐙',
      imageUrl: mimicImg,
      colorScheme: {
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        glow: 'from-purple-600/30 to-indigo-600/10',
        border: 'border-purple-500/30 hover:border-purple-400',
        bg: 'bg-purple-950/20',
      }
    },
    {
      id: 'krep',
      name: 'Krep (The Fixer / Pest)',
      codename: '«Ten-Eyed Wire Gnawer»',
      quote: '«He does not want to eat you. He wants to eat your carrots and chew your camera feeds to pieces!»',
      threatType: 'Farm & Antenna Sabotage',
      dangerLevel: 'Moderate',
      size: '1.2 meters (size of a large canine)',
      appearance: 'A quirky, nimble hybrid of a fluffy lop-eared rabbit and a spider. Features 10 shiny crimson eyes on its face and agile climbing claws to scale metal masts.',
      habitat: 'Bunker roof near the main antenna mast, garden carrot and cabbage patches.',
      behavior: 'Never attacks Geek directly! It scales fences, devours crops, and most dangerously, chews through antenna coaxial cables, cutting off external CCTV feeds.',
      soundSignature: 'Electric snapping of gnawed copper cables, metallic vibration of masts, and rustling in the vegetable beds.',
      howToSpot: 'Ten glowing red pinpricks in the dark on the antenna mast or frantic digging sounds in the farm.',
      weakness: [
        'High-intensity flashlight (2000 lumens) — instantly blinds its 10 sensitive eyes, causing a panic squeak and hasty retreat',
        'Tin can noise rattle traps strung along wire around garden borders',
        'EMP Scarecrow (Tier 3 Workbench) — ultrasonic frequencies repel it across 50 meters'
      ],
      loot: 'Electrified silk fiber and swallowed copper microchips.',
      geekNote: "If your camera monitor turns to static — don't panic! Grab your flashlight, climb onto the roof, and shine it right into those ten blinking eyes.",
      storySnippet: `The bunker monitor hissed into white static.
— Again! — Geek slapped the workbench. — Krep is on the roof!
Bursting through the access hatch with a lantern, Geek spotted the furry creature happily chewing the main antenna lead.
Ten red eyes blinked simultaneously.
— Bon appétit, whiskers! — Geek cranked the spotlight to maximum output.
Krep let out an ear-piercing squeak, squeezed all ten eyes shut, dropped the wire, and tumbled off the roof into the shrubbery.`,
      icon: '🐰🕷️',
      imageUrl: krepImg,
      colorScheme: {
        badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        glow: 'from-emerald-600/30 to-teal-600/10',
        border: 'border-emerald-500/30 hover:border-emerald-400',
        bg: 'bg-emerald-950/20',
      }
    },
    {
      id: 'wrecker',
      name: 'Wrecker (The Destroyer)',
      codename: '«Fence Smasher & Ambush Lurker»',
      quote: '«He does not chase you inside the bunker. He sits on your own sniper tower waiting for you to walk out!»',
      threatType: 'Structural Sabotage & Ambush',
      dangerLevel: 'High',
      size: '2.4 meters, tall cloaked silhouette',
      appearance: 'A towering, imposing cloaked figure in a tattered trench coat, winter beanie hat, and burning scarlet eyes. Lurks around lookout towers and dismantles outer defenses.',
      habitat: 'Perimeter fence, structural beams, sniper watchtowers. Active during day (dark dormant eyes) and night (crimson glowing eyes).',
      behavior: 'Methodically breaks fence struts and ladder posts. Expertly scales watchtowers to lie in wait for an ambush. Remembers previously placed trap locations.',
      soundSignature: 'Heavy metallic clanging against railings and low guttural groans mimicking calls for help.',
      howToSpot: 'Bent steel handrails, smashed fence planks, or a silhouetted beanie hat on the roof of a lookout tower.',
      weakness: [
        'Aimed rifle or pistol shot to the vulnerable crystal nodes on its back',
        'Loyal dog Barsik — reliably detects watchtower ambushes and barks directly at the occupied ladder',
        'Electrified Tower Railings (Tier 3 Workbench) — electric shock knocks him to the ground',
        'Tension tripwires on perimeter support beams'
      ],
      loot: 'Reinforced titanium plates and radioactive moss for armor plating.',
      geekNote: "If your dog refuses to let you climb a watchtower — don't force it! Charge your rifle or flip the electric rail switch on the console.",
      storySnippet: `The night was deceptively calm. Geek prepared to climb the East Tower to scan the forest canopy.
Suddenly, Barsik planted his paws, bared his teeth, and growled directly at the tower landing.
Geek raised his binoculars.
In the cold moonlight, a cloaked figure with glowing scarlet eyes was perched silently on the upper railing, gripping a rusted iron pipe.
— Sneaky ambusher! Thought you'd jump on my head?
Geek pulled the lever for «Tower Electric Rails ON». A brilliant blue spark cracked through the night, a roar echoed, and the massive figure plunged into the thorny bushes below.`,
      icon: '🧟‍♂️',
      imageUrl: wreckerImg,
      colorScheme: {
        badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        glow: 'from-amber-600/30 to-orange-600/10',
        border: 'border-amber-500/30 hover:border-amber-400',
        bg: 'bg-amber-950/20',
      }
    },
    {
      id: 'hunter',
      name: 'Hunter (Apex Predator)',
      codename: '«Night Lizard & The 21-Meter Rule»',
      quote: '«A seven-meter armored reptile with a volcanic spine and thermal vision. Your best weapons: soap and a 21-meter sprint!»',
      threatType: 'Direct Lethality, Speed & Scent',
      dangerLevel: 'Critical (Alpha Boss)',
      size: '7 meters (armored reptilian crocodile predator)',
      appearance: 'The apex predator of the island — a 7-meter ancient crocodile-lizard beast with molten lava-like spine plates, razor-sharp claws, and fierce glowing eyes.',
      habitat: 'Deep tropical rain jungle, surrounding the bunker during the darkest hours of night.',
      behavior: 'Relentless nocturnal stalker. Locates targets via two primary senses: thermal vision (triggered by rapid movement) and acute scent (smells sweat and unwashed gear across 50 meters).',
      soundSignature: 'Deep subterranean vibrations, terrified squawking of dispersing jungle birds, and heavy guttural breathing.',
      howToSpot: 'Trembling ground beneath your boots and the orange glow of volcanic back plates through the ferns.',
      weakness: [
        'The 21-Meter Rule: Sprint exactly 21+ meters and drop flat into dense vegetation to break thermal tracking',
        'Hygiene (Shower & Wardrobe): Clean clothing reduces its scent detection radius from 50m to just 5m!',
        'Guard Dog Bark: Loud rhythmic barking intimidates the apex hunter back into the forest',
        'Victory through deduction: Stay concealed in shelter and avoid direct open combat'
      ],
      loot: 'Armored volcanic scales and thermal sensory gland for crafting night-vision scopes.',
      geekNote: 'Survival Rule: Always take a shower in the bunker before venturing into the jungle! A clean engineer is invisible to the night predator.',
      storySnippet: `The ground shook beneath his boots, and palm trees swayed in the gloom.
Emerging from the deep canopy came the seven-meter beast with glowing molten spines — the Hunter!
Its thermal gaze scanned the clearing.
Geek remembered the Professor's core survival protocol:
1) Sprint exactly 21 meters.
2) Dive headfirst into thick ferns.
3) Stay dead silent and motionless!
Geek flattened into the wet moss and held his breath. Because he had showered and put on clean clothes that morning, the Hunter detected no human scent. The beast let out a low rumble and stomped off into the distance.`,
      icon: '🦎',
      imageUrl: hunterImg,
      colorScheme: {
        badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        glow: 'from-rose-600/30 to-red-600/10',
        border: 'border-rose-500/30 hover:border-rose-400',
        bg: 'bg-rose-950/20',
      }
    }
  ],
  chapters: [
    {
      id: 1,
      title: 'Plane Over the Island',
      subtitle: 'Crash, damaged parachute, and the golden beach',
      tag: 'Chapter 1 • The Beginning',
      storyText: [
        'Our expedition aircraft shook violently, as if we had flown straight into the blender blades of a giant robot. Instrument dials on the cockpit console spun erratically.',
        '— Anomalous electromagnetic field! — the pilot yelled. — Jump, Geek!',
        'I yanked the parachute cord. The white silk canopy opened with a crisp snap... but at that very second, a burning piece of tail debris shot past and slashed the edge of the fabric!',
        'My descent speed tripled. Palm trees rushed up with alarming speed. Wham! The soft golden sand of the beach cushioned my impact, but pixels flashed before my eyes and everything went black.'
      ],
      geekDoodle: {
        title: 'Parachute Drop Trajectory',
        type: 'sketch',
        details: [
          'Parachute canopy: 35% damage to right sector',
          'Landing zone: South Beach, "Golden Sands" sector',
          'Carried gear: Pixel glasses (intact!), pocket journal, multi-tool'
        ],
        handwrittenNote: "Geek's Tip: If you crash onto a monster island — aim for banana trees, they are much softer than coconuts!"
      }
    },
    {
      id: 2,
      title: 'What Is This Place?!',
      subtitle: 'Jungle ruins, wreckage, and the first oddities',
      tag: 'Chapter 2 • Exploration',
      storyText: [
        'When I opened my eyes, giant palm fronds swayed above and gentle waves lapped at my sneakers. Scattered around were fuselage fragments, canned rations, and torn blueprint schematics.',
        'The real mystery began when I looked inland. In the island center stood a colossal semi-ruined glass bio-dome, while a greenish aurora borealis shimmered in the tropical night sky!',
        'A rusted signpost on a mossy pillar pointed into the jungle: «Research Sector #4». Large-scale experiments had clearly been conducted here before things went wildly out of control.'
      ],
      geekDoodle: {
        title: 'Island Anomaly Chart',
        type: 'blueprint',
        details: [
          'Electromagnetic Dome: Blocks standard long-range radio signals',
          'Day Cycle: Sunny, safe (monsters hide from direct sunlight)',
          'Night Cycle: Elevated radiation, active mutant wildlife'
        ],
        handwrittenNote: 'Conclusion: I need a fortified shelter before sunset, or I will become a midnight snack.'
      }
    },
    {
      id: 3,
      title: 'The Bunker & Workbench',
      subtitle: 'Concrete walls, trusty desk, and the first blueprint',
      tag: 'Chapter 3 • Home Base',
      storyText: [
        'Yellow trail arrows painted on the rocks led me to a heavy blast door embedded in the hillside, half-covered in dirt, bearing a glowing amber status light.',
        'Inside smelled of old concrete, dampness, and machine oil. Right in the center of the main hall stood a massive oak Workbench, bearing tool grooves and pull-out drawers.',
        'Inside the first wall locker lay old schematics: a pickaxe, an axe, and a torch. I pulled out my journal and carefully copied the diagrams. I could now craft essential survival tools!'
      ],
      geekDoodle: {
        title: 'Blueprint: Tier 1 Workbench',
        type: 'recipe',
        details: [
          'Assembly Requirements: 10 wooden planks + 4 iron bolts + sharpening stone',
          'Unlocks Crafting: Mining Pickaxe, Woodcutter Axe, Torch, Basic Shower',
          'Secret Perk: Crawlspace beneath the desk for emergency hiding!'
        ],
        handwrittenNote: "Engineer's Law: The Workbench is the heart of your base. Protect it from the Wrecker!"
      }
    },
    {
      id: 4,
      title: 'Island Day & Night',
      subtitle: 'Daytime: Engineering expeditions. Nighttime: Smart defense',
      tag: 'Chapter 4 • Survival Rules',
      storyText: [
        'The island operated on a strict schedule. By day, bright sunlight flooded the jungle. The mutants, blinded by the historical blast, retreated into deep caverns and ruins.',
        'During daylight, I scavenged gears, planted carrots in the farm patch, and chopped timber.',
        'The moment the sun touched the horizon, an ultrasonic hum filled the air. Time to dash into the bunker, slam the double deadbolts, activate the tower spotlights, and stay sharp!'
      ],
      geekDoodle: {
        title: 'Survivor Daily Routine',
        type: 'warning',
        details: [
          '08:00 - 18:00: Scavenge materials, tend crops, repair machinery',
          '18:00 - 19:30: Inspect locks, charge tower batteries, take a shower',
          '20:00 - 06:00: Night bunker defense, monitor security cameras'
        ],
        handwrittenNote: "Remember: If caught outside at 20:01 — do not run on the open path, climb a tree and stay frozen!"
      }
    },
    {
      id: 5,
      title: 'The Mimic: Shadow Test',
      subtitle: 'Why you should never trust a second crate',
      tag: 'Chapter 5 • Monster 1',
      storyText: [
        'In the morning, I went out to water the strawberry beds. Resting against the fence were two wooden tool crates. I scratched my head: I had only placed one there yesterday.',
        'Approaching carefully, I noticed the wood grain on the second crate trembled slightly, like gelatin.',
        'Instead of walking close, I pulled out my flashlight and illuminated it from an angle. The first crate cast a clean square. The second cast the writhing silhouette of a multi-tentacled beast!',
        '— Caught you, octopus! — I yelled and tossed a pebble. The crate jumped a meter high, sprouted legs, sprayed purple ink, and dashed over the fence with a screech.'
      ],
      geekDoodle: {
        title: 'Mimic Optical Shadow Test',
        type: 'sketch',
        details: [
          'Light angle of incidence: 45 degrees',
          'Standard object: Sharp geometric shadow',
          'Mimic: Tentacles, rounded cephalopod head, undulating outline'
        ],
        handwrittenNote: 'Never discard Mimic ink! Combined with saltpeter, it makes high-grade smoke canisters.'
      },
      monsterPreview: 'mimic'
    },
    {
      id: 6,
      title: 'Krep: Protecting the Antenna',
      subtitle: 'Ten red eyes and crunchy carrots',
      tag: 'Chapter 6 • Monster 2',
      storyText: [
        'On the third night, my bunker TV sputtered into static and the outdoor camera feeds cut out. From the roof came a distinct sound: «Crunch-crunch-snap!».',
        'I grabbed my halogen lantern and climbed through the utility hatch. Sitting on the antenna mast was a rabbit-spider hybrid, happily chewing through the main power cable.',
        'Ten shiny red eyes locked onto me. I hit the high-beam button at 2000 lumens, shining the glare directly into its sensitive eyes!',
        'Krep squealed on an ultrasonic pitch, covered its face with its clawed paws, and tumbled off the roof into the bushes.'
      ],
      geekDoodle: {
        title: 'Krep Deterrent Protocol',
        type: 'recipe',
        details: [
          'Trap #1: Empty tin cans on fishing lines around garden beds',
          'Trap #2: Strobe light mounted on the antenna mast',
          'Tier 3 Craft: EMP Scarecrow (ultrasound repels pests within 50m)'
        ],
        handwrittenNote: 'Krep loves carrots. Placing a bowl of carrots in the far corner draws it away from the antenna!'
      },
      monsterPreview: 'krep'
    },
    {
      id: 7,
      title: 'Wrecker: Watchtower Ambush',
      subtitle: 'Moss, a tattered beanie, and loyal Barsik',
      tag: 'Chapter 7 • Monster 3',
      storyText: [
        'The Wrecker is the most stubborn entity on the island. A hulking cloaked figure who considers it his personal mission to smash every fence support.',
        'One night I almost walked into a trap. I was about to climb the lookout tower, but my dog Barsik blocked the ladder, bared his teeth, and refused to let me up.',
        'I shone a light onto the top platform — crouching behind sandbags was a massive cloaked brute in a beanie, gripping an iron pipe, ready to pounce!',
        'I flipped the electric railing switch. A bright blue arc flashed, zapping the Wrecker and knocking him into the berry patch below.'
      ],
      geekDoodle: {
        title: 'Tower Upgrade: Shock Railings',
        type: 'blueprint',
        details: [
          'Components: Copper wire + workbench battery + heavy switch',
          'Effect: Knocks Wrecker off 4-meter platforms',
          'Indicator: Green = clear, Red = intruder on tower platform!'
        ],
        handwrittenNote: 'Trust your dog. If he growls at an empty ladder — someone in a beanie is lurking up there.'
      },
      monsterPreview: 'wrecker'
    },
    {
      id: 8,
      title: 'The Hunter & The 21-Meter Rule',
      subtitle: 'Seven-meter night reptile, soap, and total silence',
      tag: 'Chapter 8 • Monster 4',
      storyText: [
        'The Hunter is the island alpha predator — a seven-meter night reptile with a long tail, glowing molten spine plates, and thermal vision.',
        'The first time the ground trembled under its footsteps, chills ran down my spine. But I remembered the notes: it hunts via rapid motion and scents unwashed clothes across 50 meters!',
        'Because I showered daily in the bunker and wore clean clothes, it caught no scent. When its head turned, I executed the golden rule: sprinted 21 meters into the ferns and froze.',
        'The beast lost thermal tracking against the dense forest backdrop, grumbled into the dark, and walked away.'
      ],
      geekDoodle: {
        title: 'Guide: How Not to Become Hunter Prey',
        type: 'warning',
        details: [
          'Step 1: Shower in bunker before expeditions (reduces scent range from 50m to 5m)',
          'Step 2: On contact — sprint 21 meters and drop flat into thick brush',
          'Step 3: Remain completely still and silent for 15 seconds'
        ],
        handwrittenNote: 'Who would have thought a bar of soap and a clean shirt would be the best defense against a 7-meter reptile!'
      },
      monsterPreview: 'hunter'
    },
    {
      id: 9,
      title: 'Animal Companions: Dog & Cat',
      subtitle: 'Four-legged allies in the bunker',
      tag: 'Chapter 9 • Companions',
      storyText: [
        'Living in a bunker alone gets lonely. On day five, I found a lost puppy on the beach, shared a juicy bone with him, and gained loyal guard dog Barsik.',
        'Barsik became our early-warning radar: barking at fake Mimic crates, growling at Wrecker ambushes, and scaring the Hunter with deep barks.',
        'A week later in the garage, I lured a fluffy cat named Murka with fresh fish. She learned to spot rare batteries and microchips in tall grass and purrs on the desk while I solder circuit boards.'
      ],
      geekDoodle: {
        title: 'Pet Taming Guide',
        type: 'sketch',
        details: [
          'Dog: Tamed with roasted bone. Bonus: Perimeter alarm & predator deterrent',
          'Cat: Tamed with fresh fish. Bonus: Scavenges rare electronic loot',
          'Pet Crafting: Cozy bed, named collar, scratch post'
        ],
        handwrittenNote: 'With a loyal dog by your side, the bunker feels like an impregnable fortress!'
      }
    },
    {
      id: 10,
      title: 'Professor Henry & Miss Hubster',
      subtitle: 'Recovered VHS tape and the disaster mystery',
      tag: 'Chapter 10 • Lore & Secrets',
      storyText: [
        'After piecing together a VCR and cathode-ray TV from salvaged radio parts, I inserted the heavy black VHS tape found in the bunker chest.',
        'The screen flickered. A gray-haired scientist in glasses — Professor Henry — appeared alongside a stern researcher — Miss Hubster.',
        '«If you are watching this, our bio-synthesis experiment breached containment... An anomalous blast mutated the local fauna. We hid blueprints across island chests and sealed the bunker. The only way to breach the electromagnetic dome is the Apex Flare rocket!»'
      ],
      geekDoodle: {
        title: 'VHS Tape #1 Transcript',
        type: 'cassette',
        details: [
          'Recorded Date: August 14 (year unreadable)',
          'Blast Epicenter: Central Laboratory beneath the glass dome',
          'Escape Key: High-Altitude Signal Rocket blueprint in the master console'
        ],
        handwrittenNote: 'So standard flares burn up in the ionized dome! We need a super-rocket.'
      }
    },
    {
      id: 11,
      title: 'The Abandoned Town',
      subtitle: '«Fun Town» Pizzeria, swings, and echoes of the past',
      tag: 'Chapter 11 • Exploration',
      storyText: [
        'In the eastern sector, the jungle opened up to reveal the ruins of a cheerful resort town. Instead of grim concrete walls, bright facade murals with friendly smiley faces remained intact!',
        'I discovered a pizzeria named «Fun Town», rusted playground carousels, and vintage arcade cabinets.',
        'In the back room of the pizzeria, I found an intact FM broadcast transmitter loaded with reels of vintage 80s dance tracks.'
      ],
      geekDoodle: {
        title: 'Abandoned Town Map',
        type: 'blueprint',
        details: [
          '«Fun Town» Pizzeria: Radio transmitter & canned rations',
          'Garage Complex: Professor Henry locked workshop',
          'Playground: Secret cache inside the tube slide'
        ],
        handwrittenNote: 'This town was built for joy. We will definitely bring peace back to this island!'
      }
    },
    {
      id: 12,
      title: 'The Night the Monsters Danced',
      subtitle: 'The legendary Island Dance Party',
      tag: 'Chapter 12 • Dance Party',
      storyText: [
        'It was the wildest night of my entire survival journey. At midnight, the bunker screen flashed green: «TONIGHT IS DANCE PARTY! OUTDOORS ARE SAFE».',
        'The old pizzeria radio transmitter caught emergency power and blasted upbeat 80s disco-funk across the entire island!',
        'I peeked over the fence in utter disbelief. On the clearing, the Wrecker was breakdancing, the Mimic was rhythmically tapping all eight tentacles to the groove, Krep was tap-dancing with ten nimble paws, and the seven-meter Hunter was swaying his volcanic tail to the beat!',
        'The music unlocked human memories in the creatures. Instead of attacking, they happily tossed titanium bolts, gears, and rare crystals directly into my hands!'
      ],
      geekDoodle: {
        title: 'Dance Effect Analysis on Mutants',
        type: 'sketch',
        details: [
          'Trigger: Pizzeria Broadcast 104.2 FM',
          'Effect: 100% suppression of creature aggression',
          'Monster Gifts: Titanium bolts, rare batteries, seeds, dragon scales'
        ],
        handwrittenNote: 'Easily the best night of my life. I tap-danced alongside island monsters!'
      }
    },
    {
      id: 13,
      title: 'The Lab & The Expedition Buggy',
      subtitle: 'Hazmat suit, keycard, and the all-terrain rover',
      tag: 'Chapter 13 • Laboratory',
      storyText: [
        'Inside a secret garage, I found the ultimate prize — Professor Henry Expedition Buggy! Reinforced with steel grilles and off-road headlights, I tore through the hazardous swamps straight to the bio-dome.',
        'Donning a hazmat suit and gas mask, I swiped the blue keycard. The airlock doors parted with a heavy pneumatic hiss.',
        'Inside the master command desk safe lay the blueprint I had been searching for all along — the Apex Flare High-Altitude Rocket!'
      ],
      geekDoodle: {
        title: "Henry's All-Terrain Buggy",
        type: 'blueprint',
        details: [
          'Engine: Hybrid turbo-electric powertrain',
          'Armor: Bull-bar grille vs foliage and small mutants',
          'Cargo: Holds 12 crates of laboratory salvage'
        ],
        handwrittenNote: 'Cruising the jungle in a buggy is 100 times faster and safer than on foot!'
      }
    },
    {
      id: 14,
      title: 'Apex Flare: Rocket of Salvation',
      subtitle: 'Titanium hull, chemical payload, and radio beacon',
      tag: 'Chapter 14 • Endgame Crafting',
      storyText: [
        'My Tier 4 Bunker Workbench evolved into a ceramic scientific manufacturing unit with a high-temperature glass kiln and cooling tubes.',
        'Assembling the Apex Flare required three advanced components:',
        '1. Heat-resistant titanium fuselage to withstand atmospheric launch velocity.',
        '2. Stabilized chemical formula (purified gunpowder + saltpeter + isotopic fluorescent dye from the Lab).',
        '3. Encoded SOS beacon chip tuned to rescue emergency channels.',
        'I calibrated the rocket assembly. A green ready light glowed on the hull. We are primed for the finale!'
      ],
      geekDoodle: {
        title: 'Apex Flare Signal Rocket Blueprint',
        type: 'recipe',
        details: [
          'Altitude: 3,000 meters (punctures the ionized anomaly dome)',
          'Flash Intensity: 500,000 candelas (visible across 80 km)',
          'Signal: Digital GPS distress beacon targeting the bunker'
        ],
        handwrittenNote: 'The pinnacle of engineering. One launch — and we are heading home!'
      }
    },
    {
      id: 15,
      title: 'The Final Stand',
      subtitle: 'Roof launch and perimeter defense',
      tag: 'Chapter 15 • Climax',
      storyText: [
        'I carried the Apex Flare onto the bunker roof, aligned the launch rail, and hit the ignition.',
        'A blinding pillar of flame roared into the night sky! At 3,000 meters, the anomaly dome fractured with a magnificent shower of golden sparks.',
        'My radio crackled to life: «Distress signal confirmed! Rescue helicopter en route, ETA at sunrise (10 minutes). Hold the line, the flare has drawn nearby anomalies!»',
        'It was an unforgettable standoff: automated turrets fired steadily, spotlights blinded Kreps, electric rails repelled Wreckers, and Barsik and I defended the gate shoulder to shoulder!'
      ],
      geekDoodle: {
        title: 'Final Stand Defense Layout',
        type: 'warning',
        details: [
          'North Sector: Automated UV turrets vs Mimic imposters',
          'South Sector: Electric fence grid vs Wrecker forces',
          'Gate Integrity: 100% maintained until first light'
        ],
        handwrittenNote: 'We held the line! The secret to survival is keeping a calm head and reloading turrets on time.'
      }
    },
    {
      id: 16,
      title: 'Sunrise Over the Island',
      subtitle: 'Rescue helicopter, saved pets, and the view from above',
      tag: 'Chapter 16 • Finale',
      storyText: [
        'The first rays of dawn pierced through the morning mist. The island fell peaceful as mutants retreated into deep cavern sanctuaries.',
        'From across the ocean came the thumping drone of helicopter rotors. A bright yellow medical rescue helicopter hovered above the bunker and touched down smoothly on the concrete pad.',
        'The rescue pilot smiled: «Kid, did you build this fortified fortress all by yourself?!»',
        'I scooped Barsik into my arms, placed Murka in my backpack, and climbed aboard. As we climbed into the sky, the island with its cozy bunker, garden, and dome seemed like a tiny green jewel in the blue ocean.',
        'I adjusted my pixel glasses and smiled: «Clever engineering beats any monster!»'
      ],
      geekDoodle: {
        title: "Geek's Survival Summary",
        type: 'sketch',
        details: [
          'Workbench Tier: 4 (Mastery)',
          'Pets Saved: 2 (Dog + Cat)',
          'Monsters Outsmarted: 100% via brainpower and science'
        ],
        handwrittenNote: 'The end of our first chapter... but new islands and adventures await!'
      }
    }
  ],
  workbenchLevels: [
    {
      level: 1,
      name: "Survivor's Wooden Table",
      look: 'A rustic oak workbench with hand plane grooves, iron brackets, and a drawer for nails.',
      unlockedRooms: ['Bunker Main Entry Hall', 'Sleeping Quarters with Bed'],
      keyCrafts: ['Stone Axe', 'Mining Pickaxe', 'Torch', 'Basic Shower', 'Wooden Storage Chest'],
      defenseUpgrades: ['Wooden Window Shutters', 'Reinforced Double Door Deadbolt'],
      note: 'The beginning of your journey. Craft the basic shower right away to wash off scents before entering the forest!'
    },
    {
      level: 2,
      name: 'Reinforced Iron Workbench',
      look: 'Upgraded with steel corner brackets, a heavy vise, soldering kit, and hand-crank generator.',
      unlockedRooms: ['Underground Basement Level 1', 'Outdoor 5-Plot Farm Garden'],
      keyCrafts: ['Hunting Crossbow', 'UV Flashlight', 'Toxic Smoke Canisters from Mimic Ink', 'Vegetable Raised Beds'],
      defenseUpgrades: ['Steel Barbed Fence Rails', 'Tin Can Alarm Tripwires'],
      note: 'Unlocks the farm! Grow carrots to distract Krep and sweet strawberries for your cat!'
    },
    {
      level: 3,
      name: 'Powered Engineering Station',
      look: 'Stainless steel desk with CCTV monitor, high-voltage wiring, battery bank, and precision calibration tools.',
      unlockedRooms: ['Weapons Armory Workshop', '4 Corner Sniper Lookout Towers', 'Basement Firing Range'],
      keyCrafts: ['Restored Firearms (Glock, AWP, P90)', 'EMP Scarecrow vs Krep', 'IR Security Cameras'],
      defenseUpgrades: ['Electrified Watchtower Railings vs Wrecker', 'Auto-Tracking Spotlights', 'Sandbag Fortifications'],
      note: 'Now you can restore salvaged firearms and construct electrified sniper watchtowers!'
    },
    {
      level: 4,
      name: 'Ceramic Scientific Production Unit',
      look: 'Futuristic black ceramic workstation: built-in high-temperature kiln, dual microelectronics drawers, miter saw bench, and steam exhaust pipe.',
      unlockedRooms: ['Sealed Roof Access Airlock', 'Master Communications Center'],
      keyCrafts: ['Apex Flare High-Altitude Rocket', 'Titanium Hazmat Suit with Gas Mask', 'Perimeter UV Laser Grid'],
      defenseUpgrades: ['Automated «Anti-Anomaly» Sentry Turrets', 'Titanium Armored Blast Doors'],
      note: 'The ultimate pinnacle of engineering! Allows you to craft the Apex Flare rocket and breach the island dome.'
    }
  ],
  devMilestones: [
    {
      stage: 'Phase 1: Birth of the Idea',
      date: 'July 2026',
      title: '«I want to make a survival game with no stupid jump scares!»',
      author: 'Влад',
      description: 'Vlad (10 yo) formulated his core vision: a survival game where victory comes from physics, intelligence, and observation rather than overpowered weapons. Every threat must be an intriguing puzzle.',
      keyDecisions: [
        'Main protagonist — Geek the quirky engineer with stylish pixel glasses',
        'Atmospheric adventure filled with humor instead of cheap gore',
        'Handwritten engineering journal with blueprint sketches'
      ],
      quote: '«If our hero is clever and fun — why make a gloomy horror game? Let monsters dance at a midnight party instead!» — Vlad'
    },
    {
      stage: 'Phase 2: Audio Sessions & Bestiary',
      date: 'August 2026',
      title: 'Brainstorming 4 Unique Creatures',
      author: 'Влад и Егор',
      description: 'Through recorded voice sessions, father and son mapped out the biology and counter-mechanics for each entity. That was when the signature rule was born: the Mimic copies everything, but its cast shadow is always an octopus!',
      keyDecisions: [
        'Mimic exposes its true identity under directed flashlight beams',
        'Krep ignores the player but sabotages CCTV antennas and steals carrots',
        'Hunter is countered by hygiene (showering) and the 21-Meter Rule',
        'Wrecker sets up ambushes directly on lookout towers'
      ],
      quote: '«Never trust the second crate in your garden!» — The defining development meme'
    },
    {
      stage: 'Phase 3: GDD & Narrative World',
      date: 'August 2026',
      title: 'GDD, 4 Workbench Tiers, and the Dance Party',
      author: 'Егор',
      description: "Vlad's concepts were organized into a Game Design Document: structured bunker progression, Professor Henry's expedition buggy, lore VHS tapes, and the endgame Apex Flare rocket.",
      keyDecisions: [
        'Clean 4-tier workbench crafting progression',
        '«Island Dance Party» event with 80s retro disco music from Fun Town Pizzeria',
        'Climactic sunrise rescue by helicopter'
      ],
      quote: '«Ingenuity and science over brute force — the fundamental law of our island»'
    },
    {
      stage: 'Phase 4: Vibecoding & Interactive Book',
      date: 'Current Stage',
      title: 'Interactive Web Journal for Classmates & Godot 4 Start',
      author: 'Влад и Егор',
      description: "While Dad sets up the Godot 4 codebase, this interactive website was created so Vlad can share the world and its secrets with his friends and classmates!",
      keyDecisions: [
        "Interactive flip-book with Geek's authentic notes",
        'Shadow testing & creature sound bestiary',
        'Monster creator sandbox for friends'
      ],
      quote: '«Look at the awesome creatures we invented!»'
    }
  ],
  quizQuestions: [
    {
      id: 1,
      scenario: 'You walk into the bunker garden and notice two tool crates. Yesterday there was only one. What is your move?',
      options: [
        {
          text: 'Run up excitedly and open the new crate to grab free loot!',
          isCorrect: false,
          explanation: 'Wrong! The Mimic is waiting for this. In close range (<1.5m) it will instantly ensnare you with tentacles!'
        },
        {
          text: 'Shine your flashlight from the side to check its cast shadow.',
          isCorrect: true,
          explanation: 'Spot on! A real crate casts a square shadow; a Mimic reveals an octopus silhouette!'
        },
        {
          text: 'Sprint back into the bunker and never step into the garden again.',
          isCorrect: false,
          explanation: 'Too cowardly! A good engineer tests hypotheses with light and deduction.'
        }
      ]
    },
    {
      id: 2,
      scenario: 'Inside the bunker, the television monitor hisses with static and camera feeds drop. What happened?',
      options: [
        {
          text: 'Krep climbed onto the roof and is gnawing on the antenna power lead!',
          isCorrect: true,
          explanation: 'Exactly! Grab a high-lumen flashlight, climb up, and blind its 10 eyes!'
        },
        {
          text: 'The cathode tube broke, hit the TV with a fist.',
          isCorrect: false,
          explanation: 'The TV is fine, but the antenna cable is halfway eaten.'
        },
        {
          text: 'The Dance Party has started.',
          isCorrect: false,
          explanation: 'During the Dance Party, a green banner appears on the screen instead of static.'
        }
      ]
    },
    {
      id: 3,
      scenario: 'Barsik the dog suddenly barks and firmly blocks Geek from climbing the sniper watchtower. What should you do?',
      options: [
        {
          text: 'Ignore the dog and sprint up the ladder anyway.',
          isCorrect: false,
          explanation: 'Extremely dangerous! The 2-meter Wrecker is waiting up top for an ambush!'
        },
        {
          text: 'Trust your dog and flip the «Electric Railings» switch on the master console.',
          isCorrect: true,
          explanation: 'Brilliant! High voltage will throw the Wrecker off the tower and secure the base!'
        },
        {
          text: 'Throw your best multi-tool at the tower.',
          isCorrect: false,
          explanation: 'You will lose your tool and the Wrecker will just laugh.'
        }
      ]
    },
    {
      id: 4,
      scenario: 'What is the golden rule of crafting at the Bunker Workbench?',
      options: [
        {
          text: 'Try to build Tier 4 rockets on day one.',
          isCorrect: false,
          explanation: 'Impossible — you first need blueprints from the Laboratory and titanium.'
        },
        {
          text: 'Upgrade the Workbench progressively from Tier 1 to Tier 4, unlocking tools and base defenses.',
          isCorrect: true,
          explanation: 'Excellent! The Workbench is the heart of your base; each level unlocks new survival tiers!'
        },
        {
          text: 'Smash the workbench before going to sleep.',
          isCorrect: false,
          explanation: 'Without your workbench, island survival is impossible!'
        }
      ]
    },
    {
      id: 5,
      scenario: 'Why can ordinary flare guns not summon the rescue helicopter from the island?',
      options: [
        {
          text: 'The island is enclosed by an ionized electromagnetic dome where standard flares burn up.',
          isCorrect: true,
          explanation: 'Exactly! You need the titanium Apex Flare rocket with stabilized isotope payload from the Lab!'
        },
        {
          text: 'Rescuers sleep during the night.',
          isCorrect: false,
          explanation: 'Rescuers are on 24/7 alert, but cannot see through the anomaly cloud.'
        },
        {
          text: 'Standard flares are too inexpensive.',
          isCorrect: false,
          explanation: 'It is entirely a matter of physics and atmospheric radiation!'
        }
      ]
    },
    {
      id: 6,
      scenario: 'You encounter the 7-meter Hunter in the nocturnal jungle. What rule saves your life?',
      options: [
        {
          text: 'Attempt to fight it with a wooden club.',
          isCorrect: false,
          explanation: 'Never! Brute force is useless against a 7-meter armored reptile.'
        },
        {
          text: '«The 21-Meter Rule» — sprint into cover, freeze for 15 seconds + be clean from taking a bunker shower.',
          isCorrect: true,
          explanation: 'Perfect! Clean clothes mask your scent, and 21 meters breaks the predator thermal lock-on!'
        },
        {
          text: 'Shout loudly and wave your arms.',
          isCorrect: false,
          explanation: 'Rapid motion will only draw the predator attention faster!'
        }
      ]
    }
  ],
  creatorPresets: [
    {
      id: 'p1',
      name: 'Whisperer (The Tape Ghost)',
      nickname: '«Cassette Phantom»',
      threatCategory: 'Audio Disorientation',
      appearance: 'A hovering translucent silhouette with a vintage cassette tape recorder in place of a head.',
      trick: "Mimics friendly voices to coax you outside the bunker in the dead of night.",
      weakness: 'Put on headphones or blast loud rock music from your deck — it jams its broadcast frequency!',
      loot: 'Magnetic audio coil and rare communication microchip.',
      authorName: 'Vlad (10 yo)'
    },
    {
      id: 'p2',
      name: 'Drill-Beetle (Bark Borer)',
      nickname: '«Subterranean Sapper»',
      threatCategory: 'Foundation Sabotage',
      appearance: 'A suitcase-sized armored beetle with an industrial diamond drill nose.',
      trick: 'Attempts to bore through the wooden floorboards beneath the workbench.',
      weakness: 'Place a tray of soapy water or a vibration trap — it loses traction and flees seismic tremors.',
      loot: 'Diamond drill tip for upgrading to Tier 3 Pickaxe.',
      authorName: 'Vlad (10 yo)'
    }
  ],
  shadowObjects: [
    { type: 'box', label: 'Wooden Supply Crate', emoji: '📦', shadow: 'Square Geometry Silhouette 🔲' },
    { type: 'barrel', label: 'Fuel Barrel', emoji: '🛢️', shadow: 'Cylindrical Smooth Shadow 🔘' },
    { type: 'pumpkin', label: 'Garden Pumpkin', emoji: '🎃', shadow: 'Round Organic Outline 🌕' },
    { type: 'stone', label: 'Basalt Boulder', emoji: '🪨', shadow: 'Jagged Mineral Outline ⛰️' },
  ],
  danceMonsters: [
    { emoji: '🐙', name: 'Mimic', move: 'Waving all 8 tentacles in sync', gift: 'Toxic Camo Ink' },
    { emoji: '🐰🕷️', name: 'Krep Fastener', move: 'Tap-dancing on 10 quick paws', gift: 'Fresh Garden Carrot' },
    { emoji: '🧟‍♂️', name: 'Wrecker', move: 'Doing headspins in a baseball cap', gift: 'Titanium Grade Bolt' },
    { emoji: '🦎✨', name: 'Alpha Hunter', move: 'Swinging its 7m tail to disco groove', gift: 'Neon Thermo-Scale' },
    { emoji: '🐶', name: 'Barsik the Dog', move: 'Doing backflips and wagging tail', gift: 'Golden Bone Trophy' },
  ],
  apexIngredients: [
    { id: 'battery', icon: '🔋', name: 'High-Capacity Lithium Core', from: 'Krep Loot', desc: 'Crafted from charged cells looted from Krep encounters' },
    { id: 'fuel', icon: '🧪', name: 'Bio-Ethanol Fuel Tank', from: 'Farm Stills', desc: 'Concentrated distillate from fermented island wild berries' },
    { id: 'lens', icon: '🔮', name: 'Quartz Focus Prism', from: 'Mimic Loot', desc: 'Focuses flare beam up to 10 km straight into the night sky' },
  ]
};
