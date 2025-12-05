import type { Metadata } from "next";
import { LoginForm } from "@/src/features/auth/components/loginForm";

export const metadata: Metadata = {
  title: "Login | Base Setup",
  description: "Secure access to the Base Setup dashboard.",
};

export default function LoginPage() {
  return (
   
    <div
      className="min-h-screen flex flex-col justify-center relative"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white w-full py-8 px-4 sm:rounded-xl shadow-xl border relative">
          <h1 className="text-center text-[20px] font-medium">
            Sign in with email
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

