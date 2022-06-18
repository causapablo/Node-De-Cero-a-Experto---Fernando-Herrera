const fs = require('fs');
const { crearArchivoTabla } = require('./helpers/multiply')
console.clear();
const base = 17;

crearArchivoTabla(base)
    .then(archivo => console.log(archivo, "Created and saved Successfuly"))
    .catch(error => console.log(error));