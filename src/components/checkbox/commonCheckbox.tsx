"use client";

import { CheckIcon } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/src/utils/utils";

interface CommonCheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: string;
  error?: string;
}

export const CommonCheckbox = ({
  label,
  error,
  className,
  ...props
}: CommonCheckboxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center gap-3 cursor-pointer">
        <CheckboxPrimitive.Root
          className={cn(
            "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow " +
              "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary " +
              "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring " +
              "disabled:cursor-not-allowed disabled:opacity-50 " +
              "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="grid place-content-center">
            <CheckIcon className="size-3.5" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label && (
          <span className="text-sm text-foreground select-none">{label}</span>
        )}
      </label>

      {error && <p className="text-xs text-destructive pl-7">{error}</p>}
    </div>
  );
};
