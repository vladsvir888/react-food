import { useReducer } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/entities/user/slice";
import { usePostReviewByRestaurantIdMutation } from "../../redux/api";

const SET_TEXT_ACTION = "setText";
const SET_RATING_ACTION = "setRating";
const SET_RESET_ACTION = "setReset";

type State = {
  text: string;
  rating: number;
};

type Actions =
  | { type: typeof SET_TEXT_ACTION; value: State["text"] }
  | { type: typeof SET_RATING_ACTION; value: State["rating"] }
  | { type: typeof SET_RESET_ACTION };

const initialState: State = {
  text: "",
  rating: 0,
};

const stateReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SET_TEXT_ACTION:
    case SET_RATING_ACTION: {
      const type = action.type.replace("set", "").toLowerCase();
      return { ...state, [type]: action.value };
    }
    case SET_RESET_ACTION:
      return initialState;
    default:
      throw new Error("Unknown action");
  }
};

const useReviewForm = ({ restaurantId }: { restaurantId: string }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const user = useSelector(selectUser);

  const [postReview, { isLoading }] = usePostReviewByRestaurantIdMutation();

  const areFieldsValid = !!(state.text && state.rating);
  const isDisabledResetButton =
    JSON.stringify(state) === JSON.stringify(initialState);
  const isDisabledSubmitButton = !areFieldsValid || isLoading;

  const handleTextChange = (value: string) => {
    dispatch({ type: SET_TEXT_ACTION, value });
  };

  const handleRatingChange = (value: string) => {
    dispatch({
      type: SET_RATING_ACTION,
      value: Number(value),
    });
  };

  const handleReset = () => dispatch({ type: SET_RESET_ACTION });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    try {
      await postReview({
        userId: user.id,
        text: state.text,
        rating: state.rating,
        restaurantId,
      });
      handleReset();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    isDisabledResetButton,
    isDisabledSubmitButton,
    isLoading,
    handleTextChange,
    handleRatingChange,
    handleReset,
    handleSubmit,
  };
};

export default useReviewForm;
