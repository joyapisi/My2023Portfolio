import {
  frontend,
  backend,
  ux,
  // prototyping,
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
  // space,
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
  },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
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
    title: "Frontend Developer & UI/UX Designer",
    company_name: "Africa Digital Media Institute(ADMI)",
    icon: dcc,
    iconBg: "#333333",
    date: "December 2023 – Present",
  },
  {
    title: "Graduate Full-Stack Developer",
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
  },
  {
    title: "IT Assistant",
    company_name: "Pangolin Publishers ",
    icon: kelhel,
    iconBg: "#333333",
    date: "January 2018 - August 2020",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Space Travellers' Hub",
    description:
      "A web application for a company that provides commercial and scientific space travel services. Users can book rockets and join selected space missions or cancel reservations.",
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
    image: space,
    repo: "https://github.com/joyapisi/space-traveler-hub",
    demo: "https://my-space-travellers-hub.netlify.app/",
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
    id: "project-3",
    name: "Math Magicians",
    description:
      "This app is for all fans of mathematics that allows users to make calculations and read random math-related quotes. The app is a Single Page App(SPA) and uses an API to generate quotes",
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
    image: math,
    repo: "https://github.com/joyapisi/Math-Magicians",
    demo: "https://joys-math-magicians.netlify.app/",
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
  },
  {
    id: "project-5",
    name: "Artwork App",
    description:
      "This is a mobile app that can be used to learn more about various Artwork. Users can view specific details of an artwork by clicking on its displayed name. All data is fetched from the Art Institute of Chicago API.",
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
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/joyapisi/artwork-app",
    demo: "https://joys-artwork-app.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
