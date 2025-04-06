import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import { ReactNode, ComponentProps } from "react";
import { IconType } from "react-icons";

type SectionProps = {
  id: string;
  children: ReactNode;
  Icon?: IconType;
} & ComponentProps<"section">;

const getSectionTitleById = (id: string): string | undefined => {
  return sections.find((section) => section.id === id)?.title;
};

export default function Section({
  id,
  children,
  className,
  Icon,
  ...rest
}: SectionProps) {
  return (
    <section
      style={{ scrollMarginTop: "var(--scroll-offset)" }}
      className={cn(
        "py-8 rounded-md px-4 border-[1px] border-border ",
        className
      )}
      {...rest}
      id={id}
    >
      <h2 className="text-2xl font-semibold mb-4 text-accent">
        {Icon ? <Icon className="mr-2 inline" /> : null}
        {getSectionTitleById(id)}
      </h2>
      <div>{children}</div>
    </section>
  );
}
