"use client";
import Checkout from "@/pages/checkout";
import Homepage from "@/pages/homepage";
import { RootState } from "@/store";
import { initializeCart } from "@/store/pizzaSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const {openCheckout} = useSelector((state: RootState) => state.pizza);

  useEffect(() => {
   dispatch(initializeCart());
  }, [dispatch]);

  return (
    <>
    {openCheckout && <Checkout />}
      <Homepage />
    
    </>
  );
}
