//* Variables de JS necesarias

let neto
let impuesto
let sujeto

//*---------------------------------------------------------------------------------

//* Algunas funciones

function iva(neto, iva) {
    return neto * tasaImpositiva;
}
let resultadoRI = iva(neto, iva);
let resultadoMonotributista = neto + resultadoRI;


let condicionFiscal = prompt("Ingrese su condición fiscal: Responsable Inscripto, Monotributista o Consumidor Final, para conocer el monto imputable en su declaración de impuestos:");

switch(condicionFiscal){
    case "Responsable Inscripto":
        alert("Usted puede utilizar " + resultadoRI + " pesos en su posición mensual de IVA, como crédito fiscal")
        break;
    case "Monotributista":
        alert("Usted puede utilizar " + resultadoMonotributista + " pesos para deducir gastos en Impuesto a las Ganancias, en concepto de capacitaciones")
        break;
    case "Consumidor Final":
        alert("Usted no se encuentra inscripto en ningún impuesto, por lo tanto, no es posible deducir el gasto")
        break;
    default:
        alert("Por favor, escriba su condición fiscal de manera correcta")
        break;
};

//*---------------------------------------------------------------------------------

//* Objetos de JS

class Impuesto {
    constructor(denominacion, nivel, normativa, tasa) {
        this.denominacion = denominacion;
        this.nivel = nivel;
        this.normativa = normativa;
        this.tasa = tasa;
    }
}

//Ejemplos:
const iva = new Impuesto("IVA", "Nacional", "Ley 23349", 21);
console.log(iva)

const monotributo = new Impuesto("Monotributo", "Nacional", "Ley 24977", 0);
console.log(monotributo)

const ingresosBrutos = new Impuesto("Ingresos Brutos", "Provincial", "Ley 10790/2021", 12);
console.log(ingresosBrutos)

//*----------------------------------------------------------------------------------------

class Sujeto {
    constructor(nombre, cuit, condicion) {
        this.nombre = nombre;
        this.cuit = cuit;
        this.condicion = condicion;
    }
}

//Ejemplos:
const dario = new Sujeto("Dario", "23-34964738-9", "Consumidor Final");
console.log(dario)

const coderHouse = new Sujeto("CoderHouse", "30-71452874-9", "Responsable Inscripto");
console.log(coderHouse)