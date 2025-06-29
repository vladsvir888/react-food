import Button from "@/components/button/Button";
import styles from "./notfound.module.css";

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Button to="/">Go back</Button>
    </div>
  );
};

export default NotFound;
