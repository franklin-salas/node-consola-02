const fs = require("fs");
const color = require('colors');

const crearArchivo = async (base = 5, l = false , h = 10) => {
  //   fs.writeFile("tabla-5.txt", salida, (err) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log("Archivo creado");
  //   });

  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= h; i++) {
      salida += ` ${base} x ${i} = ${base * i}\n`;
      consola += ` ${base} ${ color.red('x')} ${i} ${color.blue(' = ')} ${base * i}\n`;
    }
    if (l) {
      console.log("=========================================".rainbow);
      console.log("           Tabla del", base);
      console.log("=========================================".rainbow);

      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla- ${base}.txt`, salida);
    return `tabla- ${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
