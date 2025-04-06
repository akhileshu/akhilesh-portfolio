import { BaseItem } from "@/lib/utils";

export interface Project extends BaseItem {
  title: string;
  description: string;
  image: string;
  video: string | null; // prefer youtube link
  link: string;
  github: string;
  releaseNotes: string;
  tech: string[];
}
export const projects: Project[] = [
  {
    title: "Video Blogs",
    description:
      "A platform that combines videos with structured content for seamless learning. Features include authentication, post creation and editing with a markdown editor, and bookmarking for easy access.",
    image: "/projects/video-blogs.png",
    video: null,
    link: "https://video-blogs.vercel.app",
    github: "https://github.com/akhileshu/video-blogs",
    releaseNotes: "https://github.com/akhileshu/video-blogs/releases",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "Prisma"],
  },
  {
    title: "TaskZen",
    description:
      "A minimal and fast productivity app with offline support, reminders, and a clean UX.",
    image: "https://via.placeholder.com/600x300?text=TaskZen+App+UI",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    link: "https://taskzen.app",
    github: "https://github.com/akhilesh/taskzen",
    releaseNotes: "https://github.com/akhilesh/taskzen/releases",
    tech: ["React", "TypeScript", "Tailwind", "IndexedDB", "Vite"],
    visible: false,
  },
  {
    title: "Dockly Dashboard",
    description:
      "A container monitoring dashboard showing real-time Docker stats like memory, CPU, logs and live events.",
    image: "https://via.placeholder.com/600x300?text=Dockly+Dashboard",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    link: "https://dockly-dashboard.vercel.app",
    github: "https://github.com/akhilesh/dockly-dashboard",
    releaseNotes: "https://github.com/akhilesh/dockly-dashboard/releases",
    tech: ["Next.js", "Docker", "Socket.IO", "Node.js", "Chart.js"],
    visible: false,
  },
];
