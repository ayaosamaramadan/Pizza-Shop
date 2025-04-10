"use client";
// import Header from "@/components/header";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Ordermenu from "../../components/ordermenu";
import Pizza from "./pizza";
import Decrpizza from "@/components/buttonactions/decrpizza";
import Checkout from "../checkout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Menu = () => {

  const {openCheckout} = useSelector((state: RootState) => state.pizza);
  return (
    <div className="flex">
      <Navbar />
      <Pizza />
       {openCheckout && <Checkout />}
      <Ordermenu />
      <Decrpizza />
    </div>
  );
};

export default Menu;
