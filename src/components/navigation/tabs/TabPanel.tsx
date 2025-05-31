import { useTabsContext } from "./TabsContext";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  value: string;
};

const TabPanel = ({ children, value }: Props) => {
  const tabsContext = useTabsContext();

  return (
    <>
      {tabsContext.activeValue === value && (
        <div className="tab-panel">{children}</div>
      )}
    </>
  );
};

export default TabPanel;
