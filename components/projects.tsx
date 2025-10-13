"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { siteConfig } from "@/lib/siteConfig";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      {siteConfig.projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}
