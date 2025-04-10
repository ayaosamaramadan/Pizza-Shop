

"use client";

import { Provider } from "react-redux";
import store from "@/store";
import ClientProvider from "@/components/ClientProvider";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <Provider store={store}>
      <ClientProvider>{children}</ClientProvider>
    </Provider>
  );
};

export default ReduxProvider;
