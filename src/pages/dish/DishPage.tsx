import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { AppDispatch, RootState } from "../../redux/store";
import {
  selectDishById,
  selectRequestStatus,
} from "../../redux/entities/dish/slice";
import DishCard from "../../components/dishcard/DishCard";
import { useEffect } from "react";
import { getDish } from "../../redux/entities/dish/get-dish";
import { RequestStatus } from "../../redux/types";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";

const DishPage = () => {
  const id = useParams().id as string;
  const dispatch = useDispatch<AppDispatch>();
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  const requestStatus = useSelector(selectRequestStatus);

  useEffect(() => {
    dispatch(getDish(id));
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
    <div className="dish-page">
      <DishCard dish={dish} />
    </div>
  );
};

export default DishPage;
