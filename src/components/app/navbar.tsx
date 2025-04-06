"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { externalLinks } from "@/data/external-links";
import { sections } from "@/data/sections";
import ThemeToggle from "@/lib/theme-context";
import { useScrollToHashOnLoad } from "@/lib/useScrollToHashOnLoad";
import { cn, filterVisible } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";

type SetCurrentHash = (value: SetStateAction<string>) => void;
type isCurrent = (id: string) => boolean;
export default function Navbar() {
  useScrollToHashOnLoad();
 const [currentHash, setCurrentHash] = useState<string>("");

 useEffect(() => {
   setCurrentHash(window.location.hash);
 }, []);

  const isCurrent: isCurrent = (id: string) => {
    return currentHash === `#${id}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-card shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between md:justify-around items-center">
        <Link
          href={"#home"}
          onClick={() => setCurrentHash("#home")}
          className={cn("text-lg font-bold")}
        >
          Akhilesh
        </Link>
        <div className=""></div>

        <DesktopMenu isCurrent={isCurrent} setCurrentHash={setCurrentHash} />

        <MobileMenu isCurrent={isCurrent} setCurrentHash={setCurrentHash} />
      </div>
    </nav>
  );
}

export const DesktopMenu = ({
  setCurrentHash,
  isCurrent,
}: {
  setCurrentHash: SetCurrentHash;
  isCurrent: isCurrent;
}) => (
  <>
    <NavLinks
      className="hidden md:flex items-center gap-4"
      setCurrentHash={setCurrentHash}
      isCurrent={isCurrent}
    />
    <ThemeToggle className="hidden md:flex" />
  </>
);

export const MobileMenu = ({
  setCurrentHash,
  isCurrent,
}: {
  setCurrentHash: SetCurrentHash;
  isCurrent: isCurrent;
}) => (
  <div className={cn("flex gap-1 md:hidden")}>
    <ThemeToggle />
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <NavLinks
          className="flex flex-col gap-4 m-6"
          setCurrentHash={setCurrentHash}
          isCurrent={isCurrent}
          isMobile
        />
      </SheetContent>
    </Sheet>
  </div>
);

const NavLinks = ({
  setCurrentHash,
  isCurrent,
  isMobile = false,
  className,
}: {
  setCurrentHash: SetCurrentHash;
  isCurrent: isCurrent;
  isMobile?: boolean;
  className?: string;
}) => (
  <div
    className={cn(
      "flex gap-4 flex-col md:flex-row divide-foreground divide-y md:divide-x md:divide-y-0 ",
      className
    )}
  >
    <div className="flex gap-4 flex-col md:flex-row md:pr-4 pb-4 md:pb-0">
      {sections
        .filter((section) => !section.excludeFromNav)
        .map(({ id, label }) => (
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

    <div className="flex gap-4 flex-col md:flex-row">
      {filterVisible(externalLinks).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.target}
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-1 hover:text-link transition-colors",
            { "mt-2": isMobile }
          )}
          title={link.title}
        >
          {link.label}
          {link.icon}
        </Link>
      ))}
    </div>
  </div>
);
