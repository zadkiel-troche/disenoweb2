
/* console.log("Hola Mundo! ")

var nombre = [
    "Manzana", "Banana",
    { name:"James", profession:"Sales", company: "Amazon" },
]; */

/* crear un algoritmo que genere un array de tamaño dinamico del tipo entero, 
en el que sus elementos puedan ser cargados por el usuario así como su dimension
el algoritmo debera: imprimir la suma de todos lis elementos del array */

var array=[22,5,6,8,41];

/* console.log('Hola, ingrese un valor para el tamaño del array: ');
let dimension = prompt("Ingrese la dimension",0); 

 for(i=0; i<dimension; i++){
    var num = prompt("Ingrese un valor para el array",0);
    array.push(num);
} */

let sum=0;

for(var i=0; i<array.length; i++){
    sum+=array[i];
}
console.log(array)

console.log('La suma de los valores es: '+sum);