/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/src/utils/utils";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
  error?: FieldError | undefined;
  register: UseFormRegister<any>;
  rules?: any;
}

export function InputField({
  id,
  label,
  type = "text",
  placeholder,
  className,
  icon,
  error,
  register,
  rules,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>

      <div className="relative">
        {/* Optional Left Icon */}
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        )}

        {/* Input */}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(icon && "pl-9", className)}
          aria-invalid={Boolean(error)}
          {...register(id, rules)}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-destructive">{error.message}</p>
      )}
    </div>
  );
}
