"use client";
import { useSelector } from "react-redux";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { RootState } from "@/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { initializeCart, isDecModalOpen, remove,setSelectedPizza } from "@/store/pizzaSlice";

import { useEffect } from "react";

const Decrpizza = () => {
  const { daupleitemCart, selectedPizza, isdecOpen } = useSelector(
    (state: RootState) => state.pizza
  );

   const dispatch = useDispatch();
  
    useEffect(() => {
       dispatch(initializeCart());
    }, [dispatch]);
  
   const closeModal = () => {
      dispatch(isDecModalOpen(false));
      dispatch(setSelectedPizza(null));
    };
  console.log(daupleitemCart, "itemCart in Decrpizza");

  return (
    <>
      {isdecOpen && selectedPizza ? (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md ">
            <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative border border-gray-400 transform transition-transform duration-300 scale-105 ">
                <button
                title="closeBtn"
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:rotate-90 hover:scale-110 rounded-full shadow-md hover:shadow-lg "
                onClick={() => closeModal()}

                >
                <AiOutlineCloseCircle className="w-6 h-6" />
                </button>
              <h2 className="text-3xl font-extrabold mb-6 text-center text-amber-900 decoration-wavy decoration-amber-600">
              Pizza Details
              </h2>
              {daupleitemCart
              .filter((item) => item.id === selectedPizza?.id)
              .map((item ,index) => (
              <div key={item.id} className="mb-3 flex items-center space-x-6 relative bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300 hover:bg-gray-100">
              <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className="w-20 h-20 rounded-lg border border-gray-400 hover:shadow-lg transition-shadow duration-300"
              />
              <div className="flex flex-col">
              <h3 className="text-cyan-900 text-xl font-semibold hover:text-cyan-700 transition duration-200">
              {item.title}
              </h3>
              <p className="text-gray-700">Size: {item.size}</p>
              <p className="text-gray-700">
              Extras: {item.extras?.map((extra) => extra.label).join(", ") || "None"}
              </p>
              <p className="text-gray-700 font-medium">
              Price: <span className="text-green-700 font-bold">${item.price?.toFixed(2) || "0.00"}</span>
              </p>
              </div>
              <button
              title="removeBtn"
              className="absolute top-2 right-2 text-red-900 hover:text-red-700 transition duration-200 ease-in-out transform hover:scale-110 hover:rotate-12"
              onClick={() => dispatch(remove({ index, id: item.id , selectedPizza}))}
              >
              <AiOutlineClose />
              </button>
              </div>
              ))}
            </div>
            </div>
        </>
      ) : null}
    </>
  );
};

export default Decrpizza;