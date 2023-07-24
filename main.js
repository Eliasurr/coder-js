
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
    actualizarArrAlumnos(nuevoAlumno)  
    mostrarUltimoAlumno();
});

mostrarTodos();



//funciones 

//Obtiene arreglo, si no existe lo crea.
function obtenerArregloAlumnos(){
  let data = localStorage.getItem('listadoAlumnos');
  return data ? JSON.parse(data) : [];
}

//Crea un nuevo alumno y lo pushea al array en localStorage
function agregarAlumno(nombre,apellido,dni,edad){
  let alumno = new Alumno(nombre,apellido,dni,edad)
  let arrAlumnos = obtenerArregloAlumnos();
  arrAlumnos.push(alumno);
  return arrAlumnos;
}

//Actualiza el arreglo en localStorage
function actualizarArrAlumnos(arr){
  localStorage.setItem('listadoAlumnos',JSON.stringify(arr));
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

//Solo agrega la ultima entrada de inputs a la lista ya existente
function mostrarUltimoAlumno(){
  let cuerpoTabla = document.getElementById('listadoAlumnosTabla');
  //Obtiene arreglo de alumnos en localStorage
  let arrAlumnos = obtenerArregloAlumnos();
  //Obtiene ultimo indice del arreglo
  let ultimaEntrada = arrAlumnos[arrAlumnos.length - 1];
  cuerpoTabla.innerHTML += `
    <tr>
      <td>${ultimaEntrada.nombre}</td>
      <td>${ultimaEntrada.apellido}</td>
      <td>${ultimaEntrada.dni}</td>
      <td>${ultimaEntrada.edad}</td>
    </tr>
  `
}


function mostrarTodos(){
  let cuerpoTabla = document.getElementById('listadoAlumnosTabla');
  let arrAlumnos = obtenerArregloAlumnos();
  arrAlumnos.forEach(alumno => {
    cuerpoTabla.innerHTML += `
    <tr>
      <td>${alumno.nombre}</td>
      <td>${alumno.apellido}</td>
      <td>${alumno.dni}</td>
      <td>${alumno.edad}</td>
    </tr>
    `
  });
}

