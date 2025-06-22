import classNames from "classnames/bind";
import styles from "./button.module.css";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  title?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "link";
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  size?: "small" | "normal" | "large";
  to?: string;
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
  to,
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

  if (to) {
    return (
      <Link href={to} className={classes}>
        {icon}
        {children && <span>{children}</span>}
      </Link>
    );
  }

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
