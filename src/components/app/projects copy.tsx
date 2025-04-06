import projects from "@/data/projects.json";
import Section from "./section-title";

export default function Projects() {
  return (
    <Section id="projects" title={"Projects"}>
      <div className="grid gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-4 border-[1px] border-border rounded-lg"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-text-primary text-sm">{p.description}</p>
            <a
              href={p.link}
              className="text-blue-500 text-sm mt-1 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
