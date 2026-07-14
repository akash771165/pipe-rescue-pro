"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(2, "Please enter the required service"),
  message: z.string().min(10, "Please describe your plumbing problem"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setLoading(true);
      setStatus(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Failed");
      }

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          method: "contact_form",
        });
      }

      if (typeof window !== "undefined" && (window as any).clarity) {
        (window as any).clarity("event", "contact_form_submit");
      }

      setStatus({
        type: "success",
        message: "Your request has been submitted successfully.",
      });

      reset();
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
    }
        return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            {status && (
                <div
                    className={`rounded-xl p-4 text-sm font-semibold ${
                        status.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {status.message}
                </div>
            )}

            <div>
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                />

                {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                />

                {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                />

                {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    {...register("service")}
                    type="text"
                    placeholder="Service Required"
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                />

                {errors.service && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.service.message}
                    </p>
                )}
            </div>

            <div>
                <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Describe Your Plumbing Problem"
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                />

                {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-5 text-lg font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                <Send size={20} />

                {loading ? "Sending..." : "Send Request"}
            </button>
        </form>
    );
}