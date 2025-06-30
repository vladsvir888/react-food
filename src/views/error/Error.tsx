import { useEffect } from "react";
import Button from "@/components/button/Button";
import styles from "./error.module.css";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={styles.root}>
      <h1>Something went wrong!</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default Error;
