import { useEffect, useState } from "react";
import Pizzacard from "./pizzacard";
import Modiforder from "../modiforder";
import { PizzaType } from "@/types/pizzatype";

const Pizza = () => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("/api/pizzas"); // Call the API route
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizzas(data); // Set the fetched pizzas
      } catch (err) {
        console.error("Error fetching pizzas:", err);
        setError("Failed to load pizzas.");
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="flex flex-col p-10 ml-32 rounded-lg shadow-lg ">
        <h1 className="bg-gradient-to-b from-[#ff7b00] to-[#FEB47B] text-transparent bg-clip-text text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
          Discover Your Favorite Pizza
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pizzas.map((pizza) => (
            <Pizzacard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>

      <Modiforder />
    </>
  );
};

export default Pizza;
