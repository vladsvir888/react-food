type Props = {
  children: React.ReactElement[];
};

const Tabs = ({ children }: Props) => {
  return <div className="tabs">{children}</div>;
};

export default Tabs;
