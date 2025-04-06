"use client";
import Link from "next/link";
import Section from "./section";
import sectionIcons from "../../lib/section-icon";
import { connectLinks } from "@/data/connect-links";
import { filterVisible } from "@/lib/utils";

export default function Connect() {
  return (
    <Section Icon={sectionIcons["connect"]} id="connect" className="">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg  mb-8">
          Love creative ideas? Curious about my work? Want to collaborate on
          innovative projects?
          <br />
          Let&apos;s connect — I’m just one click away.
        </p>

        <div className="flex justify-center gap-10 text-4xl">
          {filterVisible(connectLinks).map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={"transition-all duration-300 hover:text-link-hover"}
            >
              {icon}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-text-secondary text-sm">
          📍 Based in Hyderabad · Available for remote collabs · Let&apos;s
          innovate!
        </p>
      </div>
    </Section>
  );
}
