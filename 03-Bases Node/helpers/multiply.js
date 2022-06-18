const fs = require('fs');
const crearArchivoTabla = async (base = 1) => {

    /* let newFile = new Promise((resolve, reject) => {
        console.log("=========================");
        console.log(`Tabla del ${base}`);
        console.log("=========================");

        let salida = "";
        for (let i = 0; i < 11; i++) {
            salida += (`${base} X ${i} = ${base * i}\n`);
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve (`table-${base} created and saved successfuly.`);
    })
    return newFile; */
    try {
        console.log("=========================");
        console.log(`Tabla del ${base}`);
        console.log("=========================");

        let salida = "";
        for (let i = 0; i < 11; i++) {
            salida += (`${base} X ${i} = ${base * i}\n`);
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return (`table-${base}`);
    } catch (error) {
        throw new Error("No se pudo crear el archivo");
    }
}

module.exports = {
    crearArchivoTabla
}