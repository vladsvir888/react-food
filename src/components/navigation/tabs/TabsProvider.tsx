import { useState } from "react";
import { TabsContext } from "./TabsContext";

type Props = {
  children: React.ReactElement;
  value: string;
};

const TabsProvider = ({ children, value }: Props) => {
  const [activeValue, setActiveValue] = useState(value);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
