import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { signupSchema } from "@/lib/zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { signup } from "@/services/auth";
import SmallSpinner from "@/components/shared/SmallSpinner";
import toast from "react-hot-toast";

export default function Signup() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      role: "",
    },
  });

  async function onSubmit(data: FieldValues) {
    const message = await signup(data);
    if (message === "Email Verification has been sent") {
      toast.success(
        "Your account has been created successfully, Please Check Your Email to verify your account.",
        { duration: 6000 }
      );
    } else {
      toast.error(message, { duration: 6000 });
      form.reset();
    }
  }

  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center py-12"
        >
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <div className="flex justify-center items-center gap-1">
                <Link to="/" className="text-2xl">
                  &larr;
                </Link>
                <Logo />
              </div>
              <h1 className="text-3xl font-bold">Create new account</h1>
              <p className="text-pretty text-muted-foreground">
                Make up your carrer with confidence. With Jobify, Your path
                to success is just a few clicks away.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>

                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="8 Min Length"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        (1 number, 1 uppercase letter, 1 lowercase letter)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="passwordConfirm">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="passwordConfirm"
                          type="password"
                          placeholder="Confirm your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Join as</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Who are you ?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="worker">
                            Job Seeker
                          </SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <SmallSpinner />
                    Signing up..
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </div>
            <div className=" text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </div>
        </form>
      </Form>
      <div className="hidden bg-muted lg:block">
        <img
          src="/background.jpg"
          alt="Beautiful background image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
        />
      </div>
    </div>
  );
}
