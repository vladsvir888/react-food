import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";
import DishCard from "../../components/dishcard/DishCard";

const DishPage = () => {
  const { id } = useParams();
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish) {
    return <h1>No dish</h1>;
  }

  return (
    <div className="dish-page">
      <DishCard dish={dish} />
    </div>
  );
};

export default DishPage;
