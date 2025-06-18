import type { NormalizedReviewType } from "../../types";
import { useGetUsersQuery } from "../../redux/api";

type Props = {
  review: NormalizedReviewType;
};

const RestaurantReviewItem = ({ review }: Props) => {
  const { data: users } = useGetUsersQuery();
  const user = users?.find((user) => user.id === review.userId);

  return (
    <li>
      <p>{user?.name}</p>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </li>
  );
};

export default RestaurantReviewItem;
