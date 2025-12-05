"use client";

import { Input } from "@/src/components/ui/input";

export const  StepBasics=()=> {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-3">
        <label className="text-xs font-medium text-[#3B2B4A]">
          Name your campaign*
        </label>
        <Input
          placeholder="Name your campaign"
          className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs"
        />

        <label className="text-xs font-medium text-[#3B2B4A]">Goal</label>
        <Input
          placeholder="Grow brand awareness with Gen Z skincare lovers"
          className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs"
        />
      </div>

      <div className="space-y-3">
        <label className="text-xs font-medium text-[#3B2B4A]">
          Client or Brand*
        </label>
        <Input
          placeholder="Client or Brand"
          className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs"
        />

        <label className="text-xs font-medium text-[#3B2B4A]">
          Description
        </label>
        <Input
          placeholder="We are launching a new toner..."
          className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs"
        />
      </div>
    </div>
  );
}
