import Stack from "@/components/app/stack";
import About from "@/components/app/about";
import WirteToMe from "@/components/app/write-to-me";
import Hero from "@/components/app/hero";
import Projects from "@/components/app/projects";
import Connect from "@/components/app/connect";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 px-4 py-12 max-w-4xl mx-auto">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Connect />
      <WirteToMe />
    </main>
  );
}
