import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  space,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
    link: "https://www.figma.com/proto/KapY7T5JpxAU19LWks563G/Work-Voyager-App?node-id=7-985&p=f&t=Hl3m5Tqtpe4opT6p-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A985",
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
    link: "https://www.figma.com/proto/y7G7g96E2GSnL4WuwC47QD/Option-B--Take-Home-Assignment-?node-id=1-3&p=f&t=IeUDD2hSp3TYH866-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
    {
    title: "UX Researcher & Frontend Developer",
    company_name: "Buy My Space",
    icon: microverse,
    iconBg: "#333333",
    date: "September 2025 - Present",
  },
  {
    title: "UI/UX Designer & Trainer",
    company_name: "Africa Digital Media Institute(ADMI)",
    icon: dcc,
    iconBg: "#333333",
    date: "December 2023 – Present",
  },
  {
    title: "Full-Stack Developer(Grad Assistant)",
    company_name: "Safaricom",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Nov 2023 - May 2023",
  },
  {
    title: "Software Developer",
    company_name: "Palid Investments Ltd.",
    icon: microverse,
    iconBg: "#333333",
    date: "August 2020 - February 2023",
  }
];

const projects = [
    {
    id: "project-3",
    name: "Buy My Space - Interior Design App",
    description:
      "A UX research and software Development on Buy My Space catalog to improve the User experience in their catalog interface. The project involved conducting user research, creating wireframes and prototypes, and implementing the frontend of the catalog using React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/joyapisi/business-catalog",
    demo: "https://www.figma.com/proto/3PHodAk6huCuExYtftcgtc/BMS-UI-UX-CASE-STUDY?node-id=1-261&p=f&t=2Yo9EqvWvB9bwUIA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "project-5",
    name: "Safaricom Business Mini App",
    description:
      "A mini-app known as the Merchant App. It allows eficient onboarding of potential clients (business owners) to the Safaricom Business Platform by sales men. Available on App store.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ANT design",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/joyapisi/Policy/",
    demo: "https://www.safaricom.co.ke/main-mpesa/for-your-business",
  },
    {
    id: "project-1",
    name: "Sporty Bet UI Design",
    description:
      "A UI feature re-design for a betting company called Sporty Bet. The design is done using Figma, contains animated carousels, better information architecture, and is a responsive design.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Figma Components",
        color: "green-text-gradient",
      },
      {
        name: "Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    prototype: "https://www.figma.com/proto/tvOKKfWtz5aqJHOOFLSlWW/Take--Home-Test---Sporty-Bet-UI-Clone?node-id=5-141&starting-point-node-id=32%3A247&t=grJbr9WHN719yHep-1",
    demo: "https://www.figma.com/proto/tvOKKfWtz5aqJHOOFLSlWW/Take--Home-Test---Sporty-Bet-UI-Clone?node-id=5-141&starting-point-node-id=32%3A247&t=grJbr9WHN719yHep-1",
  },
  {
    id: "project-2",
    name: "Lifestyle Budget App",
    description:
      "This is a mobile web application that allows users to manage their budgets. One can add a new group i.e travel or food. For each group, they can add a new transaction of any item they have purchased.",
    tags: [
      {
        name: "rubyrails",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/joyapisi/budget-app",
    demo: "https://my-lifestyle-budget-app.onrender.com/",
  },
  {
    id: "project-4",
    name: "Bookstore App",
    description: `A single-page application for all fans of books. It allows users to add, remove & display books in/from a list on the home page. Users can also track their reading  progress on a certain book.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/joyapisi/bookstore-app",
    demo: "https://joys-bookstore-app.netlify.app/",
  }
];

export { services, technologies, experiences, projects };
