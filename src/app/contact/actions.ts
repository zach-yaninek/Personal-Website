"use server";

import { Resend } from "resend";

import { site } from "@/lib/content";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFormState["errors"] = {};

  if (!name) errors.name = "Name is required.";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return {
      success: false,
      message:
        "Email delivery is not configured yet. Please use the direct email link below.",
    };
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? site.email;
  const contactFrom =
    process.env.CONTACT_FROM ??
    "Zachary Yaninek <contact@zachyaninek.me>";
  const resend = new Resend(resendApiKey);
  const subject = `New contact form message from ${name}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const htmlMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const html = [
    "<h2>New contact form submission</h2>",
    "<dl>",
    `<dt>Name</dt><dd>${escapeHtml(name)}</dd>`,
    `<dt>Email</dt><dd>${escapeHtml(email)}</dd>`,
    "</dl>",
    "<p><strong>Message</strong></p>",
    `<p>${htmlMessage}</p>`,
  ].join("");

  try {
    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactEmail,
      subject,
      replyTo: email,
      text,
      html,
    });

    if (error) {
      console.error("Resend contact form error:", error);

      return {
        success: false,
        message:
          "Sorry, your message could not be sent right now. Please use the direct email link below.",
      };
    }
  } catch (error) {
    console.error("Contact form delivery failed:", error);

    return {
      success: false,
      message:
        "Sorry, your message could not be sent right now. Please use the direct email link below.",
    };
  }

  return {
    success: true,
    message:
      "Thanks for reaching out! Your message was received. For a direct reply, you can also use the email link below.",
  };
}
