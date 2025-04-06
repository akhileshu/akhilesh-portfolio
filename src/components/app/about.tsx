import Section from "./section-title";
import sectionIcons from "./sectionIcons";

export default function About() {
  return (
    <Section Icon={sectionIcons["about"]} title={"About Me"} id="about">
      <p className="">
        I&apos;m passionate about turning ideas into reality through code. I
        love working on innovative, problem-solving software projects.
      </p>
    </Section>
  );
}
