import { restaurants } from "../assets/restaurants";
import { useState } from "react";
import Tabs from "../components/navigation/tabs/Tabs";
import TabList from "../components/navigation/tabs/TabList";
import Tab from "../components/navigation/tabs/Tab";
import TabPanels from "../components/navigation/tabs/TabPanels";
import TabPanel from "../components/navigation/tabs/TabPanel";
import { TabsContext } from "../components/navigation/tabs/Context";
import Restaurant from "../components/restaurant/Restaurant";
import styles from "./homepage.module.css";

const HomePage = () => {
  const defaultRestaurant = restaurants.find((restaurant) => !!restaurant.name);
  const [activeValue, setActiveValue] = useState(defaultRestaurant?.id);

  return (
    <div className="home-page">
      <h1 className={styles.mainHeading}>Restaurants:</h1>
      <TabsContext.Provider value={{ activeValue, setActiveValue }}>
        <Tabs>
          <TabList>
            {restaurants.map(
              (restaurant) =>
                restaurant.name && (
                  <Tab key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </Tab>
                )
            )}
          </TabList>
          <TabPanels>
            {restaurants.map((restaurant) => (
              <TabPanel key={restaurant.id} value={restaurant.id}>
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                {/* for progressbar */}
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
                <Restaurant
                  restaurant={restaurant}
                  className={styles.homePageRestaurant}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabsContext.Provider>
    </div>
  );
};

export default HomePage;
