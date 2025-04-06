import { FaUser, FaCode, FaTools, FaEnvelope, FaLink } from "react-icons/fa";
import { IconType } from "react-icons";

// 1. Define the valid section names
export type SectionKey =
  | "about"
  | "projects"
  | "tech"
  | "wirteToMe"
  | "connect";

// 2. Use it to type the icon map
type SectionIconMap = {
  [key in SectionKey]: IconType;
};

// 3. Define the icon map
const sectionIcons: SectionIconMap = {
  about: FaUser,
  projects: FaCode,
  tech: FaTools,
  wirteToMe: FaEnvelope,
  connect: FaLink,
};

export default sectionIcons;
