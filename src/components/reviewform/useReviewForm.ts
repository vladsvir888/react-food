import { useReducer } from "react";

const SET_NAME_ACTION = "setName";
const SET_TEXT_ACTION = "setText";
const SET_RATING_ACTION = "setRating";
const SET_RESET_ACTION = "setReset";

type State = {
  name: string;
  text: string;
  rating: number;
};

type Actions =
  | { type: typeof SET_NAME_ACTION; value: State["name"] }
  | { type: typeof SET_TEXT_ACTION; value: State["text"] }
  | { type: typeof SET_RATING_ACTION; value: State["rating"] }
  | { type: typeof SET_RESET_ACTION };

const initialState: State = {
  name: "",
  text: "",
  rating: 0,
};

const stateReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SET_NAME_ACTION:
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

const useReviewForm = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const isDisabledButton =
    JSON.stringify(state) === JSON.stringify(initialState);

  const handleNameChange = (value: string) => {
    dispatch({ type: SET_NAME_ACTION, value });
  };

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

  return {
    state,
    isDisabledButton,
    handleNameChange,
    handleTextChange,
    handleRatingChange,
    handleReset,
  };
};

export default useReviewForm;
