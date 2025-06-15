export type NormalizedRestaurantType = {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: string[];
  reviews: string[];
};

export type NormalizedUserType = {
  id: string;
  name: string;
};

export type NormalizedReviewType = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type NormalizedDishType = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};
