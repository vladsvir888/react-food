import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { RootState } from "../../store";
import type { NormalizedUserType } from "../../../types";

const getUsers = createAsyncThunk<
  NormalizedUserType[],
  void,
  {
    state: RootState;
  }
>(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: "users/",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const { isFullListLoaded } = state.user;

      if (isFullListLoaded) {
        return false;
      }

      return true;
    },
  }
);

export default getUsers;
