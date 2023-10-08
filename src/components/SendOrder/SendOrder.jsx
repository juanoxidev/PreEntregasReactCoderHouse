import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
// debemos tener la base de datos implementada para mandar los datos

const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const db = getFirestore(); // obtenemos la base de datos
  const handleSubmit = (e) => {
    e.preventDefault();
    // promesa de agregar la orden a la coleccion de la db y que nos retorne el id para guardarlo en setOrderId addDoc agrega el documento a al colección y siempre le genera un id automatico
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };
  // creamos la orden con el name y el email del form
  const order = {
    fecha: Date.now(),
    buyer: {
      name,
      email,
    },
    // items del carrito cart
    items: cart.map(({ id, name, price }) => ({
      id,
      name,
      price,
    })),
    //total de la compra
    total: 1500,
  };

  // collection: toma como parámetro la base de datos y como se va a llamar la colección, si esta la retorna, si no esta la crea, luego la guardamos su referencia en orderCollection
  const orderCollection = collection(db, "orden");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Enviar Informacion</button>
      </form>
      Order ID:{orderId}
    </div>
  );
};

export default SendOrder;
