"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { externalLinks } from "@/data/external-links";
import { sections } from "@/data/sections";
import ThemeToggle from "@/lib/theme-context";
import { cn, filterVisible } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SetStateAction, useState } from "react";

type SetCurrentHash = (value: SetStateAction<string>) => void;
type isCurrent = (id: string) => boolean;
export default function Navbar() {
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash);
  const isCurrent: isCurrent = (id: string) => {
    return currentHash === `#${id}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-card shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between md:justify-around items-center">
        <div className="text-lg font-bold">Akhilesh</div>

        <DesktopMenu isCurrent={isCurrent} setCurrentHash={setCurrentHash} />

        <MobileMenu isCurrent={isCurrent} setCurrentHash={setCurrentHash} />
      </div>
    </nav>
  );
}

export const MobileMenu = ({
  setCurrentHash,
  isCurrent,
}: {
  setCurrentHash: SetCurrentHash;
  isCurrent: isCurrent;
}) => {
  return (
    <div className={cn("flex gap-1 md:hidden")}>
      <ThemeToggle />
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 m-6">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setCurrentHash(`#${id}`)}
                  className={cn("hover:text-accent transition-colors", {
                    "text-accent font-bold": isCurrent(id),
                  })}
                >
                  {label}
                </Link>
              ))}
              {filterVisible(externalLinks).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-link transition-colors"
                  title={link.title}
                >
                  {link.label}
                  {link.icon}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export const DesktopMenu = ({
  setCurrentHash,
  isCurrent,
}: {
  setCurrentHash: SetCurrentHash;
  isCurrent: isCurrent;
}) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-4">
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => setCurrentHash(`#${id}`)}
            className={cn("hover:text-accent transition-colors", {
              "text-accent font-bold": isCurrent(id),
            })}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        {filterVisible(externalLinks).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.target}
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-link transition-colors"
            title={link.title}
          >
            {link.label}
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
};
