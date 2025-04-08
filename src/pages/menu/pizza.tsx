import { useEffect, useState } from "react";
import Image from "next/image";
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
    <div className="flex flex-col p-10 ml-32 rounded-lg shadow-lg ">
      <h1>Categories and Products</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.products.map((product) => (
              <li key={product.id}>
                <Image
                  src={product.image} 
                    alt={product.title}
                  width={100}
                  height={100}
                  className="w-auto h-auto object-cover mx-auto rounded-md shadow-md"
                />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoriesWithProducts;
