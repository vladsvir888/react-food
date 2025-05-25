import Input from "../form/input/Input";
import Rating from "../form/rating/Rating";
import useReviewForm from "./useReviewForm";

const ReviewForm = () => {
  const {
    state: { name, text, rating },
    handleNameChange,
    handleTextChange,
    handleRatingChange,
    handleReset,
  } = useReviewForm();

  return (
    <form className="review-form">
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
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default ReviewForm;
