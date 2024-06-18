"use client";
import { FormFieldComponent } from "@/components/FormField";
import { SocialIcons } from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

type LoginType = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginType) => {
    console.log(values);
  };

  return (
    <section className="w-1/3 h-screen flex flex-col justify-center rounded-2xl p-32 gap-4">
      <h1 className="text-3xl">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <FormFieldComponent name={"email"} control={form.control} />

          <FormFieldComponent name={"password"} control={form.control} />

          <span className="self-end"> Forgot your password?</span>

          <div className="flex gap-2 self-end">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Form>

      <span className="text-center">
        Not have an account? <Link href={"/signup"}>SignUp</Link>
      </span>

      <Separator />

      <div className="w-full flex flex-col gap-12">
        <span className="text-center"> Or Sign in with</span>

        <SocialIcons />
      </div>
    </section>
  );
};

export default Login;
