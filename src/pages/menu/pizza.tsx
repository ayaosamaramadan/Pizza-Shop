import Pizzacard from "./pizzacard";
import Modiforder from "../modiforder";
import { db } from "@/lib/prisma";


 const Pizza  = async() => {

  const pizzas = await db.product.findMany();


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
