import { useFormStatus } from "react-dom";
import Button from "../button/Button";

const ReviewFormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
};

export default ReviewFormSubmitButton;
