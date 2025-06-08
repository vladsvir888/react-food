import { Outlet, useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";
import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";

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

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={14}
      height={14}
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );

  return (
    <div className="restaurant-page">
      <Button icon={arrowIcon} size="small" to="/restaurants">
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
