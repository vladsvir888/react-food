import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
