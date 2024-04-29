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
