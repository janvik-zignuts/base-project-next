/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/src/utils/utils";
import { FieldError, UseFormRegister } from "react-hook-form";


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

export const InputField:React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  icon,
  register,
  rules,
  error,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && isVisible ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        {/* Left Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center">
          {icon}
        </div>

        {/* Input */}
        <Input
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...register(id, rules)}
          className={cn(
            "pl-10 pr-12",
            error && "border-red-500"
          )}
        />

        {/* Right Eye Icon (only for password field) */}
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? (
              <EyeIcon className="text-[#856EAA] w-5 h-5" />
            ) : (
              <EyeClosedIcon className="text-[#856EAA] w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};
