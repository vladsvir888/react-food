import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../assets/normalized-mock";
import type { NormalizedUserType } from "../../../types";

type UserState = {
  ids: string[];
  entities: Record<string, NormalizedUserType>;
  user: NormalizedUserType | null;
};

const initialState: UserState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce<Record<string, NormalizedUserType>>(
    (acc, user) => {
      acc[user.id] = user;

      return acc;
    },
    {}
  ),
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectUserById: (state, id) => state.entities[id],
  },
  reducers: {
    login: (state) => {
      const id = Object.keys(state.entities)[0]; // fake
      state.user = state.entities[id];
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { selectUser, selectUserById } = userSlice.selectors;
export const { login, logout } = userSlice.actions;
