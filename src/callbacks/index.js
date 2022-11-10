function sum(num1, num2) {
    return num1 + num2;
} //funcion que suma 2 numeros

function rest(num1, num2) {
    return num1 - num2;
}//funcion que resta 2 numeros

function mult(num1, num2) {
    return num1 * num2;
}//funcion que multiplica 2 numeros

function div(num1, num2) {
    return num1 / num2;
}//funcion que divide 2 numeros

function calc(num1, num2, callback) {
    return callback(num1, num2);
};//funcion que recibe 2 numero cualquiera como parametro, pero ademas, recibe una de las funciones de arriba como callback, es decir, recibe una funcion como parametro


console.log(calc(2, 2, sum));
console.log(calc(2, 2, rest));
console.log(calc(2, 2, mult));
console.log(calc(2, 2, div));

setTimeout(function (){
    console.log(`Hola mi Perro!`);
}, 2000);
//En este caso el setTimeout recibe una funcion anonima como parametro y el tiempo es que se ejecutara esta funcion que sera de 2 segs. El setTimeout es una especie callback porque recibe una funcion como paramtero...

function saludo(nombre){
    console.log(`Hola ${nombre}, como estas?`);
}
setTimeout(saludo, 2000, 'Jorge');
//aqui se crea la funcion saludo que va a ejecutar un simple saludo con console.log() y el parametro de esta funcion es un nombre cualquiera. Ahora, con el setTimeout, se pasa como parametro la funcion saludo, el tiempo que durara en ejecutarse, y el argumento que alimentara el parametro de la funcion misma que tiene como parametro, en este caso, saludo

