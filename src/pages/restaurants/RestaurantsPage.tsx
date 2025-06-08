import { useSelector } from "react-redux";
import styles from "./restaurantspage.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import RestaurantLink from "../../components/restaurant/RestaurantLink";

const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  if (!restaurantIds.length) {
    return <h1>No restaurants</h1>;
  }

  return (
    <div className="restaurants-page">
      <h1 className={styles.mainHeading}>Restaurants</h1>
      {restaurantIds.map((restaurantId) => (
        <RestaurantLink key={restaurantId} id={restaurantId} />
      ))}
    </div>
  );
};

export default RestaurantsPage;
