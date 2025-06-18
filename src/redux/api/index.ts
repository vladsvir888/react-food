import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  NormalizedDishType,
  NormalizedRestaurantType,
  NormalizedReviewType,
  NormalizedUserType,
} from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  tagTypes: ["Reviews"],
  endpoints: (build) => ({
    getRestaurants: build.query<NormalizedRestaurantType[], void>({
      query: () => "restaurants/",
    }),
    getRestaurant: build.query<NormalizedRestaurantType, string>({
      query: (id) => `restaurant/${id}`,
    }),
    getUsers: build.query<NormalizedUserType[], void>({
      query: () => "users/",
    }),
    getDish: build.query<NormalizedDishType, string>({
      query: (id) => `dish/${id}`,
    }),
    getDishesByRestaurantId: build.query<NormalizedDishType[], string>({
      query: (id) => `dishes/?restaurantId=${id}`,
    }),
    getReviewsByRestaurantId: build.query<NormalizedReviewType[], string>({
      query: (id) => `reviews/?restaurantId=${id}`,
      providesTags: ["Reviews"],
    }),
    postReviewByRestaurantId: build.mutation<
      NormalizedReviewType,
      Omit<NormalizedReviewType, "id"> & { restaurantId: string }
    >({
      query: (newReview) => ({
        url: `/review/${newReview.restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetUsersQuery,
  useGetDishQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  usePostReviewByRestaurantIdMutation,
} = api;
