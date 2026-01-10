// lib/siteConfig.ts
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";

export const siteConfig = {
  // 🔗 Navigation Links
  links: [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
  ],
  // 🧑 Personal Info
  name: "Bav Bramillan",
  title: "Software Engineering Student",
  location: "Philadelphia, PA",
  university: "Drexel University",
  description:
    "N/A",
  email: "bob.bramillan@gmail.com",

  // 🖼️ Media
  profileImage: "/bavanan.jpg",
  resume: "/Bavanan_Resume.pdf",

  // 🌐 Links
  socialLinks: {
    github: "https://github.com/bobbramillan",
    linkedin: "https://linkedin.com/in/bavananb",
  },

  // 💬 About
  about: {
    paragraph1:
      "I'm currently a software engineering student at Drexel University. I’m passionate about building real-world applications and solving complex problems with code.",
    paragraph2:
      "Outside of tech, I enjoy gaming, reading about emerging technologies, and spending time with friends. I'm always curious and love learning new skills.",
  },

  // 💼 Experience
  experiences: [
    {
      title: "Started at Drexel University",
      location: "Philadelphia, PA",
      description:
        "Pursuing a B.S. in Computer Science. Relevant coursework includes Data Structures, Systems Programming, Differential Equations, Discrete Mathematics, and Database Management.",
      icon: <LuGraduationCap />,
      date: "2022 - 2027 (Expected)",
    },
    {
      title: "Software Engineer Intern",
      location: "SRI International, Princeton, NJ",
      description:
        "Built full-stack manufacturing platform with PostgreSQL backend and TypeScript/React/NextJS frontend, enabling device traceability, real-time metrics, and secure PLM integration via mutual TLS. Developed PyQt5 automation tool that reduced LiDAR sensor reporting from 1 week to 2 hours by batch-processing data and auto-generating PowerPoint/Excel reports. Deployed system internally via Nginx, then migrated to AWS EC2 for improved scalability and cross-team access.",
      icon: <CgWorkAlt />,
      date: "April 2025 – Sept 2025",
    },
    {
      title: "Data Analyst Extern for Beats by Dre",
      location: "Remote",
      description:
        "Performed sentiment analysis on 1,000+ Amazon reviews using Python and NLP. Delivered data visualizations with Plotly, Pandas, and NumPy.",
      icon: <CgWorkAlt />,
      date: "June 2024 – August 2024",
    },
  ],

  // 🚀 Projects
  projects: [
    {
      title: "NBA Player Performance App",
      description:
        "Forecasts NBA player performance using a Random Forest model with real-time stats and visualizations.",
      tags: ["Python", "Streamlit", "Scikit-learn", "nba_api", "Plotly"],
      link: "https://nba-study-103.streamlit.app/",
    },
    {
      title: "Drexel Shell",
      description:
        "A Unix-style shell written in C that handles command execution, piping, and background processes.",
      tags: ["C", "Shell", "UNIX", "Processes", "Systems Programming"],
    },
    {
      title: "Face Counter with OpenCV",
      description:
        "Built a Python app that detects and counts faces in real-time using OpenCV.",
      tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    },
  ],

  // 🧠 Skills
  skills: [
    "Swift",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Tailwind",
    "C/C++",
    "Django",
    "SQL(Postgres, Oracle)",
    "Java"
  ],
};