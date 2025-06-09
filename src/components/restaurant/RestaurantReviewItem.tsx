import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectReviewById } from "../../redux/entities/review/slice";
import { selectUserById } from "../../redux/entities/user/slice";

type Props = {
  id: string;
};

const RestaurantReviewItem = ({ id }: Props) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const user = useSelector((state: RootState) =>
    selectUserById(state, review.userId)
  );

  return (
    <li>
      <p>{user.name}</p>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </li>
  );
};

export default RestaurantReviewItem;
