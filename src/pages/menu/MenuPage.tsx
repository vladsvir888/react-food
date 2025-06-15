import { useEffect } from "react";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import getDishes from "../../redux/entities/dish/get-dishes";
import {
  selectDishes,
  selectRequestStatus,
} from "../../redux/entities/dish/slice";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import useParamId from "../../hooks/useParamId";

const MenuPage = () => {
  const id = useParamId();
  const dispatch = useDispatch<AppDispatch>();
  const dishes = useSelector(selectDishes);
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getDishes(id));
  }, [dispatch, id]);

  if (
    requestStatus === RequestStatus.idle ||
    requestStatus === RequestStatus.pending
  ) {
    return <Spinner />;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Error />;
  }

  return (
    <div className="menu-page">
      <h2>Menu:</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Button variant="link" to={`/dish/${dish.id}`}>
              {dish.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
