import cryptoImage from "../../public/crypto-tracker.png";
import dadjokesImage from "../../public/dadjokes-app.png";
import semerrImage from "../../public/semerr.png";
import reliefHackathonImage from "../../public/relief-hackathon.png";
import divvyImage from "../../public/divvy-expense-app.png";
import quoteGeneratorImage from "../../public/quote-generator.png";

const projects = [
  {
    period: "September, 2025",
    category: "Frontend Project",
    title: "Dadjokes App",
    imageUrl: dadjokesImage,
    url: "https://dadjokes-2d0u7cou2-oluwaseun-fatoye-s-projects.vercel.app/",
    description:
      "I built a dynamic Vue.js and Nuxt.js application that fetches random dad jokes from an API and includes a keyword search feature.",
    stack: ["Tailwind", "TypeScript", "Vue.js", "Nuxt.js", "Vite"],
  },
  {
    period: "June, 2025",
    category: "Cryptocurrency Tracker",
    title: "Cryptocurrency Tracker",
    imageUrl: cryptoImage,
    url: "https://functional-search-bar.vercel.app/ ",
    description:
      "I built a React and Next.js application for tracking real-time cryptocurrency values with a dynamic search feature",
    stack: ["Tailwind", "React.js", "Next.js"],
  },
  {
    period: "May, 2025",
    category: "Web Application",
    title: "Random Quoete Generator",
    imageUrl: quoteGeneratorImage,
    url: "https://functional-search-bar.vercel.app/",
    description:
      "I built a React and Next.js application that fetches random quotes and allows users to share them directly to Twitter with automatic author attribution.",
    stack: ["Tailwind", "React.js", "Next.js"],
  },
  {
    period: "March 2023 - date",
    category: "Talent Marketplace",
    title: "Semerr",
    imageUrl: semerrImage,
    url: "semerr.com",
    description:
      "I built the responsive and interactive user interface for a creative services marketplace.",
    stack: ["Tailwind", "React.js", "Next.js"],
  },
  {
    period: "November, 2023",
    category: "Workforce Analytics",
    title: "Relief Hachathon",
    imageUrl: reliefHackathonImage,
    url: "https://relief-hackathon.vercel.app",
    description:
      "I built a remote employee productivity tracking app as a key frontend developer, implementing Figma designs and contributing to the team's workflow.",
    stack: ["Tailwind", "shadcn/ui", "React.js", "Next.js", "Vite"],
  },
  {
    period: "March - April, 2025",
    category: "Finance management",
    title: "Divvy - Expense Sharing App",
    imageUrl: divvyImage,
    url: "https://divvy-app.vercel.app/",
    description:
      "I built a comprehensive profile management system and responsive UI components using React, TypeScript, and Tailwind CSS.",
    stack: [
      "Tailwind",
      "shadcn/ui",
      "React,js",
      "TypeScript",
      "Next.js",
      "Vite",
    ],
  },
];

export default projects;
