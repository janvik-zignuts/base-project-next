"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {  Lock, AtSign } from "lucide-react";
// import { yupResolver } from "@hookform/resolvers/yup"; // ⬅️ ADD THIS

import { Button } from "@/src/components/ui/button";
import { useAuthContext } from "@/src/features/auth/context/authContext";
import { InputField } from "@/src/components/inputs/InputField";
import { LoginFormValues } from "../types";
import { LOGIN_FORM_DEFAULT_VALUES } from "../constants";
import { EMAIL_REGEX } from "@/src/constants/regex";
import { Spinner } from "@/src/components/ui/spinner";

export const LoginForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
	
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		defaultValues: LOGIN_FORM_DEFAULT_VALUES,
		// resolver: yupResolver(loginSchema),
		mode: "onBlur",
	});
	const { state: authState, setCredentials } = useAuthContext();

	const onSubmit = async (values: LoginFormValues) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setCredentials({ email: values.email });
		router.push("/campaigns");
	};

	useEffect(() => {
		if (authState.status === "authenticated") {
			router.replace("/campaigns");
		}
	}, [authState.status, router]);


	return (
		<>
			
				<form onSubmit={handleSubmit(onSubmit)}  className="space-y-5 px-8 mt-6">
					{/* Email */}
					<InputField
					
						id="email"
						label="Email"
						type="email"
						placeholder="you@company.com"
						icon={<AtSign className="size-4" />}
						register={register}
						error={errors.email}
						rules={{
							required: "Email is required",
							pattern: {
								value: EMAIL_REGEX,
								message: "Enter a valid email",
							},
						}}
					/>

					{/* Password */}
					<InputField
						id="password"
						label="Password"
						type="password"
						placeholder="********"
						icon={<Lock className="size-4" />}
						register={register}
						error={errors.password}
						rules={{
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Use at least 8 characters",
							},
						}}
					/>

					<Button
						type="submit"
						className="w-full rounded-lg h-12  mt-6 bg-[#B1CFAA] text-black"
						disabled={isSubmitting}
					>
						{isSubmitting ? <Spinner className="size-6"/> : "Let's Go"}
					</Button>
				</form>

      
		</>
	);
};
