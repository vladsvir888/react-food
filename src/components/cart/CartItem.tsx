import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import type { RootState } from "../../redux/store";

type Props = {
  id: string;
  quantity?: number;
};

const CartItem = ({ id, quantity }: Props) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  return (
    <li>
      {dish.name} - {quantity}
    </li>
  );
};

export default CartItem;
