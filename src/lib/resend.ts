"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: "Akhilesh <contact@yourdomain.dev>",
      to: "akhilesh@example.com",
      subject: "Portfolio Contact",
      html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });
    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false };
  }
}
