//let readlineSync = require('readline-sync');
// creo clase Alumnos
class alumnos {
    private nomrbe :string;
    private apellido : string;
    private materia :string;
    private nota : number;

    constructor(pNombre :string, pApellido :string,pMateria :string,pNota :number){
        this.nomrbe = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.nota = pNota;
    }

    setNota (sNota:number){
        this.nota = sNota;
    }

    getEstado ():string {
        if (this.nota >= 7){
            let estado : string = "Aprobado";
            return estado
        }else{
            let estado : string = "Desaprobado"
            return estado
        }
    }
}

//creo clase maestros
class maestros {
    private nombre :string;
    private apellido : string;
    private materia :string;
    private estado : string;

    constructor(pNombre :string, pApellido :string,pMateria, pEstado:string){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.estado = pEstado;

    }

    changeEstado ():void {
        if (this.estado === "Despedido"){
            this.estado = "Contratado";
        }else{ 
            this.estado = "Despedido";
        }
    }
}

let listaAlumnos = new Array();
let listaMaestros = new Array();

listaAlumnos[1]= new alumnos ("Juan","De los Palotes","Matematicas",10);
listaAlumnos[2]= new alumnos ("Esteban","Quito","Matematicas",6);
listaAlumnos[3]= new alumnos ("Teresa","Viva","Matematicas",7);

listaMaestros[1]= new maestros ("Jose","De San Martin","Matematicas","Contratado");
listaMaestros[2]= new maestros ("Maria","De los Angeles","Literatura","Despedido");


//
//console.log(listaAlumnos[1]);

console.log(listaMaestros[2]);

//listaAlumnos[1].setNota(4);

//console.log(listaAlumnos[1]);

listaMaestros[2].changeEstado();

console.log(listaMaestros[2]);



