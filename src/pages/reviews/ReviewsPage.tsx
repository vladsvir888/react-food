import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";
import styles from "./reviewspage.module.css";
import RestaurantReviewItem from "../../components/restaurant/RestaurantReviewItem";
import ReviewForm from "../../components/reviewform/ReviewForm";
import type { AppDispatch } from "../../redux/store";
import {
  selectRequestStatus,
  selectReviews,
} from "../../redux/entities/review/slice";
import { useEffect } from "react";
import getReviews from "../../redux/entities/review/get-reviews";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";

const ReviewsPage = () => {
  const user = useSelector(selectUser);
  const id = useParamId();
  const dispatch = useDispatch<AppDispatch>();
  const reviews = useSelector(selectReviews);
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getReviews(id));
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
    <div className={styles.reviewsPage}>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review) => (
          <RestaurantReviewItem key={review.id} id={review.id} />
        ))}
      </ul>
      {user && <ReviewForm />}
    </div>
  );
};

export default ReviewsPage;
