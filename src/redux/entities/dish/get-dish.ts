import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { NormalizedDishType } from "../../../types";
import type { RootState } from "../../store";
import { selectDishById } from "./slice";

export const getDish = createAsyncThunk<
  NormalizedDishType,
  string,
  {
    state: RootState;
  }
>(
  "dish/getDish",
  async (id, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: `dish/${id}`,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const dish = selectDishById(state, id);

      if (dish) {
        return false;
      }

      return true;
    },
  }
);
