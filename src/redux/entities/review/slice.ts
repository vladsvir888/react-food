import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from "@reduxjs/toolkit";
import type { NormalizedReviewType } from "../../../types";
import { RequestStatus, type RequestStatusType } from "../../types";
import type { RootState } from "../../store";
import getReviews from "./get-reviews";

type ExtendedEntityAdapterState = EntityState<NormalizedReviewType, string> & {
  requestStatus: RequestStatusType;
};

const entityAdapter = createEntityAdapter<NormalizedReviewType>();

const initialState: ExtendedEntityAdapterState = entityAdapter.getInitialState({
  requestStatus: RequestStatus.idle,
});

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      });
  },
});

export const { selectAll: selectReviews, selectById: selectReviewById } =
  entityAdapter.getSelectors((state: RootState) => state[reviewSlice.name]);

export const { selectRequestStatus } = reviewSlice.selectors;
