import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const SignUpPage = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
        <form
          //   onSubmit={onsubmit}
          //   ref={formref}
          className="bg-[#201818] p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex items-center gap-6 mb-6">
            <button
              type="button"
              //   onClick={closeModal}
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
            <input
              type="name"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
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
          </div>

          <div className="mb-4">
            <label
              htmlFor="remember"
              className="inline-flex items-center text-sm text-gray-300"
            >
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2 rounded border-gray-600 bg-gray-700 text-orange-400 focus:ring-orange-500"
              />
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">
            Already have an account?
            <Link
              href="/auth/signin"
              className="text-orange-400 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;