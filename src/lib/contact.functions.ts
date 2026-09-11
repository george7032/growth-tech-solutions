import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SERVICE_OPTIONS = [
  "Web Development",
  "Networking",
  "Database Management",
  "Data Analysis",
  "Cloud Services",
  "Cybersecurity",
  "Software Development",
  "Branding",
  "Other",
] as const;

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().trim().min(10).max(2000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    // Enquiry is recorded in the server log and forwarded to the Zebnex inbox
    // once the sender domain is verified for this project.
    console.info(
      `New enquiry — service: ${data.service}; from: ${data.name} <${data.email}>; phone: ${
        data.phone || "not provided"
      }`,
    );

    return { ok: true as const };
  });
