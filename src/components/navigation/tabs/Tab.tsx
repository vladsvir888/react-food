import { useTabsContext } from "./Context";

type Props = {
  value: string;
  children: React.ReactNode;
};

const Tab = ({ children, value }: Props) => {
  const tabsContext = useTabsContext();

  return (
    <button className="tab" onClick={() => tabsContext.setActiveValue(value)}>
      {children}
    </button>
  );
};

export default Tab;
