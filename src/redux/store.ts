import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./entities/user/slice";
import { cartSlice } from "./entities/cart/slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
