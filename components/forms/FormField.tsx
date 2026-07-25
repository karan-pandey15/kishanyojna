"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const controlClass =
  "w-full rounded-lg border border-brand-green/20 bg-white px-4 py-3 text-sm outline-none ring-brand-orange transition focus-visible:ring-2 aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-500";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
};

/** Accessible labelled control wrapper with live error region (WCAG 2.1 AA). */
export function FormField({
  id,
  label,
  error,
  required,
  hint,
  children,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label}
        {required ? (
          <span className="text-brand-orange" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mb-1 text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      <p
        id={errorId}
        role="alert"
        aria-live="polite"
        className={`mt-1 text-xs text-red-700 ${error ? "" : "sr-only"}`}
      >
        {error ?? ""}
      </p>
    </div>
  );
}

type SecureInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "className"
> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
};

export function SecureInput({
  id,
  label,
  error,
  hint,
  required,
  ...rest
}: SecureInputProps) {
  const describedBy = [
    hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <FormField id={id} label={label} error={error} required={required} hint={hint}>
      <input
        {...rest}
        id={id}
        name={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={controlClass}
      />
    </FormField>
  );
}

type SecureTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "name" | "className"
> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
};

export function SecureTextarea({
  id,
  label,
  error,
  hint,
  required,
  ...rest
}: SecureTextareaProps) {
  const describedBy = [
    hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <FormField id={id} label={label} error={error} required={required} hint={hint}>
      <textarea
        {...rest}
        id={id}
        name={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={controlClass}
      />
    </FormField>
  );
}
