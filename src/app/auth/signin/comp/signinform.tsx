"use client";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { signIn } from "next-auth/react";
import  {useRef, useState}  from "react";
import { loginSchema } from "@/validations/auth";
import { ZodError } from "zod";

const Signinform = () => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const formrefref = useRef<HTMLFormElement>(null);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!formrefref.current) return;

    const formData = new FormData(formrefref.current);

    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);

    // console.log(data);

    try{
      loginSchema().parse(data);

     const res=await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
     } );

     if (res?.error) {
      setGeneralError("Invalid email or password.");
    } else {
      alert("Login successful!");
    }



    } 


    catch (error) {
      if (error instanceof ZodError) {
        // Handle Zod validation errors
        error.errors.forEach((err) => {
          if (err.path[0] === "email") {
            setEmailError(err.message);
          }
          if (err.path[0] === "password") {
            setPasswordError(err.message);
          }
        });
      } else {
        console.error("Error signing in:", error);
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
        <form
        
        onSubmit={handleLogin}

        ref={formrefref}
        noValidate
        
         className="bg-[#201818] p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex items-center gap-6 mb-6">
            <button
              type="button"
              className="cursor-pointer text-gray-300 hover:text-white focus:outline-none"
              aria-label="Go back"
            >
              <IoArrowBack size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Welcome Back</h1>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
              {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              minLength={8}
              required
            />
             {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="remember"
              className="inline-flex items-center text-sm text-gray-300"
            >
              <input
                type="checkbox"
                id="remember"
                className="mr-2 rounded border-gray-600 bg-gray-700 text-orange-400 focus:ring-orange-500"
              />
              Remember me
            </label>
          </div>

          {generalError && (
            <p className="text-red-500 text-sm mb-4">{generalError}</p>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Log In
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">
            Do not have an account?
            <Link
              href="/auth/signup"
              className="text-orange-400 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signinform;
