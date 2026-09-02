import { GameTranslations } from '../types';
import { withSeasonOneChapters } from '../../data/seasonOneChapters';
import mimicImg from '../../assets/images/monster_mimic_final_1787056451535.jpg';
import krepImg from '../../assets/images/monster_krep_final_1787056466817.jpg';
import wreckerImg from '../../assets/images/monster_wrecker_final_1787056479100.jpg';
import hunterImg from '../../assets/images/monster_hunter_final_1787056495352.jpg';

export const srTranslations: GameTranslations = {
  ui: {
    authorTag: 'VLAD (10 GODINA) & TATA',
    appTitle: 'SURVIVAL NIGHTS',
    pageTitle: 'Survival Nights — Gikov dnevnik | Igra Vlada i tate',
    pageDescription: 'Interaktivni sajt igre "Survival Nights": dnevnik preživljavanja, galerija čudovišta, bunker i priča o nastanku.',
    navHome: 'Početna',
    navMonsters: '4 Čudovišta',
    navBook: 'Dnevnik',
    navBunker: 'Bunker & Raketa',
    navGames: 'Igre',
    navDevStory: 'O autoru',
    dancePartyBtn: 'DENS ŽURKA! 🎉',
    badge16Chapters: '16 poglavlja',
    badgeMonsters: '4 vrste',
    soundOn: 'Zvuk: Uklj',
    soundOff: 'Zvuk: Isklj',
    menuOpen: 'Otvori meni',
    menuClose: 'Zatvori meni',
    selectLanguage: 'Jezik',

    heroBadge: 'VLADOV PROJEKAT • 10 GODINA • GODOT 4 & GDD',
    heroTitle: 'SURVIVAL NIGHTS: OSTRVO ANOMALIJA',
    heroSubtitle: 'Pametna igra preživljavanja bez jeftinih prepada — gde fizika, logika i inženjerski um donose pobedu!',
    heroDesc: 'Dobrodošli u zvanični interaktivni dnevnik projekta! Naučnik Gik doživljava pad aviona na tropskom ostrvu prepunom tajanstvenih mutanata. Danju gradi i istražuj, noću koristi pamet!',
    heroFeatures: {
      mechanic: 'Pametne Mehanike',
      mechanicDesc: 'Svako čudovište ima svoju fizičku manu — od provere senke do tuširanja pre noći.',
      defense: 'Razvoj Bunkera',
      defenseDesc: '4 nivoa radnog stola od drvene klupe do signalne rakete Apex Flare.',
      noHorror: 'Bez Praznih Prepada',
      noHorrorDesc: 'Uzbudljiva naučna avantura sa humorom, vernim psom Barsikom i Dens Žurkama.'
    },
    heroAuthorIntro: 'PORUKA OD AUTORA!',
    heroAuthorTitle: 'Ćao, ja sam Vlad, imam 10 godina!',
    heroAuthorSpeech: 'Smislio sam ovu igru jer su mi dosadile jednolične horor igre sa glupim prepadima. Hteo sam da napravim preživljavanje gde pobeđuješ glavom, a ne oružjem! Tata i ja smo napisali 16 poglavlja dnevnika, osmislili 4 jedinstvena čudovišta i pravimo igru u Godot 4.',
    heroMonstersHeader: '4 JEDINSTVENA ČUDOVIŠTA OSTRVA',
    heroMonstersSub: 'Nijedno čudovište se ne pobeđuje sirovom snagom. Prouči njihove slabosti i tajne!',
    heroViewAllMonsters: 'Pogledaj sva dosijea',
    heroBookHeader: 'INTERAKTIVNI GIKOV DNEVNIK (16 POGLAVLJA)',
    heroBookSub: 'Kompletna priča o preživljavanju sa skicama, nacrtima radnog stola i tajnama spasavanja.',
    heroReadBookBtn: 'Čitaj dnevnik od 1. poglavlja',
    heroWorkbenchPreview: 'RADNI STO & RAKETA APEX FLARE',
    heroExploreBunkerBtn: 'Istraži Bunker',
    heroLaunchPartyBtn: 'Pokreni Dens Žurku!',

    galleryHeader: 'BESTIJARIJUM: 4 ČUDOVIŠTA OSTRVA',
    gallerySub: 'Tajni dosijei inženjera Gika. Uperi baterijsku lampu, proveri senku i prouči navike svakog stvorenja!',
    selectMonsterHint: 'Izaberi dosije stvorenja za analizu:',
    tabCodename: 'Kodirano Ime',
    threatTypeLabel: 'Tip Pretnje',
    dangerLevelLabel: 'Nivo Opasnosti',
    sizeLabel: 'Veličina',
    habitatLabel: 'Stanište',
    behaviorLabel: 'Ponašanje',
    soundSignatureLabel: 'Zvučni Potpis',
    howToSpotLabel: 'Kako ga uočiti',
    weaknessLabel: 'Slabosti i protivmere',
    lootLabel: 'Plijen (Loot)',
    geekNoteLabel: 'Gikova Beleška',
    storySnippetLabel: 'Zapis iz Dnevnika',
    flashlightModeOn: 'Lampa UKLJ',
    flashlightModeOff: 'Uključi Lampu',
    flashlightHint: 'Pređi kursorom preko oblasti da osvetliš senku i otkriješ pravi oblik!',
    audioTestBtn: 'Zvuk Čudovišta',
    audioPlaying: 'Reprodukcija...',
    monsterTestQuote: 'Citat iz terenskih zapisa',

    bookHeader: 'GIKOV DNEVNIK PREŽIVLJAVANJA',
    bookSub: '16 uzbudljivih poglavlja: od pada padobranom do lansiranja rakete Apex Flare u zoru.',
    searchChapterPlaceholder: 'Pretraži poglavlja ili tekst...',
    allChaptersFilter: 'Svih 16 poglavlja',
    monstersFilter: 'Samo čudovišta',
    bunkerFilter: 'Baza i izrada',
    chapterOf: 'Poglavlje',
    prevChapter: '← Prethodno',
    nextChapter: 'Sledeće →',
    doodleTitle: 'Skica iz Gikove sveske',
    relatedMonster: 'Povezano čudovište:',
    openMonsterDossier: 'Otvori dosije čudovišta →',
    readTimeMin: 'min čitanja',
    audioStoryBtn: 'Preslušaj poglavlje',
    audioStoryStop: 'Zaustavi audio',

    bunkerHeader: 'GIKOV BUNKER & RADNI STO',
    bunkerSub: 'Evolucija baze od jednostavnog drvenog stola do keramičkog naučno-proizvodnog kompleksa.',
    bunkerTierTab: 'Nivo',
    workbenchAppearance: 'Izgled radnog stola',
    unlockedRoomsLabel: 'Otključane prostorije bunkera',
    keyCraftsLabel: 'Ključni predmeti i recepti',
    defenseUpgradesLabel: 'Odbrambena unapređenja baze',
    geekAdviceLabel: 'Savet Inženjera',
    apexRocketHeader: 'SIGNALNA RAKETA VELIKOG DOMETA «APEX FLARE»',
    apexRocketSub: 'Jedini način da se probije jonizovana kupola ostrva na 3000 m i pozove spasilački helikopter.',
    apexComponent1: 'Titanijumsko kućište visoke čvrstoće',
    apexComponent1Desc: 'Izdržava ogromna opterećenja i toplotu pri prolasku kroz anomaliju.',
    apexComponent2: 'Stabilizovana izotopska smesa',
    apexComponent2Desc: 'Stvara blesak od 500.000 kandela vidljiv kroz maglu na 80 km.',
    apexComponent3: 'Kodirani SOS čip profesora Henrija',
    apexComponent3Desc: 'Šalje tačne digitalne GPS koordinate bunkera spasilačkom timu.',
    launchRocketSimBtn: 'Pokreni simulaciju lansiranja 🚀',
    launchingRocket: 'Lansiranje Apex Flare...',
    rocketReady: 'Raketa je spremna za lansiranje!',

    gamesHeader: 'IGRAČKI CENTAR PREŽIVLJAVANJA',
    gamesSub: 'Testiraj svoju opažajnost, stvori sopstveno čudovište i proveri znanje fizike ostrva!',
    tabShadowGame: 'Detektor Senki',
    tabQuiz: 'Kviz Preživljavanja',
    tabCreator: 'Kreator Čudovišta',

    shadowTitle: 'DETEKTOR SENKI OPONAŠATELJA (MIMIKA)',
    shadowSub: 'Na parcelu bunkera postavljeni su predmeti. Uperi snop reflektora i proceni da li je predmet pravi ili prerušeni Mimik!',
    flashlightPower: 'Jačina reflektora',
    testObjectBtn: 'Uključi reflektor',
    identifyResultSafe: 'Bezbedan predmet! Senka je geometrijski pravilna.',
    identifyResultMimic: 'OPONAŠATELJ (MIMIK)! Senka hobotnice ga je razotkrila!',
    shadowScore: 'Inženjerski poeni',
    shadowStreak: 'Niz pobeda',
    nextSubjectBtn: 'Sledeći predmet →',
    throwRockBtn: 'Baci kamenčić 🪨',
    sprayInkBtn: 'UV skeniranje ⚡',
    shadowHint: 'Savet: Prava drvena kutija baca pravougaonu senku. Mimik otkriva pipke i zaobljenu glavu!',

    quizTitle: 'TEST IQ-a PREŽIVLJAVANJA NA OSTRVU',
    quizBadge: 'ISPIT ZA ZVANJE INŽENJERA',
    rankMaster: 'GLAVNI INŽENJER OSTRVA APEKS',
    rankMasterDesc: 'Besprikoran rezultat! Savršeno poznaješ zakone fizike, frekvencije i recepte preživljavanja!',
    rankPartner: 'VIŠI STRUČNJAK ZA BUNKER',
    rankPartnerDesc: 'Odličan posao! Sa tobom će Gik i Barsik preživeti svaku noć na ostrvu.',
    rankNovice: 'KADET POČETNIK',
    rankNoviceDesc: 'Pročitaj ponovo 16 poglavlja Dnevnika da naučiš sve slabosti ostrvskih mutanata!',
    question: 'Pitanje',
    of: 'od',
    correctAnswers: 'Tačnih odgovora',
    situationOnIsland: 'Situacija na ostrvu',
    viewResults: 'Pogledaj konačni status',
    nextQuestion: 'Sledeće pitanje →',
    finalStatus: 'KONAČNI STATUS ISPITA',
    yourScore: 'Tvoj rezultat',
    points: 'bodova',
    retakeQuiz: 'Ponovi ispit',
    detectorBadge: 'LABORATORIJA ZA PREPOZNAVANJE • POGLAVLJE 3',
    detectorTitle: 'DETEKTOR SENKI MIMIKA',
    detectorSub: 'Uključi reflektor da vidiš senke. Običan predmet baca geometrijsku senku, a Mimik — senku hobotnice sa 8 pipaka!',
    roundLabel: 'Runda',
    scoreLabel: 'Pronađeno',
    spotlightOn: 'Reflektor: UKLJ',
    turnOnSpotlight: 'Uključi reflektor',
    mimicShadowText: '8 Izvijenih Pipaka Hobotnice 🐙',
    shadowInstruction: 'Uključi reflektor i klikni na zamaskiranog Mimika!',
    shadowBingo: 'BINGO! Mimik je razotkriven pipcima hobotnice! +1 Poen!',
    shadowMistake: 'Ups! To je samo običan bezopasan',
    shadowLabel: 'Senka koja se baca',
    darknessNoLight: 'Potpuni mrak (Uključi svetlo)',
    clickIfMimic: 'Klikni ako je Mimik',
    nextRound: 'Sledeća runda',
    reset: 'Resetuj',
    mimicName: 'MIMIK',
    quizSub: '6 situacija iz Gikovog dnevnika. Dokaži da si spreman za noćnu odbranu baze!',
    questionOf: 'Pitanje',
    quizScore: 'Tačnih odgovora',
    selectAnswerPrompt: 'Izaberi pravo inženjersko rešenje:',
    nextQuestionBtn: 'Sledeće pitanje →',
    restartQuizBtn: 'Ponovi kviz 🔄',
    quizPassedTitle: 'Čestitamo, ti si pravi Glavni Inženjer!',
    quizPassedDesc: 'Odlično poznaješ navike svih čudovišta i pravila preživljavanja u bunkeru.',

    creatorTitle: 'KREATOR ČUDOVIŠTA ZA DRUGARE',
    creatorSub: 'Smisli novo originalno čudovište za Vladovu igru! Bez jeftinih prepada — samo zanimljiva mehanika i slabost.',
    creatorFormName: 'Ime čudovišta',
    creatorFormNickname: 'Nadimak / Moto',
    creatorFormCategory: 'Kategorija pretnje',
    creatorFormAppearance: 'Izgled i osobine',
    creatorFormTrick: 'U čemu je trik / kako pravi štetu?',
    creatorFormWeakness: 'Pametna slabost (kako ga nadmudriti?)',
    creatorFormLoot: 'Šta ostavlja pri porazu?',
    creatorFormAuthor: 'Tvoje ime (autor)',
    creatorSubmitBtn: 'Sačuvaj u Vladovoj arhivi 💾',
    creatorPresetBtn: 'Popuni idejom od Vlada 💡',
    createdMonstersList: 'Arhiva stvorenih čudovišta',
    deleteCustomMonster: 'Obriši',
    appearanceLabel: 'Izgled i osobine',
    appearancePlaceholder: 'Npr: porcelanska lutka sa 6 nogu i petrolejskom lampom na grudima...',
    trickLabel: 'U čemu je trik / kako pravi štetu?',
    trickPlaceholder: 'Npr: pevuši uspavanke i mami te da zaspiš napolju...',
    weaknessPlaceholder: 'Npr: oduvava je ventilator, plaši se limunovog soka...',
    lootPlaceholder: 'Npr: staklo od lampe, baterija...',
    authorLabel: 'Tvoje ime (autor)',
    authorPlaceholder: 'Tvoje ime / nadimak',
    addToDiary: 'Sačuvaj u Vladovoj arhivi 💾',
    copied: 'Kopirano u privremenu memoriju! ✨',
    copyCard: 'Kopiraj karticu',
    namePlaceholder: 'Ime čudovišta',
    nicknamePlaceholder: 'Nadimak / Moto',
    createdListTitle: 'Arhiva stvorenih čudovišta',

    devStoryHeader: 'PRIČA O RAZVOJU IGRE',
    devStorySub: 'Kako 10-godišnji učenik Vlad i njegov tata Egor prave originalnu igru preživljavanja u Godot 4.',
    devStoryBadge: 'VAJB-KODIRANJE • GDD • INDIE RAZVOJ',
    vladRole: 'Autor ideje, dizajner igre & kreativni direktor (10 godina)',
    egorRole: 'Tata, narativni dizajner, arhitekta GDD & programer',
    vladBio: 'Smislio koncept "pametnog preživljavanja bez straha", mehaniku senke Mimika, desetookog Krepa i zasede Rušitelja.',
    egorBio: 'Pomaže sinu da maštovite ideje pretvori u skladan svet, profesionalni dizajn dokument i prototip u Godot 4.',
    vladContributionTag: 'Ideja, lor, dizajn čudovišta i mehanika',
    egorContributionTag: 'Arhitektura GDD, Godot 4 kod & veb verzija',
    timelineTitle: 'Hronologija razvoja projekta',
    keyDecisionsLabel: 'Ključne odluke faze:',
    gameEngineTitle: 'Tehnologije i pokretač igre',
    gameEngineDesc: 'Igra se razvija u pokretaču Godot 4 (3D stilizovani low-poly izgled), sa naglaskom na dinamičko osvetljenje, senke i fiziku.',

    partyTitle: 'NOĆNA DENS ŽURKA! 🎉',
    partySub: 'Radio stanica picerije «Grad Zabave» pustila je retro disko fank preko celog ostrva! Čudovišta plešu i dele resurse!',
    partyMusicPlaying: 'Svira radio 104.2 FM • Disco Funk 80s',
    partyMusicPause: 'Muzika je pauzirana',
    partyGiftCollected: 'Poklon preuzet!',
    partyCollectGift: 'Preuzmi poklon 🎁',
    partyCloseBtn: 'Povratak u bunker',
    partyMonsterStatus: 'uživa u plesu uz ritam!',
    danceRadioStation: 'PICERIJA «GRAD ZABAVE» • RADIO TALAS 104.2 FM',
    danceModalTitle: 'NOĆNA DENS ŽURKA!',
    danceModalSub: 'Stari radio predajnik pustio je nostalgični fank! Sva čudovišta ostrva zaboravila su na agresiju i napravila diskoteku!',
    taken: 'Preuzeto',
    giftBtn: 'Poklon',
    giftsInInventory: 'Pokloni u inventaru',
    soundtrackPlaying: 'Retro 80s čiptjun muzika svira',
    returnToBunker: 'Povratak u bunker',
    cheatDance: 'ČIT AKTIVIRAN: Pokretanje Noćne Dens Žurke!',
    cheatNoah: 'USKRŠNJE JAJE «NOJEVA BARKA»: Sve životinje ostrva lete helikopterom!',
    cheatMimic: 'USKRŠNJE JAJE: Senka kutije pomera pipke! Otvaramo igre!',
    cheatApex: 'NACRT: Titanijumsko kućište + Gorivo + SOS čip su spremni!',
    cheatInvalid: 'Komanda nije prepoznata. Pristup odbijen.',
    footerAbout: 'Prezentacioni sajt igre za drugare i školu. Autor ideje i priče: Vlad (10 god), programiranje: tata Egor.',
    footerEngine: 'Pokretač: Godot 4 (WebGL & PC) • Žanr: Inženjerski Survival',
    footerSections: 'Sekcije sajta',
    secretTerminalTitle: 'Tajni terminal bunkera',
    cheatPlaceholder: 'Unesi tajnu šifru...',
    footerCredits: 'Napravljeno s ljubavlju: Vlad (10 god, autor igre) i tata Egor (programer) • 2026',
    footerMotto: 'Pobedi glavom, a ne sirovom snagom!',
    navOverview: 'O igri (Suština za 1 min)',

    footerTagline: 'Originalna indi igra od Vlada (10 god) i tate Egora. Preživi umom, a ne strahom!',
    footerCopyright: 'Survival Nights Project • Napravljeno s ljubavlju prema igrama i nauci',
    footerMadeBy: 'Vlad & Egor • 2026',
    footerSchoolProject: 'Prezentacija igre za drugare i školu',

    share: 'Podeli',
    chapterMonsterAppears: 'U ovom poglavlju se pojavljuje čudovište',
    marginNotes: 'Beleške u Gikovoj svesci',
    workbenchHeader: 'BUNKER I RADNI STO ZA UNAPREĐENJA',
    workbenchSub: 'Progresija skloništa i radnog stola',
    craftSub: 'Od jednostavnog drvenog stola do Apex rakete za spasavanje.',
    levelLabel: 'Nivo',
    roomsUnlocked: 'Otključane sobe i prostorije',
    craftableItems: 'Ključni alati i oprema za pravljenje',
    defenseUpgrades: 'Unapređenja odbrane bunkera',
    flareStageLabel: 'FINALNI CILJ • NIVO 4 APEX',
    flareTitle: 'Apex SOS signalna raketa za spasavanje',
    flareDesc: 'Sakupi tri legendarna dela kako bi lansirao signal visoko u stratosferu!',
    flareSuccessTitle: 'SOS RAKETA JE USPEŠNO LANSIRANA! 🚀✨',
    flareSuccessDesc: 'Nebo sija narandžastim sjajem! Spasilački helikopter leti ka ostrvu!',
    launchFlareBtn: 'Lansiraj Apex signal za spasavanje 🚀',
    flareAssemblePrompt: 'Postavi sva 3 dela za lansiranje SOS rakete',
    badgeGames: 'MINI-IGRE I LABORATORIJA',
    gamesTitle: 'Interaktivne mini-igre i laboratorija',
    selectAvatar: 'Izaberi avatar čudovišta',
    bookBadge: 'DNEVNIK PREŽIVLJAVANJA I KNJIGA AVANTURA',
    bookTitle: '16 Poglavlja: Hronike Ostrva',
    chapterLabel: 'Poglavlje',
    selectChapter: 'Izbor poglavlja',
    bookmark: 'Obeleži poglavlje',
    bookmarked: 'Obeleženo',

    // Vault Door / Bunker Entrance
    vaultButton: 'Uđi u bunker',
    vaultSubtitle: 'Zaštićena lična odaja preživelog',
    vaultDoorTitle: 'ULAZ U BUNKER: KODNA BRAVA',
    vaultDoorDesc: 'Teška oklopljena vrata bunkera su zaključana elektromehaničkom bravom. Unesi pristupnu šifru:',
    vaultCodePlaceholder: 'UNESI KOD...',
    vaultSubmitBtn: 'Otvori komoru',
    vaultAccessDeniedTitle: 'PRISTUP ZABRANJEN: BUNKER JE ZAKLJUČAN',
    vaultAccessDeniedDesc: 'Lični bunker je u režimu konzervacije. Sistem autorizacije i lični bunkeri biće dostupni u sledećim ažuriranjima!',
    vaultCloseBtn: 'Povratak u bazu',
    vaultKeypadClear: 'OBRIŠI',
    vaultRetryBtn: 'Pokušaj ponovo',

    // Easter Egg Modals
    noahModalTitle: 'USKRŠNJE JAJE «NOJEVA BARKA» 🚁🏝️',
    noahModalDesc: 'Spasilački helikopter je pokušao da evakuiše sve divlje životinje i čudovišta sa ostrva odjednom... Konstrukcija nije izdržala toliku težinu i srušila se na spoljni greben! Preživljavanje se nastavlja!',
    noahCloseBtn: 'Jasno, spasavamo se sami!',
    gameModalTitle: 'REŽIM IGRE (GODOT 4)',
    gameModalDesc: 'Igra Survival Nights se trenutno aktivno pravi u Godot 4! WebGL verzija za pretraživač i verzija za PC biće dostupne uskoro. Pratite ažuriranja dnevnika!',
    gameCloseBtn: 'Čekamo izlazak!',

    // Shadow Detector Enhanced Animations
    rockThrowAction: 'Baci kamen 🪨',
    throwingRock: 'Bacanje kamena...',
    mimicEscaping: 'Mimik se uplašio, poprskao sluz i beži!',
    mimicCaughtPlayer: 'Ups! To je bio običan predmet, a pravi Mimik je iskočio i pojeo tvoj sendvič!',
    slimeSquirtedLabel: '🟢 ŠPRICNUO SLUZ!',
    mimicStoleSandwichTitle: 'MIMIK JE POJEO TVOJ SENDVIČ!',
  },
  monsters: [
    {
      id: 'mimic',
      name: 'Oponašatelj (Mimik)',
      codename: '«Nikada ne veruj drugoj kutiji»',
      quote: '«Ako je u bašti juče bila jedna kutija, a danas dve — imaš problem sa pipcima!»',
      threatType: 'Vizuelna i lukava zaseda',
      dangerLevel: 'Visok',
      size: 'Promenljiva (od 0.5 m do 2 m)',
      appearance: 'Mutirani laboratorijski organizam sa fiziologijom hobotnice (hromatofori, 8 elastičnih pipaka). Savršeno kopira teksturu drveta, kamena ili bureta.',
      habitat: 'Bašta bunkera, skladišta, proplanci na ulazu, sanduci sa alatom.',
      behavior: 'Strpljivo se pretvara da je običan predmet. Čeka da Gik priđe na manje od 1.5 metara, a zatim naglo napada pipcima. Ne ume da imitira ljude.',
      soundSignature: 'Potpuna tišina, a zatim vlažan zvuk prianjaljki tik pre skoka.',
      howToSpot: 'PROVERI SENKU! Hromatofori menjaju boju tela, ali senka pod reflektorom UVEK otkriva oblik hobotnice sa pipcima. UV lampa takođe razbija kamuflažu.',
      weakness: [
        'Umeren snop baterijske lampe — odmah otkriva senku hobotnice',
        'UV lampa i IR kamere bunkera — poništavaju kamuflažu',
        'Bacanje kamenčića izdaleka — shvata da je otkriven i beži u žbunje',
        'Pas čuvar — oseća miris i laje na lažnu kutiju'
      ],
      loot: 'Toksična mastiljava mrlja — redak resurs za pravljenje dimnih bombi i odbrambenih sprejeva.',
      geekNote: 'Pravilo #1: Nikada ne otvaraj kutiju u bašti bez bočnog svetla. Prava kutija daje kvadrat, a Mimik hobotnicu!',
      storySnippet: `U bašti su stajale dve drvene kutije.
Juče je bila samo jedna.
Gik je zastao:
— Tako. Ili sam slučajno napravio još jednu kutiju u snu... ili imamo problem.
Upalio je reflektor na ramenu.
Od prve kutije pala je ravna pravougaona senka.
Od druge — obris ogromne hobotnice sa pokretnim pipcima.
— Aha! Uhvaćen si, prevarantu!
Kutija je poskočila, izrasle su joj noge, pljunula je ljubičasto mastilo i pobegla u džunglu.`,
      icon: '🐙',
      imageUrl: mimicImg,
    },
    {
      id: 'krep',
      name: 'Pričvršćivač (Krep)',
      codename: '«Desetooki glodar žica»',
      quote: '«Ne želi da pojede tebe. Želi da pojede tvoju šargarepu i preseče kablove kamera!»',
      threatType: 'Diverzija bašte i spoljne antene',
      dangerLevel: 'Srednji',
      size: '1.2 metra (veličina većeg psa)',
      appearance: 'Hitra i neobična mešavina zeca i pauka. Ima meko sivo krzno, 10 svetlećih crvenih očiju i kandže za penjanje po metalu.',
      habitat: 'Krov bunkera oko glavne antene, leje sa šargarepom i kupusom.',
      behavior: 'Nikada ne napada Gika direktno! Preskače ogradu, uništava povrće i pregriza koaksijalni kabl antene, gaseći ekran i kamere.',
      soundSignature: 'Električno krckanje žica, zveket metalnih stubova i šuškanje u lejama.',
      howToSpot: 'Deset sjajnih crvenih tačkica u mraku na stubu antene.',
      weakness: [
        'Jaka baterijska lampa (2000 lumena) — zaslepljuje svih 10 osetljivih očiju izazivajući paniku',
        'Zvučne zvečke od limenki na kanapu oko bašte',
        'EMP strašilo (Radni sto nivoa 3) — ultrazvukom tera štetočinu na 50 metara'
      ],
      loot: 'Specijalno svileno vlakno i progutani mikročipovi.',
      geekNote: 'Ako nestane slika sa kamera — bez panike! Uzmi lampu, popni se na krov i uperi svetlost u tih deset očiju.',
      storySnippet: `Ekran monitora u bunkeru počeo je da šušti.
— Opet! — Gik je lupio o sto. — Krep je na krovu!
Iskočivši kroz otvor sa lampom, Gik je video krzneno stvorenje kako sa uživanjem žvaće glavni kabl.
Deset crvenih očiju zatreptalo je uglas.
— Prijatno, ušati! — Gik je upalio punu snagu reflektora.
Krep je piskavo zacvilio, pokrio oči šapama, ispustio žicu i otkotrljao se sa krova u žbunje.`,
      icon: '🐰🕷️',
      imageUrl: krepImg,
    },
    {
      id: 'wrecker',
      name: 'Rušitelj (Wrecker)',
      codename: '«Lomac ograda i majstor zaseda»',
      quote: '«Ne traži te u bunkeru. Sedi na tvojoj osmatračnici i čeka da izađeš!»',
      threatType: 'Inženjerska diverzija i zasede',
      dangerLevel: 'Visok',
      size: '2.4 metra, visoka prilika u kaputu',
      appearance: 'Visoka tajanstvena prilika u pocepanom kaputu, zimskoj kapi i sa žarkim crvenim očima. Pravi zasede kod drvenih kula i lomi ograde.',
      habitat: 'Ograda baze, noseće grede, snajperske kule bunkera. Aktivan i danju i noću.',
      behavior: 'Metodično lomi stubove ograde. Lako se penje na platforme kula i vreba u zasedi.',
      soundSignature: 'Teški udarci o metal i prigušeni zvuci koji imitiraju pozive u pomoć.',
      howToSpot: 'Iskrivljeni gelenderi, polomljene daske ograde ili silueta u kapi na vrhu osmatračnice.',
      weakness: [
        'Precizan hitac iz obnovljene puške ili pištolja u kristalni čvor na leđima',
        'Verni pas Barsik — nepogrešivo nanjuši zasedu i laje na kulu',
        'Elektrifikovani gelenderi na kuli (Radni sto nivoa 3) — struja ga odbacuje dole',
        'Senzori zatezanja na ogradama'
      ],
      loot: 'Titanijumske ploče i radioaktivna mahovina za ojačavanje oklopa.',
      geekNote: 'Ako pas uporno reži na prazne merdevine kule — ne penji se! Uključi prekidač za struju.',
      storySnippet: `Noć je delovala mirno. Gik je hteo da se popne na Istočnu kulu.
Ali pas Barsik je iznenada stao, pokazao zube i zarežao pravo ka vrhu kule.
Gik je uzeo dvogled.
Pod mesečinom je na gelenderu kule stajala prilika u kaputu sa svetlećim crvenim očima i gvozdenom cevi.
— Hteo si da mi skočiš na glavu?
Gik je povukao polugu za struju. Plava varnica je pukla, Rušitelj je uzviknuo i pao sa visine u grmlje.`,
      icon: '🧟‍♂️',
      imageUrl: wreckerImg,
    },
    {
      id: 'hunter',
      name: 'Lovac (Hunter)',
      codename: '«Noćni gušter i Pravilo 21 metra»',
      quote: '«Sedmometarski oklopljeni reptil sa lavljim grebenom i toplotnim vidom. Glavno oružje: sapun i trk od 21 metra!»',
      threatType: 'Direktna šteta, brzina i njuh',
      dangerLevel: 'Kritičan (Alfa Bos)',
      size: '7 metara (oklopljeni noćni gušter-krokodil)',
      appearance: 'Najveći noćni predator — 7-metarski drevni gušter sa pločama od užarene lave duž kičme, oštrim kandžama i plamenim očima.',
      habitat: 'Duboke tropske džungle ostrva, okolina bunkera u najtamnijim satima noći.',
      behavior: 'Neumoljivi noćni lovac. Nalazi plen pomoću dva čula: toplotnog vida (brzi pokreti) i oštrog njuha (oseća znoj i prljavu odeću na 50 metara).',
      soundSignature: 'Potmulo podrhtavanje tla, krici uznemirenih ptica i duboko režanje.',
      howToSpot: 'Podrhtavanje zemlje pod nogama i narandžasti sjaj leđnih ploča u mraku.',
      weakness: [
        'Pravilo 21 metra: sprint od tačno 21+ metar i skok u gusto žbunje prekida toplotni fokus',
        'Higijena (Tuš i Čista odeća): čista odeća smanjuje domet njuha sa 50 m na samo 5 m!',
        'Lavež psa čuvara: glasan lavež plaši i tera predatora nazad u šumu',
        'Pobeda dedukcijom: skrivanje u zaklonu bez frontalnog napada'
      ],
      loot: 'Oklopljena krljušt i termički senzor za izradu noćnog nišana.',
      geekNote: 'Pravilo preživljavanja: uvek se istuširaj u bunkeru pre noćnog izlaska! Čist Gik je nevidljiv za noćnog guštera.',
      storySnippet: `Zemlja pod nogama je zadrhtala, a palme su se zatresle.
Iz tame je izronio sedmometarski gušter sa pločama od lave — Lovac!
Gik se setio zlatnog pravila:
1) Zalet od tačno 21 metar.
2) Skok u gustu paprat.
3) Potpuna tišina i mirovanje!
Gik se spustio na travu i zadržao dah. Pošto se ujutru istuširao, Lovac ga nije osetio. Gušter je zarežao u tamu i otišao dalje.`,
      icon: '🦎',
      imageUrl: hunterImg,
    }
  ],
  chapters: withSeasonOneChapters('sr', [
    {
      id: 1,
      title: 'Avion Iznad Ostrva',
      subtitle: 'Pad, oštećeni padobran i zlatna plaža',
      tag: 'Poglavlje 1 • Početak',
      storyText: [
        'Ekspedicioni avion se zatresao kao da smo uleteli u mikser džinovskog robota. Kazaljke na komandnoj tabli su se vrtele kao lude.',
        '— Anomalno elektromagnetno polje! — povikao je pilot. — Skači, Gik!',
        'Povukao sam ručicu padobrana. Bela svila se otvorila... ali je zapaljeni deo krila proleteo tik pored mene i pocepao tkaninu!',
        'Brzina pada se utrostručila. Palme su se brzo približavale. Tras! Meki pesak plaže mi je spasao život, ali mi se pred očima smračilo.'
      ],
      geekDoodle: {
        title: 'Trajektorija pada padobrana',
        type: 'sketch',
        details: [
          'Kupola padobrana: oštećenje 35% desnog sektora',
          'Mesto sletanja: Južna obala, sektor «Zlatni pesak»',
          'Oprema pri sebi: piksel naočare (cele!), notes, višenamenski alat'
        ],
        handwrittenNote: 'Gikov savet: Ako padaš na ostrvo puno čudovišta — ciljaj u banane, mekše su od kokosa!'
      }
    },
    {
      id: 2,
      title: 'Kakvo je Ovo Mesto?!',
      subtitle: 'Džungla, olupine i prve čudne pojave',
      tag: 'Poglavlje 2 • Istraživanje',
      storyText: [
        'Kad sam otvorio oči, talasi su nežno zapljuskivali moje patike. Svuda okolo ležali su delovi trupa, konzerve i pocepani nacrti.',
        'Prava tajna se ukazala kada sam pogledao ka unutrašnjosti ostrva. U centru se uzdizala polusrušena staklena kupola, a na nebu je treperila polarna svetlost — usred tropa!',
        'Rđavi putokaz je pokazivao: «Naučni sektor #4». Ovde su očigledno vršeni veliki eksperimenti pre nego što je sve pošlo naopako.'
      ],
      geekDoodle: {
        title: 'Mapa anomalija ostrva',
        type: 'blueprint',
        details: [
          'Elektromagnetna kupola: blokira standardne radio signale',
          'Dnevni ciklus: sunčano, bezbedno (čudovišta se kriju od svetla)',
          'Noćni ciklus: povišena radijacija, aktivnost mutanata'
        ],
        handwrittenNote: 'Zaključak: Pre zalaska sunca moram naći čvrsto sklonište, inače postajem noćna užina.'
      }
    },
    {
      id: 3,
      title: 'Bunker i Radni Sto',
      subtitle: 'Betonski zidovi, verni sto i prvi nacrt',
      tag: 'Poglavlje 3 • Baza',
      storyText: [
        'Žute strelice na stenama dovele su me do teških betonskih vrata napola zatrpanih zemljom sa narandžastim svetlom.',
        'Unutra je mirisalo na stari beton i mašinsko ulje. U sredini sale stajao je on — masivni hrastov Radni sto sa fiokama.',
        'U prvom sanduku pored zida ležali su stari nacrti: kramp, sekira i baklja. Odmah sam precrtao šeme u svoju svesku. Sada mogu da pravim alate!'
      ],
      geekDoodle: {
        title: 'Nacrt: Radni sto Nivo 1',
        type: 'recipe',
        details: [
          'Potrebno za izradu: 10 dasaka + 4 gvozdena šrafa + brusni kamen',
          'Otključava: Rudarski kramp, Sekira, Baklja, Osnovni tuš',
          'Tajna pogodnost: prostor ispod stola za skrivanje u nuždi!'
        ],
        handwrittenNote: 'Zakon inženjera: Radni sto je srce baze. Čuvaj ga od Rušitelja!'
      }
    },
    {
      id: 4,
      title: 'Dan i Noć na Ostrvu',
      subtitle: 'Danju — inženjerske ekspedicije. Noću — pametna odbrana',
      tag: 'Poglavlje 4 • Pravila',
      storyText: [
        'Ostrvo je imalo strog ritam. Danju je sunce obasjavalo džunglu. Čudovišta su se povlačila u duboke pećine i ruševine.',
        'Tokom dana sam sakupljao zupčanike, sadio šargarepu u bašti i sekao drva.',
        'Čim bi sunce dodirnulo horizont, vazduh bi ispunio ultrazvuk. Vreme je za trk u bunker, navlačenje reza, paljenje reflektora i oprez!'
      ],
      geekDoodle: {
        title: 'Dnevni raspored preživljavanja',
        type: 'warning',
        details: [
          '08:00 - 18:00: Skupljanje resursa, rad u bašti, popravka tehnike',
          '18:00 - 19:30: Provera brava, punjenje baterija za kule, tuširanje',
          '20:00 - 06:00: Noćna odbrana bunkera, praćenje kamera'
        ],
        handwrittenNote: 'Zapamti: Ako zakasniš u 20:01 — ne trči stazom, popni se na drvo i ne mrdaj!'
      }
    },
    {
      id: 5,
      title: 'Mimik: Provera Senke',
      subtitle: 'Zašto se ne sme verovati drugoj kutiji',
      tag: 'Poglavlje 5 • Čudovište 1',
      storyText: [
        'Ujutru sam izašao da zalijem jagode. Pored ograde su stajale dve drvene kutije sa alatom. Počešao sam se po glavi: juče sam ostavio samo jednu.',
        'Prišavši bliže, primetio sam da drvo na drugoj kutiji blago podrhtava.',
        'Nisam prilazio. Izvadio sam lampu i osvetlio sa strane. Prva kutija je bacila kvadratnu senku, a druga — obris stvorenja sa osam pipaka!',
        '— Uhvaćen si, hobotnice! — povikao sam i bacio kamenčić. Kutija je poskočila, izbacila ljubičasto mastilo i pobegla preko ograde.'
      ],
      geekDoodle: {
        title: 'Optički test senke Mimika',
        type: 'sketch',
        details: [
          'Ugao svetlosti: 45 stepeni',
          'Pravi predmet: pravilna geometrijska senka',
          'Mimik: pipci, zaobljena glava, talasanje'
        ],
        handwrittenNote: 'Mastilo Mimika ne bacaj! Sa šalitrom daje odlične dimne bombe.'
      },
      monsterPreview: 'mimic'
    },
    {
      id: 6,
      title: 'Krep: Zaštita Antene',
      subtitle: 'Deset crvenih očiju i slatka šargarepa',
      tag: 'Poglavlje 6 • Čudovište 2',
      storyText: [
        'Treće noći u bunkeru se ugasio signal spoljnih kamera. Sa krova se začulo: «Krc-krc-cak!».',
        'Uzeo sam jaku lampu i izašao kroz krovni otvor. Na stubu antene sedeo je spoj zeca i pauka i žvakao naponski kabl.',
        'Deset crvenih očiju me je pogledalo. Upalio sam lampu od 2000 lumena pravo u njegove osetljive oči!',
        'Krep je piskavo zacvilio, pokrio oči šapama i pao sa krova u žbunje.'
      ],
      geekDoodle: {
        title: 'Plan za odvraćanje Krepa',
        type: 'recipe',
        details: [
          'Zamka #1: Limenke na kanapu oko bašte',
          'Zamka #2: Stroboskop lampa na anteni',
          'Nivo 3: EMP strašilo (ultrazvuk tera u krugu od 50m)'
        ],
        handwrittenNote: 'Krep obožava šargarepu. Ako mu ostaviš činiju u uglu baze, neće dirati antenu!'
      },
      monsterPreview: 'krep'
    },
    {
      id: 7,
      title: 'Rušitelj: Zaseda na Kuli',
      subtitle: 'Mahovina, stara kapa i verni Barsik',
      tag: 'Poglavlje 7 • Čudovište 3',
      storyText: [
        'Rušitelj je najtvrdoglaviji stvor na ostrvu. Smatra svojom dužnošću da polomi svaki stub ograde.',
        'Jedne noći sam zamalo upao u zasedu. Hteo sam da se popnem na osmatračnicu, ali je moj pas Barsik stao na merdevine i počeo da reži.',
        'Uperio sam svetlost gore — iza vreća sa peskom čučao je džin u kapi sa gvozdenom cevi, spreman da skoči!',
        'Povukao sam prekidač za struju. Plavi blesak je pogodio Rušitelja i bacio ga dole u grmlje.'
      ],
      geekDoodle: {
        title: 'Unapređenje kule: Strujni gelenderi',
        type: 'blueprint',
        details: [
          'Delovi: Bakarna žica + baterija sa stola + prekidač',
          'Efekat: Odbacuje Rušitelja sa visine od 4 metra',
          'Indikator: Zeleno = čisto, Crveno = uljez na platformi!'
        ],
        handwrittenNote: 'Veruj psu. Ako reži na prazne merdevine — neko u kapi čuči gore.'
      },
      monsterPreview: 'wrecker'
    },
    {
      id: 8,
      title: 'Lovac i Pravilo 21 Metra',
      subtitle: 'Sedmometarski noćni gušter, sapun i tišina',
      tag: 'Poglavlje 8 • Čudovište 4',
      storyText: [
        'Lovac je glavni predator ostrva — noćni gušter sa lavljim pločama duž leđa i toplotnim vidom.',
        'Kada je zemlja zadrhtala pod njegovim koracima, naježio sam se. Ali sam se setio beleški: reaguje na brze pokrete i oseća prljavu odeću na 50 metara!',
        'Pošto sam se redovno tuširao u bunkeru, nije me nanjušio. Primenio sam pravilo: potrčao 21 metar u paprat i ukočio se.',
        'Njegov toplotni vid me je izgubio u rastinju. Lovac je zarežao i otišao dalje.'
      ],
      geekDoodle: {
        title: 'Uputstvo: Kako ne postati Lovčev plen',
        type: 'warning',
        details: [
          'Korak 1: Tuširanje pre izlaska (smanjuje domet njuha sa 50m na 5m)',
          'Korak 2: Pri kontaktu — trk od 21m i skok u gusto žbunje',
          'Korak 3: Potpuno mirovanje 15 sekundi'
        ],
        handwrittenNote: 'Ko bi rekao da su sapun i čista majica najbolje oružje protiv 7-metarskog guštera!'
      },
      monsterPreview: 'hunter'
    },
    {
      id: 9,
      title: 'Ljubimci: Pas i Mačka',
      subtitle: 'Četvoronožni saborci u bunkeru',
      tag: 'Poglavlje 9 • Saborci',
      storyText: [
        'Samotni život u bunkeru brzo dosadi. Petog dana sam na plaži našao štene, dao mu sočnu kost i dobio vernog psa Barsika.',
        'Barsik je postao najbolji alarm: laje na lažne kutije Mimika, reži na Rušitelja i tera Lovca dubokim lavežom.',
        'Nedelju dana kasnije u garaži sam svežom ribom privukao mačku Murku. Naučila je da pronalazi retke baterije i čipove u travi.'
      ],
      geekDoodle: {
        title: 'Vodič za pripitomljavanje',
        type: 'sketch',
        details: [
          'Pas: privlači se kosti. Bonus: čuva bazu i tera Lovca',
          'Mačka: privlači se ribom. Bonus: pronalazi retke delove',
          'Oprema: meka ležaljka, ogrlica sa imenom, grebalica'
        ],
        handwrittenNote: 'Sa psom pored sebe, bunker deluje kao neosvojiva tvrđava!'
      }
    },
    {
      id: 10,
      title: 'Profesor Henri i Gospođica Gabster',
      subtitle: 'Pronađena VHS kaseta i tajna katastrofe',
      tag: 'Poglavlje 10 • Tajne',
      storyText: [
        'Sklopivši stari video-rekorder i televizor od radio delova, ubacio sam crnu VHS kasetu iz sanduka.',
        'Ekran je zatreperio. Pojavio se naučnik sa naočarima — Profesor Henri — i stroga naučnica — Gospođica Gabster.',
        '«Ako gledate ovo, naš eksperiment bio-sinteze je izmakao kontroli... Eksplozija je izmenila životinjski svet. Sakrili smo nacrte u sanduke i zapečatili bunker. Jedini spas je raketa Apex Flare!»'
      ],
      geekDoodle: {
        title: 'Transkript VHS kasete #1',
        type: 'cassette',
        details: [
          'Datum snimka: 14. avgust',
          'Epicentar: Centralna laboratorija pod staklenom kupolom',
          'Ključ spasa: Nacrt rakete velikog dometa na glavnoj konzoli'
        ],
        handwrittenNote: 'Obične rakete sagorevaju u kupoli! Treba nam super-raketa.'
      }
    },
    {
      id: 11,
      title: 'Napušteni Grad',
      subtitle: 'Picerija «Grad Zabave», ljuljaške i tragovi prošlosti',
      tag: 'Poglavlje 11 • Istraživanje',
      storyText: [
        'U istočnom delu ostrva džungla se otvorila ka ruševinama veselog letovališta. Zidovi su imali vesele grafite sa smajlijima!',
        'Naišao sam na piceriju «Grad Zabave», stare vrteške i arkadne aparate.',
        'U zadnjoj sobi picerije pronašao sam očuvan radio-predajnik sa trakama stare disko muzike iz 80-ih.'
      ],
      geekDoodle: {
        title: 'Mapa Napuštenog Grada',
        type: 'blueprint',
        details: [
          'Picerija «Grad Zabave»: radio stanica i zalihe hrane',
          'Garaže: zaključana radionica profesora Henrija',
          'Igralište: tajno skrovište u toboganu'
        ],
        handwrittenNote: 'Ovaj grad je sagrađen za radost. Vratićemo mir na ovo ostrvo!'
      }
    },
    {
      id: 12,
      title: 'Noć Kada su Čudovišta Zaplesala',
      subtitle: 'Legendarna ostrvska Dens Žurka',
      tag: 'Poglavlje 12 • Dens Žurka',
      storyText: [
        'Bila je to najluđa noć. U ponoć je na ekranu zasvetlelo zeleno: «VEČERAS JE DENS ŽURKA! NAPOLJU JE BEZBEDNO».',
        'Radio picerije je dobio struju i pustio zarazni fank i disko iz 80-ih!',
        'Pogledao sam preko ograde i ostao bez reči. Na poljani je Rušitelj vrteo brejkdens, Mimik je ritmično pomerao svih 8 pipaka, Krep je stepovao sa 10 šapica, a 7-metarski Lovac je njihao repom!',
        'Muzika je probudila lepa sećanja u njima. Nisu napadali, već su mi u ruke bacali titanijumske šrafove, zupčanike i kristale!'
      ],
      geekDoodle: {
        title: 'Analiza efekta muzike na mutante',
        type: 'sketch',
        details: [
          'Okidač: Radio picerije 104.2 FM',
          'Efekat: 100% smirivanje agresije',
          'Pokloni: titanijumski delovi, retke baterije, seme, krljušt'
        ],
        handwrittenNote: 'Najbolja noć u mom životu. Stepovao sam zajedno sa čudovištima!'
      }
    },
    {
      id: 13,
      title: 'Laboratorija i Bagi Vozilo',
      subtitle: 'Zaštitno odelo, kartica i terensko vozilo',
      tag: 'Poglavlje 13 • Laboratorija',
      storyText: [
        'U tajnoj garaži našao sam pravo blago — Henrijev terenski Bagi! Ojačan rešetkama i farovima, pojurio sam kroz močvare pravo do kupole.',
        'Obukavši zaštitno odelo sa gas maskom, prislonio sam plavu karticu. Vrata su se uz šištanje otvorila.',
        'Unutra, u sefu komandnog stola, ležao je nacrt mog života — Nacrt Rakete Apex Flare!'
      ],
      geekDoodle: {
        title: 'Henrijev Terenski Bagi',
        type: 'blueprint',
        details: [
          'Motor: hibridni turbo-električni pogon',
          'Oklop: prednja rešetka protiv granja i mutanata',
          'Gepek: nosi 12 sanduka materijala'
        ],
        handwrittenNote: 'Vožnja bagijem kroz džunglu je sto puta brža i bezbednija nego peške!'
      }
    },
    {
      id: 14,
      title: 'Apex Flare: Raketa Spasa',
      subtitle: 'Titanijum, hemijska smesa i radio svetionik',
      tag: 'Poglavlje 14 • Završna Izrada',
      storyText: [
        'Moj radni sto 4. nivoa postao je pravi keramički naučni pogon sa visokotemperaturnom peći i rashladnim cevima.',
        'Za sklapanje rakete Apex Flare bila su potrebna tri dela:',
        '1. Titanijumsko kućište otporno na toplotu.',
        '2. Stabilizovana hemijska smesa (barut + šalitra + izotopska boja).',
        '3. Kodirani SOS radio-čip na spasilačkoj frekvenciji.',
        'Pažljivo sam spojio delove. Zasvetlela je zelena dioda. Spremni smo za finale!'
      ],
      geekDoodle: {
        title: 'Nacrt signalne rakete Apex Flare',
        type: 'recipe',
        details: [
          'Visina leta: 3000 metara (probija anomalnu kupolu)',
          'Jačina bleska: 500.000 kandela (vidljivo na 80 km)',
          'Signal: Digitalni GPS poziv u pomoć'
        ],
        handwrittenNote: 'Vrhunac inženjerskog rada. Jedno lansiranje — i idemo kući!'
      }
    },
    {
      id: 15,
      title: 'Poslednja Noć: The Final Stand',
      subtitle: 'Lansiranje sa krova i odbrana ograde',
      tag: 'Poglavlje 15 • Vrhunac',
      storyText: [
        'Popeo sam se na krov bunkera, postavio Apex Flare u cev i pritisnuo dugme.',
        'Zaslepljujući stub vatre uz tutnjavu je poleteo u noćno nebo! Na 3 kilometra visine kupola je pukla uz zlatne varnice.',
        'Radio na pojasu se oglasio: «Signal primljen! Spasilački helikopter stiže u zoru (za 10 minuta). Izdržite, anomalije idu ka vama!»',
        'Bila je to velika noć: turele su pucale, reflektori zaslepljivali Krepove, struja odbacivala Rušitelje, a Barsik i ja smo čuvali kapiju rame uz rame!'
      ],
      geekDoodle: {
        title: 'Plan odbrane: Poslednja linija',
        type: 'warning',
        details: [
          'Severni sektor: automatske UV turele protiv Mimika',
          'Južni sektor: strujna ograda protiv Rušitelja',
          'Izdržljivost kapije: 100% do prvih zraka sunca'
        ],
        handwrittenNote: 'Izdržali smo! Ključ je u smirenosti i pravovremenom punjenju turela.'
      }
    },
    {
      id: 16,
      title: 'Zora Iznad Ostrva',
      subtitle: 'Helikopter, spaseni ljubimci i pogled odozgo',
      tag: 'Poglavlje 16 • Finale',
      storyText: [
        'Prvi zrak sunca obasjao je jutarnju maglu. Ostrvo se umirilo. Čudovišta su se povukla u pećine.',
        'Sa mora se začuo zvuk elisa. Veliki žuti spasilački helikopter sa medicinskim krstom spustio se na krov bunkera.',
        'Pilot mi je pružio ruku: «Mali, da li si ti sam sagradio ovu tvrđavu?!»',
        'Uzeo sam Barsika u naručje, stavio Murku u ranac i uskočio u kabinu. Odozgo je ostrvo sa bunkerom i baštom delovalo kao malo zeleno zrno u okeanu.',
        'Popravio sam piksel naočare i nasmejao se: «Pametan inženjering pobeđuje svako čudovište!»'
      ],
      geekDoodle: {
        title: 'Rezultati Gikovog preživljavanja',
        type: 'sketch',
        details: [
          'Nivo radnog stola: 4 (Maksimalan)',
          'Spaseni ljubimci: 2 (Pas + Mačka)',
          'Pobeđena čudovišta: 100% bez sirove sile'
        ],
        handwrittenNote: 'Kraj prve priče... ali pred nama su nova ostrva i avanture!'
      }
    }
  ]),
  workbenchLevels: [
    {
      level: 1,
      name: 'Drveni sto za preživljavanje',
      look: 'Jednostavan masivni hrastov sto sa ogrebotinama, ručnim rendetom i fiokom za eksere.',
      unlockedRooms: ['Glavni ulazni hol bunkera', 'Spavaća soba sa krevetom'],
      keyCrafts: ['Kamena sekira', 'Rudarski kramp', 'Baklja', 'Osnovni tuš', 'Drveni sanduk'],
      defenseUpgrades: ['Drvene kapke za prozore', 'Dvostruka drvena reza za vrata'],
      note: 'Početak svega. Najvažnije je odmah napraviti tuš da opereš miris pre odlaska u džunglu!'
    },
    {
      level: 2,
      name: 'Ojačani radni sto sa gvožđem',
      look: 'Sto sa čeličnim uglovima, stegom, lemilicom i ručnim generatorom struje.',
      unlockedRooms: ['Podzemni 1. sprat', 'Spoljna bašta sa 5 leja'],
      keyCrafts: ['Lovački samostrel', 'UV lampa', 'Dimne bombe od mastila Mimika', 'Leje za povrće'],
      defenseUpgrades: ['Čelične bodljikave grede ograde', 'Zvučne zamke od limenki'],
      note: 'Otključava baštu! Gaji šargarepu da odvratiš Krepa i slatke jagode za mačku!'
    },
    {
      level: 3,
      name: 'Inženjerska stanica sa napajanjem',
      look: 'Čelični sto sa monitorom, instalacijama, baterijom i setom preciznih alata.',
      unlockedRooms: ['Oružarska radionica', 'Snajperske kule na 4 ugla baze', 'Strelište u podrumu'],
      keyCrafts: ['Obnova vatrenog oružja (Glock, AWP, P90)', 'EMP strašilo protiv Krepa', 'IR kamere'],
      defenseUpgrades: ['Elektrifikovani gelenderi kula protiv Rušitelja', 'Reflektori sa praćenjem', 'Vreće sa peskom'],
      note: 'Sada možeš obnavljati pronađeno oružje i graditi elektrifikovane snajperske kule!'
    },
    {
      level: 4,
      name: 'Keramički naučno-proizvodni kompleks',
      look: 'Futuristički crni keramički agregat: ugrađena visoka peć, 2 fioke mikroelektronike, testera i parna rashladna cev.',
      unlockedRooms: ['Zapečaćeni otvor za krov', 'Glavni komandni centar veze'],
      keyCrafts: ['Signalna raketa Apex Flare', 'Titanijumsko zaštitno odelo sa gas maskom', 'Perimetarski UV laseri'],
      defenseUpgrades: ['Automatske turele «Anti-Anomalija»', 'Titanijumska blindirana vrata'],
      note: 'Vrhunac inženjerske misli! Omogućava sklapanje rakete spasa i proboj kupole ostrva.'
    }
  ],
  devMilestones: [
    {
      stage: 'Faza 1: Rođenje ideje',
      date: 'Jul 2026',
      title: '«Hoću da napravim igru preživljavanja bez glupih prepada!»',
      author: 'Влад',
      description: 'Vlad (10 god) je postavio osnovnu viziju: survival igra gde se pobeđuje fizikom, pameću i pažnjom, a ne oružjem. Svaka pretnja mora biti zanimljiva zagonetka.',
      keyDecisions: [
        'Glavni junak — inženjer Gik u stilizovanim piksel naočarima',
        'Avanturistička atmosfera sa humorom umesto jeftinog horora',
        'Inženjerska sveska sa ručno crtanim skicama'
      ],
      quote: '«Ako je junak pametan i zabavan — zašto praviti mračnu igru? Neka čudovišta bolje plešu na žurci!» — Vlad'
    },
    {
      stage: 'Faza 2: Audio snimci & Bestijarijum',
      date: 'Avgust 2026',
      title: 'Brainstorming: 4 jedinstvena čudovišta',
      author: 'Влад и Егор',
      description: 'Kroz glasovne snimke tata i sin su detaljno osmislili biologiju i mane svakog bića. Tada je rođeno glavno pravilo: Mimik kopira sve, ali mu je senka uvek hobotnica!',
      keyDecisions: [
        'Oponašatelj se odaje pravom senkom pod svetlom lampe',
        'Krep ne dira igrača već grize antenu kamera i krade šargarepu',
        'Lovac se pobeđuje higijenom (tuširanjem) i Pravilom 21 metra',
        'Rušitelj pravi zasede na samim osmatračnicama'
      ],
      quote: '«Nikada ne veruj drugoj kutiji u bašti!» — Glavna izreka razvoja'
    },
    {
      stage: 'Faza 3: Dizajn igre & Narativ',
      date: 'Avgust 2026',
      title: 'GDD, 4 nivoa stola i Dens Žurka',
      author: 'Егор',
      description: 'Vladove ideje pretočene su u Game Design Document: napredak bunkera, Henrijev bagi, VHS kasete i završna raketa Apex Flare.',
      keyDecisions: [
        'Jasan 4-stepeni napredak radnog stola',
        'Događaj «Dens Žurka» sa retro disko muzikom picerije',
        'Završno spasavanje helikopterom u zoru'
      ],
      quote: '«Dovitljivost i nauka ispred sirove sile — osnovni zakon našeg ostrva»'
    },
    {
      stage: 'Faza 4: Kodiranje & Interaktivna Knjiga',
      date: 'Trenutna faza',
      title: 'Interaktivni sajt za drugare i početak u Godot 4',
      author: 'Влад и Егор',
      description: 'Dok tata priprema kod u Godot 4, napravljen je ovaj sajt — interaktivni Gikov dnevnik kako bi Vlad podelio svet sa drugarima iz škole!',
      keyDecisions: [
        'Interaktivna knjiga sa Gikovim beleškama',
        'Bestijarijum sa proverom senki i zvukova',
        'Kreator čudovišta za drugare'
      ],
      quote: '«Pogledajte kakva smo kul čudovišta smislili!»'
    }
  ],
  quizQuestions: [
    {
      id: 1,
      scenario: 'Izašao si u baštu bunkera i primetio dve kutije sa alatom. Juče je bila samo jedna. Šta radiš?',
      options: [
        {
          text: 'Radosno potrčiš i otvoriš novu kutiju da uzmeš besplatan plen!',
          isCorrect: false,
          explanation: 'Pogrešno! Oponašatelj to i čeka. Izbliza (<1.5m) odmah će te zgrabiti pipcima!'
        },
        {
          text: 'Osvetliš lampom sa strane i proveriš senku.',
          isCorrect: true,
          explanation: 'Tačno! Prava kutija daje pravougaonu senku, a Mimik siluetu hobotnice!'
        },
        {
          text: 'Pobegneš u bunker i više nikada ne izađeš.',
          isCorrect: false,
          explanation: 'Kukavički! Inženjer proverava pretpostavke svetlom i logikom.'
        }
      ]
    },
    {
      id: 2,
      scenario: 'U bunkeru je zašuštao televizor i nestala je slika sa kamera. Šta se desilo?',
      options: [
        {
          text: 'Krep se popeo na krov i pregriza kabl spoljne antene!',
          isCorrect: true,
          explanation: 'Upravo tako! Uzmi jaku lampu, popni se i zaslepi njegovih 10 očiju!'
        },
        {
          text: 'Pokvario se televizor, udari ga pesnicom.',
          isCorrect: false,
          explanation: 'Televizor je u redu, ali je kabl antene napola pojeden.'
        },
        {
          text: 'Počela je Dens Žurka.',
          isCorrect: false,
          explanation: 'Tokom Dens Žurke se na ekranu pali zeleni natpis, a ne šum.'
        }
      ]
    },
    {
      id: 3,
      scenario: 'Pas Barsik reži i ne da Giku da se popne na osmatračnicu. Šta treba uraditi?',
      options: [
        {
          text: 'Ignorisati psa i potrčati uz merdevine.',
          isCorrect: false,
          explanation: 'Opasno! Gore čuči dvometarski Rušitelj u kapi i čeka u zasedi!'
        },
        {
          text: 'Poverovati psu i uključiti prekidač za struju na gelenderima kule.',
          isCorrect: true,
          explanation: 'Genijalno! Struja će zbaciti Rušitelja sa kule i spasiti bazu!'
        },
        {
          text: 'Baciti svoj najbolji alat na kulu.',
          isCorrect: false,
          explanation: 'Izgubićeš alat, a Rušitelj će ti se samo nasmejati.'
        }
      ]
    },
    {
      id: 4,
      scenario: 'Koje je glavno pravilo pravljenja predmeta na Radnom stolu?',
      options: [
        {
          text: 'Praviti rakete 4. nivoa prvog dana.',
          isCorrect: false,
          explanation: 'Nemoguće — prvo su ti potrebni nacrti iz Laboratorije i titanijum.'
        },
        {
          text: 'Unapređivati sto postepeno od 1. do 4. nivoa, praveći alate i jačajući odbranu.',
          isCorrect: true,
          explanation: 'Odlično! Radni sto je srce baze; svaki nivo otključava nove mogućnosti!'
        },
        {
          text: 'Polomiti radni sto pre spavanja.',
          isCorrect: false,
          explanation: 'Bez radnog stola je nemoguće preživeti na ostrvu!'
        }
      ]
    },
    {
      id: 5,
      scenario: 'Zašto obična signalna raketa ne može da pozove helikopter sa ostrva?',
      options: [
        {
          text: 'Ostrvo je prekriveno jonizovanom elektromagnetnom kupolom gde obične rakete sagorevaju.',
          isCorrect: true,
          explanation: 'Tačno! Potrebna je titanijumska raketa Apex Flare sa izotopom iz Laboratorije!'
        },
        {
          text: 'Spasioci spavaju noću.',
          isCorrect: false,
          explanation: 'Spasioci dežuraju 24/7, ali ne vide signal kroz anomaliju.'
        },
        {
          text: 'Raketa je previše jeftina.',
          isCorrect: false,
          explanation: 'Stvar je isključivo u fizici i radijacionoj kupoli!'
        }
      ]
    },
    {
      id: 6,
      scenario: 'Sreo si u noćnoj džungli 7-metarskog Lovca. Koje pravilo ti spasava život?',
      options: [
        {
          text: 'Pokušati da ga pobediš toljagom u borbi prsa u prsa.',
          isCorrect: false,
          explanation: 'Nikako! Protiv 7-metarskog oklopljenog guštera sirova snaga ne vredi.'
        },
        {
          text: '«Pravilo 21 metra» — trk u zaklon, mirovanje 15 sekundi + prethodno tuširanje u bunkeru.',
          isCorrect: true,
          explanation: 'Savršeno! Čista odeća maskira tvoj miris, a 21 metar prekida toplotno praćenje!'
        },
        {
          text: 'Glasno vikati i mahati rukama.',
          isCorrect: false,
          explanation: 'Brzi pokreti će samo privući pažnju predatora!'
        }
      ]
    }
  ],
  creatorPresets: [
    {
      id: 'p1',
      name: 'Šaptač (Whisperer)',
      nickname: '«Magnetofonski duh»',
      threatCategory: 'Zvučna dezorijentacija',
      appearance: 'Lebdeća poluprovidna silueta sa starim radio-prijemnikom umesto glave.',
      trick: 'Imitira glasove drugara i mami te da izađeš iz bunkera usred noći.',
      weakness: 'Stavi slušalice ili pusti glasnu rok muziku sa kasetofona — to mu ometa signal!',
      loot: 'Magnetni kalem i redak komunikacioni mikročip.',
      authorName: 'Vlad (10 god)'
    },
    {
      id: 'p2',
      name: 'Buba-Bušilica',
      nickname: '«Podzemni miner»',
      threatCategory: 'Rušenje temelja',
      appearance: 'Oklopljena buba veličine kofera sa dijamantskim svrdlom na nosu.',
      trick: 'Pokušava da probuši drveni pod bunkera odozdo ispod radnog stola.',
      weakness: 'Stavi posudu sa sapunicom ili vibracionu zamku — oklizne se i beži od vibracija.',
      loot: 'Dijamantski vrh za nadogradnju krampa na 3. nivo.',
      authorName: 'Vlad (10 god)'
    }
  ],
  shadowObjects: [
    { type: 'box', label: 'Drvena kutija za zalihe', emoji: '📦', shadow: 'Kvadratna geometrijska senka 🔲' },
    { type: 'barrel', label: 'Bure sa gorivom', emoji: '🛢️', shadow: 'Glatka cilindrična senka 🔘' },
    { type: 'pumpkin', label: 'Bundeva iz bašte', emoji: '🎃', shadow: 'Zaobljena organska silueta 🌕' },
    { type: 'stone', label: 'Bazaltni kamen', emoji: '🪨', shadow: 'Neravna mineralna ivica ⛰️' },
  ],
  danceMonsters: [
    { emoji: '🐙', name: 'Oponašatelj (Mimik)', move: 'Ples sa svih 8 pipaka sinhronizovano', gift: 'Otrovno kamuflažno mastilo' },
    { emoji: '🐰🕷️', name: 'Krep Spajač', move: 'Stepuje sa svojih 10 nožica', gift: 'Sveža šargarepa iz bašte' },
    { emoji: '🧟‍♂️', name: 'Rušitelj', move: 'Brejkdens u bejzbol kačketu', gift: 'Titanijumski zavrtanj' },
    { emoji: '🦎✨', name: 'Alfa Lovac', move: 'Njira 7m repom u disko ritmu', gift: 'Neonska termo-krljušt' },
    { emoji: '🐶', name: 'Pas Barsik', move: 'Pravi salto i maše repom', gift: 'Zlatna koskica' },
  ],
  apexIngredients: [
    { id: 'battery', icon: '🔋', name: 'Litijumsko jezgro', from: 'Krepov plen', desc: 'Napravljeno od baterija dobijenih u susretu sa Krepom' },
    { id: 'fuel', icon: '🧪', name: 'Bio-etanol gorivo', from: 'Farma', desc: 'Koncentrisani destilat napravljen od divljih bobica na farmi' },
    { id: 'lens', icon: '🔮', name: 'Kvarcna optička prizma', from: 'Plen Mimika', desc: 'Fokusira svetlosni snop rakete 10 km visoko u nebo' },
  ]
};
