import Button from "../button/Button";

type Props = {
  id: string;
  name: string;
};

const RestaurantLink = ({ id, name }: Props) => {
  return (
    <Button to={`/restaurants/${id}`} size="small" variant="link">
      {name}
    </Button>
  );
};

export default RestaurantLink;
