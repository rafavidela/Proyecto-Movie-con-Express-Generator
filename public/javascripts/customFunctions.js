let fs=require('fs');


function leerDatos(archivo) {
    let datos = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    return datos;
}


module.exports.leerDatos=leerDatos;
