# curso-asincronismo-js
Curso de Asincronismo con JS de Platzi

## Que es Asincronismo
Que se ejecutan varias tareas al mismo tiempo, es decir, no necesariamente tiene que ser una tras de otra

**Javascript** es sincrono y, por defecto, tiene un solo subproceso, es decir, un solo hilo para trabajar

**Bloqueante** Una tarea no devuelve el control hasta que se haya completado
**No Bloqueante** Una tarea se devuelve inmediatamente con independencia del resultado. Si se completo, devuelve los datos, si no , un error.

**Concurrencia** Ejecuta tareas, algoritmos, etc. en cualquier orden, sin afectar el resultado.
JS usa un modelo de concurrencias basado en 'loop de eventos'
**EventLoop** -> Es un patron de diseño que espera y distribuye eventos o mensajes en un programa

### Formas de manejar la Asincronia en JS

**Callbacks** -> Una funcion que se pasa como argumento de otra funcion y que sera invocada segun sea la necesidad
**Promesas** -> Es de ES6 - Funcion no bloqueante y asincrona que puede retornar un valor ahora, en el futuro o nunca
**Async / Await** -> Es de ES2017 - Permite estructurar una funcion asincrona sin bloqueo de una manera similar a una funcion asincrona ordinaria

Ahora **Javascript** es asincrono y no bloqueante, con un bucle de eventos (concurrencia) implementado con un unico hilo para sus interface de I/O


## Event Loop
Es un patron de diseño que espera y distribuye eventos o mensajes en un programa

**Memory Heap** -> Los objetos son asignados a un monticulo (espacio grande en memoria no organizado)
**Call Stack (Pila)** -> Apila de forma organizada las instrucciones de nuestro programa. Esta pila funciona con el patrón ***LIFO*** (Last-in, First-out)





