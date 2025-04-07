import { PizzaType, SizeExtras } from "@/types/pizzatype";

export const pizzas: PizzaType[] = [
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

  {
    id: 3,
    title: "Pepperoni",
    image:
      "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png",
    price: 43,
    description: "8 inch Pepperoni pizza with extra cheese",
  },
  {
    id: 4,
    title: "Pepperoni",
    image:
      "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png",
    price: 43,
    description: "8 inch Pepperoni pizza with extra cheese",
  },
  {
    id: 5,
    title: "Margarita",
    image:
      "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png",
    price: 10,
    description: "8 inch classic Margarita pizza",
  },
];

export const sizes: SizeExtras[] = [
  { label: "Small", value: 0 },
  { label: "Medium", value: 5 },
  { label: "Large", value: 10 },
];

export const extras: SizeExtras[] = [
  { label: "Cheese", value: 2 },
  { label: "Pepperoni", value: 3 },
  { label: "Mushrooms", value: 1.5 },
];
