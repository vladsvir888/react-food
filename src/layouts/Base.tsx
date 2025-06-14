import { useEffect } from "react";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";
import ThemeProvider from "../components/theme/ThemeProvider";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import getUsers from "../redux/entities/user/get-users";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const BaseLayout = ({ children }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
