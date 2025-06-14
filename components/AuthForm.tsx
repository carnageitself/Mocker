"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Illustration (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Image src="/logo.svg" alt="logo" height={24} width={24} />
            </div>
            <h1 className="text-3xl font-black text-white">PrepWise</h1>
          </div>

          {/* Illustration */}
          <div className="relative mb-8">
            <div className="w-80 h-80 relative">
              {/* AI Interview Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  {/* Robot/AI Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-white text-4xl">🤖</span>
                  </div>

                  {/* Interview Elements */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">💬</span>
                    </div>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">👤</span>
                    </div>
                  </div>

                  {/* Performance Indicators */}
                  <div className="flex space-x-3">
                    <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold border border-green-500/30">
                      98% Success
                    </div>
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30">
                      AI Powered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl font-bold text-white">
              Master Your Interview Skills
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Practice with AI-powered mock interviews, get instant feedback,
              and land your dream job with confidence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">15K+</div>
                <div className="text-xs text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-gray-400">Success</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">500+</div>
                <div className="text-xs text-gray-400">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-screen">
        {/* Mobile Background - Completely redesigned */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/2 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Desktop Background */}
        <div className="hidden lg:block absolute inset-0 bg-white"></div>

        <div className="relative z-10 w-full max-w-md mx-4 lg:mx-0 lg:p-12">
          {/* Mobile Header - Completely redesigned */}
          <div className="lg:hidden text-center mb-8 pt-8">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                <Image src="/logo.svg" alt="logo" height={28} width={28} />
              </div>
              <h1 className="text-4xl font-black text-white drop-shadow-lg">
                PrepWise
              </h1>
            </div>

            {/* Welcome message - cleaner design */}
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl font-bold text-white">
                {isSignIn ? "Welcome Back!" : "Get Started"}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                {isSignIn
                  ? "Sign in to continue your journey"
                  : "Create your account in seconds"}
              </p>
            </div>
          </div>

          {/* Desktop Form Header */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignIn ? "Welcome Back!" : "Join PrepWise"}
            </h2>
            <p className="text-gray-600">
              {isSignIn
                ? "Continue your AI interview preparation journey"
                : "Start mastering interviews with AI today"}
            </p>
          </div>

          {/* Form Container - Mobile optimized */}
          <div className="bg-white/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none rounded-3xl lg:rounded-none p-6 lg:p-0 shadow-2xl lg:shadow-none border border-white/20 lg:border-0">
            {/* Social Login Buttons - Mobile optimized */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center space-x-3 py-3.5 px-4 border border-gray-200 lg:border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-200 group bg-white shadow-sm hover:shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-700 font-semibold group-hover:text-gray-900">
                  Continue with Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center space-x-3 py-3.5 px-4 border border-gray-200 lg:border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-200 group bg-white shadow-sm hover:shadow-md">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-gray-700 font-semibold group-hover:text-gray-900">
                  Continue with Facebook
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  or continue with email
                </span>
              </div>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {!isSignIn && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      {...form.register("name")}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md text-base"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    {...form.register("password")}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md text-base"
                  />
                  {!isSignIn && (
                    <p className="text-xs text-gray-500 mt-2 px-1">
                      Must be at least 3 characters long
                    </p>
                  )}
                </div>

                {isSignIn && (
                  <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600 font-medium">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-500 font-semibold hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-0 mt-6 text-base"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>
                        {isSignIn ? "Signing In..." : "Creating Account..."}
                      </span>
                    </div>
                  ) : (
                    <span>{isSignIn ? "Sign In" : "Create Account"}</span>
                  )}
                </Button>
              </form>
            </Form>

            {/* Switch Auth Type */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {isSignIn ? "New to PrepWise?" : "Already have an account?"}
                <Link
                  href={!isSignIn ? "/sign-in" : "/sign-up"}
                  className="ml-1 text-blue-600 hover:text-blue-500 font-semibold hover:underline"
                >
                  {!isSignIn ? "Sign in" : "Create an account"}
                </Link>
              </p>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="lg:hidden text-center mt-6 pb-8">
            <p className="text-white/60 text-xs">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
