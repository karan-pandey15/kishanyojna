"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { submitContact } from "@/lib/api/contact";
import { USER_ERRORS } from "@/lib/errors";
import { useToast } from "@/components/ui/Toast";
import {
  contactFormSchema,
  emptyContactForm,
  type ContactFieldName,
  type ContactFormInput,
  type ContactFormValues,
} from "@/schemas/contact";
import { normalizePhoneDigits, normalizeText } from "@/utils/normalize-input";

/**
 * Contact form state powered by React Hook Form + Zod.
 * Submission goes through `submitContact` → Supabase `contact_message`.
 */
export function useContactForm() {
  const { showToast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: emptyContactForm(),
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = form;

  const onBlurNormalize = useCallback(
    (field: ContactFieldName) => {
      const current = getValues(field);
      if (field === "phone") {
        setValue("phone", normalizePhoneDigits(current), {
          shouldValidate: true,
          shouldDirty: true,
        });
        return;
      }
      setValue(field, normalizeText(String(current ?? "")), {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [getValues, setValue],
  );

  const phoneRegister = register("phone", {
    onChange: (event) => {
      const digits = normalizePhoneDigits(event.target.value);
      setValue("phone", digits, {
        shouldValidate: form.formState.isSubmitted,
      });
      setShowSuccess(false);
    },
  });

  const registerField = useCallback(
    (name: Exclude<ContactFieldName, "phone">) =>
      register(name, {
        onChange: () => setShowSuccess(false),
        onBlur: () => onBlurNormalize(name),
      }),
    [onBlurNormalize, register],
  );

  const onValid = useCallback(
    async (data: ContactFormValues) => {
      clearErrors("root");
      setShowSuccess(false);

      try {
        const result = await submitContact(data);
        if (result.ok) {
          reset(emptyContactForm());
          setShowSuccess(true);
          showToast({
            variant: "success",
            title: "Message sent",
            description:
              "Thank you. We have received your enquiry and will respond soon.",
          });
          return;
        }

        setError("root", { message: result.message });
        showToast({
          variant: "error",
          title: "Could not send message",
          description: result.message,
        });
      } catch {
        setError("root", { message: USER_ERRORS.NETWORK });
        showToast({
          variant: "error",
          title: "Could not send message",
          description: USER_ERRORS.NETWORK,
        });
      }
    },
    [clearErrors, reset, setError, showToast],
  );

  const onInvalid = useCallback(() => {
    setShowSuccess(false);
    showToast({
      variant: "error",
      title: "Please check the form",
      description: USER_ERRORS.VALIDATION,
    });
  }, [showToast]);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      void handleSubmit(onValid, onInvalid)(event);
    },
    [handleSubmit, onInvalid, onValid],
  );

  return {
    registerField,
    phoneRegister,
    onSubmit,
    onBlurNormalize,
    errors,
    isSubmitting,
    showSuccess,
    rootError: errors.root?.message,
  };
}
