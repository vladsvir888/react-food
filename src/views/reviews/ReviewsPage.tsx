import styles from "./reviewspage.module.css";
import RestaurantReviewItem from "../../components/restaurant/RestaurantReviewItem";
import ReviewForm from "../../components/reviewform/ReviewForm";
import { sendRequest } from "@/utils/send-request";
import { NormalizedReviewType } from "@/types";
import { notFound } from "next/navigation";

const ReviewsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const reviews = await sendRequest<NormalizedReviewType[]>({
    url: "/reviews",
    queryParams: { restaurantId: id },
  });

  if (!reviews) {
    notFound();
  }

  return (
    <div className={styles.reviewsPage}>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review) => (
          <RestaurantReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm restaurantId={id} />
    </div>
  );
};

export default ReviewsPage;
