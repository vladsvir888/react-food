import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";
import { useOutletContext } from "react-router";
import styles from "./reviewspage.module.css";
import type { NormalizedReviewType } from "../../types";
import RestaurantReviewItem from "../../components/restaurant/RestaurantReviewItem";
import ReviewForm from "../../components/reviewform/ReviewForm";

const ReviewsPage = () => {
  const user = useSelector(selectUser);
  const { reviews } = useOutletContext<{ reviews: NormalizedReviewType[] }>();

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
