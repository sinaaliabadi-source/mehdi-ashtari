"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

interface FormState {
  name: string;
  contact: string;
  subject: string;
  message: string;
}

type FieldChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FieldBlurEvent = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

interface FieldProps {
  label: string;
  value: string;
  error?: string;
  multiline?: boolean;
  placeholder?: string;
  onChange: (e: FieldChangeEvent) => void;
  onBlur?: (e: FieldBlurEvent) => void;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", contact: "", subject: "", message: "" });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    contact: false,
    subject: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleBlur = (field: keyof FormState) => () => setTouched((prev) => ({ ...prev, [field]: true }));

  const isEmailOrPhone = (value: string) => {
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^[0-9+\-\s]{6,}$/;
    return emailPattern.test(value) || phonePattern.test(value);
  };

  const isValid =
    form.name.trim() &&
    isEmailOrPhone(form.contact.trim()) &&
    form.subject.trim() &&
    form.message.trim().length > 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, contact: true, subject: true, message: true });
    if (!isValid) return;
    setSubmitted(true);
    setForm({ name: "", contact: "", subject: "", message: "" });
  };

  const fieldError = {
    name: touched.name && !form.name.trim(),
    contact: touched.contact && !isEmailOrPhone(form.contact.trim()),
    subject: touched.subject && !form.subject.trim(),
    message: touched.message && form.message.trim().length <= 10,
  };

  return (
    <section className="py-12">
      <Container className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-white">تماس</h1>
          <p className="text-lg text-white/75">
            برای هماهنگی دمو، پرسش یا همکاری پیام بگذارید. پاسخ در کوتاه‌ترین زمان ارسال می‌شود.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="نام"
              value={form.name}
              onChange={handleChange("name")}
              onBlur={() => handleBlur("name")()}
              error={fieldError.name ? "نام را وارد کنید" : ""}
            />
            <Field
              label="ایمیل یا شماره تماس"
              value={form.contact}
              onChange={handleChange("contact")}
              onBlur={() => handleBlur("contact")()}
              error={fieldError.contact ? "ایمیل یا شماره معتبر وارد کنید" : ""}
            />
          </div>

          <Field
            label="موضوع"
            value={form.subject}
            onChange={handleChange("subject")}
            onBlur={() => handleBlur("subject")()}
            error={fieldError.subject ? "موضوع را وارد کنید" : ""}
          />

          <Field
            label="پیام"
            value={form.message}
            onChange={handleChange("message")}
            onBlur={() => handleBlur("message")()}
            error={fieldError.message ? "پیام را با جزئیات کوتاه وارد کنید" : ""}
            multiline
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={!isValid} className={!isValid ? "opacity-70" : ""}>
              ارسال پیام
            </Button>
            {submitted && <p className="text-sm font-semibold text-accent-500">پیام شما ثبت شد.</p>}
          </div>
        </form>
      </Container>
    </section>
  );
}

function Field({ label, value, error, multiline, placeholder, onChange, onBlur }: FieldProps) {
  const baseClasses =
    "w-full rounded-xl border border-white/10 bg-surface-900/70 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent-500 focus:outline-none";

  return (
    <label className="block space-y-2 text-sm font-semibold text-white">
      <span>{label}</span>

      {multiline ? (
        <textarea
          className={`${baseClasses} min-h-[140px] resize-none`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!error}
        />
      ) : (
        <input
          className={baseClasses}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!error}
        />
      )}

      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
