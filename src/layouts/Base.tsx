import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";
import ThemeProvider from "../components/theme/ThemeProvider";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const BaseLayout = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <Progressbar />
      <Header />
      <main>{children}</main>
      <Cart />
      <Footer />
    </ThemeProvider>
  );
};

export default BaseLayout;
