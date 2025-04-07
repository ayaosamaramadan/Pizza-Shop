import Image from "next/image";
import { useState } from "react";
import { PizzaType, SizeExtras } from "@/types/pizzatype";
import Modiforder from "../modiforder";
import { pizzas, sizes } from "@/app/data/pizza";

const Pizza = () => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<PizzaType | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<SizeExtras[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState(sizes[0].value);
      
 
  const openModal = (pizza: PizzaType) => {
    setSelectedPizza(pizza);
    setSelectedSize(sizes[0].value);
    setSelectedExtras([]);
    setTotalPrice(pizza.price);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="flex flex-col p-10 ml-32 rounded-lg shadow-lg ">
      <h1 className="bg-gradient-to-b from-[#ff7b00] to-[#FEB47B] text-transparent bg-clip-text text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
        Discover Your Favorite Pizza
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {pizzas.map((pizza: PizzaType) => (
        <div
          key={pizza.id}
          className="shadow-lg rounded-lg p-4 flex flex-col bg-white hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-[#FFF5E6] border border-[#FF5722]"
        >
          <div className="relative w-full">
          <Image
            src={pizza.image}
            alt={pizza.title}
            width={250}
            height={250}
            className="object-cover rounded-md w-auto h-auto mx-auto hover:opacity-90 transition-opacity"
          />
          </div>
          <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 text-center hover:text-[#FF5722] transition-colors drop-shadow-md">
            {pizza.title}
          </h2>
          <p className="text-gray-600 text-center mt-2 hover:text-gray-800 transition-colors">
            {pizza.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-[#FF5722] font-bold text-lg drop-shadow-sm">
            ${pizza.price}
            </p>
            <button
            type="button"
            onClick={() => openModal(pizza)}
            className="cursor-pointer px-4 py-2 bg-[#FF5722] text-white font-semibold rounded-full hover:bg-[#FF7043] transition shadow-md hover:shadow-lg"
            >
            Order Now
            </button>
          </div>
          </div>
        </div>
        ))}
      </div>
      </div>

     <Modiforder 
     setTotalPrice={setTotalPrice}
     setIsModalOpen={setIsModalOpen}
      selectedPizza={selectedPizza} 
      isModalOpen={isModalOpen}
      selectedExtras={selectedExtras}
      totalPrice={totalPrice}
      selectedSize={selectedSize}
      setSelectedPizza={setSelectedPizza}
      setSelectedSize={setSelectedSize}
      setSelectedExtras={setSelectedExtras}
      />
    </>
  );
};

export default Pizza;
