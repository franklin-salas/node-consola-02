 
const { number, option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar.js'); 
//  const { argv } = require('yargs');
 const argv = require('./config/yargs');
console.clear();


// console.log(argv);

crearArchivo(argv.b , argv.l, argv.h)
    .then(archivo => console.log(archivo , 'creado'))
    . catch(err => console.log(err));