import { useState } from "react";
import Counter, { MIN_VALUE } from "../form/counter/Counter";

const DishCounter = () => {
  const [count, setCount] = useState(MIN_VALUE);

  return <Counter count={count} setCount={setCount} />;
};

export default DishCounter;
