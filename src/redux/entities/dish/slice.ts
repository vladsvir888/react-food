import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../assets/normalized-mock";

const initialState = {
  dishes: normalizedDishes,
};

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.dishes.find((dish) => dish.id === id),
  },
  reducers: {},
});

export const { selectDishById } = dishSlice.selectors;
