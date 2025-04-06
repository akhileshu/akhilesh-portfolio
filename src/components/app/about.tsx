import Section from "./section";
import sectionIcons from "../../lib/section-icon";

export default function About() {
  return (
    <Section Icon={sectionIcons["about"]} id="about">
      <p className="">
        I&apos;m passionate about turning ideas into reality through code. I
        love working on innovative, problem-solving software projects.
      </p>
    </Section>
  );
}
