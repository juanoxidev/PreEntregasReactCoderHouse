const Promises = () => {
  const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
      resolve("Descuento aplicado");
    } else {
      reject("no se pudo aplicar el descuento");
    }
  });

  aplicarDescuento
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>Promises</div>;
};

export default Promises;
