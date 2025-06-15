import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { NormalizedRestaurantType } from "../../../types";

export const getRestaurant = createAsyncThunk<NormalizedRestaurantType, string>(
  "restaurant/getRestaurant",
  async (id, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: `restaurant/${id}`,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
