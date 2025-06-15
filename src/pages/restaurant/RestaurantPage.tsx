import { Outlet, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantById,
} from "../../redux/entities/restaurant/slice";
import type { AppDispatch, RootState } from "../../redux/store";
import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";
import ArrowPrevIcon from "../../components/icons/ArrowPrevIcon";
import { useEffect } from "react";
import { getRestaurant } from "../../redux/entities/restaurant/get-restaurant";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";

const RestaurantPage = () => {
  const id = useParamId();
  const dispatch = useDispatch<AppDispatch>();
  const requestStatus = useSelector(selectRequestStatus);
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  const location = useLocation();
  const isDefaultPage =
    !location.pathname.includes("reviews") &&
    !location.pathname.includes("menu");

  useEffect(() => {
    dispatch(getRestaurant(id));
  }, [dispatch, id]);

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
