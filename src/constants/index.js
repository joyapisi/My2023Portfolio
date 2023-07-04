import {
  frontend,
  backend,
  ux,
  // prototyping,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  git,
  figma,
  // docker,
  postgresql,
  rubyrails,
  // graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  // space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  space,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Self-Employed',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2023 - Now',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2023 - Now',
  },
  {
    title: 'Junior IoT Developer',
    company_name: 'Kabarak University',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Junior Web Developer',
    company_name: 'Girls Get Geeky',
    icon: dcc,
    iconBg: '#333333',
    date: 'September, 2018 – February, 2019',
  },

];

const projects = [
  {
    id: 'project-1',
    name: 'Space Travellers\' Hub',
    description: 'A web application for a company that provides commercial and scientific space travel services. Users can book rockets and join selected space missions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: space,
    repo: 'https://github.com/joyapisi/space-traveler-hub',
    demo: 'https://my-space-travellers-hub.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Quote Generator',
    description:
      'A web page that uses a custom-made API to generate different quotes',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/joyapisi/Quote-Generator',
    demo: 'https://joyapisi.github.io/Quote-Generator/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'A Single Page App(SPA) for all fans of mathematics that allows users to make simple calculations and read a random math-related quotes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/joyapisi/Math-Magicians',
    demo: 'https://joys-math-magicians.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Bookstore App',
    description: `A single-page application for all fans of books that allows users to add, remove & display books in/from a list`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/joyapisi/bookstore-app',
    demo: 'https://joys-bookstore-app.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Artwork App',
    description:
      'This is a mobile app that can be used to find details of various artwork displayed on the home page. All data is fetched from the Art Institute of Chicago API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/joyapisi/artwork-app',
    demo: 'https://joys-artwork-app.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
