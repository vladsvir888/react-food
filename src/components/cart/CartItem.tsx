import { useGetDishQuery } from "../../redux/api";

type Props = {
  id: string;
  quantity?: number;
};

const CartItem = ({ id, quantity }: Props) => {
  const { data: dish } = useGetDishQuery(id);

  if (!dish) {
    return null;
  }

  return (
    <li>
      {dish.name} - {quantity}
    </li>
  );
};

export default CartItem;
