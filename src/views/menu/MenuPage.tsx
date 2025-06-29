import Button from "../../components/button/Button";
import { sendRequest } from "@/utils/send-request";
import { NormalizedDishType } from "@/types";
import { notFound } from "next/navigation";

const MenuPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const dishes = await sendRequest<NormalizedDishType[]>({
    url: "/dishes",
    queryParams: { restaurantId: id },
  });

  if (!dishes) {
    notFound();
  }

  return (
    <div className="menu-page">
      <h2>Menu:</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Button variant="link" to={`/dish/${dish.id}`}>
              {dish.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
