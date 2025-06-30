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
  | "url"
  | "hidden";

type Props = {
  type?: InputTypes;
  placeholder?: string;
  value?: string | number;
  classNameWrap?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  placeholder,
  disabled,
  value,
  classNameWrap,
  className,
  name,
  required,
  onChange,
}: Props) => {
  return (
    <div className={classNameWrap}>
      <input
        className={classNames(styles.input, className)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
