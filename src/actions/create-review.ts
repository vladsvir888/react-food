"use server";

import { sendRequest } from "@/utils/send-request";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  const text = formData.get("text");
  const rating = formData.get("rating");
  const restaurantId = formData.get("restaurant-id");
  const userId = formData.get("user-id");

  await sendRequest({
    url: `/review/${restaurantId}`,
    method: "POST",
    body: {
      text,
      rating,
      restaurantId,
      userId,
    },
  });

  revalidatePath("/restaurants");
}
