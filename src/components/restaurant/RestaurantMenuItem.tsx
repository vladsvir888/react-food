import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";
import Button from "../button/Button";

type Props = {
  id: string;
};

const RestaurantMenuItem = ({ id }: Props) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  return (
    <li>
      <Button variant="link" to={`/dish/${dish.id}`}>
        {dish.name}
      </Button>
    </li>
  );
};

export default RestaurantMenuItem;
