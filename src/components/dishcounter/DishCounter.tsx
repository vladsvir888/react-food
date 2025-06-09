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
  const { id, name } = dish;

  const cartItem = useSelector((state: RootState) => selectCartItem(state, id));
  const initialQuantityCartItem = cartItem?.quantity;
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(addToCart({ id, name }));
  };
  const onDecrement = () => {
    dispatch(removeFromCart({ id, name }));
  };
  const onChange = (value: number) => {
    dispatch(updateCartItem({ id, name, quantity: value }));
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
