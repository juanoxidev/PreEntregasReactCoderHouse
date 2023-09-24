import { useState } from "react";
import { Formik } from "formik";
import "./FormFormik.css";

export const FormFormikPrueba = () => {
  const [formSended, setFormSended] = useState(false);
  // formik identifica los inputs por la etiqueta name, hay que ponerlo siempre

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
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores);
          setFormSended(true);
          setTimeout(() => setFormSended(false), 5000);
        }}
      >
        {({
          handleSubmit,
          values,
          touched,
          handleChange,
          handleBlur,
          errors,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur} // cuando damos click fuera del input ejecuta la validacion
              />

              {/* si el input de nombre fue tocado y si hay un error renderiza errors.nombre */}
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Ingresa tu correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* si el input de correo fue tocado y si hay un error renderiza errors.correo */}
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {formSended && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormFormikPrueba;
