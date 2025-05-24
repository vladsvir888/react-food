import type { RestaurantType } from "../../types";
import DishCounter from "../dishcounter/DishCounter";
import ReviewForm from "../reviewform/ReviewForm";

type Props = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: Props) => {
  if (!restaurant.name) {
    return null;
  }

  return (
    <section className="restaurant">
      <h2>{restaurant.name}</h2>
      <DishCounter />
      {!!restaurant.menu?.length && (
        <>
          <h3>Menu:</h3>
          <ul>
            {restaurant.menu.map((menuItem) => (
              <li key={menuItem.id}>{menuItem.name}</li>
            ))}
          </ul>
        </>
      )}
      {!!restaurant.reviews?.length && (
        <>
          <h3>Reviews:</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </>
      )}
      <ReviewForm />
    </section>
  );
};

export default Restaurant;
