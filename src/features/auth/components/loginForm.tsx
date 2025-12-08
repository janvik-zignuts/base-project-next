"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AtSign, Lock } from "lucide-react";


import { InputField } from "@/src/components/inputs/InputField";
import { useAuthContext } from "@/src/features/auth/context/authContext";

import { EMAIL_REGEX } from "@/src/constants/regex";
import { LOGIN_FORM_DEFAULT_VALUES } from "../constants";
import { LoginFormValues } from "../types";
import { Button, Spinner } from "@heroui/react";

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    
  } = useForm<LoginFormValues>({
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
    mode: "onBlur",
  });


  const { state: authState, setCredentials } = useAuthContext();

  const onSubmit = async (values: LoginFormValues) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCredentials({ email: values.email });
    router.push("/campaigns");
  };

  useEffect(() => {
    if (authState.status === "authenticated") {
      router.replace("/campaigns");
    }
  }, [authState.status, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-8 mt-6">
      {/* Email */}
      <InputField
        id="email"
        // label="Email"
        type="email"
        placeholder="Email"
        icon={<AtSign className="size-4" />}
        register={register}
        error={errors.email}
        rules={{
          required: "Email is required",
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email",
          },
        }}
      />

      {/* Password */}
      <InputField
        id="password"
        // label="Password"
        type="password"
        placeholder="Password"
        icon={<Lock className="size-4" />}
        register={register}
        error={errors.password}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Use at least 8 characters",
          },
        }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full rounded-lg h-12 mt-6 bg-[#B1CFAA] text-black"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner classNames={{label: "text-foreground mt-4"}} label="spinner" variant="spinner" /> : "Let's Go"}
      </Button>
    </form>
  );
};
