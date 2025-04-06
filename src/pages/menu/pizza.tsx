import Image from "next/image";

const Pizza = () => {
    return (
        <div className=" flex-col p-6">
            <h1 className="text-3xl font-bold text-white mb-6">Pizzas Category</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Array(4).fill(null).map((_, index) => (
                    <div
                        key={index}
                        className=" shadow-md rounded-lg p-4 flex flex-col"
                    >
                        <Image
                            src={
                                "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png"
                            }
                            alt="Pizza"
                            width={170}
                            height={170}
                            className="bg-[#ffffff49] p-5 rounded-md"
                        />
                        <div className="mt-4">
                            <h1 className="text-lg font-semibold text-gray-700">Margarita</h1>
                            <button className="mt-2 px-4 py-2 bg-[#FF9921] text-white rounded hover:bg-[#ffb45f] cursor-pointer transition">
                                ADD
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pizza;
