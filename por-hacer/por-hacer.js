const fs = require('fs');


let listadoPorHacer = [];

const guadarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            throw new Error('Nose puedo grabar', err);

    });

};


const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');
    } catch (error) {

        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    // Cargar la data de la base datos
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guadarDB();

    return porHacer;
};

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
};


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guadarDB();
        return true;
    } else {
        return false;
    }
};


const borrar = (descripcion) => {

    cargarDB();


    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guadarDB();
        return true;
    }
};



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};