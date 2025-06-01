import { restaurants } from "../../assets/restaurants";
import Tabs from "../navigation/tabs/Tabs";
import TabList from "../navigation/tabs/TabList";
import Tab from "../navigation/tabs/Tab";
import TabPanels from "../navigation/tabs/TabPanels";
import TabPanel from "../navigation/tabs/TabPanel";
import Restaurant from "./Restaurant";
import styles from "../../pages/homepage.module.css";
import TabsProvider from "../navigation/tabs/TabsProvider";

const RestaurantTabs = () => {
  const defaultRestaurant = restaurants.find((restaurant) => !!restaurant.name);

  if (!defaultRestaurant) {
    return null;
  }

  return (
    <TabsProvider value={defaultRestaurant.id}>
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
    </TabsProvider>
  );
};

export default RestaurantTabs;
