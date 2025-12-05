"use client";

import { STEPS } from "@/src/features/campaign/constants";
import React from "react";

export function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex items-center justify-between w-full">
      {STEPS.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <div key={step.key} className="flex flex-1 flex-col items-center">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold
                ${
                  isActive
                    ? "border-[#5C2C9C] text-[#5C2C9C]"
                    : isCompleted
                    ? "border-[#B4E3B5] bg-[#B4E3B5] text-[#1C3B1D]"
                    : "border-[#E3C6FA] text-[#8E6AAE]"
                }`}
              >
                {index + 1}
              </div>

              <span
                className={`text-xs font-medium
                ${
                  isActive
                    ? "text-[#5C2C9C]"
                    : isCompleted
                    ? "text-[#1C3B1D]"
                    : "text-[#8E6AAE]"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < STEPS.length  && (
              <div className="mt-2 h-px w-full max-w-[120px] bg-[#E3C6FA]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
