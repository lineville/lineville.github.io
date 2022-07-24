module.exports = {
  email: 'liamgneville@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lineville',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/liam-neville/',
    },
    {
      name: 'Bookmark',
      url: 'https://medium.com/@lineville',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  translations: [
    {
      language: 'English',
      symbol: 'en',
      text: 'Hi, my name is',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    },
    {
      language: 'Mandarin',
      symbol: 'zh',
      text: '你好，我的名字是',
      flag: '🇨🇳',
    },
    {
      language: 'Arabic',
      symbol: 'ar',
      text: 'مرحبا "أسمي هو',
      flag: '🇸🇦',
    },
    {
      language: 'Dutch',
      symbol: 'nl',
      text: 'Hallo mijn naam is',
      flag: '🇳🇱',
    },
    {
      language: 'French',
      symbol: 'fr',
      text: `Salut je m'appelle`,
      flag: '🇫🇷',
    },
    {
      language: 'German',
      symbol: 'de',
      text: 'Hi, mein Name ist',
      flag: '🇩🇪',
    },
    {
      language: 'Italian',
      symbol: 'it',
      text: 'Ciao, mi chiamo',
      flag: '🇮🇹',
    },
    {
      language: 'Japanese',
      symbol: 'ja',
      text: 'こんにちは、私の名前は',
      flag: '🇯🇵',
    },
    {
      language: 'Russian',
      symbol: 'ru',
      text: 'Привет, меня зовут',
      flag: '🇷🇺',
    },
    {
      language: 'Spanish',
      symbol: 'es',
      text: 'Hola, mi nombre es',
      flag: '🇪🇸',
    },
  ],
};
