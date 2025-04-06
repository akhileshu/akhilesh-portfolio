"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
import { z } from "zod";

const contactFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AllKeys<T> = T extends z.ZodType<any, any, any> ? keyof z.infer<T> : never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldErrors<S extends z.ZodType<any>> =
  | {
      [P in AllKeys<S>]?: string[];
    }
  | null;

export async function sendEmail(
  _: unknown,
  formData: FormData
): Promise<{
  ok: boolean;
  fieldErrors: FieldErrors<typeof contactFormSchema>;
  message: string;
}> {
  try {
    const { data, error } = contactFormSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error)
      return {
        ok: false,
        fieldErrors: error.formErrors.fieldErrors,
        message: "please fix input errors",
      };
    if (!process.env.EMAIL_TO)
      return { ok: false, message: "internal server error", fieldErrors: null };
    await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`, // ✅ use your custom domain email
      to: process.env.EMAIL_TO,
      subject: "New Contact via Portfolio",
      html: `<p><b>Email:</b> ${data.email}</p><p>${data.message}</p>`,
    });
    return {
      ok: true,
      message: "Your message has been sent!",
      fieldErrors: null,
    };
  } catch (err) {
    console.error(err);
    return { ok: false, message: "internal server error", fieldErrors: null };
  }
}
