type Menu = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type RestaurantType = {
  id: string;
  name: string;
  menu: Menu[];
  reviews: Review[];
};

export type NormilizedRestaurantType = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
};

export type NormalizedUserType = {
  id: string;
  name: string;
};
