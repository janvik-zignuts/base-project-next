"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/src/components/ui/dialog";

import { Button } from "@/src/components/ui/button";

interface CommonModalProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showClose?: boolean;
  footer?: ReactNode;
  width?: string; // e.g. "max-w-xl"
}

export function CommonModal({
  title,
  description,
  children,
  open,
  onOpenChange,
  showClose = true,
  footer,
  width = "max-w-lg",
}: CommonModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={width}>
        {/* Header */}
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}

        {/* Body */}
        <div className="py-2">{children}</div>

        {/* Footer */}
        {footer && <DialogFooter>{footer}</DialogFooter>}

        {/* Close button */}
        {/* {showClose && (
          <DialogClose asChild>
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-3 top-3"
            >
              ✕
            </Button>
          </DialogClose>
        )} */}
      </DialogContent>
    </Dialog>
  );
}
