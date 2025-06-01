import { createContext, useContext } from "react";
import type { TabsContextType } from "./types";

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("useTabsContext must be used within a Provider");
  }

  return tabsContext;
};
