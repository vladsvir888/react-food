import Button from "../../button/Button";
import Input from "../input/Input";
import styles from "./counter.module.css";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";

type Props = {
  initialValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (value: number) => void;
};

export const MIN_VALUE = 0;
const MAX_VALUE = 5;

const Counter = ({
  initialValue,
  onIncrement,
  onDecrement,
  onChange,
}: Props) => {
  const handleIncrement = () => {
    if (initialValue === MAX_VALUE) {
      return;
    }

    onIncrement();
  };
  const handleDecrement = () => {
    if (initialValue === MIN_VALUE) {
      return;
    }

    onDecrement();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    const value =
      targetValue > MAX_VALUE || isNaN(targetValue) ? MIN_VALUE : targetValue;

    onChange(value);
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
        value={initialValue}
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
