import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType, SizeExtras } from "@/types/pizzatype";

type itemCartTypes = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  extras: SizeExtras[];
  image: string;
};
interface PizzaState {
  isModalOpen: boolean;
  selectedPizza: PizzaType | null;
  selectedExtras: SizeExtras[];

  totalPrice: number;
  selectedSize: number;
  itemCart: itemCartTypes[];
}

const initialState: PizzaState = {
  isModalOpen: false,
  selectedPizza: null,
  selectedExtras: [],
  totalPrice: 0,

  selectedSize: 0,
  itemCart: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
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

     const existingPizza = state.itemCart.find(
        (item) =>
          item.id === pizza.id 
      );

      if (existingPizza) {
       
        existingPizza.quantity += 1;
        console.log("Pizza already in cart, increasing quantity.");
      } else {
      
        state.itemCart.push({
          id: pizza.id,
          name: pizza.title,
          size: size,
          extras: extras,
          image: pizza.image,
          price: price,
          quantity: 1,
        });

        console.log("Pizza added to cart.");
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
  },
});

export const {
  setIsModalOpen,
  setSelectedPizza,
  setSelectedExtras,
  setTotalPrice,
  setSelectedSize,
  addtocart,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
