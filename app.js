//requireds

// const fs = require('fs');
// const fileSystem = require('express'); libreria externa
// const fileSystem = require('./fs'); archivo (libreria) personal


const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
// let base = 'assd';

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(process.argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);
console.log('limite', argv.limite);