import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../assets/normalized-mock";
import type { NormalizedUserType } from "../../../types";

type UserState = {
  users: NormalizedUserType[];
  user: NormalizedUserType | null;
};

const initialState: UserState = {
  users: normalizedUsers,
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    getUser: (state) => state.user,
  },
  reducers: {
    login: (state) => {
      state.user = state.users[0];
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { getUser } = userSlice.selectors;
export const { login, logout } = userSlice.actions;
