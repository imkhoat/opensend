"use client";

import { z } from "zod";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Eye, EyeClosed, Mail } from "lucide-react";

interface FormLoginProps {
  className?: string;
}

const FormLogin: React.FC<FormLoginProps> = ({ className }) => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }

  // Password visibility toggle
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Card
      className={`${className} shadow-none border-none`}
      data-testid="auth-components-form-login"
    >
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      append={<Mail className="w-4 h-4" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type={!passwordVisible ? "password" : "text"}
                      {...field}
                      prepend={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6"
                          type="button"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeClosed className="w-4 h-4" />
                          )}
                        </Button>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-center items-stretch gap-2">
              <Button type="submit" disabled={!form.formState.isValid}>
                Login
              </Button>
              <Button type="button" variant="outline">
                Forgot Your Password?
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormLogin;
