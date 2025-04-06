import { BaseItem } from "@/lib/utils";

export interface Experience extends BaseItem {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  workMode: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "ZerocodeHR",
    companyUrl: "https://zerocodehr.com",
    location: "Hyderabad",
    startDate: "2024-01",
    endDate: "present",
    workMode: "onsite",
    description:
      "Contributed to the development and maintenance of a large-scale low-code platform used to create drag-and-drop web applications with minimal code. Worked primarily with JavaScript, jQuery, HTML, and CSS, while applying modern engineering practices to ensure code quality and scalability.",
    skills: [
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Low-code Platforms",
      "Codebase Maintenance",
      "UI Development",
    ],
    visible: true,
  },
];
