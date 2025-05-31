import { restaurants } from "../../../assets/restaurants";
import { useState } from "react";
import Tabs from "./Tabs";
import TabList from "./TabList";
import Tab from "./Tab";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";
import { TabsContext } from "./TabsContext";
import Restaurant from "../../restaurant/Restaurant";
import styles from "../../../pages/homepage.module.css";

const TabsProvider = () => {
  const defaultRestaurant = restaurants.find((restaurant) => !!restaurant.name);
  const [activeValue, setActiveValue] = useState(defaultRestaurant?.id ?? "");

  return (
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
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </TabsContext.Provider>
  );
};

export default TabsProvider;
