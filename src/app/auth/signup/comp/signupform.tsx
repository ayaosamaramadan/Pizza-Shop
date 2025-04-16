"use client";
import Link from "next/link";
import { useActionState } from "react";
import { GoLock, GoPerson } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { signNewUser } from "@/server/actions/auth"; // Replace with your signup action

const Signupform = () => {

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: 0,
    error: "",
  };


  const [state, action] = useActionState(signNewUser, initialState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatError = (error: any): string => {
    if (typeof error === "string") {
      return error;
    }
    if (error && typeof error === "object") {
      return Object.values(error).flat().join(", ");
    }
    return "An unknown error occurred.";
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
        <form
          action={action}
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
            <h1 className="text-2xl font-bold text-gray-100">Register</h1>
          </div>

          {/* General Error */}
          {state.error && (
            <div className="mb-4 text-red-500 text-sm">
              {formatError(state.error)}
            </div>
          )}

          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <GoPerson />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Enter your name"
                required
              />
            </div>
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
                <GoLock />
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
          </div>

   
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <GoLock />
              </span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Confirm your password"
                minLength={8}
                required
              />
            </div>
          </div>

         
          <button
            type="submit"
            className={`w-full cursor-pointer bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-orange-600`}
          >
            Register
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300">
              Already have an account?
              <Link
                href="auth/signin"
                className="text-orange-400 hover:text-orange-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signupform;
