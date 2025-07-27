
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'om' | 'am';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    appName: 'EthioQuiz',
    appDescription: 'Grade 12 Chapter-by-Chapter Preparation',
    student: 'Student',
    
    // Home page
    heroTitle: 'Master Every Chapter, One Quiz at a Time',
    heroDescription: 'Study systematically with our chapter-based quiz system. Each subject is organized into focused chapters to help you master one topic at a time for your Ethiopian Grade 12 examinations.',
    subjectsAvailable: 'Subjects Available',
    chaptersToMaster: 'Chapters to Master',
    focusedLearning: 'Focused Chapter-based Learning',
    chooseSubject: 'Choose Your Subject',
    footerText: 'Study chapter by chapter for better understanding and retention! 📚',
    
    // Subject names
    mathematics: 'Mathematics',
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    english: 'English',
    history: 'Ethiopian History',
    
    // Subject descriptions
    mathematicsDesc: 'Functions, Calculus & Analytic Geometry',
    physicsDesc: 'Mechanics, Electricity & Modern Physics',
    chemistryDesc: 'Atomic Structure, Bonding & Reactions',
    biologyDesc: 'Cell Biology, Genetics & Physiology',
    englishDesc: 'Grammar, Literature & Vocabulary',
    historyDesc: 'Ancient, Medieval & Modern Ethiopia',
    
    // Navigation
    back: 'Back',
    continue: 'Continue',
    submitAnswer: 'Submit Answer',
    finishQuiz: 'Finish Quiz',
    returnHome: 'Return Home',
    retakeQuiz: 'Retake Quiz',
    backToChapters: 'Back to Chapters',
    
    // Quiz interface
    question: 'Question',
    progress: 'Progress',
    complete: 'complete',
    explanation: 'Explanation',
    loadingQuestions: 'Loading questions...',
    
    // Difficulty levels
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    selectDifficulty: 'Select Difficulty Level',
    difficultyDescription: 'Choose your preferred difficulty level for this chapter',
    
    // Score board
    quizComplete: 'Quiz Complete!',
    yourScore: 'Your Score',
    outOf: 'out of',
    excellent: 'Excellent! Keep up the great work!',
    good: 'Good job! You\'re making progress!',
    needsPractice: 'Keep practicing! You\'ll get better!',
    
    // Chapter names
    functions: 'Functions',
    mechanics: 'Mechanics',
    atomicStructure: 'Atomic Structure',
    cellBiology: 'Cell Biology',
    grammar: 'Grammar',
    ancientEthiopia: 'Ancient Ethiopia',
    
    // Language selector
    language: 'Language',
    changeLanguage: 'Change Language',
    showAnswer: 'Show Answer'
  },
  om: {
    // Header
    appName: 'EthioQuiz',
    appDescription: 'Kutaa 12 Booda Booda Qophii',
    student: 'Barataa',
    
    // Home page
    heroTitle: 'Tokkoon Tokkoon Booda Guutuu Baruu',
    heroDescription: 'Sirna baruumsa booda booda qabu fayyadamuun baruu. Tokkoon tokkoon gosa baruumsaa booda booda qindaa\'een qophaa\'ee jira kunis yaadni tokko tokko sirriitti akka bartan isin gargaara.',
    subjectsAvailable: 'Gosa Baruumsa Jiru',
    chaptersToMaster: 'Booda Baruu Qabdan',
    focusedLearning: 'Booda Booda Irratti Xiyyeeffannoo Kennuu',
    chooseSubject: 'Gosa Baruumsa Filadhu',
    footerText: 'Hubannoo fi yaadannoof booda booda baruu! 📚',
    
    // Subject names
    mathematics: 'Herregaa',
    physics: 'Fiizikisii',
    chemistry: 'Keemistrii',
    biology: 'Bayolojii',
    english: 'Afaan Ingilizii',
    history: 'Seenaa Itoophiyaa',
    
    // Subject descriptions
    mathematicsDesc: 'Dalagaa, Shallaggii fi Joomeetrii Xiinxalaa',
    physicsDesc: 'Mekaaniksii, Elektirikii fi Fiizikisii Ammayyaa',
    chemistryDesc: 'Caasaa Atoomii, Walitti Hidhuu fi Jijjiirama',
    biologyDesc: 'Bayolojii Seelii, Jenetikisii fi Fayyoolojii',
    englishDesc: 'Caasluga, Ogbarruu fi Jecha',
    historyDesc: 'Seenaa Itoophiyaa Durii, Gidduu fi Ammayyaa',
    
    // Navigation
    back: 'Deebi\'i',
    continue: 'Itti Fufi',
    submitAnswer: 'Deebii Ergi',
    finishQuiz: 'Qormaata Xumuri',
    returnHome: 'Gara Manaatti Deebi\'i',
    retakeQuiz: 'Ammas Qormaata Fudhadhu',
    backToChapters: 'Gara Booddatti Deebi\'i',
    
    // Quiz interface
    question: 'Gaafii',
    progress: 'Adeemsa',
    complete: 'xumurame',
    explanation: 'Ibsa',
    loadingQuestions: 'Gaaffii fe\'aa jira...',
    
    // Difficulty levels
    easy: 'Salphaa',
    medium: 'Giddugaleessa',
    hard: 'Rakkisaa',
    selectDifficulty: 'Sadarkaa Rakkina Filadhu',
    difficultyDescription: 'Booda kanaaf sadarkaa rakkina barbaaddan filadhaa',
    
    // Score board
    quizComplete: 'Qormaanni Xumurame!',
    yourScore: 'Qabxiin Kee',
    outOf: 'keessaa',
    excellent: 'Gaarii! Hojii gaarii itti fufi!',
    good: 'Gaarii! Adeemsa gaarii taasifta jirta!',
    needsPractice: 'Shaakaluu itti fufi! Ni fooyya\'a!',
    
    // Chapter names
    functions: 'Dalagaalee',
    mechanics: 'Mekaaniksii',
    atomicStructure: 'Caasaa Atoomii',
    cellBiology: 'Bayolojii Seelii',
    grammar: 'Caasluga',
    ancientEthiopia: 'Itoophiyaa Durii',
    
    // Language selector
    language: 'Afaan',
    changeLanguage: 'Afaan Jijjiiri',
    showAnswer: 'Deebii Agarsiisi'
  },
  am: {
    // Header
    appName: 'EthioQuiz',
    appDescription: 'ክፍል 12 ምዕራፍ በምዕራፍ ዝግጅት',
    student: 'ተማሪ',
    
    // Home page
    heroTitle: 'በእያንዳንዱ ምዕራፍ ማዳበር፣ በአንድ ጊዜ አንድ ክፍል',
    heroDescription: 'በምዕራፍ-ተኮር ጥያቄ ስርዓታችን በስርዓት ተማሩ። እያንዳንዱ ትምህርት በተከፋፈሉ ምዕራፎች ተደራጅቷል ይህም ለኢትዮጵያ ክፍል 12 ፈተናዎች አንድ ጊዜ አንድ ርዕስ እንዲሸለሙ ይረዳዎታል።',
    subjectsAvailable: 'ያሉ ትምህርቶች',
    chaptersToMaster: 'ለመማር ምዕራፎች',
    focusedLearning: 'በምዕራፍ ላይ የተመሰረተ ትምህርት',
    chooseSubject: 'ትምህርትዎን ይምረጡ',
    footerText: 'ለተሻለ ማስተዋል እና ማስታወስ ምዕራፍ በምዕራፍ ያጥኑ! 📚',
    
    // Subject names
    mathematics: 'ሂሳብ',
    physics: 'ፊዚክስ',
    chemistry: 'ኬሚስትሪ',
    biology: 'ባዮሎጂ',
    english: 'እንግሊዝኛ',
    history: 'የኢትዮጵያ ታሪክ',
    
    // Subject descriptions
    mathematicsDesc: 'ተግባሮች፣ ካልኩለስ እና ተንታኝ ጂኦሜትሪ',
    physicsDesc: 'ሜካኒክስ፣ ኤሌክትሪክ እና ዘመናዊ ፊዚክስ',
    chemistryDesc: 'የአቶም መዋቅር፣ ትስስር እና ምላሾች',
    biologyDesc: 'የሴል ባዮሎጂ፣ ጄኔቲክስ እና ፊዚዮሎጂ',
    englishDesc: 'ሰዋስው፣ ሥነ ጽሑፍ እና የቃላት ዝርዝር',
    historyDesc: 'ጥንታዊ፣ መካከለኛ እና ዘመናዊ ኢትዮጵያ',
    
    // Navigation
    back: 'ተመለስ',
    continue: 'ቀጥል',
    submitAnswer: 'መልስ አስገባ',
    finishQuiz: 'ጥያቄን አጠናቅቅ',
    returnHome: 'ወደ ቤት ተመለስ',
    retakeQuiz: 'ጥያቄን እንደገና ውሰድ',
    backToChapters: 'ወደ ምዕራፎች ተመለስ',
    
    // Quiz interface
    question: 'ጥያቄ',
    progress: 'እድገት',
    complete: 'ተጠናቅቋል',
    explanation: 'ማብራሪያ',
    loadingQuestions: 'ጥያቄዎችን እየጫነ...',
    
    // Difficulty levels
    easy: 'ቀላል',
    medium: 'መካከለኛ',
    hard: 'ከባድ',
    selectDifficulty: 'የችግር ደረጃ ይምረጡ',
    difficultyDescription: 'ለዚህ ምዕራፍ የሚፈልጉትን የችግር ደረጃ ይምረጡ',
    
    // Score board
    quizComplete: 'ጥያቄ ተጠናቅቋል!',
    yourScore: 'ነጥብዎ',
    outOf: 'ከ',
    excellent: 'በጣም ጥሩ! ጥሩ ስራዎን ይቀጥሉ!',
    good: 'ጥሩ ስራ! እድገት እያደረጉ ነው!',
    needsPractice: 'መለማመድ ይቀጥሉ! ይሻሻላሉ!',
    
    // Chapter names
    functions: 'ተግባሮች',
    mechanics: 'ሜካኒክስ',
    atomicStructure: 'የአቶም መዋቅር',
    cellBiology: 'የሴል ባዮሎጂ',
    grammar: 'ሰዋስው',
    ancientEthiopia: 'ጥንታዊ ኢትዮጵያ',
    
    // Language selector
    language: 'ቋንቋ',
    changeLanguage: 'ቋንቋ ይቀይሩ',
    showAnswer: 'መልስ አሳይ'
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'om' || savedLanguage === 'am')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
