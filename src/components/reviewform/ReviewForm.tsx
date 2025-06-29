"use client";

import Input from "../form/input/Input";
import Rating from "../form/rating/Rating";
import styles from "./reviewform.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";
import { createReview } from "@/actions/create-review";
import ReviewFormSubmitButton from "./ReviewFormSubmitButton";

type Props = {
  restaurantId: string;
};

const ReviewForm = ({ restaurantId }: Props) => {
  const user = useSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <form className={styles.reviewForm} action={createReview}>
      <Input type="hidden" name="user-id" value={user.id} />
      <Input type="hidden" name="restaurant-id" value={restaurantId} />
      <Input value={user.name} disabled />
      <Input placeholder="Text" name="text" required />
      <Rating name="rating" required />
      <ReviewFormSubmitButton />
    </form>
  );
};

export default ReviewForm;
