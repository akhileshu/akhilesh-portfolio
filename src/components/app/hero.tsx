import Image from "next/image";
import Section from "./section-title";

export default function Hero() {
  return (
    <Section
      id="hero"
      title={"Hi, I'm Akhilesh 👋"}
      className="text-center border-none py-0"
    >
      <div className="flex mt-2 justify-between items-center gap-2">
        <p className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-lime-400 to-teal-400 bg-clip-text text-transparent ">
          Creative developer building impactful web apps
        </p>

        <Image
          width={100}
          height={200}
          className="object-cover w-96 aspect-square shadow-[0_10px_20px_rgba(5,150,105,0.7)] rounded-md "
          src="/akhilesh.png"
          alt="Akhilesh"
        />
      </div>
    </Section>
  );
}
