import Button from "../button/Button";
import Input from "../form/input/Input";
import Rating from "../form/rating/Rating";
import useReviewForm from "./useReviewForm";
import styles from "./reviewform.module.css";

const ReviewForm = () => {
  const {
    state: { name, text, rating },
    isDisabledButton,
    handleNameChange,
    handleTextChange,
    handleRatingChange,
    handleReset,
  } = useReviewForm();

  return (
    <form className={styles.reviewForm}>
      <Input
        placeholder="Name"
        value={name}
        onChange={(event) => handleNameChange(event.target.value)}
      />
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
      <Button type="reset" disabled={isDisabledButton} onClick={handleReset}>
        Reset
      </Button>
    </form>
  );
};

export default ReviewForm;
