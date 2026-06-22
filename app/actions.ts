"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Merci de remplir tous les champs." };
  }

  // TODO: brancher l'envoi réel (ex. Resend, Nodemailer, ou webhook) ici.
  // await sendEmail({ name, email, subject, message });

  return { status: "success", message: "Message envoyé. Réponse sous 24h." };
}
