import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../assets/normalized-mock";
import type { NormilizedReviewType } from "../../../types";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce<Record<string, NormilizedReviewType>>(
    (acc, review) => {
      acc[review.id] = review;

      return acc;
    },
    {}
  ),
};

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById } = reviewSlice.selectors;
