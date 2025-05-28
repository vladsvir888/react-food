import classNames from "classnames";
import styles from "./input.module.css";

type InputTypes =
  | "date"
  | "datetime-local"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url";

type Props = {
  type?: InputTypes;
  placeholder: string;
  value: string | number;
  classNameWrap?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  placeholder,
  value,
  classNameWrap,
  className,
  onChange,
}: Props) => {
  return (
    <div className={classNameWrap}>
      <input
        className={classNames(styles.input, className)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
