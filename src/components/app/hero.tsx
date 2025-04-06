"use client";
import Image from "next/image";
import Section from "./section";
import { siteLinks } from "@/data/links";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section skipHeading id="home" className="text-center border-none py-0">
      <header className="sr-only">
        <h1>Akhilesh Upadhyay — Full-Stack Developer Portfolio</h1>
      </header>
      <div className="flex mt-6 justify-between items-center gap-6 flex-col md:flex-row">
        <motion.h1
          id={"home-heading"}
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "200% 50%" }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="text-4xl md:text-5xl font-black tracking-tight leading-tight bg-[linear-gradient(270deg,_#10b981,_#a3e635,_#14b8a6,_#22d3ee,_#10b981)] bg-[length:400%_400%] bg-clip-text text-transparent"
        >
          Creative developer building <br className="hidden md:block" />{" "}
          impactful web apps
        </motion.h1>

        <Image
          width={100}
          height={200}
          className="bg-accent object-cover w-96 aspect-square shadow-[0_10px_25px_rgba(5,150,105,0.6)] rounded-md"
          src={siteLinks.profileImage}
          alt="Akhilesh"
        />
      </div>
    </Section>
  );
}
