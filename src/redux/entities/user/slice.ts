import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from "@reduxjs/toolkit";
import type { NormalizedUserType } from "../../../types";
import { RequestStatus, type RequestStatusType } from "../../types";
import type { RootState } from "../../store";
import getUsers from "./get-users";

type ExtendedEntityAdapterState = EntityState<NormalizedUserType, string> & {
  requestStatus: RequestStatusType;
  isFullListLoaded: boolean;
  user: NormalizedUserType | null;
};

const entityAdapter = createEntityAdapter<NormalizedUserType>();

const initialState: ExtendedEntityAdapterState = entityAdapter.getInitialState({
  requestStatus: RequestStatus.idle,
  isFullListLoaded: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        state.isFullListLoaded = true;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      });
  },
});

export const { selectUser, selectRequestStatus } = userSlice.selectors;
export const { selectById: selectUserById } = entityAdapter.getSelectors(
  (state: RootState) => state[userSlice.name]
);
export const { login, logout } = userSlice.actions;
