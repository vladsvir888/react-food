import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { RootState } from "../../store";
import type { NormalizedRestaurantType } from "../../../types";

const getRestaurants = createAsyncThunk<
  NormalizedRestaurantType[],
  void,
  {
    state: RootState;
  }
>(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: "restaurants/",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const { isFullListLoaded } = state.restaurant;

      if (isFullListLoaded) {
        return false;
      }

      return true;
    },
  }
);

export default getRestaurants;
