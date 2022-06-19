const { crearArchivoTabla } = require('./helpers/multiply');
const argv = require('./config yargs/yargs');
const colors = require('colors');

//crear una nueva option l que deberia listar, type boolean, , opcional, default = false.
//si listar esta en false, no consologuea salida, si esta en true, se consologuea. 
console.clear();
/* 
console.log("Process.argv",process.argv); */


/* console.log("argv", argv);
console.log("La base de yargs es : ", argv.base); */
crearArchivoTabla(argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(colors.rainbow(archivo), "Created and saved Successfuly".underline.magenta))
    .catch(error => console.log(error));

//Tarea agregar un parametro h, que sea hasta, la multiplicacion se va a realizar hasta el valor h. 