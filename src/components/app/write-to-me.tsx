"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/resend";
import Section from "./section-title";
import sectionIcons from "./sectionIcons";
import { TbSend2 } from "react-icons/tb";

export default function WirteToMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendEmail({ email, message });
    setStatus(
      res.ok
        ? "✅ Your message has been sent!"
        : "❌ Failed to send. Try again."
    );
    setEmail("");
    setMessage("");
  };

  return (
    <Section
      Icon={sectionIcons["wirteToMe"]}
      id="wirteToMe"
      title={"Let’s Get in Touch"}
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-text-secondary  mb-8">
          Have a question, idea, or just want to say hi? Drop a message below
          and I’ll get back to you soon!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border  border-border  p-3 rounded focus:outline-none focus:ring focus:ring-accent"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-border  p-3 rounded focus:outline-none focus:ring focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-white hover:bg-accent-hover px-6 py-3 rounded font-medium w-fit self-center transition duration-300"
          >
            <TbSend2 className="inline"/> Send Message
          </button>

          {status && (
            <p className="text-center text-sm mt-4 text-accent">{status}</p>
          )}
        </form>
      </div>
    </Section>
  );
}
