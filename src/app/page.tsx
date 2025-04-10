"use client";
import Homepage from "@/pages/homepage";
import { initializeCart } from "@/store/pizzaSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  // const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart from localStorage when the app initializes
    dispatch(initializeCart());
  }, [dispatch]);

  return (
    <>
      <Homepage />
    
    </>
  );
}
