import { useEffect, useState } from "react";
// import Image from "next/image";
import Pizzacard from "./pizzacard";
import Modiforder from "../modiforder";
import Decrpizza from "../decrpizza";
const CategoriesWithProducts = () => {
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  interface Category {
    id: number;
    name: string;
    products: Product[];
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesWithProducts = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories with products:", err);
        setError("Failed to load categories with products.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesWithProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="flex flex-col p-6 md:p-10 mx-4 md:ml-32 rounded-lg shadow-lg">
        {categories.map((category) => (
          <div key={category.id} className="mb-10">
        <h1 className="bg-gradient-to-b from-[#ff7b00] to-[#FEB47B] text-transparent bg-clip-text text-2xl md:text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
          {category.name}
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((pizza) => (
            <Pizzacard key={pizza.id} pizza={pizza} />
          ))}
        </ul>
          </div>
        ))}
      </div>

      <Modiforder />
      <Decrpizza/>
    </>
  );
};

export default CategoriesWithProducts;
