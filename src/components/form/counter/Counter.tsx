import Button from "../../button/Button";
import Input from "../input/Input";
import styles from "./counter.module.css";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const MIN_VALUE = 0;
const MAX_VALUE = 5;

const Counter = ({ count, setCount }: Props) => {
  const handleIncrement = () => {
    if (count === MAX_VALUE) {
      return;
    }

    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === MIN_VALUE) {
      return;
    }

    setCount(count - 1);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value > MAX_VALUE || isNaN(value)) {
      setCount(MIN_VALUE);
    } else {
      setCount(value);
    }
  };

  const decreaseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={10}
      height={10}
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
  const increaseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={10}
      height={10}
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
    </svg>
  );

  return (
    <div className={styles.counter}>
      <Button
        className={styles.buttonDecrease}
        title="Decrease"
        icon={decreaseIcon}
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
        icon={increaseIcon}
        variant="secondary"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default Counter;
