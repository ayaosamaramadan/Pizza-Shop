"use client";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { loginSchema } from "@/validations/auth";
import { ZodError } from "zod";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signinform = () => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  const formrefref = useRef<HTMLFormElement>(null);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formrefref.current) return;

    const formData = new FormData(formrefref.current);

    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);

    // console.log(data);

    try {
      loginSchema().parse(data);
      setIsLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        setGeneralError("Invalid email or password.");
      } else {
        alert("Login successful!");
      }
    } catch (error) {
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
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
        <form
          onSubmit={handleLogin}
          ref={formrefref}
          noValidate
          className="bg-[#201818] p-6 rounded-lg shadow-lg w-full max-w-md"
        >
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
            <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <MdAlternateEmail />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
              placeholder="Enter your email"
              required
            />
            </div>
          
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

            <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <RiLockPasswordLine />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
               placeholder="Enter your password"
              minLength={8}
              required
            />
            </div>
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
            {isLoading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">
            Do not have an account?
            <Link
              href="/auth/signup"
              className="ml-3 text-orange-400 hover:underline"
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
