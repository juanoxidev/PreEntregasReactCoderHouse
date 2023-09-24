import { useEffect, useState, useParams } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "producto");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      console.log(docs);
      setProductos(docs);
    });
  }, []);
  return (
    <>
      {productos.map((p, index) => (
        <div key=>
          <h3>{p.nombre}</h3>
          <h4>{p.precio}</h4>
          <h4>{p.categoria}</h4>
        </div>
      ))}
    </>
  );
};

export default Collection;
