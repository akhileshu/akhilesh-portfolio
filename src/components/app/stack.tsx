import stack from "@/data/stack.json";
import { IconType } from "react-icons";
import * as SiIcons from "react-icons/si";
import Section from "./section-title";
import sectionIcons from "./sectionIcons";

export default function Stack() {
  return (
    <Section Icon={sectionIcons["tech"]} title={"Tools I Use"} id="stack">
      <div className="flex flex-wrap gap-4">
        {stack.map((tech) => {
          let Icon: IconType = SiIcons.SiCodecrafters;

          if (typeof tech.icon === "string" && tech.icon in SiIcons) {
            Icon = SiIcons[tech.icon as keyof typeof SiIcons];
          }

          return (
            <div
              style={{ color: tech.color ?? "#333" }}
              key={tech.name}
              className="flex items-center gap-2 bg-tech-badge px-3 py-1 rounded-full text-text-dark"
            >
              <Icon className="w-4 h-4" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
