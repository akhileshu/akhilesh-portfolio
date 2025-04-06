"use client";
import { ReactNode } from "react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteLinks } from "./links";
import { BaseItem } from "@/lib/utils";

interface connectLink extends BaseItem {
  href: string;
  label: string;
  icon: ReactNode;
}
export const connectLinks: connectLink[] = [
  {
    href: siteLinks.github,
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: siteLinks.linkedin,
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: siteLinks.resume,
    label: "Resume",
    icon: <FaFileAlt />,
  },
];
