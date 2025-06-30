import DishCard from "../../components/dishcard/DishCard";
import { sendRequest } from "@/utils/send-request";
import { NormalizedDishType } from "@/types";
import { notFound } from "next/navigation";

const DishPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const dish = await sendRequest<NormalizedDishType>({ url: `/dish/${id}` });

  if (!dish) {
    notFound();
  }

  return (
    <div className="dish-page">
      <DishCard dish={dish} />
    </div>
  );
};

export default DishPage;
