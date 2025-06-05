import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectReviewById } from "../../redux/entities/review/slice";

type Props = {
  id: string;
};

const RestaurantReviewItem = ({ id }: Props) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));

  if (!review?.id) {
    return null;
  }

  return <li key={review.id}>{review.text}</li>;
};

export default RestaurantReviewItem;
