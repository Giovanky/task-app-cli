const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
    break;
    case 'listar':
        let listado = porHacer.listado();
        for(let tarea of listado){
            console.log(`Tarea: ${tarea.descripcion}`.green);
            console.log(`Estado: ${tarea.completado}`.yellow);
        }
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    break;

    default:
        console.log('comando no reconocido');
}