"use client";

import { z } from "zod";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useLoginMutation } from "@/store/api/auth-api";

interface FormLoginProps {
  className?: string;
}

const FormLogin: React.FC<FormLoginProps> = ({ className }) => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading, error }] = useLoginMutation();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    const response = await login({ email, password });
    if (response.error || error) {
      toast("Invalid email or password");
      return;
    }
    toast("Login success");
  }

  // Password visibility toggle
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Card
      className={`${className} shadow-none border-none`}
      data-testid="auth-components-form-login"
    >
      <CardHeader className="text-center">
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>Login to continue with Opensend</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
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
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type={!passwordVisible ? "password" : "text"}
                      {...field}
                      append={<Lock className="w-4 h-4" />}
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
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                loading={isLoading}
              >
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
