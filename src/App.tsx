import BaseLayout from "./layouts/Base";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    </Provider>
  );
};

export default App;
