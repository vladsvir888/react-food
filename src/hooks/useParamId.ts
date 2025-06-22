import { useParams } from "next/navigation";

const useParamId = () => {
  const params = useParams<{ id?: string }>();

  if (!params?.id) {
    throw new Error("Id parameter is missing");
  }

  return params.id;
};

export default useParamId;
