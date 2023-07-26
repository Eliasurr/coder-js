
let alumnos = [];

//botones
const btnFormAgregar = document.getElementById('btnFormAgregar');
const btnFormRemover = document.getElementById('btnFormRemover');
const btnFormEditar = document.getElementById('btnFormEditar');

//DOM

//Div de formulario para acciones
const divForm = document.getElementById('divForm');


//Eventos

//Evento de agregar alumno!
btnFormAgregar.addEventListener('click', function(e){
  e.preventDefault();
  //Dibuja formulario para agregar alumnos 
  dibujarFormAgregar()
      const btnAgregarAlumno = document.getElementById('btnAgregarAlumno');
      //Captura boton de agregar generado por JS
      btnAgregarAlumno.addEventListener('click',function(e){
        e.preventDefault();
        //Captura inputs
          let nombre = document.getElementById('nombre').value
          let apellido = document.getElementById('apellido').value
          let dni = document.getElementById('dni').value
          let edad = document.getElementById('edad').value
          //Los envia como parametros a la funcion de agregar alumno
          let nuevoAlumno = agregarAlumno(nombre,apellido,dni,edad);
          //Actualiza arreglo alumnos en localStorage
          actualizarArrAlumnos(nuevoAlumno);     
      });
})


btnFormRemover.addEventListener('click',function(){
  dibujarFormRemover();
})



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



function dibujarFormAgregar(){
  let formAgregar = document.createElement('form');
  formAgregar.classList.add('d-flex','flex-column');
  formAgregar.innerHTML = `<legend class="text-center">AGREGAR ALUMNO</legend>
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" required>
  <label for="apellido">Apellido</label>
  <input type="text" id="apellido" required>
  <label for="dni">DNI</label>
  <input type="number" id="dni" required>
  <label for="edad">Edad</label>
  <input type="number" id="edad" required>
  <button id="btnAgregarAlumno" class="btn btn-success mt-3">Agregar alumno a lista</button>
  `
  divForm.replaceChildren(formAgregar)
}



function dibujarFormRemover(){
  let formRemover = document.createElement('form');
  formRemover.classList.add('d-flex', 'flex-column');
  formRemover.innerHTML = `
    <input type="number id="dniRemover" placeholder="Ingrese DNI de alumno a remover">
    <button class="btn btn-danger mt-3" id="btnRemover">Remover alumno</button>
  `
  divForm.replaceChildren(formRemover);
}