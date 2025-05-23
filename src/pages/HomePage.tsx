import { restaurants } from "../assets/restaurants";
import { useState } from "react";
import Tabs from "../components/navigation/tabs/Tabs";
import TabList from "../components/navigation/tabs/TabList";
import Tab from "../components/navigation/tabs/Tab";
import TabPanels from "../components/navigation/tabs/TabPanels";
import TabPanel from "../components/navigation/tabs/TabPanel";
import { TabsContext } from "../components/navigation/tabs/Context";
import Restaurant from "../components/restaurant/Restaurant";

const HomePage = () => {
  const [activeValue, setActiveValue] = useState(restaurants[0].id);

  return (
    <>
      <h1>Рестораны:</h1>
      <TabsContext.Provider value={{ activeValue, setActiveValue }}>
        <Tabs>
          <TabList>
            {restaurants.map((restaurant) => (
              <Tab key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {restaurants.map((restaurant) => (
              <TabPanel key={restaurant.id} value={restaurant.id}>
                <Restaurant restaurant={restaurant} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabsContext.Provider>
    </>
  );
};

export default HomePage;
