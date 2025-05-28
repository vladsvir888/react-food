import Button from "../../button/Button";
import { useTabsContext } from "./Context";
import classNames from "classnames";
import styles from "./tab.module.css";

type Props = {
  value: string;
  children: React.ReactNode;
};

const Tab = ({ children, value }: Props) => {
  const tabsContext = useTabsContext();
  const isActiveTab = value === tabsContext.activeValue;
  const classes = classNames("tab", { [styles.activeTab]: isActiveTab });

  return (
    <Button
      className={classes}
      variant={isActiveTab ? "primary" : "secondary"}
      onClick={() => tabsContext.setActiveValue(value)}
    >
      {children}
    </Button>
  );
};

export default Tab;
