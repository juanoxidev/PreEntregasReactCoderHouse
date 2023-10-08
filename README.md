# Sobre el proyecto

Se utilizó React con Vite para crear el ecommerce de prueba utilizando los hooks UseContext, UseState, UseEffect,UseCart(hook creado) además se usó React-Router para mapear las rutas y el hook UseParams, Formik para crear el formulario con validación de datos y Firebase como base de datos no relacional. 
El usuario puede ir navegando a través de las distintas categorías y debe clickear en "detalle" si quiere adquirir un producto, una vez realizada la acción allí podrá seleccionar la cantidad que desea comprar y la puede agregar el carrito. Al terminar el proceso de selección se puede ir al carrito al clickear en el icono correspondiente en la barra de navegación donde se muestra la cantidad seleccionada de cada ítem, esto puede ser modificado entre 1 y el stock que tenga ese ítem, si no lo quiere comprar puede eliminar el producto del carrito, si selecciono más de 1 producto diferente también tiene la opción de borrar el carrito entero, además mientras haya algún producto en el carrito se mostrara el precio total de la compra y la cantidad al lado del icono en la barra de navegación. Mientras haya al menos 1 producto en el carrito va a permitir finalizar la compra, al clickear el botón correspondiente se renderiza un formulario en donde el usuario debe cargar un nombre y un email (tienen validación) en caso de no hacerlo correctamente no se va a enviar el formulario. Si se llenan los campos correctamente aparecerá un mensaje diciendo que la compra ha sido finalizada con el ID de la orden y a los segundos se vaciara el carrito completamente.

El proyecto se encuentra deployado en vercel: https://pre-entregas-react-coder-house.vercel.app/
 

### Links a recursos extras consultados

[Guia React](https://zeroidentidad.gitbook.io/)
[React-Router](https://www.youtube.com/watch?v=iPNt12IdbCU)
[Formik](https://youtu.be/2Xs1DAzYHXY?t=2846)
