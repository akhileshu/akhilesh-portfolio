import { experiences } from "@/data/experiences";
import Section from "./section";
import sectionIcons from "@/lib/section-icon";
import { format } from "date-fns";
import { cn, filterVisible } from "@/lib/utils";
import Link from "next/link";
import TagList from "./tag-list";
import ExpandableText from "./ExpandableText";

export default function Experience() {
  return (
    <Section id="experience" Icon={sectionIcons["experience"]}>
      <div className="max-w-4xl mx-auto space-y-4 divide-y divide-border">
        {filterVisible(experiences).map(
          (
            {
              company,
              companyUrl,
              role,
              location,
              startDate,
              endDate,
              description,
              workMode,
              skills,
            },
            idx
          ) => (
            <div
              key={company + role}
              className={cn("space-y-3", {
                "pb-4": idx !== experiences.length - 1,
              })}
            >
              <h3 className="text-xl font-semibold">
                {role} at{" "}
                {companyUrl ? (
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:underline"
                  >
                    {company}
                  </Link>
                ) : (
                  company
                )}
              </h3>

              <p className="text-sm text-text-secondary">
                {location} · {workMode} ·{" "}
                {format(new Date(startDate), "MMM yyyy")} -{" "}
                {endDate === "present"
                  ? "Present"
                  : format(new Date(endDate), "MMM yyyy")}
              </p>

              <ExpandableText
                className="text-text-secondary"
                content={description}
                limit={200}
              />
              <TagList tags={skills} />
            </div>
          )
        )}
      </div>
    </Section>
  );
}
