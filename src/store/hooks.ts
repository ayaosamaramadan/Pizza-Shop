import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Custom hook for dispatch
export const useAppDispatch: () => AppDispatch = useReduxDispatch;

// Custom hook for selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;