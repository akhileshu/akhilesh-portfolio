interface Section {
  id: string;
  label: string;
  title: string;
  excludeFromNav?: boolean;
}
export const sections:Section[] = [
  { id: "home", label: "Home", title: "Hi, I'm Akhilesh Upadhyay 👋",excludeFromNav:true },
  { id: "about", label: "About", title: "Know more about me" },
  { id: "stack", label: "Stack", title: "Technologies I work with" },
  { id: "projects", label: "Projects", title: "My recent projects" },
  { id: "wirteToMe", label: "Write to Me", title: "Let’s Get in Touch" },
  { id: "connect", label: "Connect", title: "Let's Build Something Amazing!" },
  {
    id: "experience",
    label: "Experience",
    title: "Where I’ve Worked and Learned",
  },
];
