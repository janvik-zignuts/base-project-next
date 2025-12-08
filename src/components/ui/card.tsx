import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { cn } from "@/src/utils/utils";

// Re-export HeroUI components
export { Card, CardHeader, CardBody, CardFooter };

// For backward compatibility, map old component names
export const CardContent = CardBody;
export const CardTitle = ({ children, className, ...props }: any) => (
  <div className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </div>
);
export const CardDescription = ({ children, className, ...props }: any) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
);
