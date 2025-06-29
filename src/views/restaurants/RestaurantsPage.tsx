import styles from "./restaurantspage.module.css";
import RestaurantLink from "../../components/restaurant/RestaurantLink";
import { sendRequest } from "@/utils/send-request";
import { NormalizedRestaurantType } from "@/types";
import { notFound } from "next/navigation";

const RestaurantsPage = async () => {
  const restaurants = await sendRequest<NormalizedRestaurantType[]>({
    url: "/restaurants",
  });

  if (!restaurants) {
    notFound();
  }

  return (
    <div className="restaurants-page">
      <h1 className={styles.mainHeading}>Restaurants</h1>
      {restaurants.map(({ id, name }) => (
        <RestaurantLink key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default RestaurantsPage;
