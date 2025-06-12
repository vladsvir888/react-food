import BaseLayout from "./layouts/Base";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantsPage from "./pages/restaurants/RestaurantsPage";
import HomePage from "./pages/home/HomePage";
import RestaurantPage from "./pages/restaurant/RestaurantPage";
import MenuPage from "./pages/menu/MenuPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import DishPage from "./pages/dish/DishPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantPage />}>
              <Route index element={<MenuPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="/dish/:id" element={<DishPage />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
