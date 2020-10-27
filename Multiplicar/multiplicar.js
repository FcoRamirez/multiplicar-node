const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido como base (${base}) o  limite (${limite}) no es un numerico`.yellow);
            return;
        } else if (limite <= 0) {
            reject(`El limite debe ser mayor a 0`);
            return;
        } else {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                let resultado = base * i;
                data += `${base} * ${i} = ${resultado} \n`.green
            }
            resolve(data);
        }
    });

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`
                // console.log(`resultado ${base} * ${i} = ${resultado}`);
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`.green)
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};