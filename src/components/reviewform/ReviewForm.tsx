import Button from "../button/Button";
import Input from "../form/input/Input";
import Rating from "../form/rating/Rating";
import useReviewForm from "./useReviewForm";
import styles from "./reviewform.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";

type Props = {
  restaurantId: string;
};

const ReviewForm = ({ restaurantId }: Props) => {
  const {
    state: { text, rating },
    isDisabledResetButton,
    isDisabledSubmitButton,
    isLoading,
    handleTextChange,
    handleRatingChange,
    handleReset,
    handleSubmit,
  } = useReviewForm({ restaurantId });

  const user = useSelector(selectUser);

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      {user && <Input placeholder="Name" value={user.name} disabled />}
      <Input
        placeholder="Text"
        value={text}
        onChange={(event) => handleTextChange(event.target.value)}
      />
      <Rating
        name="review"
        value={rating}
        onChange={(event) => handleRatingChange(event.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="submit" disabled={isDisabledSubmitButton}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
        <Button
          type="reset"
          disabled={isDisabledResetButton}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
