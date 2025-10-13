import { siteConfig } from "./siteConfig";

// 🔹 SectionName automatically syncs with your siteConfig.links array
export type SectionName = (typeof siteConfig.links)[number]["name"];

// 🔹 Project type (explicit optional fields for flexibility)
export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // optional image
  link?: string; // optional repo/site link
};

// 🔹 Experience type (explicit to keep typing portable)
export type Experience = {
  title: string;
  location: string;
  description: string;
  icon?: React.ReactNode;
  date: string;
};

// 🔹 Skill type
export type Skill = string;

// 🔹 Type for the entire config (for props or APIs)
export type SiteConfig = typeof siteConfig;