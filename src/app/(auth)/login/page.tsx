import type { Metadata } from "next";
import { LoginForm } from "@/src/features/auth/components/loginForm";

export const metadata: Metadata = {
  title: "Login | Base Setup",
  description: "Secure access to the Base Setup dashboard.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4 py-16">
      <div className="mb-8 text-center space-y-2">
      </div>
      <LoginForm />
    </main>
  );
}

