export type SizeExtras = {
  label: string;
    value: number;
};

export type PizzaType = {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  size?: number;
  extras?: SizeExtras[];
  image: string;
  description?: string; 
};



export type prismaPizzaType = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  
  
};

export type itemtype = {
  id: number;
  name: string;
  size: number;
  extras: SizeExtras[];
  image: string;
  price: number;
  quantity: number;
};