"use client";

import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";
import ArrowPrevIcon from "../../components/icons/ArrowPrevIcon";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";
import { useGetRestaurantQuery } from "../../redux/api";

type Props = {
  children: React.ReactNode;
};

const RestaurantPage = ({ children }: Props) => {
  const id = useParamId();
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
        <Button to={`/restaurants/${id}/menu`} variant="link">
          Menu
        </Button>
        <Button to={`/restaurants/${id}/reviews`} variant="link">
          Reviews
        </Button>
      </div>
      {children}
    </div>
  );
};

export default RestaurantPage;
