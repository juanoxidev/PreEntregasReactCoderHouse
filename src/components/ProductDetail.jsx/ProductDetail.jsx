import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // lee la informacion de la url y lo muestra en el componente
  console.log(id);

  return (
    <>
      <h1>ProductDetail</h1>
      <h2>{id}</h2>
    </>
  );
}

export default ProductDetail;
