import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";
import RestaurantMenuItem from "../../components/restaurant/RestaurantMenuItem";

const MenuPage = () => {
  const { id } = useParams();
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  if (!restaurant.menu.length) {
    return <h2>No menu</h2>;
  }

  return (
    <div className="menu-page">
      <h2>Menu:</h2>
      <ul>
        {restaurant.menu.map((menuItem) => (
          <RestaurantMenuItem key={menuItem} id={menuItem} />
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
