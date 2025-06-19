import { Outlet, useLocation } from "react-router";
import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";
import ArrowPrevIcon from "../../components/icons/ArrowPrevIcon";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";
import { useGetRestaurantQuery } from "../../redux/api";

const RestaurantPage = () => {
  const id = useParamId();
  const location = useLocation();
  const isDefaultPage =
    !location.pathname.includes("reviews") &&
    !location.pathname.includes("menu");
  const { data: restaurant, error, isLoading } = useGetRestaurantQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  if (!restaurant) {
    return null;
  }

  return (
    <div className="restaurant-page">
      <Button icon={<ArrowPrevIcon />} size="small" to="/restaurants">
        Go to restaurants
      </Button>
      <h1 className={styles.mainHeading}>
        {restaurant.name} ({restaurant.description})
      </h1>
      <img
        className={styles.img}
        src={restaurant.img}
        alt=""
        width={200}
        height={200}
      />
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
