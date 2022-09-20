// creo clase Alumnos
var Alumnos = /** @class */ (function () {
    function Alumnos(pNombre, pApellido, pNotaMatematicas, pNotaLiteratura, pEstado) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematicas = pNotaMatematicas;
        this.notaLiteratura = pNotaLiteratura;
        this.estado = pEstado;
    }
    Alumnos.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumnos.prototype.setNombre = function (sNombre) {
        this.nombre = sNombre;
    };
    Alumnos.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumnos.prototype.setApellido = function (sApellido) {
        this.apellido = sApellido;
    };
    Alumnos.prototype.getEstado = function () {
        if (this.estado === true) {
            console.log("El Alumno esta: Matriculado");
        }
        else {
            console.log("El Alumno esta: Expulsado");
        }
    };
    Alumnos.prototype.setNotaMatematicas = function (sNota) {
        this.notaMatematicas = sNota;
    };
    Alumnos.prototype.setNotaLiteratura = function (sNota) {
        this.notaLiteratura = sNota;
    };
    Alumnos.prototype.getEvaluacionMatematicas = function () {
        if (this.notaMatematicas >= 7) {
            var estado = "Aprobado";
            return estado;
        }
        else {
            var estado = "Desaprobado";
            return estado;
        }
    };
    Alumnos.prototype.getEvaluacionLiteratura = function () {
        if (this.notaLiteratura >= 7) {
            var estado = "Aprobado";
            return estado;
        }
        else {
            var estado = "Desaprobado";
            return estado;
        }
    };
    Alumnos.prototype.changeEstado = function () {
        if (this.estado === true) {
            this.estado = false;
            console.log("Se Expulso Alumno");
        }
        else {
            this.estado = true;
            console.log("Se Matriculo Alumno");
        }
    };
    return Alumnos;
}());
//creo clase maestros
var Maestros = /** @class */ (function () {
    function Maestros(pNombre, pApellido, pMateria, pEstado, pListadoAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.estado = pEstado;
    }
    Maestros.prototype.getNombre = function () {
        return this.nombre;
    };
    Maestros.prototype.setNombre = function (sNombre) {
        this.nombre = sNombre;
    };
    Maestros.prototype.getApellido = function () {
        return this.apellido;
    };
    Maestros.prototype.setApellido = function (sApellido) {
        this.apellido = sApellido;
    };
    Maestros.prototype.getMateria = function () {
        return this.materia;
    };
    Maestros.prototype.getEstado = function () {
        if (this.estado === true) {
            console.log("El Maestro esta: Contratado");
        }
        else {
            console.log("El Maestro esta: Despedido");
        }
    };
    Maestros.prototype.changeEstado = function () {
        if (this.estado === false) {
            this.estado = true;
            console.log("Se Contrato Maestro");
        }
        else {
            this.estado = false;
            console.log("Se Despidio Maestro");
        }
    };
    return Maestros;
}());
//creo clase escuela
var Escuela = /** @class */ (function () {
    function Escuela(pNombre, pListadoAlumnos, pListadoMaestros) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoMaestros = pListadoMaestros;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escuela.prototype.setNombreEscuela = function (pNombre) {
        this.nombreEscuela = pNombre;
    };
    Escuela.prototype.changeEstadoMaestro = function (pMaestro) {
        for (var i = 0; i < this.listadoMaestros.length; i++) {
            if (pMaestro.getApellido() === this.listadoMaestros[i].getApellido()) {
                this.listadoMaestros[i].changeEstado();
            }
        }
    };
    Escuela.prototype.chageEstadoAlumno = function (pAlumno) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (pAlumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos[i].changeEstado();
            }
        }
    };
    return Escuela;
}());
// creo instancias de clases
var AlumnoUno = new Alumnos("Juan", "Perez", 5, 4, true);
var AlumnoDos = new Alumnos("Juan", "Carlos", 8, 6, true);
var AlumnoTres = new Alumnos("Juan", "Lopez", 9, 2, true);
var listadoAlumnosUno = [AlumnoUno, AlumnoDos, AlumnoTres];
var MaestroUno = new Maestros("Daniel", "Gonazalez", "Literatura", true, listadoAlumnosUno);
var MaestroDos = new Maestros("Fabian", "Chavez", "Matematicas", true, listadoAlumnosUno);
var listadoMaestrosUno = [MaestroUno, MaestroDos];
var EscuelaUno = new Escuela("NormalUno", listadoAlumnosUno, listadoMaestrosUno);
// consulto sobre AlumnoDos 
console.log("----------------------------------------------------------------");
console.log(AlumnoDos.getNombre());
console.log(AlumnoDos.getApellido());
console.log(AlumnoDos.getEvaluacionLiteratura());
console.log(AlumnoDos.getEvaluacionMatematicas());
AlumnoDos.getEstado();
console.log("----------------------------------------------------------------");
// consulto sobre MestroUno
console.log("----------------------------------------------------------------");
console.log(MaestroUno.getNombre());
console.log(MaestroUno.getApellido());
MaestroUno.getEstado();
console.log("----------------------------------------------------------------");
// consulto sobre EscuelaUno
console.log("----------------------------------------------------------------");
console.log(EscuelaUno.getNombreEscuela());
console.log("----------------------------------------------------------------");
// Escuela cambia estado de AlumnoDos
console.log("****************************************************************");
EscuelaUno.chageEstadoAlumno(AlumnoDos);
console.log("****************************************************************");
// Escuala Cambia estado de MaestroUNO;
console.log("****************************************************************");
EscuelaUno.changeEstadoMaestro(MaestroDos);
console.log("****************************************************************");
