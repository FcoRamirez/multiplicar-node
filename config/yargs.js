const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};



//////importacion con nombre constante con DESTRUCTURACION////
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo txt con las tablas segun su base y limite', opt)
    .help()
    .argv;

module.exports = {
    argv
};