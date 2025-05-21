type Props = {
  children: React.ReactElement[];
};

const TabPanels = ({ children }: Props) => {
  return <div className="tab-panels">{children}</div>;
};

export default TabPanels;
