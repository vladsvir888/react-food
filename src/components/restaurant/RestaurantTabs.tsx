import Tabs from "../navigation/tabs/Tabs";
import TabList from "../navigation/tabs/TabList";
import TabPanels from "../navigation/tabs/TabPanels";
import TabPanel from "../navigation/tabs/TabPanel";
import Restaurant from "./Restaurant";
import styles from "../../pages/homepage.module.css";
import TabsProvider from "../navigation/tabs/TabsProvider";
import { useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantsIds,
} from "../../redux/entities/restaurant/slice";
import type { RootState } from "../../redux/store";
import RestaurantTab from "./RestaurantTab";

const RestaurantTabs = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const defaultRestaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantIds[0])
  );

  if (!defaultRestaurant.name) {
    return null;
  }

  return (
    <TabsProvider value={defaultRestaurant.id}>
      <Tabs>
        <TabList>
          {restaurantIds.map((restaurantId) => (
            <RestaurantTab key={restaurantId} id={restaurantId} />
          ))}
        </TabList>
        <TabPanels>
          {restaurantIds.map((restaurantId) => (
            <TabPanel key={restaurantId} value={restaurantId}>
              <Restaurant
                id={restaurantId}
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
