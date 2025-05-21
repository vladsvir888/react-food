type Props = {
  children: React.ReactElement[];
};

const TabList = ({ children }: Props) => {
  return <div className="tab-list">{children}</div>;
};

export default TabList;
