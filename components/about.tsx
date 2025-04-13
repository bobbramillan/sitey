"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a <span className="font-medium">software engineering student</span> at{" "}
        <span className="font-medium">Drexel University</span>. I’m passionate about building real-world
        applications and solving complex problems with code.{" "}
        <span className="italic">What excites me most about programming</span> is how it blends creativity
        with logic to create impactful solutions. My current focus is on{" "}
        <span className="font-medium">full-stack development</span> using technologies like{" "}
        <span className="font-medium">React, Next.js, Node.js, and Python</span>. I'm also exploring{" "}
        <span className="font-medium">AI tools and automation</span>.
      </p>

      <p>
        <span className="italic">Outside of tech</span>, I enjoy gaming, reading about emerging technologies,
        and spending time with friends. I'm always curious and love{" "}
        <span className="font-medium">learning new skills</span>—lately, I’ve been digging into{" "}
        <span className="font-medium">cybersecurity and system design</span>. I'm currently seeking{" "}
        <span className="font-medium">internship opportunities</span> where I can grow and contribute to
        meaningful projects.
      </p>
    </motion.section>
  );
}
