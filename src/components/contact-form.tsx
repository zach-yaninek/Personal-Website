"use client";

import { useActionState } from "react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            aria-invalid={!!state.errors?.name}
          />
          {state.errors?.name && (
            <p className="text-sm text-red-400">{state.errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!state.errors?.email}
          />
          {state.errors?.email && (
            <p className="text-sm text-red-400">{state.errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            aria-invalid={!!state.errors?.message}
          />
          {state.errors?.message && (
            <p className="text-sm text-red-400">{state.errors.message}</p>
          )}
        </div>

        <Button type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send"}
        </Button>

        {state.message && (
          <p
            className={
              state.success ? "text-sm text-accent" : "text-sm text-red-400"
            }
            role="status"
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
