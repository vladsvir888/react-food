import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";

type Props = {
  id: string;
};

const RestaurantMenuItem = ({ id }: Props) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish?.id) {
    return null;
  }

  return <li key={dish.id}>{dish.name}</li>;
};

export default RestaurantMenuItem;
