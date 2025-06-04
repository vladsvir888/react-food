import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../assets/normalized-mock";
import type { NormilizedRestaurantType } from "../../../types";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {} as Record<string, NormilizedRestaurantType>),
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantSlice.selectors;
