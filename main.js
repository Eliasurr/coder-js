const AGREGAR_ALUMNO = 1;
const QUITAR_ALUMNO = 2;
const MODIFICAR_ALUMNO = 3;
const VER_INFORMACION = 4;
const VER_ALUMNOS = 5;

let appOn = false;
let alumnos = [];

const btnAgregarAlumno = document.getElementById('btnAgregarAlumno');
const divListadoAlumnos = document.getElementById('listadoAlumnos');

let nombreInput = document.getElementById('nombreAlumno');
let apellidoInput = document.getElementById('apellidoAlumno');
let dniInput = document.getElementById('dniAlumno');
let edadInput = document.getElementById('edadAlumno');


//Eventos
btnAgregarAlumno.addEventListener('click', function(e){
    e.preventDefault();
    let nombreAlumno = nombreInput.value;
    let apellidoAlumno = apellidoInput.value;
    let dniAlumno = dniInput.value;
    let edadAlumno = edadInput.value;
    let nuevoAlumno = agregarAlumno(nombreAlumno,apellidoAlumno,dniAlumno,edadAlumno);
    alumnos.push(nuevoAlumno);
    console.log(alumnos);
    crearTablaAlumnos();
});





//funciones 
function agregarAlumno(nombre,apellido,dni,edad){
    let alumno = new Alumno(nombre,apellido,dni,edad);
    return alumno;
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

function crearTablaAlumnos(){
    divListadoAlumnos.innerHTML = ``;
    alumnos.forEach((alumno)=>{
        divListadoAlumnos.innerHTML = divListadoAlumnos.innerHTML + `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.dni}</td>
          </tr>
        </tbody>
      </table>
        `
    })
}