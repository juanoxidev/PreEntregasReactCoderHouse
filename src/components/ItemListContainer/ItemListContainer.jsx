import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const productos = [
    {
      id: 1,
      nombre: "Pc Gamer",
      precio: 125000,
      descripcion: "A",
      stock: 200,
    },
    { id: 2, nombre: "monitor", precio: 50000, descripcion: "B", stock: 500 },
    { id: 3, nombre: "teclado", precio: 5000, descripcion: "C", stock: 300 },
  ];

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
