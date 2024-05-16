import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is Required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is Required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password is not strong"
      ),
    passwordConfirm: z.string().min(1, "Confirm Password is Required"),
    name: z
      .string()
      .min(1, "Name is Required")
      .regex(/^[a-zA-Z\s]+$/, "Name must only contain letters")
      .trim(),
    role: z.enum(["worker", "company"], {
      required_error: "Invalid account type",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match",
    path: ["passwordConfirm"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is Required"),
  password: z.string().min(1, "Password is Required"),
});

export const postJobSchema = z.object({
  title: z.string().min(1, "title is Required"),
  description: z.string().min(50, "description is required"),
  applyUrl: z.string().optional(),
  contactEmail: z.string(),
  address: z.string().optional(),
  salary: z.string().optional(),
  employmentType: z.enum([
    "full-time",
    "part-time",
    "contract",
    "internship",
  ]),
  experienceLevel: z.enum(["entry", "mid", "senior"]),
  jobFunction: z.enum([
    "engineering",
    "sales",
    "marketing",
    "product",
    "design",
    "customer service",
    "finance",
    "human resources",
    "healthcare",
    "others",
  ]),
  educationLevel: z.enum([
    "high school",
    "associate",
    "bachelor",
    "master",
    "doctorate",
  ]),
  currency: z.enum(["USD", "EUR", "GBP", "YEN"]),
});
