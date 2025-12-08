/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { ReactNode, useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Input } from "@heroui/react";

interface InputFieldProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  error?: FieldError | undefined;
  register: UseFormRegister<any>;
  rules?: any;
}

export const InputField: React.FC<InputFieldProps> = ({
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
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <Input
        id={id}
        type={inputType}
        placeholder={placeholder}
        variant="faded"
        {...register(id, rules)}
        classNames={{
          inputWrapper: [
            "bg-[#fff0f8]",
            "rounded-xl",
            "h-12",
            "border-none",
            "shadow-none",
            "outline-none",
            "!outline-0",
            "!ring-0",
            "focus:ring-0",
            "focus:outline-none",
            "data-[hover=true]:ring-0",
            "data-[focus=true]:ring-0",
            "data-[focus=true]:border-none",
            "value-bg-change",
          ].join(" "),
          input: "text-gray-800 pl-1",
        }}
        startContent={<span className="text-gray-500">{icon}</span>}
        endContent={
          isPassword && (
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="focus:outline-none"
            >
              {isVisible ? (
                <EyeIcon className="w-5 h-5 text-[#856EAA]" />
              ) : (
                <EyeClosedIcon className="w-5 h-5 text-[#856EAA]" />
              )}
            </button>
          )
        }
        isInvalid={!!error?.message}
        errorMessage={error?.message as React.ReactNode}
      />
      {error?.message && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
};
