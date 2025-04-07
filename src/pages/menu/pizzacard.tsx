import Image from "next/image";
import { useDispatch } from "react-redux";

import {
  setIsModalOpen,
  setSelectedPizza,
  setSelectedSize,
  setSelectedExtras,
  setTotalPrice,
} from "@/store/pizzaSlice";

import { sizes } from "@/app/data/pizza";
import { PizzaType } from "@/types/pizzatype";
const PizzaCard = ({ pizza }: { pizza: PizzaType }) => {
  const dispatch = useDispatch();

  const openModal = (pizza: PizzaType) => {
    dispatch(setSelectedPizza(pizza));
    dispatch(setSelectedSize(sizes[0].value));
    dispatch(setSelectedExtras([]));
    dispatch(setTotalPrice(pizza.price));
    dispatch(setIsModalOpen(true));
  };
  return (
    <>
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
    </>
  );
};

export default PizzaCard;
