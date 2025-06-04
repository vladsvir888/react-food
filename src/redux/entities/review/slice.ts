import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../assets/normalized-mock";

const initialState = {
  reviews: normalizedReviews,
};

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  selectors: {
    selectReviewById: (state, id) =>
      state.reviews.find((review) => review.id === id),
  },
  reducers: {},
});

export const { selectReviewById } = reviewSlice.selectors;
