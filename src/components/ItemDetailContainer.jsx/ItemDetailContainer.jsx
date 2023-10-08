import ItemDetail from "../ItemDetail/itemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { pid } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "producto", `${pid}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        //agrega tanto la data del producto como el id de firebase
        const doc = { id: snapshot.id, ...snapshot.data() };
        setProducto(doc);
      }
    });
  }, []);

  //[pid]: no es necesesario , porque no pasamos de un detalle a otro. Entonces siempre se desmonta el componente , no es el caso de las categorías que si pasamos a una a otra y queda montado el mismo

  return (
    <>
      <ItemDetail producto={producto} />;
    </>
  );
};

export default ItemDetailContainer;
