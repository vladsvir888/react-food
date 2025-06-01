export type User = {
  name: string;
};

export type UserContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};
