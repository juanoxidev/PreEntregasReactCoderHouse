import { useEffect, useState, useParams } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = () => {
  // const { id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "producto", "Cawr93E850odgG4SYflm");
    // const oneItem = doc(db, "producto", `${id}`;
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProducto(docs);
      }
    });
  }, []);
  console.log(producto);
  return (
    <>
      <h3>{producto.nombre}</h3>
      <h4>{producto.precio}</h4>
      <h4>{producto.categoria}</h4>
    </>
  );
};

export default Document;
