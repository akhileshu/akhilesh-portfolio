import projects from "@/data/projects.json";
import { ProjectCard } from "./ProjectCard";
import Section from "./section-title";
import sectionIcons from "./sectionIcons";

export default function Projects() {
  return (
    <Section Icon={sectionIcons["projects"]} id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p,index) => (
          <ProjectCard key={index} p={p}/>
        ))}
      </div>
    </Section>
  );
}
