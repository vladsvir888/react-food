import TabsProvider from "../components/navigation/tabs/TabsProvider";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className={styles.mainHeading}>Restaurants:</h1>
      <TabsProvider />
    </div>
  );
};

export default HomePage;
