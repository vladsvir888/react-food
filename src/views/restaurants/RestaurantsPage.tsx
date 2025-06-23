"use client";

import styles from "./restaurantspage.module.css";
import RestaurantLink from "../../components/restaurant/RestaurantLink";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import { useGetRestaurantsQuery } from "../../redux/api";

const RestaurantsPage = () => {
  const { data: restaurants, error, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div className="restaurants-page">
      <h1 className={styles.mainHeading}>Restaurants</h1>
      {restaurants.map(({ id, name }) => (
        <RestaurantLink key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default RestaurantsPage;
