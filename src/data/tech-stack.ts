import { BaseItem } from "@/lib/utils";

interface Tech  extends BaseItem {
  name: string;
  icon: string;
  color: string;
};

export const techStack: Tech[] = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "GitHub", icon: "SiGithub", color: "#181717" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  { name: "Prisma", icon: "SiPrisma", color: "#2D3748" },
  { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
];
