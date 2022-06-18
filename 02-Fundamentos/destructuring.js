const deadpool = {
    nombre : "Wade",
    apellido : "Winston",
    poder : "Regeneracion",
    getInfo : ()=>{
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
//console.log(deadpool.getInfo());
const {nombre, apellido, poder, getInfo } = deadpool;
console.log(nombre);
console.log(apellido);
console.log(poder);
console.log(getInfo());
//Ejemplo: Si queremos imprimir la información de un personaje podemos hacer destructuring en los argumentos de una function o componente.
//Esto nos permite usar las propiedades de un objeto que se le pasa por parametro como variables individuales.
function imprimirHeroe({nombre, apellido, poder, edad = 0}){
    return `${nombre} ${apellido} ${poder} ${edad}`;
}
console.log('-----------Destructuring------------------')
console.log(imprimirHeroe(deadpool));

const [h1,h2,h3] = ["Deadpool", "Superman", "Batman"];//Asi hacemos destructring con arreglos.
//Luego se pueden usar los items del arreglo como variables individuales. 

