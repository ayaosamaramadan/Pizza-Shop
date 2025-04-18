"use client";
import Link from "next/link";
import { GoLock, GoPerson } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { signupSchema } from "@/validations/auth";
import { ZodError } from "zod";
import { useState } from "react";
import { signNewUser } from "@/server/actions/auth";
import { toast } from "react-toastify";

const Signupform = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      signupSchema.parse(formState);

      setErrors({});

      const response = await signNewUser(formState);

      if (response.success) {
         
        console.log("User registered successfully!");
        toast.success("Congratulations! You have successfully registered", {
          position: "bottom-left",
          autoClose: 2000,
          className: "toast-success",
        });
      } else {
        // console.error("Registration failed:", response.message);
        toast.error(response.message, {
          position: "bottom-left",
          autoClose: 2000,
          className: "toast-error",
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0] as string] = err.message;
        });

        setErrors(validationErrors);
      }
    }
  };


 
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
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
            <h1 className="text-2xl font-bold text-gray-100">Register</h1>
          </div>

          
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
                value={formState.name}
                onChange={handleChange}
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Enter your name"
                required
              />
            
            </div>  {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
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
                value={formState.email}
                onChange={handleChange}
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            
            </div>  {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
          </div>

          {/* Password Input */}
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
                value={formState.password}
                onChange={handleChange}
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Enter your password"
                minLength={8}
                required
              />
             
            </div> {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
          </div>

          {/* Confirm Password Input */}
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
                value={formState.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 pl-10 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-orange-600 focus:ring-orange-600 sm:text-sm"
                placeholder="Confirm your password"
                minLength={8}
                required
              />
             
            </div> {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
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
                href={"/auth/signin"}
                className="ml-3 text-orange-400 hover:text-orange-500"
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
