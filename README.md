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

**Task Queue** -> Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya estan listas para pasar al stack (la pila). El stack no se puede bloquear, y debe estar vacio para continuar con este flujo

**Microtask Queue** -> Las promesas tienen otra forma de ejecutarse y una prioriad superior

**Web APIs** -> Javascript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. 

***Event Loop*** -> Tarea asignada para mover del task queue al stack, solo si el stack esta vacio

> npm init -y | Este comando me genera un json que identifica mi archivo


## Callbacks
Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

**setTimeout** -> Me permite ejecutar codigo en un tiempo determinado definido 

## XMLHTTPRequest
es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).
Existen 5 estados en un llamado XMLHttpRequest:

0 → Se ha inicializado.
1 → Loading (cargando).
2 → Se ha cargado.
3 → Procesamiento si existe alguna descarga.
4 → Completado.

### Métodos y propiedades:

***xmlhttp.open()*** → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
***xmlhttp.readyState*** → Retorna el estado de la petición.
***xmlhttp.onreadystatechange*** → Un eventHandler que es llamado cuando la propiedad readyState cambia.
***xmlhttp.status*** → Retorna el estado de la respuesta de la petición. (200,400,500)
***xmlhttp.send()*** → Envía la petición

### Características del protocolo http:
**Verbos** indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor.
Los Verbos http son:

***GET*** → Solicita un recurso.
***HEAD*** → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
***POST*** → Sirve para la creación de recursos en el servidor.
***PUT*** → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
***PATCH*** → Actualiza parcialmente un recurso.
***DELETE*** → Elimina un recurso.

### Los códigos de estados del servidor:
El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.

***1xx*** → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
***2xx*** → Indican que la petición fue recibida, aceptada y procesada correctamente.
***3xx*** → Indican que hay que tomar acciones adicionales para completar la solicitud.
***4xx*** → Indican errores del lado del cliente que hizo mal una solicitud.
***5xx*** → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

Los códigos más comunes a la hora de interactuar con una API son:

***200*** → OK → Indica que todo está correcto.
***201*** → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
***204*** → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
***400*** → Bad Request → Indica que algo está mal en la petición (no encontró algo).
***401*** → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
***403*** → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
***404*** → Not Found → Indica que no existe el recurso que se está intentando acceder.
***500*** → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.   

___La nueva forma de hacer peticiones a una API es el fetch.__

## Fetch Data
Para evitar la mala práctica de un Call Hell, no es recomendable exceder de 3 callback, para ello se utilizan las promesas o el Async Away.

Existen varios tipos de console, dependiendo del navegador, la fuente o el color cambian de acuerdo al tipo:
***console.info("info");*** -> muestra un mensaje de información en la consola web
***console.error("error");*** -> muestra mensaje de un error
***console.warn("warn");*** -> muestra mensaje de advertencia
***console.log("log");*** -> para mensajes generales de registro de información

## Callback hell
Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’ y por eso se debe evitar.
