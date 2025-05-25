type Props = {
  children: React.ReactNode;
};

const TabList = ({ children }: Props) => {
  return <div className="tab-list">{children}</div>;
};

export default TabList;
