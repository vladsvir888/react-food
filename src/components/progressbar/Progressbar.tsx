import { useEffect, useState } from "react";
import styles from "./progressbar.module.css";

const Progressbar = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressWidth = (scrollPosition / scrollHeight) * 100;
    setWidth(progressWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressbar} style={{ width: width + "%" }}></div>
  );
};

export default Progressbar;
