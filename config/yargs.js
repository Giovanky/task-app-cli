const descripcion = {
    demand: true,
    alias: 'd'
},
completado = {
    alias: 'c',
    default: true
},
argv = require('yargs')
.command('crear','crea una tarea por hacer', {descripcion})
.command('actualizar','actualiza una taera', {descripcion, completado})
.command('borrar','borra la tarea', {descripcion})
.help().argv;

module.exports = { argv };