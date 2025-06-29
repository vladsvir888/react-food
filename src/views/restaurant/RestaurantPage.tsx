import styles from "./restaurantpage.module.css";
import Button from "../../components/button/Button";
import ArrowPrevIcon from "../../components/icons/ArrowPrevIcon";
import { sendRequest } from "@/utils/send-request";
import { NormalizedRestaurantType } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

const RestaurantPage = async ({ children, params }: Props) => {
  const { id } = await params;
  const restaurant = await sendRequest<NormalizedRestaurantType>({
    url: `/restaurant/${id}`,
  });

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="restaurant-page">
      <Button icon={<ArrowPrevIcon />} size="small" to="/restaurants">
        Go to restaurants
      </Button>
      <h1 className={styles.mainHeading}>
        {restaurant.name} ({restaurant.description})
      </h1>
      <img
        className={styles.img}
        src={restaurant.img}
        alt=""
        width={200}
        height={200}
      />
      <div className={styles.links}>
        <Button to={`/restaurants/${id}/menu`} variant="link">
          Menu
        </Button>
        <Button to={`/restaurants/${id}/reviews`} variant="link">
          Reviews
        </Button>
      </div>
      {children}
    </div>
  );
};

export default RestaurantPage;
