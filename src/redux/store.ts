import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/slice";
import { dishSlice } from "./entities/dish/slice";
import { reviewSlice } from "./entities/review/slice";
import { userSlice } from "./entities/user/slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
