import { useSelector } from "react-redux";
import Tab from "../navigation/tabs/Tab";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";

type Props = {
  id: string;
};

const RestaurantTab = ({ id }: Props) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id)
  );

  return <Tab value={restaurant.id}>{restaurant.name}</Tab>;
};

export default RestaurantTab;
