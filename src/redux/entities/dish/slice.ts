import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from "@reduxjs/toolkit";
import type { NormalizedDishType } from "../../../types";
import { RequestStatus, type RequestStatusType } from "../../types";
import type { RootState } from "../../store";
import getDishes from "./get-dishes";
import { getDish } from "./get-dish";

type ExtendedEntityAdapterState = EntityState<NormalizedDishType, string> & {
  requestStatus: RequestStatusType;
};

const entityAdapter = createEntityAdapter<NormalizedDishType>();

const initialState: ExtendedEntityAdapterState = entityAdapter.getInitialState({
  requestStatus: RequestStatus.idle,
});

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // === dishes
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      })
      // === dish
      .addCase(getDish.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        entityAdapter.upsertOne(state, payload);
      })
      .addCase(getDish.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      });
  },
});

export const { selectById: selectDishById, selectAll: selectDishes } =
  entityAdapter.getSelectors((state: RootState) => state[dishSlice.name]);

export const { selectRequestStatus } = dishSlice.selectors;
