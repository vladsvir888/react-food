"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";
import ThemeProvider from "../components/theme/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
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
