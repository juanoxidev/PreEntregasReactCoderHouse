// shorcut rafce
import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    nombre === "" ? alert("Existen campos vacios") : alert(nombre);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
