import { useDispatch, useSelector } from "react-redux";
import styles from "./restaurantspage.module.css";
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from "../../redux/entities/restaurant/slice";
import RestaurantLink from "../../components/restaurant/RestaurantLink";
import type { AppDispatch } from "../../redux/store";
import getRestaurants from "../../redux/entities/restaurant/get-restaurants";
import { useEffect } from "react";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const requestStatus = useSelector(selectRequestStatus);
  const restaurantIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (
    requestStatus === RequestStatus.idle ||
    requestStatus === RequestStatus.pending
  ) {
    return <Spinner />;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Error />;
  }

  return (
    <div className="restaurants-page">
      <h1 className={styles.mainHeading}>Restaurants</h1>
      {restaurantIds.map((restaurantId) => (
        <RestaurantLink key={restaurantId} id={restaurantId} />
      ))}
    </div>
  );
};

export default RestaurantsPage;
