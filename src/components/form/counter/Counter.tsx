import { useState } from "react";
import Button from "../../button/Button";
import Input from "../input/Input";
import styles from "./counter.module.css";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";

type Props = {
  initialValue?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onChange?: (value: number) => void;
};

export const MIN_VALUE = 0;
const MAX_VALUE = 5;

const Counter = ({
  initialValue,
  onIncrement,
  onDecrement,
  onChange,
}: Props) => {
  const [count, setCount] = useState(initialValue || MIN_VALUE);

  const handleIncrement = () => {
    if (count === MAX_VALUE) {
      return;
    }

    setCount(count + 1);

    if (onIncrement && typeof onIncrement === "function") {
      onIncrement();
    }
  };
  const handleDecrement = () => {
    if (count === MIN_VALUE) {
      return;
    }

    setCount(count - 1);

    if (onDecrement && typeof onDecrement === "function") {
      onDecrement();
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    const value =
      targetValue > MAX_VALUE || isNaN(targetValue) ? MIN_VALUE : targetValue;

    setCount(value);

    if (onChange && typeof onChange === "function") {
      onChange(value);
    }
  };

  return (
    <div className={styles.counter}>
      <Button
        className={styles.buttonDecrease}
        title="Decrease"
        icon={<MinusIcon />}
        variant="secondary"
        onClick={handleDecrement}
      />
      <Input
        classNameWrap={styles.inputWrap}
        className={styles.input}
        value={count}
        placeholder="Enter a count"
        onChange={handleChange}
      />
      <Button
        className={styles.buttonIncrease}
        title="Increase"
        icon={<PlusIcon />}
        variant="secondary"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default Counter;
