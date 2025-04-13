import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started at Drexel University",
    location: "Philadelphia, PA",
    description:
      "Pursuing a B.S. in Electrical and Computer Engineering. Relevant coursework includes Data Structures, Algorithms, Systems Programming, and Database Management.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2027 (Expected)",
  },
  {
    title: "Software Engineer Fellow",
    location: "Headstarter.co, Long Island City, NY",
    description:
      "Worked on SaaS products using React, Next.js, and Node.js. Integrated Google Cloud, Stripe, and ElevenLabs APIs. Scaled apps for 1000+ users using Agile and pair programming.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 – Sept 2024",
  },
  {
    title: "Data Analyst Extern for Beats by Dre",
    location: "Paragon One / Extern, Remote",
    description:
      "Performed sentiment analysis on 1,000+ Amazon reviews using Python and NLP libraries. Delivered data visualizations with Plotly, Pandas, and NumPy to inform Beats' marketing strategies.",
    icon: React.createElement(FaReact),
    date: "June 2024 – August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NBA Player Performance App",
    description:
      "An interactive web app that forecasts NBA player performance using a Random Forest model. Integrated real-time stats with nba_api and built visualizations like shot charts and spider charts.",
    tags: ["Python", "Streamlit", "Scikit-learn", "nba_api", "Plotly"],
    imageUrl: "/nba.png", // Replace with your image
  },
  {
    title: "Drexel Shell",
    description:
      "A Unix-style shell written in C that handles command execution, piping, redirection, and background processes. Built from scratch to deepen understanding of systems programming.",
    tags: ["C", "Shell", "UNIX", "Processes", "Systems Programming"],
    imageUrl: "/nba.png", // Replace with your image
  },
  {
    title: "Face Counter with OpenCV",
    description:
      "Built a Python app using OpenCV that detects and counts faces in real-time from a webcam or video stream. Useful for crowd analysis and monitoring.",
    tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    imageUrl: "/nba.png", // Replace with your image
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Swift",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Lisp",
  "Git",
  "Tailwind",
  "Python",
  "MongoDB",
  "Rust",
  "OpenGL/OpenCL",
  "Golang",
  "Express",
  "PostgreSQL",
  "C++",
  "Django",
  "Scipy",
] as const;
