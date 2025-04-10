import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType, SizeExtras } from "@/types/pizzatype";

type itemCartTypes = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  size: number;
  extras: SizeExtras[];
  image: string;
  description?: string;
};

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

interface PizzaState {
  isModalOpen: boolean;
  selectedPizza: PizzaType | null;
  selectedExtras: SizeExtras[];
  totalPrice: number;
  selectedSize: number;
  itemCart: itemCartTypes[];
  isdecOpen: boolean;
  daupleitemCart: itemCartTypes[];
  categories: Category[];
}

const initialState: PizzaState = {
  isModalOpen: false,
  selectedPizza: null,
  selectedExtras: [],
  totalPrice: 0,
  selectedSize: 0,
  itemCart: [],
  isdecOpen: false,
  daupleitemCart: [],
  categories: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // Initialize cart from localStorage
    initializeCart(state) {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("itemCart");
        state.itemCart = storedCart ? JSON.parse(storedCart) : [];

        const storedDaupleCart = localStorage.getItem("daupleitemCart");
        state.daupleitemCart = storedDaupleCart ? JSON.parse(storedDaupleCart) : [];
      }
    },

    // Add an item to the cart
    addtocart(
      state,
      action: PayloadAction<{
        pizza: PizzaType;
        size: number;
        extras: SizeExtras[];
        price: number;
        image: string;
      }>
    ) {
      const { pizza, size, extras, price } = action.payload;

      const existingPizza = state.itemCart.find((item) => item.id === pizza.id);

      if (existingPizza) {
        existingPizza.quantity += 1;
        existingPizza.price += price;
      } else {
        state.itemCart.push({
          id: pizza.id,
          title: pizza.title,
          size: size,
          extras: extras,
          image: pizza.image,
          price: price,
          quantity: 1,
        });
      }

      // Add to daupleitemCart
      state.daupleitemCart.push({
        id: pizza.id,
        title: pizza.title,
        size: size,
        extras: extras,
        image: pizza.image,
        price: price,
        quantity: 1,
      });

      // Save updated carts to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("itemCart", JSON.stringify(state.itemCart));
        localStorage.setItem("daupleitemCart", JSON.stringify(state.daupleitemCart));
      }
    },

    // Remove an item from the cart
    remove(
      state,
      action: PayloadAction<{
        id: number;
      }>
    ) {
      const { id } = action.payload;

      // Remove from itemCart
      const itemInCart = state.itemCart.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.quantity -= 1;
        itemInCart.price -= itemInCart.price / (itemInCart.quantity + 1); // Adjust price
        if (itemInCart.quantity === 0) {
          state.itemCart = state.itemCart.filter((item) => item.id !== id);
        }
      }

      // Remove from daupleitemCart
      state.daupleitemCart = state.daupleitemCart.filter((item) => item.id !== id);

      // Save updated carts to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("itemCart", JSON.stringify(state.itemCart));
        localStorage.setItem("daupleitemCart", JSON.stringify(state.daupleitemCart));
      }
    },

    // Set modal open state
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },

    // Set selected pizza
    setSelectedPizza(state, action: PayloadAction<PizzaType | null>) {
      state.selectedPizza = action.payload;
    },

    // Set selected extras
    setSelectedExtras(state, action: PayloadAction<SizeExtras[]>) {
      state.selectedExtras = action.payload;
    },

    // Set total price
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },

    // Set selected size
    setSelectedSize(state, action: PayloadAction<number>) {
      state.selectedSize = action.payload;
    },

    // Set decrement modal open state
    isDecModalOpen(state, action: PayloadAction<boolean>) {
      state.isdecOpen = action.payload;
    },

    // Set categories
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const {
  initializeCart,
  addtocart,
  remove,
  setIsModalOpen,
  setSelectedPizza,
  setSelectedExtras,
  setTotalPrice,
  setSelectedSize,
  isDecModalOpen,
  setCategories,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;