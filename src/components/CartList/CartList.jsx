import { useCart } from "../../context/CartContext";

const CartList = () => {
  const { clear, removeItem, addItem, cart, setCartt } = useCart();
  return <>{console.log(cart)}</>;
};

export default CartList;
