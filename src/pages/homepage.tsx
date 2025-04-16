"use client";
import Modiforder from "@/components/buttonactions/modiforder";
import Offers from "./offers";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Homepage = () => {
  const { selectedPizza, isModalOpen } = useSelector(
    (state: RootState) => state.pizza
  );
  return (
    <>
      <div className="flex ml-6">
        <Offers />
     
      </div>  {isModalOpen && selectedPizza && <Modiforder />}
     
      </>
  );
};

export default Homepage;
