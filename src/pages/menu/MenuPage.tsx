import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";
import { useOutletContext } from "react-router";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api";

const MenuPage = () => {
  const id = useParamId();
  const {
    data: dishes,
    error,
    isLoading,
  } = useGetDishesByRestaurantIdQuery(id);
  const { menu } = useOutletContext<{ menu: string[] }>();
  const filteredDishes = dishes?.filter((dish) => menu.includes(dish.id));

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  if (!filteredDishes?.length) {
    return null;
  }

  return (
    <div className="menu-page">
      <h2>Menu:</h2>
      <ul>
        {filteredDishes.map((dish) => (
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
