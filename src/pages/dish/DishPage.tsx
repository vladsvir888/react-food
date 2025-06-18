import DishCard from "../../components/dishcard/DishCard";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";
import { useGetDishQuery } from "../../redux/api";

const DishPage = () => {
  const id = useParamId();
  const { data: dish, error, isLoading } = useGetDishQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  if (!dish) {
    return null;
  }

  return (
    <div className="dish-page">
      <DishCard dish={dish} />
    </div>
  );
};

export default DishPage;
