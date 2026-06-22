"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 flex min-h-[44px] items-center justify-between rounded-pill bg-accent px-6 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-glow-accent transition-opacity disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
    >
      <span>{pending ? "Envoi en cours…" : "Envoyer le message"}</span>
      <span aria-hidden="true">→</span>
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-md sm:p-8">
      <h2 className="mb-5 text-micro font-bold uppercase text-text-secondary">— Envoyer un message</h2>
      <form action={formAction} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Nom &amp; Prénom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border-b border-border bg-transparent py-2 text-[15px] text-text outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border-b border-border bg-transparent py-2 text-[15px] text-text outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Objet
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="w-full border-b border-border bg-transparent py-2 text-[15px] text-text outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full resize-none border-b border-border bg-transparent py-2 text-[15px] text-text outline-none focus:border-accent"
          />
        </div>

        <SubmitButton />

        <p role="status" aria-live="polite" className="text-center text-[11px] text-text-secondary">
          {state.status === "idle" && "Réponse sous 24h · Données non partagées"}
          {state.status === "success" && <span className="text-success">{state.message}</span>}
          {state.status === "error" && <span className="text-accent-light">{state.message}</span>}
        </p>
      </form>
    </div>
  );
}
