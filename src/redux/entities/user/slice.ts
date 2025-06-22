import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from "@reduxjs/toolkit";
import type { NormalizedUserType } from "../../../types";
import { RequestStatus, type RequestStatusType } from "../../types";
import type { RootState } from "../../store";

type ExtendedEntityAdapterState = EntityState<NormalizedUserType, string> & {
  requestStatus: RequestStatusType;
  user: NormalizedUserType | null;
};

const entityAdapter = createEntityAdapter<NormalizedUserType>();

const initialState: ExtendedEntityAdapterState = entityAdapter.getInitialState({
  requestStatus: RequestStatus.idle,
  user: null,
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { selectUser, selectRequestStatus } = userSlice.selectors;
export const { selectById: selectUserById } = entityAdapter.getSelectors(
  (state: RootState) => state[userSlice.name]
);
export const { login, logout } = userSlice.actions;
