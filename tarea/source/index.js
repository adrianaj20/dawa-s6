//Una función que determine la cantidad de días hasta navidad.
// function diasHastaNavidad() {
//   const hoy = new Date();
//   const navidad = new Date(hoy.getFullYear(), 11, 25);
//   if (navidad < hoy) {
//     navidad.setFullYear(navidad.getFullYear() + 1);
//   }
//   const unDia = 1000 * 60 * 60 * 24;
//   const diasRestantes = Math.ceil((navidad - hoy) / unDia);
//   return diasRestantes;
// }
// const diasRestantes = diasHastaNavidad();
// console.log(`Faltan ${diasRestantes} días para Navidad.`);

//Una función que devuelva la edad de una persona habiendo ingresado su fecha de nacimiento.
const readline = require('readline');

function calcularEdad() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Ingrese su fecha de nacimiento en formato AAAA-MM-DD: ', (fechaNacimiento) => {
    rl.close();
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNac = fechaNac.getMonth();
    if (mesNac > mesActual) {
      edad--;
    } else if (mesNac === mesActual) {
      const diaActual = fechaActual.getDate();
      const diaNac = fechaNac.getDate();

      if (diaNac > diaActual) {
        edad--;
      }
    }
    console.log(`Tienes ${edad} años.`);
  });
}
calcularEdad();

//Un validador de formularios: debe recibir todos los datos de un formulario, 
//conocer de antemano los que son obligatorios y los opcionales y validar si son 
//correctos (fechas son fechas, emails son emails, etc.)

// function validarFormulario(formulario) {
//   const camposObligatorios = ["nombre", "email", "fechaNacimiento"];
//   let errores = [];

//   camposObligatorios.forEach((campo) => {
//     if (!formulario[campo]) {
//       errores.push(`El campo ${campo} es obligatorio.`);
//     }
//   });
//   if (formulario.email && !/\S+@\S+\.\S+/.test(formulario.email)) {
//     errores.push(`El campo email no tiene un formato válido.`);
//   }

//   if (formulario.fechaNacimiento && isNaN(Date.parse(formulario.fechaNacimiento))) {
//     errores.push(`El campo fecha de nacimiento no tiene un formato válido.`);
//   }

//   if (errores.length > 0) {
//     return errores;
//   } else {
//     return true;
//   }
// }
// const formulario = {
//   nombre: "Juan",
//   email: "juan@example.com",
//   fechaNacimiento: "2000-01-01",
//   telefono: "123456789",
//   direccion: "Calle Falsa 123",
// };
// const resultado = validarFormulario(formulario);

// if (resultado === true) {
//   console.log("El formulario se ha completado correctamente.");
// } else {
//   console.error(resultado);
// }
