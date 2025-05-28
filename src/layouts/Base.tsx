import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Progressbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
