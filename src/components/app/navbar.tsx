"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaPenNib } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "wirteToMe", label: "wirteToMe" },
  { id: "connect", label: "Connect" },
];


const externalLinks = [
  {
    label: "Code",
    href: "https://github.com/akhilesh/portfolio",
    target: "_blank",
    icon: <FaGithub size={16} />,
    title: "View on GitHub",
  },
  {
    label: "Blog",
    href: "https://your-blog-url.com", // replace with actual blog URL
    target: "_blank",
    icon: <FaPenNib size={16} />,
    title: "Explore Tech Blogs",
  },
];

export default function Navbar() {
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-card  shadow z-50">
      <div className="flex justify-center space-x-6 p-2">
        {sections.map(({ id, label }) => (
          <Link
            onClick={() => setCurrentHash(`#${id}`)}
            key={id}
            href={`#${id}`}
            className={cn("hover:text-accent transition-colors", {
              "text-accent font-bold": currentHash === `#${id}`,
            })}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
        {externalLinks.map((link) => (
          <Link
            title={link.title}
            key={link.href}
            href={link.href}
            target={link.target}
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-link transition-colors"
          >
            {link.label}
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
