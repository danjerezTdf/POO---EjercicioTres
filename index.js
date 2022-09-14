//let readlineSync = require('readline-sync');
// creo clase Alumnos
var alumnos = /** @class */ (function () {
    function alumnos(pNombre, pApellido, pMateria, pNota) {
        this.nomrbe = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.nota = pNota;
    }
    alumnos.prototype.setNota = function (sNota) {
        this.nota = sNota;
    };
    alumnos.prototype.getEstado = function () {
        if (this.nota >= 7) {
            var estado = "Aprobado";
            return estado;
        }
        else {
            var estado = "Desaprobado";
            return estado;
        }
    };
    return alumnos;
}());
//creo clase maestros
var maestros = /** @class */ (function () {
    function maestros(pNombre, pApellido, pMateria, pEstado) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.estado = pEstado;
    }
    maestros.prototype.changeEstado = function () {
        if (this.estado === "Despedido") {
            this.estado = "Contratado";
        }
        else {
            this.estado = "Despedido";
        }
    };
    return maestros;
}());
var listaAlumnos = new Array();
var listaMaestros = new Array();
listaAlumnos[1] = new alumnos("Juan", "De los Palotes", "Matematicas", 10);
listaAlumnos[2] = new alumnos("Esteban", "Quito", "Matematicas", 6);
listaAlumnos[3] = new alumnos("Teresa", "Viva", "Matematicas", 7);
listaMaestros[1] = new maestros("Jose", "De San Martin", "Matematicas", "Contratado");
listaMaestros[2] = new maestros("Maria", "De los Angeles", "Literatura", "Despedido");
// Veo AlumnoUNO
console.log(listaAlumnos[1]);
// Veo MaestroDOS
console.log(listaMaestros[2]);
// Cambio Nota AlumnoUNO
listaAlumnos[1].setNota(4);
// Veo AlumnoUNO
console.log(listaAlumnos[1]);
// Cambio Estado MaestroDos
listaMaestros[2].changeEstado();
// Veo MaestroDOS
console.log(listaMaestros[2]);
