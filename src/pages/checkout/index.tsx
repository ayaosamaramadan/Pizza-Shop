const Checkout = () => {
    return ( <>
   <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md ">
        <form className="bg-[#201818] p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Checkout</h2>
            <div className="mb-4">
            <label htmlFor="phonee" className="block text-sm font-medium text-gray-300">
                Phone
            </label>
            <input
                type="text"
                id="phonee"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your phone number"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-300">
                Street Address
            </label>
            <input
                type="text"
                id="street"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your address"
            />
            </div>
            <div className="mb-4 flex gap-4">
            <div className="flex-1">
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-300">
                Postal Code
                </label>
                <input
                type="text"
                id="postalCode"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter postal code"
                />
            </div>
            <div className="flex-1">
                <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                City
                </label>
                <input
                type="text"
                id="city"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter city"
                />
            </div>
            </div>
            <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-300">
                Country
            </label>
            <input
                type="text"
                id="country"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter country"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
            Pay Now
            </button>
        </form>
        </div>
    </> );
}
 
export default Checkout;