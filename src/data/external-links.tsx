"use client";

import { ReactNode } from "react";
import { FaGithub, FaPenNib } from "react-icons/fa";
import { siteLinks } from "./links";
import { BaseItem } from "@/lib/utils";

interface ExternalLink extends BaseItem {
  label: string;
  href: string;
  target: string;
  icon: ReactNode;
  title: string;
}

export const externalLinks: ExternalLink[] = [
  {
    label: "Code",
    href: siteLinks.portfolioRepo,
    target: "_blank",
    icon: <FaGithub size={16} />,
    title: "View on GitHub",
  },
  {
    label: "Blog",
    href: siteLinks.blog, // replace with actual blog URL
    target: "_blank",
    icon: <FaPenNib size={16} />,
    title: "Explore Tech Blogs",
  },
];