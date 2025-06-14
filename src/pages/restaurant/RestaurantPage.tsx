import { Outlet, useLocation, useParams } from "react-router";
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
import getDishes from "../../redux/entities/dish/get-dishes";
import { selectDishes } from "../../redux/entities/dish/slice";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import getReviews from "../../redux/entities/review/get-reviews";
import { selectReviews } from "../../redux/entities/review/slice";

const RestaurantPage = () => {
  const id = useParams().id as string;
  const dispatch = useDispatch<AppDispatch>();
  const requestStatus = useSelector(selectRequestStatus);
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );
  const location = useLocation();
  const isDefaultPage =
    !location.pathname.includes("reviews") &&
    !location.pathname.includes("menu");
  const dishes = useSelector(selectDishes);
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(getRestaurant(id));

    if (isDefaultPage || location.pathname.includes("menu")) {
      dispatch(getDishes(id));
    }

    if (location.pathname.includes("reviews")) {
      dispatch(getReviews(id));
    }
  }, [dispatch, id, isDefaultPage, location.pathname]);

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
      <Outlet context={{ dishes, reviews }} />
    </div>
  );
};

export default RestaurantPage;
