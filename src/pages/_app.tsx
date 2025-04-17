/* eslint-disable @typescript-eslint/no-explicit-any */
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "@/store";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
      
      
    </Provider>
  );
}