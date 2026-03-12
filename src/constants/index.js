import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  sql,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  dpi,
  prepvora,
  weatherapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2026 - Present",
    points: [
      "Building robust and scalable full-stack web applications using React.js, Node.js, and MongoDB.",
      "Designing responsive frontends with Tailwind CSS and performance-optimized backends.",
      "Developing and deploying secure RESTful APIs and managing database architectures.",
      "Integrating complex animations and real-time features for seamless user experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [


  {
    name: "Deep Packet Inspection (DPI) Engine",
    description:
      "Engineered a high-performance DPI system for real-time network traffic analysis. Implemented packet inspection and 5-tuple flow tracking. Extracted TLS SNI and HTTP Host headers for domain detection. Built a multithreaded pipeline enabling high-throughput traffic filtering.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "multithreading",
        color: "green-text-gradient",
      },
      {
        name: "tcp/ip",
        color: "pink-text-gradient",
      },
      {
        name: "pcap",
        color: "blue-text-gradient",
      },
    ],
    image: dpi,
    // github link ⬇️
    source_code_link: "https://github.com/sahanipriyanshu/DEEP-PACKET-INSPECTION--DPI-",
    // project link ⬇️
    live_website_link: "",
  },
  {
    name: "Prepvora-AI",
    description:
      "Engineered an AI-powered mock interview platform generating contextual questions and feedback.\nDesigned responsive frontend and secure backend APIs for session management.\nOptimized MongoDB queries improving performance under high usage.\nBuilt scalable architecture ensuring seamless cross-device experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: prepvora,
    source_code_link: "https://github.com/sahanipriyanshu/prepvora-ai",
    live_website_link: "",
  },
  {
    name: "Weather Application",
    description:
      "Developed and deployed a responsive weather app delivering real-time global weather data.\nImplemented dynamic city search with optimized state management.\nPresented key metrics including temperature, humidity, and wind speed.\nDesigned a mobile-first UI ensuring fast performance and usability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/sahanipriyanshu/weather_app",
    live_website_link: "https://sahaniweatherapp.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
