import { useSelector } from "react-redux";
import type { NormalizedDishType } from "../../types";
import DishCounter from "../dishcounter/DishCounter";
import styles from "./dishcard.module.css";
import { selectUser } from "../../redux/entities/user/slice";

type Props = {
  dish: NormalizedDishType;
};

const DishCard = ({ dish }: Props) => {
  const user = useSelector(selectUser);
  const ingredients = dish.ingredients.join(", ");
  const price = dish.price.toFixed(2);

  return (
    <div className={styles.card}>
      <h1>{dish.name}</h1>
      <p>Ingredients: {ingredients}</p>
      <p>{price}$</p>
      {user && <DishCounter dish={dish} />}
    </div>
  );
};

export default DishCard;
