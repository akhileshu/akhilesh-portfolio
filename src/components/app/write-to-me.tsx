"use client";
import { sendEmail } from "@/lib/resend";
import { cn } from "@/lib/utils";
import { useActionState } from "react";
import { TbSend2 } from "react-icons/tb";
import sectionIcons from "../../lib/section-icon";
import Section from "./section";

export default function WirteToMe() {
  const [sendEmailState, formAction, isPending] = useActionState(sendEmail, {
    ok: false,
    fieldErrors: null,
    message: "",
  });
  const { fieldErrors, message, ok } = sendEmailState;

  return (
    <Section Icon={sectionIcons["wirteToMe"]} id="wirteToMe">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-text-secondary  mb-8">
          Have a question, idea, or just want to say hi? Drop a message below
          and I’ll get back to you soon!
        </p>

        <form action={formAction} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your Email"
            name="email"
            className={cn(
              "border  border-border  p-3 rounded focus:outline-none focus:ring focus:ring-accent",
              { "ring-error ring": fieldErrors?.email }
            )}
          />
          <FieldError errors={fieldErrors?.email} />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            name="message"
            className={cn(
              "border border-border  p-3 rounded focus:outline-none focus:ring focus:ring-accent",
              { "ring-error ring": fieldErrors?.message }
            )}
          />
          <FieldError errors={fieldErrors?.message} />
          <button
            disabled={isPending}
            type="submit"
            className={cn(
              "bg-accent text-foreground hover:bg-accent-hover px-6 py-3 rounded font-medium w-fit self-center transition duration-300",
              {
                "bg-disabled cursor-not-allowed opacity-60": isPending,
              }
            )}
          >
            <TbSend2 className="inline" /> Send Message
          </button>

          <p
            className={cn("text-sm mx-auto", {
              hidden: !message || fieldErrors,
              "text-error": !ok,
              "text-accent-hover": ok,
            })}
          >
            {message}
          </p>
        </form>
      </div>
    </Section>
  );
}

type FieldErrorProps = {
  errors?: string[];
  className?: string;
};
const FieldError: React.FC<FieldErrorProps> = ({ errors, className }) => {
  if (!errors || errors.length === 0) return null;
  return (
    <p className={cn("text-error text-sm", className)}>{errors.join(", ")}</p>
  );
};
