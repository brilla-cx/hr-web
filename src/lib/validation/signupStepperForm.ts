import { z } from "zod";

export const EmailStepSchema = z.object({
  email: z
    .string()
    .email("Oops, we need your email address please.")
    .nonempty("Invalid email address"),
});

export const FirstNameStepSchema = z.object({
  firstName: z
    .string()
    .nonempty("We gotta call you something firstName is kind of weird."),
});

export type EmailInfo = z.infer<typeof EmailStepSchema>;
export type FirstNameInfo = z.infer<typeof FirstNameStepSchema>;
export const TopicsSchema = z.array(
  z.enum([
    "Accounting/Finance",
    "Artificial Intelligence",
    "Business Consulting",
    "Copywriting",
    "Creative",
    "Design",
    "Customer Service",
    "Digital Marketing",
    "Project Management",
    "Running Your Business",
    "SEO",
    "Social Media Management",
    "Web/Mobile/Software",
    "Other",
  ])
);

export const SignupInfoSchema = EmailStepSchema.merge(FirstNameStepSchema);
export type SignupData = z.infer<typeof SignupInfoSchema>;

