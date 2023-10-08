import { createContext, useState, useContext } from "react";

// Creamos un contexto para el carrito
export const CartContext = createContext();

// Creamos un proveedor que contiene el estado del carrito y funciones para modificarlo envolvemos nuestra app con este provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);

  // Función para agregar un producto al carrito
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      addMore(product, quantity);
    } else {
      add(product, quantity);
    }
  };
  // Función para agregar + de un producto al carrito
  const addMore = (product, quantity) => {
    const { id } = product;
    const productFound = findProduct(id);
    const { cantidad, stock } = productFound;
    let difCantidadStock = stock - cantidad;
    console.log(difCantidadStock);
    if (difCantidadStock > 0 && quantity <= difCantidadStock) {
      product.cantidad += quantity;
      setUnidades(unidades + quantity);
    } else {
      console.log("No hay suficiente stock");
    }
  };

  // Función para agregar un producto al carrito
  const add = (product, quantity) => {
    //como agregar una propiedad a un objeto
    const addProduct = { cantidad: quantity, ...product };
    setCart([...cart, addProduct]);
    setUnidades(unidades + quantity);
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

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };
  // // Función para para eliminar un producto en el carrito
  // const removerProducto = (productId) => {
  //   const updatedCart = cart.filter((product) => product.id !== productId);
  //   setCart(updatedCart);
  // };

  // Función para agregar + de un producto al carrito
  const modifyProduct = (product, quantity) => {
    const { id } = product;
    const productFound = findProduct(id);
    if (quantity <= productFound.stock) {
      productFound.cantidad = quantity;
    } else {
      console.log("A seleccionado una cantidad mayor a la que tiene el pedido");
    }
  };
  const montoEnCarrito = () => {
    let montoTotal = 0;
    cart.forEach((producto) => {
      const { cantidad, precio } = producto;
      montoTotal += cantidad * precio;
    });
    return montoTotal;
  };
  return (
    <CartContext.Provider
      value={{
        clear,
        addItem,
        cart,
        unidades,
        setUnidades,
        modifyProduct,
        montoEnCarrito,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Un hook personalizado para acceder al contexto del carrito en cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};
