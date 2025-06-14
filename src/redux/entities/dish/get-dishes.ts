import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { NormalizedDishType } from "../../../types";

const getDishes = createAsyncThunk<NormalizedDishType[], string>(
  "dish/getDishes",
  async (id, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: "dishes/",
        queryParams: {
          restaurantId: id,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getDishes;
