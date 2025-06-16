import Counter from "../form/counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItem,
  updateCartItem,
} from "../../redux/entities/cart/slice";
import type { NormalizedDishType } from "../../types";
import type { RootState } from "../../redux/store";

type Props = {
  dish: NormalizedDishType;
};

const DishCounter = ({ dish }: Props) => {
  const { id } = dish;

  const cartItem = useSelector((state: RootState) => selectCartItem(state, id));
  const initialQuantityCartItem = cartItem?.quantity || 0;
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(addToCart({ id }));
  };
  const onDecrement = () => {
    dispatch(removeFromCart({ id }));
  };
  const onChange = (value: number) => {
    dispatch(updateCartItem({ id, quantity: value }));
  };

  return (
    <Counter
      initialValue={initialQuantityCartItem}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onChange={onChange}
    />
  );
};

export default DishCounter;
