const fs = require('fs');
const { crearArchivoTabla } = require('./helpers/multiply')
const argv = require('yargs').argv;
const colors = require('colors');
console.clear();
/* 
console.log("Process.argv",process.argv); */


console.log("argv",argv);
console.log("La base de yargs es : ", argv.base);
crearArchivoTabla(argv.base)
    .then(archivo => console.log(archivo, "Created and saved Successfuly"))
    .catch(error => console.log(error));