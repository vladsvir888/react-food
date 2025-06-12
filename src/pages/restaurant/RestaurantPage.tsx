import { Outlet, useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";
import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";
import ArrowPrevIcon from "../../components/icons/ArrowPrevIcon";

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  const location = useLocation();
  const isDefaultPage =
    !location.pathname.includes("reviews") &&
    !location.pathname.includes("menu");

  if (!restaurant) {
    return <h1>No restaurant</h1>;
  }

  return (
    <div className="restaurant-page">
      <Button icon={<ArrowPrevIcon />} size="small" to="/restaurants">
        Go to restaurants
      </Button>
      <h1 className={styles.mainHeading}>{restaurant.name}</h1>
      <div className={styles.links}>
        <Button
          to="menu"
          variant="link"
          className={isDefaultPage ? styles.defaultLink : undefined}
        >
          Menu
        </Button>
        <Button to="reviews" variant="link">
          Reviews
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default RestaurantPage;
