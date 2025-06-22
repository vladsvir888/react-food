"use client";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";
import styles from "./reviewspage.module.css";
import RestaurantReviewItem from "../../components/restaurant/RestaurantReviewItem";
import ReviewForm from "../../components/reviewform/ReviewForm";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api";

const ReviewsPage = () => {
  const user = useSelector(selectUser);
  const id = useParamId();
  const {
    data: reviews,
    error,
    isLoading,
  } = useGetReviewsByRestaurantIdQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  if (!reviews?.length) {
    return null;
  }

  return (
    <div className={styles.reviewsPage}>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review) => (
          <RestaurantReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {user && <ReviewForm restaurantId={id} />}
    </div>
  );
};

export default ReviewsPage;
