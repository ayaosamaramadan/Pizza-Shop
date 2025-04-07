import Image from "next/image";
import { useState } from "react";

const pizzas = [
  {
    id: 1,
    title: "Margarita",
    image:
      "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png",
    price: 10,
    description: "8 inch classic Margarita pizza",
  },
  {
    id: 2,
    title: "Pepperoni",
    image:
      "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png",
    price: 12,
    description: "8 inch Pepperoni pizza with extra cheese",
  },
];

const sizes = [
  { label: "Small", value: 0 },
  { label: "Medium", value: 5 },
  { label: "Large", value: 10 },
];
const extras = [
  { label: "Cheese", value: 2 },
  { label: "Pepperoni", value: 3 },
  { label: "Mushrooms", value: 1.5 },
];

const Pizza = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState(sizes[0].value);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setSelectedSize(sizes[0].value);
    setSelectedExtras([]);
    setTotalPrice(pizza.price);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  const handleSizeChange = (size) => {
    const basePrice = selectedPizza.price;
    const extrasPrice = selectedExtras.reduce(
      (acc, extra) => acc + extra.value,
      0
    );
    setSelectedSize(size);
    setTotalPrice(basePrice + extrasPrice + (size - sizes[0].value));
  };

  const handleExtraChange = (extra) => {
    const isSelected = selectedExtras.find((e) => e.label === extra.label);
    let updatedExtras;

    if (isSelected) {
      updatedExtras = selectedExtras.filter((e) => e.label !== extra.label);
    } else {
      updatedExtras = [...selectedExtras, extra];
    }

    const basePrice = selectedPizza.price;
    const extrasPrice = updatedExtras.reduce((acc, e) => acc + e.value, 0);
    setSelectedExtras(updatedExtras);
    setTotalPrice(basePrice + extrasPrice + (selectedSize - sizes[0].value));
  };

  return (
    <>
      <div className="flex flex-col p-6 ml-20">
        <h1 className="text-3xl font-bold text-white mb-6">Pizzas Category</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="shadow-lg rounded-lg p-4 flex flex-col bg-white hover:shadow-xl transition-shadow"
            >
              <Image
                src={pizza.image}
                alt={pizza.title}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="mt-4">
                <h1 className="text-lg font-semibold text-gray-800">
                  {pizza.title}
                </h1>
                <p className="text-gray-600">{pizza.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#01C550] font-semibold">${pizza.price}</p>
                  <button
                    onClick={() => openModal(pizza)}
                    type="button"
                    className="mt-2 px-4 py-2 bg-[#FF9921] text-white rounded hover:bg-[#ffb45f] transition"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedPizza && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              X
            </button>
            <Image
              src={selectedPizza.image}
              alt={selectedPizza.title}
              width={250}
              height={250}
              className="w-auto h-auto object-cover mx-auto rounded-md"
            />
            <h2 className="text-xl font-semibold mb-4 text-black text-center">
              {selectedPizza.title}
            </h2>
            <p className="text-center text-black">
              {selectedPizza.description}
            </p>

            <div>
              <p className="text-black font-semibold mb-2">Pick Your Size</p>
              <div className="flex justify-center gap-4 mb-4">
                {sizes.map((size) => (
                  <label key={size.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="size"
                      value={size.value}
                      checked={selectedSize === size.value}
                      onChange={() => handleSizeChange(size.value)}
                    />
                    <span className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition cursor-pointer">
                      {size.label}
                    </span>
                  </label>
                ))}
              </div>

              <p className="text-black font-semibold mb-2">Any Extras?</p>
              <div className="flex justify-center gap-4">
                {extras.map((extra) => (
                  <label key={extra.label} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="extra"
                      value={extra.value}
                      checked={selectedExtras.some(
                        (e) => e.label === extra.label
                      )}
                      onChange={() => handleExtraChange(extra)}
                    />
                    <span className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition cursor-pointer">
                      {extra.label} (+${extra.value})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button className="mt-4 px-4 py-2 bg-[#01C550] text-white rounded hover:bg-[#03e06b] transition">
              Add to cart - ${totalPrice.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Pizza;
