import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../../utils/send-request";
import type { NormalizedReviewType } from "../../../types";

const getReviews = createAsyncThunk<NormalizedReviewType[], string>(
  "review/getReviews",
  async (id, { rejectWithValue }) => {
    try {
      const data = await sendRequest({
        url: "reviews/",
        queryParams: {
          restaurantId: id,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getReviews;
