import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count === 5) {
      return;
    }

    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value > 5 || isNaN(value)) {
      setCount(0);
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
