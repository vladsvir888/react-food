import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import RestaurantReviewItem from "../../components/restaurant/RestaurantReviewItem";
import { selectUser } from "../../redux/entities/user/slice";
import ReviewForm from "../../components/reviewform/ReviewForm";
import styles from "./reviewspage.module.css";

const ReviewsPage = () => {
  const user = useSelector(selectUser);
  const { id } = useParams();
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  if (!restaurant.reviews.length) {
    return <h2>No reviews</h2>;
  }

  return (
    <div className={styles.reviewsPage}>
      <h2>Reviews:</h2>
      <ul>
        {restaurant.reviews.map((review) => (
          <RestaurantReviewItem key={review} id={review} />
        ))}
      </ul>
      {user && <ReviewForm />}
    </div>
  );
};

export default ReviewsPage;
