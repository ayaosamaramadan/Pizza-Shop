"use client";
import Modiforder from "@/components/buttonactions/modiforder";
import Offers from "./offers";
// import Ordermenu from "../components/ordermenu";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Homepage = () => {
  const { selectedPizza, isModalOpen } = useSelector(
    (state: RootState) => state.pizza
  );
  return (
    <>
      <div className="flex ml-5">
        <Offers />
        
      </div>
      {isModalOpen && selectedPizza && <Modiforder />}
    </>
  );
};

export default Homepage;
