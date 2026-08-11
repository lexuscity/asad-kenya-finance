import { z } from "zod";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Contact Form Validation
 * ============================================================
 *
 * Validation for the public website Contact Us form.
 *
 * This schema accepts only information required to process
 * a normal website enquiry.
 * ============================================================
 */

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional(),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters.")
    .max(150, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;