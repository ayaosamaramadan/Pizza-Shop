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
  itemCart: [], // Initialize as empty; will be loaded on the client
  isdecOpen: false,
  daupleitemCart: [],
  categories: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    initializeCart(state) {
      // Load cart from localStorage on the client
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("itemCart");
        state.itemCart = storedCart ? JSON.parse(storedCart) : [];
      }
    },
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

      // Save updated cart to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("itemCart", JSON.stringify(state.itemCart));
      }
    },
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setSelectedPizza(state, action: PayloadAction<PizzaType | null>) {
      state.selectedPizza = action.payload;
    },
    setSelectedExtras(state, action: PayloadAction<SizeExtras[]>) {
      state.selectedExtras = action.payload;
    },
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
    setSelectedSize(state, action: PayloadAction<number>) {
      state.selectedSize = action.payload;
    },
    isDecModalOpen(state, action: PayloadAction<boolean>) {
      state.isdecOpen = action.payload;
    },
    
    // remove(
    //   state,
    //   action: PayloadAction<{
    //     id: number;
    //   }>
    // ) {
    //   state.itemCart = state.itemCart.filter(
    //     (item) => item.id !== action.payload.id
    //   );

    //   // Save updated cart to localStorage
    //   if (typeof window !== "undefined") {
    //     localStorage.setItem("itemCart", JSON.stringify(state.itemCart));
    //   }
    // },

    remove(
      state,
      action: PayloadAction<{
        index: number;
        id: number;
        selectedPizza: PizzaType | null;
      }>
    ) {
      const { index, id } = action.payload;
      const itemInCart = state.itemCart.find((item) => item.id === id);
      const selectedItem = state.daupleitemCart.find((item) => item.id === id);
      const itemIndex = state.daupleitemCart.findIndex(
        (item) => item.id === id
      );

      if (typeof window !== "undefined") {
            localStorage.setItem("itemCart", JSON.stringify(state.itemCart));
          }

      state.daupleitemCart.splice(selectedItem ? itemIndex : index, 1);
      if (itemInCart) {
        itemInCart.quantity -= 1;
        itemInCart.price -= selectedItem?.price || 0;
        if (itemInCart.quantity === 0) {
          state.itemCart = state.itemCart.filter((item) => item.id !== id);
        }
      }
    },



    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const {
  initializeCart,
  setIsModalOpen,
  setSelectedPizza,
  setSelectedExtras,
  setTotalPrice,
  setSelectedSize,
  addtocart,
  isDecModalOpen,
  remove,
  setCategories,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
