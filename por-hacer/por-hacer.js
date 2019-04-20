const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo almacenar');
        console.log('se ha actualizado la db');
    });
},
cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(e){
        listadoPorHacer = [];
    }
},
crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
},
listado = () => {
    cargarDB();
    return listadoPorHacer;
},
actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index>=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
},
borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {crear,listado,actualizar,borrar,guardarDB};
