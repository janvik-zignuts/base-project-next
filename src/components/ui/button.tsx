"use client";

import { Button as HeroButton } from "@heroui/react";
import type { ButtonProps as HeroButtonProps } from "@heroui/react";

export interface ButtonProps extends HeroButtonProps {
  // You can add your own custom props here if needed
  loading?: boolean;
  
}

export const Button = ({
  children,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <HeroButton  {...props} isLoading={loading}>
      {children}
    </HeroButton>
  );
};
