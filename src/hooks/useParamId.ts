import { useParams } from "react-router";

const useParamId = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    throw new Error("Id parameter is missing");
  }

  return id;
};

export default useParamId;
