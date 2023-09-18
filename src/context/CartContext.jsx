import { createContext, useState, useContext } from "react";

// Creamos un contexto para el carrito
export const CartContext = createContext();

// Creamos un proveedor que contiene el estado del carrito y funciones para modificarlo envolvemos nuestra app con este provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);

  // Función para agregar un producto al carrito
  const addItem = (product, quantity) => {
    console.log(product.id);
    if (isInCart(product.id)) {
      console.log("entrando a agregar mas cantidad");
      setUnidades(unidades + quantity);
      addMore(product, quantity);
    } else {
      console.log("agregando por primera vez");
      setUnidades(unidades + quantity);
      add(product, quantity);
    }
  };
  // Función para agregar + de un producto al carrito
  const addMore = (product, quantity) => {
    const { id } = product;
    const productFound = findProduct(id);
    productFound.cantidad += quantity;
  };

  // Función para agregar un producto al carrito
  const add = (product, quantity) => {
    const { nombre, precio, id } = product;
    const addProduct = {
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: quantity,
    };
    setCart([...cart, addProduct]);
  };

  // Función que pregunta si esta en el carrito

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  // Función para buscar un producto en el carrito
  const findProduct = (id) => {
    return cart.find((producto) => producto.id === id);
  };

  // Función para eliminar todos los producto en el carrito
  const clear = () => {
    setUnidades(0);
    setCart([]);
  };

  // Función para para eliminar un producto en el carrito
  const removeItem = (id, cantidad) => {
    const cartFiltered = cart.filter((product) => product.id !== id);
    setCart(cartFiltered);
    setUnidades(unidades - cantidad);
  };

  // const productosEnCarrito = () => {
  //   let cantidadTotal = 0;
  //   cart.forEach((producto) => {
  //     console.log(typeof producto.cantidad);
  //     cantidadTotal += producto.cantidad;
  //   });
  //   return cantidadTotal;
  // };
  return (
    <CartContext.Provider
      value={{ clear, removeItem, addItem, cart, setCart, unidades }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Un hook personalizado para acceder al contexto del carrito en cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};
