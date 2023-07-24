
let alumnos = [];

const btnAgregarAlumno = document.getElementById('btnAgregarAlumno');


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
    crearTablaAlumnos();
    guardarAlumnoJSON();
});

cargarListadoAlumnos();





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

function guardarAlumnoJSON(){
  let alumnosJSON = JSON.stringify(alumnos);
  localStorage.setItem('listadoAlumnos', alumnosJSON);
}


function crearTablaAlumnos(){
  const bodyTable = document.getElementById('listadoAlumnos');
  bodyTable.innerHTML = '';
  alumnos.forEach((alumno)=>{
    bodyTable.innerHTML += 
    `
    <tr>
    <td>${alumno.nombre}</td>
    <td>${alumno.apellido}</td>
    <td>${alumno.dni}</td>
    <td>${alumno.edad}</td>
    </tr>
    `
  })
}

function cargarListadoAlumnos(){
  let listadoAlumnosExist = localStorage.getItem('listadoAlumnos');
  let listadoAlumnosJSON = JSON.parse(listadoAlumnosExist);
  const bodyTable = document.getElementById('listadoAlumnos');
  listadoAlumnosJSON.forEach((alumno)=>{
    bodyTable.innerHTML +=
    `
    <tr>
    <td>${alumno.nombre}</td>
    <td>${alumno.apellido}</td>
    <td>${alumno.dni}</td>
    <td>${alumno.edad}</td>
    </tr>
    `
  })
}

