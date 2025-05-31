import styles from "./styles/tablist.module.css";

type Props = {
  children: React.ReactNode;
};

const TabList = ({ children }: Props) => {
  return <div className={styles.tabList}>{children}</div>;
};

export default TabList;
