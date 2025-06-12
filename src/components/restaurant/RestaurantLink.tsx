import { useSelector } from "react-redux";
import Button from "../button/Button";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";

type Props = {
  id: string;
};

const RestaurantLink = ({ id }: Props) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  return (
    <Button to={`/restaurants/${restaurant.id}`} size="small" variant="link">
      {restaurant.name}
    </Button>
  );
};

export default RestaurantLink;
