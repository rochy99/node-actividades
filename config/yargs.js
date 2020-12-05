const descripcion = {

    demand: true,
    alias: 'd',
    des: 'Descripcion de la tarea por hacer'
};

const compleado = {

    default: true,
    alias: 'c',
    desc: 'Marca com o completado o pendiente una tarea'
};


/* console.log(opts); */


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, compleado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help()
    .argv;



module.exports = {
    argv
};