import { NormalizedDishType } from "@/types";
import { sendRequest } from "@/utils/send-request";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata | undefined> {
  const { id } = await params;
  const dish = await sendRequest<NormalizedDishType>({ url: `/dish/${id}` });

  if (dish) {
    return {
      title: dish.name,
      description: dish.name,
    };
  }
}

export { default } from "@/views/dish/DishPage";
