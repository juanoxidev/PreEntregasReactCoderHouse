import { useEffect, useState } from "react";
import ComponenteVisible from "../ComponenteVIsible/ComponenteVisible";
import ComponentePredeterminado from "../ComponentePredeterminado/ComponentePredeterminado";
import Loader from "../Loader/Loader";

const RenderizadoCondicional = () => {
  const [loading, setLoading] = useState(true);
  const [elementos, setElementos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setElementos(["Elemento1", "Elemento2", "Elemento3"]);
    }, 5000); // luego de 5 segundos el loading se torna false y retorna
  }, []);
  if (loading) {
    return <Loader />;
  }
  // Renderizado basado en una expresion
  // const isVisible = true;
  // Cart.length > 0 -> formulario
  // Renderizado condicional basado en un operador ternario
  // const usuarioRegistrado = true;
  //Renderizado  condicional basado en el estado de un componente
  // const [mensaje, setMensaje] = useState("");
  // Renderizado condicional basado en un operador OR || si uno es true y el otro false te va a mostrar el que es true
  // const miVariable = true;
  // Falsy values:
  // false.
  // 0 (zero)
  // '' or “” (empty string)
  // null.
  // undefined.
  // NaN.
  return (
    <>
      <h2>Lista de elementos</h2>
      {elementos.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
      {/* {isVisible && <ComponenteVisible />} */}
      {/* {usuarioRegistrado ? <p>Registrado</p> : <p>No registrado</p>} */}
      {/* {mensaje ? <h1>{mensaje}</h1> : <h3>No hay mensaje</h3>}
      <button onClick={() => setMensaje("Mensaje Modificado")}>
        Cambiar Mensaje
      </button> */}
      {/* {miVariable || <ComponentePredeterminado />} */}
    </>
  );
};

export default RenderizadoCondicional;
