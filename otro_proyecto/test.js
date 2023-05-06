const replace = require("tecsup-2017-anc")
var objetivo = "%Este% %es% %Laboratorio% 06 - Najarro";

var reemplazos = {
    "Este": "This",
    "es": "is",
    "Laboratorio": "Laboratory"
};

var mostrar = replace.replace(objetivo,reemplazos);
console.log(mostrar);