import { useSelector } from "react-redux";
import DishCounter from "../dishcounter/DishCounter";
import ReviewForm from "../reviewform/ReviewForm";
import styles from "./restaurant.module.css";
import classNames from "classnames";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";
import RestaurantMenuItem from "./RestaurantMenuItem";
import RestaurantReviewItem from "./RestaurantReviewItem";
import { selectUser } from "../../redux/entities/user/slice";

type Props = {
  id: string;
  className?: string;
};

const Restaurant = ({ id, className }: Props) => {
  const user = useSelector(selectUser);
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  return (
    <section className={classNames(styles.restaurant, className)}>
      <h2>{restaurant.name}</h2>
      {user && <DishCounter />}
      {!!restaurant.menu?.length && (
        <>
          <h3>Menu:</h3>
          <ul>
            {restaurant.menu.map((menuItem) => (
              <RestaurantMenuItem key={menuItem} id={menuItem} />
            ))}
          </ul>
        </>
      )}
      {!!restaurant.reviews?.length && (
        <>
          <h3>Reviews:</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <RestaurantReviewItem key={review} id={review} />
            ))}
          </ul>
        </>
      )}
      {user && <ReviewForm />}
    </section>
  );
};

export default Restaurant;
