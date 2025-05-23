import type { RestaurantType } from "../../types";
import Counter from "../form/counter/Counter";

type Props = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: Props) => {
  return (
    <section className="restaurant">
      <h2>{restaurant.name}</h2>
      <Counter />
      <h3>Меню:</h3>
      <ul>
        {restaurant.menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
      <h3>Отзывы:</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default Restaurant;
