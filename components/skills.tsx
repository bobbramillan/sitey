"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/lib/siteConfig";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// 🎲 Random number generator
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// 🎨 Nice palette of accent colors
const colors = [
  "#60A5FA", // blue-400
  "#34D399", // green-400
  "#F472B6", // pink-400
  "#FBBF24", // amber-400
  "#A78BFA", // violet-400
  "#F87171", // red-400
  "#2DD4BF", // teal-400
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-gray-100 relative">
        {siteConfig.skills.map((skill, index) => {
          const floatX = [0, random(-20, 20), random(-10, 15), 0];
          const floatY = [0, random(-15, 15), random(-20, 10), 0];
          const rotate = [0, random(-6, 6), random(-3, 3), 0];
          const duration = random(4, 8);
          const baseColor = colors[index % colors.length];

          return (
            <motion.li
              key={index}
              className="rounded-xl px-5 py-3 shadow-md select-none border border-white/10 text-white"
              style={{
                backgroundColor: baseColor,
              }}
              animate={{
                x: floatX,
                y: floatY,
                rotate,
                backgroundColor: [
                  baseColor,
                  colors[(index + 2) % colors.length],
                  colors[(index + 4) % colors.length],
                  baseColor,
                ],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                x: 0,
                y: 0,
                backgroundColor: "#ffffff",
                color: "#000000",
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
