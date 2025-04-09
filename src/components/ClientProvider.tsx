"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCart } from "@/store/pizzaSlice";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart from localStorage when the app initializes
    dispatch(initializeCart());
  }, [dispatch]);

  return <>{children}</>;
};

export default ClientProvider;