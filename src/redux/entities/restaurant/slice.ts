import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from "@reduxjs/toolkit";
import getRestaurants from "./get-restaurants";
import type { RootState } from "../../store";
import { RequestStatus, type RequestStatusType } from "../../types";
import type { NormalizedRestaurantType } from "../../../types";
import { getRestaurant } from "./get-restaurant";

type ExtendedEntityAdapterState = EntityState<
  NormalizedRestaurantType,
  string
> & {
  requestStatus: RequestStatusType;
  isFullListLoaded: boolean;
};

const entityAdapter = createEntityAdapter<NormalizedRestaurantType>();

const initialState: ExtendedEntityAdapterState = entityAdapter.getInitialState({
  requestStatus: RequestStatus.idle,
  isFullListLoaded: false,
});

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // === restaurants
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        state.isFullListLoaded = true;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      })
      // === restaurant
      .addCase(getRestaurant.pending, (state) => {
        state.requestStatus = RequestStatus.pending;
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        state.requestStatus = RequestStatus.fulfilled;
        entityAdapter.upsertOne(state, payload);
      })
      .addCase(getRestaurant.rejected, (state) => {
        state.requestStatus = RequestStatus.rejected;
      });
  },
});

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(
  (state: RootState) => state[restaurantSlice.name]
);

export const { selectRequestStatus } = restaurantSlice.selectors;
