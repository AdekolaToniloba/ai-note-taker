"use client"

import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type?: "login" | "signUp";
}



function AuthForm({type}: Props) { 
    const isLoginForm = type === "login";
  const isSignUpForm = type === "signUp";
  const router = useRouter()
  const { toast } = useToast();


  const [isPending, startTransition] = useTransition()
  const handleSubmit = (formData: FormData) => {
    console.log("Form Submitted...")
  }


  return (
    <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="mt-2 mb-4"
                    disabled={isPending}
                />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="mt-2 mb-4"
                    disabled={isPending}
                />
                </div>
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-4">
            <Button className="w-full cursor-pointer">
                {isPending ? <Loader2 className="animate-spin" /> : isLoginForm ? "Log In" : "Sign Up"}
            </Button>
            <p className="text-xs">
                {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
                <Link href={isLoginForm ? "/sign-up" : "/login"} className={`text-blue-500 hover:underline ${isPending ? "pointer-events-none opacity-50" : ""}`}>
                    {isLoginForm ? "Sign Up" : "Log In"}    
                    </Link>
            </p>
        </CardFooter>
    </form>
  )
}

export default AuthForm