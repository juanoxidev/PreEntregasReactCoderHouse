# Componentes

Los **componentes Presentacionales** no tienen estado. Simplemente aceptan props y renderizan algunos elementos basados en esas props. Un componente sin estado generalmente contendrá menos lógica y será más fácil de depurar y probar. Son, en esencia, funciones puras. Siempre devuelven el mismo resultado para un conjunto dado de props, y no cambian nada. Idealmente, la mayoría de componentes serán de presentación. Son hijos de los componentes contenedores generalmente.

Los **componentes Contenedores** tienen estado. Mantienen el estado para sí mismos y para cualquier componente hijo, y se lo transmiten a través de props. Por lo general, pasan las funciones del controlador a los hijos y responden a las devoluciones de llamada actualizando su estado interno. Los componentes de contenedor también son responsables de comunicación asincrónica, como las llamadas AJAX a servidor.

### MAP

Es como un for each en donde agarramos un array y por cada objeto del mismo podemos ir desestructurandolo y pasar las props a un componente de presentacion, el objeto debe tener un id y a la hora de pasar las props debemos incluir key = objeto.id.

**Id e imagenes de los productos se los dejamos a la base de datos.**

### Links

## REACT ROUTER

npm install react-router-dom

[Guia](https://zeroidentidad.gitbook.io/)
