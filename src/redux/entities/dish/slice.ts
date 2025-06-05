import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../assets/normalized-mock";
import type { NormalizedDishType } from "../../../types";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce<Record<string, NormalizedDishType>>(
    (acc, review) => {
      acc[review.id] = review;

      return acc;
    },
    {}
  ),
};

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectDishById } = dishSlice.selectors;
