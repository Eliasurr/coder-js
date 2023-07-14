const AGREGAR_ALUMNO = 1;
const QUITAR_ALUMNO = 2;
const MODIFICAR_ALUMNO = 3;
const VER_INFORMACION = 4;
const VER_ALUMNOS = 5;

let appOn = false;
let alumnos = [];

const btnAgregarAlumno = document.getElementById('btnAgregarAlumno');
const divListadoAlumns = document.getElementById('listadoAlumnos');

let nombreAlumno = document.getElementById('nombreAlumno');
let apellidoAlumno = document.getElementById('apellidoAlumno');
let dniAlumno = document.getElementById('dniAlumno');
let edadAlumno = document.getElementById('edadAlumno');


btnAgregarAlumno.addEventListener('click', agregarAlumno(nombreAlumno,apellidoAlumno,dniAlumno,edadAlumno))








//funciones 
function agregarAlumno(nombre,apellido,dni,edad){
    let alumno = new Alumno(nombre,apellido,dni,edad);
    alumnos.push(alumno)

}

function removerAlumno(dni){
    let dniComparar = dni;
    alumnos = alumnos.filter(x => x.dni !== dniComparar);
}

function encontrarAlumno(dni){
    let dniBuscar = dni;
    let indice = alumnos.findIndex(obj => obj.dni === dniBuscar);
    let alumnoEncontrado = alumnos[indice];
    return alumnoEncontrado;
}