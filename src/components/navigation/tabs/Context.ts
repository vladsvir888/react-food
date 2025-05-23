import { createContext, useContext } from "react";

export type TabsContextType = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("useTabsContext must be used within a Provider");
  }

  return tabsContext;
};
