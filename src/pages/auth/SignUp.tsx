import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
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
import SmallSpinner from "@/components/shared/SmallSpinner";
import { useSignup } from "@/hooks/auth/hooks";
import { useAuthContext } from "@/hooks/auth/useAuthContext";
import { useEffect } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      role: "",
    },
  });

  const { signup } = useSignup();

  async function onSubmit(data: FieldValues) {
    try {
      await signup(data);
    } catch (error) {
      form.reset();
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
      return;
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) return null;
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
                          disabled={form.formState.isSubmitting}
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
                          disabled={form.formState.isSubmitting}
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
                          disabled={form.formState.isSubmitting}
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
                          disabled={form.formState.isSubmitting}
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
                        value={field.value}
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
