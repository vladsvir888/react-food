import { useOutletContext } from "react-router";
import type { NormalizedDishType } from "../../types";
import Button from "../../components/button/Button";

const MenuPage = () => {
  const { dishes } = useOutletContext<{ dishes: NormalizedDishType[] }>();

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
