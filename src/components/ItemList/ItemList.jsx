import React from "react";
import Item from "../Item/Item";

//memorizacion

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => {
        return (
          <Item
            nombre={p.nombre}
            precio={p.precio}
            stock={p.stock}
            descripcion={p.descripcion}
            key={p.id}
            id={p.id}
          />
        );
      })}
    </div>
  );
};

export default React.memo(ItemList);
