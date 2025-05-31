import classNames from "classnames/bind";
import styles from "./button.module.css";

type Props = {
  children?: React.ReactNode;
  title?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  size?: "small" | "normal" | "large";
  onClick?: () => void;
};

const cx = classNames.bind(styles);

const Button = ({
  children,
  title,
  type = "button",
  variant = "primary",
  icon,
  disabled,
  className,
  size = "normal",
  onClick,
}: Props) => {
  const classes = cx(
    styles.button,
    {
      [`button_${variant}`]: variant,
      [`button_${size}`]: size,
    },
    className
  );

  return (
    <button
      className={classes}
      title={title}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
