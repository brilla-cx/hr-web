/* eslint-disable camelcase */
import { z } from "zod";

export const EmailStepSchema = z.object({
  email: z
    .string()
    .email("Oops, we need your email address please.")
    .nonempty("Invalid email address"),
});
// infred type
export type EmailInfo = z.infer<typeof EmailStepSchema>;

export const FirstNameStepSchema = z.object({
  firstName: z
    .string()
    .nonempty("We gotta call you something firstName is kind of weird."),
});
export type FirstNameInfo = z.infer<typeof FirstNameStepSchema>;

// combined validation form schema
export const SignupInfoSchema = EmailStepSchema.merge(FirstNameStepSchema);
export type SignupData = z.infer<typeof SignupInfoSchema>;

export const TopicsArray = [
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
];

// primary topic
export const PrimaryTopicSchema = z.object({
  topic1: z.enum(TopicsArray as [string, ...string[]], {
    required_error: "Please select a primary topic.",
  }),
});
export type PrimaryTopicInfo = z.infer<typeof PrimaryTopicSchema>;

// other topics
export const OtherTopicSchema = z.object({
  topics: z
    .array(z.string())
    .min(3, "Please select at least three topics")
    .max(3, "Please select a maximum of three topics"),
});
export type OtherTopicInfo = z.infer<typeof OtherTopicSchema>;
