import RestaurantTabs from "../components/restaurant/RestaurantTabs";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className={styles.mainHeading}>Restaurants:</h1>
      <RestaurantTabs />
    </div>
  );
};

export default HomePage;
