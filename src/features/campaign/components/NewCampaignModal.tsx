"use client";

import { useState } from "react";

import { CommonModal } from "@/src/components/modal/commonModal";
import { useModal } from "@/src/components/modal/context/modalContext";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { STEPS } from "../constants";
import { Stepper } from "@/src/components/ui/stepper";
import { StepBasics } from "./stepBasic";
import { StepTimeline } from "./stepTimeline";


export function NewCampaignModal() {
  const { type, isOpen, openModal, closeModal } = useModal();
  const [activeStep, setActiveStep] = useState(0);

  const isNewCampaignOpen = isOpen && type === "newCampaign";

  const handleContinue = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      closeModal();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  const footer = (
    <div className="flex w-full items-center justify-between gap-3 pt-2">
      <Button
        variant="outline"
        className="rounded-full border-[#E3C6FA] bg-white px-6 text-xs font-medium text-[#3B2B4A] hover:bg-[#F7ECFF]"
        onClick={closeModal}
      >
        Continue later
      </Button>
      <div className="flex items-center gap-2">
        {activeStep > 0 && (
          <Button
            variant="outline"
            className="rounded-full border-[#D9D9D9] bg-white px-6 text-xs font-medium text-[#3B2B4A] hover:bg-[#F5F5F5]"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        <Button
          className="rounded-full bg-[#B4E3B5] px-6 text-xs font-semibold text-[#1C3B1D] hover:bg-[#a3d6a4]"
          onClick={handleContinue}
        >
          {activeStep === STEPS.length - 1 ? "Create campaign" : "Let's talk timelines"}
        </Button>
      </div>
    </div>
  );

  return (
    <CommonModal
      open={isNewCampaignOpen}
      onOpenChange={(open) => {
        if (open) {
          openModal("newCampaign");
        } else {
          closeModal();
          setActiveStep(0);
        }
      }}
      title="New Campaign"
      width="max-w-3xl"
      footer={footer}
    >
      <div className="space-y-6">
        {/* Stepper */}
        {/* <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {STEPS.map((label, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div key={label} className="flex flex-1 flex-col items-center text-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                        isActive
                          ? "border-[#5C2C9C] bg-white text-[#5C2C9C]"
                          : isCompleted
                          ? "border-[#B4E3B5] bg-[#B4E3B5] text-[#1C3B1D]"
                          : "border-[#E3C6FA] bg-white text-[#8E6AAE]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isActive
                          ? "text-[#5C2C9C]"
                          : isCompleted
                          ? "text-[#1C3B1D]"
                          : "text-[#8E6AAE]"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {index < STEPS.length && (
               
                    <div className="mt-2 h-px w-full max-w-[120px] bg-[#E3C6FA]" />
                  )}
                </div>
              );
            })}
          </div>
        </div> */}

 <Stepper activeStep={activeStep} />

        {/* Step content – for now only Basics fields as in design */}
        {/* {activeStep === 0 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="block text-xs font-medium text-[#3B2B4A]">
                Name your campaign*
              </label>
              <Input
                placeholder="Name your campaign"
                className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs placeholder:text-[#B29CCC]"
              />

              <label className="mt-3 block text-xs font-medium text-[#3B2B4A]">
                Goal
              </label>
              <Input
                placeholder="Grow brand awareness with Gen Z skincare lovers"
                className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs placeholder:text-[#B29CCC]"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-medium text-[#3B2B4A]">
                Client or Brand*
              </label>
              <Input
                placeholder="Client or Brand"
                className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs placeholder:text-[#B29CCC]"
              />

              <label className="mt-3 block text-xs font-medium text-[#3B2B4A]">
                Description
              </label>
              <Input
                placeholder="We are launching a new toner and want creators to share their honest glowy skin stories"
                className="h-10 rounded-xl border-[#E3C6FA] bg-[#F7ECFF] text-xs placeholder:text-[#B29CCC]"
              />
            </div>
          </div>
        )} */}

         {activeStep === 0 && <StepBasics />}
         {activeStep === 1 && <StepTimeline />}
      </div>
    </CommonModal>
  );
}
