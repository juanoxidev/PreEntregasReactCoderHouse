import { useState, useEffect } from "react";
import FetchView from "../FetchView/FetchView";

const Fetch = () => {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    getProducts().then((product) => setProduct(product));
  }, []);
  return (
    <>
      {product.map((p) => {
        return <FetchView key={p.id} title={p.title} price={p.price} />;
      })}
    </>
  );
};

export default Fetch;
