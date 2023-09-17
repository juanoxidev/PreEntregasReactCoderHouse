import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      console.log("entrando a agregar mas cantidad");
      addMore(product, quantity);
    } else {
      console.log("agregando por primera vez");
      add(product, quantity);
    }
  };

  const addMore = (product, quantity) => {
    const { id } = product;
    const productFound = findProduct(id);
    productFound.cantidad += quantity;
  };

  const add = (product, quantity) => {
    const { nombre, precio, id } = product;
    const addProduct = {
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: quantity,
    };
    setCart(...cart, addProduct);
  };
  const isInCart = (id) => {
    const resultado = cart.some((producto) => producto.id === id);
    return resultado;
  };

  const findProduct = (id) => {
    return cart.find((producto) => producto.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const cartFiltered = cart.filter((product) => product.id === id);
    setCart(cartFiltered);
  };
  return (
    <CartContext.Provider value={{ clear, removeItem, addItem, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

// si tenes export const ShoppingCartProvider si o si tenes que recibirlo con ese nombre. Ahora si vos tenes al final export default ShoppingCartProvider , donde lo recibis podes ahcerlo con otro nombre
