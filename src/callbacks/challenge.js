//Para usar el XMLhttprequest, debo instalar un recurso de npm desde la terminal, que es: npm i xmlhttprequest
//Luego de instalar este recurso, ahora si procedo a llamarlo
const XMLhttprequest = require('xmlhttprequest').XMLHttpRequest;

//Llamado de la API -> se pone en mayusculas porque ese valor no va a cambiar 
const API = 'https://api.escuelajs.co/api/v1'; //->ruta de la API

//Ahora crearemos una funcion que nos permita recibir la url (en este caso la API), y el callback con una funcion anonima para recibir la solicitud que le hacemos a la API
//el urlApi es un argumento de la funcion, no es la const API que creamos arriba... Y el callback es el parametro que recibira la informacion recibida de la API
function fetchdata(urlApi, callback){
    let xhttp = new XMLhttprequest(); //variable que hace referencia al require que hicimos arriba

    //el .open abre una conexion con la API. El primer argumento es el tipo de peticion que se va a hacer, en este caso se esta pidiendo informacion, por lo que es 'GET'. El segundo argumento es la url, la cual esta como parametro de esta misma funcion urlApi. Y el tercer valor es true (si es asyn o no) para habilitar la url
    xhttp.open('GET', urlApi, true);

    //.onreadystatechange-> escucha diferentes estados de la solicitud y conoce cuando está disponible la información
    xhttp.onreadystatechange = function(event){
        //Aqui se valida el estado en el que se encuentra.
        if(xhttp.readyState === 4){
        //el 4 hace referencia al estado 'completado' de XMLHTTPRequest
            if(xhttp.status === 200){
            //el 200 hace referencia al estado del servidor. Indica que todo esta OK
                //el primer valor no se porque lo pone null... Pero dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
                callback(null, JSON.parse(xhttp.responseText))    
            }    
            else{
                //cuando tengamos un error. El primer argumento solo es el nombre que se le da, y el segundo es la url de donde se obtiene o donde se genera ese error
                const error = new Error('Error' + urlApi);
                return callback(error, null);//Se pasa la variable que se creo aqui arriba como argumento, y luego null porque no va a regresar ningun dato
            }
        }
    }
    xhttp.send();
}


//Aqui se esta haciendo el llamado a la funcion, y se hace con estas comillas ` ` para poder concatenar mas facil las cosas... Entonces el primer argumento es la url, que esta guardada en la const API, y luego la parte de la ruta a la que apunta. Luego paso una funcion anonima que recibe 2 parametros, un error y un arreglo que almacena todos los objetos traidos por la API. Cuando se hizo el llamado a la funcion en la parte de arriba, en el if(...){...}, la parte del callback(error, null) o callback(null, JSON.parse(...)) se entiende mejor el porque de esta funcion anonima que se esta llamando aqui

fetchdata(`${API}/products`, function(error1, data1){
    //Aqui se valida si regresa un error, y en ese caso, que se detenga la ejecucion y imprime el error
    if(error1) return console.error(error1);

    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchdata(`${API}/products/${data1[0].id}`, function (error2, data2) {
         //si en este punto se identifica un error se imprime en consola y se detiene el proceso
         if (error2) return console.error(error2);

         //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de 'optional chaining' el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores se envia una funcion anonima con 2 argumentos, un objeto error y un objeto de datos
        fetchdata(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) return console.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
    });
});

//Ir a la terminal, para compilar challenge.js se coloca: node src/callback/challenge.js Se obtiene las 3 salidas: el id, el título que corresponde al id y el nombre del tipo de categoría: