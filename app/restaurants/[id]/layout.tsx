import { NormalizedRestaurantType } from "@/types";
import { sendRequest } from "@/utils/send-request";

export async function generateStaticParams() {
  const restaurantIds = [
    "bb8afbec-2fec-491f-93e9-7f13950dd80b",
    "d9241927-09e1-44f3-8986-a76346869037",
  ];
  const restaurants = await sendRequest<NormalizedRestaurantType[]>({
    url: "/restaurants",
  });

  if (!restaurants) {
    return [];
  }

  return restaurants
    .filter((restaurant) => restaurantIds.includes(restaurant.id))
    .map((restaurant) => ({
      id: restaurant.id,
    }));
}

export { default } from "@/views/restaurant/RestaurantPage";
