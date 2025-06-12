import { useSelector } from "react-redux";
import { selectCart } from "../../redux/entities/cart/slice";
import styles from "./cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <div className={styles.cart}>
      <p>Cart</p>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
