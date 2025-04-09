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

  description?: string; // Optional if not always present
};


interface PizzaState {
  isModalOpen: boolean;
  selectedPizza: PizzaType | null;
  selectedExtras: SizeExtras[];
  totalPrice: number;
  selectedSize: number;
  itemCart: itemCartTypes[];
  isdecOpen: boolean;
  daupleitemCart: itemCartTypes[];
  
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
        existingPizza.price += price;
        state.daupleitemCart.push({
          id: pizza.id,
          title: pizza.title,
          size: size,
          extras: extras,
          image: pizza.image,
          price: price,
          quantity: 1,
        });



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

        state.daupleitemCart.push({
          id: pizza.id,
          title: pizza.title,
          size: size,
          extras: extras,
          image: pizza.image,
          price: price,
          quantity: 1,
        });

        console.log("Pizza added to cart.");
      }
    },
  //  dec(
  //     state,
  //     action: PayloadAction<{
  //       pizza: PizzaType;
  //       size: number;
  //       extras: SizeExtras[];
  //       price: number;
  //       image: string;
  //     }>
  //   ) {
     
  //   },
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
  },
});

export const {
  setIsModalOpen,
  setSelectedPizza,
  setSelectedExtras,
  setTotalPrice,
  setSelectedSize,
  addtocart,
  isDecModalOpen,
  
  // dec
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
