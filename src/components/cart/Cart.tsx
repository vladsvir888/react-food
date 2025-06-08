import { useSelector } from "react-redux";
import { getCart } from "../../redux/entities/cart/slice";
import styles from "./cart.module.css";

const Cart = () => {
  const cart = useSelector(getCart);

  return (
    <div className={styles.cart}>
      <p>Cart</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
