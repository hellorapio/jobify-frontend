import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is Required")
      .email("Invalid email address"),
    password: z.string().min(1, "Password is Required"),
    confirmPassword: z.string().min(1, "Confirm Password is Required"),
    name: z.string().min(1, "Name is Required"),
    role: z.enum(["Job Seeker", "company"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is Required"),
  password: z.string().min(1, "Password is Required"),
});
