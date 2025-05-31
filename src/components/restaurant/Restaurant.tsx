import type { RestaurantType } from "../../types";
import DishCounter from "../dishcounter/DishCounter";
import ReviewForm from "../reviewform/ReviewForm";
import { useUserContext } from "../user/UserContext";
import styles from "./restaurant.module.css";
import classNames from "classnames";

type Props = {
  restaurant: RestaurantType;
  className?: string;
};

const Restaurant = ({ restaurant, className }: Props) => {
  const { user } = useUserContext();

  if (!restaurant.name) {
    return null;
  }

  return (
    <section className={classNames(styles.restaurant, className)}>
      <h2>{restaurant.name}</h2>
      {user && <DishCounter />}
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
      {user && <ReviewForm />}
    </section>
  );
};

export default Restaurant;
