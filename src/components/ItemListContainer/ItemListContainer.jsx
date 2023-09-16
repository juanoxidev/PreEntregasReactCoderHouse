import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Amatista",
      precio: 125000,
      descripcion: "Vela Amatista",
      stock: 5,
      categoria: "A",
    },
    {
      id: 2,
      nombre: "Eucalipto",
      precio: 5000,
      descripcion: "Vela Eucalipto",
      stock: 15,
      categoria: "O",
    },
    {
      id: 3,
      nombre: "Savage",
      precio: 5000,
      descripcion: "Vela Savage",
      stock: 20,
      categoria: "EL",
    },
    {
      id: 4,
      nombre: "Souvenier x100 variado",
      precio: 300000,
      descripcion: "Souvenier Velas x100 Variado",
      stock: 2,
      categoria: "S",
    },
    {
      id: 5,
      nombre: "Souvenier x100 unico",
      precio: 200000,
      descripcion: "Souvenier Velas x100 Unico",
      stock: 3,
      categoria: "S",
    },
  ];
  const { catid } = useParams();

  const filteredProducts = productos.filter((p) => p.categoria == catid); //filtro  los productos x categoria

  return (
    // en caso de no elegir una categoria (undefined) se muestran todos los productos de la tienda
    <>
      <ItemList productos={catid != undefined ? filteredProducts : productos} />
    </>
  );
};

export default ItemListContainer;
