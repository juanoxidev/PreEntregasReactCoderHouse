import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { catid } = useParams();
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "producto");
    getDocs(itemsCollection).then((snapshot) => {
      // como traer el id de firebase con su dat
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(docs);
      const filteredProducts = docs.filter((p) => p.categoria == catid);
      setProductosFiltrados(filteredProducts);
    });
  }, [catid]);

  return (
    <>
      <ItemList
        productos={catid != undefined ? productosFiltrados : productos}
      />
    </>
  );
};

export default ItemListContainer;
