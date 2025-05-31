import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Progressbar from "../components/progressbar/Progressbar";
import ThemeProvider from "../components/theme/ThemeProvider";
import UserProvider from "../components/user/UserProvider";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const BaseLayout = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Progressbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </UserProvider>
    </ThemeProvider>
  );
};

export default BaseLayout;
