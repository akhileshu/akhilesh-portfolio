import { projects } from "@/data/projects";
import { ProjectCard } from "./Project-card";
import Section from "./section";
import sectionIcons from "../../lib/section-icon";
import { filterVisible } from "@/lib/utils";

export default function Projects() {
  return (
    <Section Icon={sectionIcons["projects"]} id="projects">
      <div className="grid gap-8 md:grid-cols-2">
        {filterVisible(projects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
