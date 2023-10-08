import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext";

import "./FormFormik.css";

export const FormFormik = () => {
  const { cart, montoEnCarrito, clear } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formSended, setFormSended] = useState(false);
  const formatoGuarani = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
  });

  const db = getFirestore(); // obtenemos la base de datos
  // formik identifica los inputs por la etiqueta name, hay que ponerlo siempre
  const order = {
    fecha: new Date(Date.now()).toLocaleDateString(),
    buyer: {
      name,
      email,
    },
    // items del carrito cart
    items: cart.map(({ id, nombre, precio }) => ({
      id,
      nombre,
      precio,
    })),
    //total de la compra
    total: montoEnCarrito(),
  };

  // duda: al formatear al guarani, a la hora de subirlo a la base de datos se muestra como un string "GS. montox" es correcto o debe ser un numero?, Conviene dejar la fecha en formato milisegundos? ya que en caso de que quisiera ordenar x fecha seria util ese dato en milisegundos.

  const orderCollection = collection(db, "orden");

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};
          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
            // probar una regex .test(parametro a analizar)
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          } else {
            setName(valores.nombre);
          }
          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo";
            // probar una regex .test(parametro a analizar)
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "No es un correo valido";
          } else {
            setEmail(valores.correo);
          }

          return errores;
        }}
        onSubmit={() => {
          addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
          setFormSended(true);
          setTimeout(() => {
            setFormSended(false);
            clear();
          }, 4000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => {
                  <div className="error">{errors.nombre}</div>;
                }}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="Ingresa tu correo"
              />
              <ErrorMessage
                name="correo"
                component={() => {
                  <div className="error">{errors.correo}</div>;
                }}
              />
            </div>
            <button type="submit">Enviar</button>
            {formSended && (
              <>
                <p className="exito">Formulario enviado con exito!</p>
                <p className="exito">Orden ID: {orderId}</p>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
    // https://youtu.be/2Xs1DAzYHXY?t=2846
  );
};

export default FormFormik;
