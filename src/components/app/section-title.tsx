import { cn } from "@/lib/utils";
import { ReactNode, ComponentProps } from "react";
import { IconType } from "react-icons";

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
  Icon?: IconType;
} & ComponentProps<"section">;

export default function Section({
  title,
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
    >
      <h2 className="text-2xl font-semibold mb-4 text-accent">
        {Icon ? <Icon className="mr-2 inline" /> : null}
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
