import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I\'m',
  name: 'Bilal Nadeem Ahmed',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'I am a Front-End Web Developer living in Nottingham',
  paragraphTwo: 'I have experience with HTML, CSS, Javascript, Sass, Bootstrap, React & Git',
  paragraphThree: 'Please Contact me for any more information',
  resume: 'https://drive.google.com/file/d/1O1Pm1rDfnSeYgWJEvwP6_FvdQPhTQ12y/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'himm.png',
    title: 'Himmah',
    info: 'A recreation and improvement on a page for a client',
    info2: 'Built using Next.js , React and charts.js library',
    url: 'https://himmah.vercel.app/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/Himmah', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crypt.png',
    title: 'Cryptracker',
    info: 'An app that lists 7 trending Cryptocurrencies',
    info2: 'Built using the coingecko API, Next.js and charts.js library',
    url: 'https://cryptrackerr.vercel.app/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/chart-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactVatCalculator.PNG',
    title: ' Vat Calculator',
    info:
      'A simple web app made using React for calculating the balances due when preparing quarterly VAT returns',
    info2: '',
    url: 'https://bilal-nadeem-ahmed.github.io/vat-calc-react/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/vat-calc-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nottsPlumbinServices.PNG',
    title: 'Notts Plumbing Services',
    info: 'Simple web page for a local plumbing business',
    info2: 'Built using Materialize CSS',
    url: 'https://bilal-nadeem-ahmed.github.io/Notts-Plumbing-Services/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/Notts-Plumbing-Services', // if no repo, the button will not show up
  },
 
  
  
  
  {
    id: nanoid(),
    img: 'reactQuizApp.PNG',
    title: 'A Simple Quiz App',
    info: 'A quiz I built while learning React',
    info2: '',
    url: 'https://bilal-nadeem-ahmed.github.io/React-Quiz-App/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/React-Quiz-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'githubFinder.PNG',
    title: 'GitHub Finder',
    info: 'An app to quickly search up anyone on GitHub and view their repos',
    info2: 'Built using the GitHub API and Materialize CSS',
    url: 'https://bilal-nadeem-ahmed.github.io/Github-finder/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/Github-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myCalorie.PNG',
    title: 'My Calorie',
    info: 'An app used to track the food you eat',
    info2: ' A CRUD app made to use local storage ',
    url: 'https://bilal-nadeem-ahmed.github.io/MyCalorie/',
    repo: 'https://github.com/Bilal-Nadeem-Ahmed/MyCalorie', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bilal91_@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/3254137B',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bilal-nadeem-ahmed-9bb2bb1b8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Bilal-Nadeem-Ahmed',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
