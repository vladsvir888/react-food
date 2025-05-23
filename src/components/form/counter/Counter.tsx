import { useState } from "react";

const MIN_VALUE = 0;
const MAX_VALUE = 5;

const Counter = () => {
  const [count, setCount] = useState(MIN_VALUE);

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

  return (
    <div className="counter">
      <button
        className="counter__button"
        title="Decrease"
        onClick={handleDecrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={10}
          height={10}
        >
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <input
        type="text"
        value={count}
        onChange={handleChange}
        placeholder="Enter a count"
      />
      <button
        className="counter__button"
        title="Increase"
        onClick={handleIncrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={10}
          height={10}
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
