import ReduxProvider from "@/redux/ReduxProvider";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";
import ThemeProvider from "../components/theme/ThemeProvider";
import { sendRequest } from "@/utils/send-request";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = async ({ children }: Props) => {
  await sendRequest({ url: "/users" });

  return (
    <ReduxProvider>
      <ThemeProvider>
        <Progressbar />
        <Header />
        <main>{children}</main>
        <Cart />
        <Footer />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default BaseLayout;
