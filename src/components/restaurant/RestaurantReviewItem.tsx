import type { NormalizedReviewType } from "../../types";
import { useGetUsersQuery } from "../../redux/api";

type Props = {
  review: NormalizedReviewType;
};

const RestaurantReviewItem = ({ review }: Props) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      user: result?.data?.find(({ id }) => id === review.userId),
    }),
  });

  return (
    <li>
      <p>{user?.name}</p>
      <p>{review.text}</p>
      <p>Rating: {review.rating}</p>
    </li>
  );
};

export default RestaurantReviewItem;
