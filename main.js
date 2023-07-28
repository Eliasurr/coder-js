
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
      //Captura boton de agregar generado por JS
      const btnAgregarAlumno = document.getElementById('btnAgregarAlumno');
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
          dibujarTablaListaAlumnos()   
      });
})


//Evento remover alumno!
btnFormRemover.addEventListener('click',function(){
  dibujarFormRemover();
    //Captura boton de remover alumno generado por JS
    const btnRemoverAlumno = document.getElementById('btnRemover');
    btnRemoverAlumno.addEventListener('click', function(e){
      e.preventDefault();
      let dniRemover = document.getElementById('dniRemover').value;
      let nuevoArr = removerAlumno(dniRemover);
      actualizarArrAlumnos(nuevoArr);
      dibujarTablaListaAlumnos();
    })
})



//Evento editar alumno!
btnFormEditar.addEventListener('click', function(e){
  e.preventDefault();
  dibujarFormEditar();
    const btnEditar = document.getElementById('btnEditar');
    btnEditar.addEventListener('click', function(e){
      let dniBuscar = document.getElementById('dniBuscar').value;
    })
})




dibujarTablaListaAlumnos() 



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

//Devuelve nuevo arreglo filtrado
function removerAlumno(dni){
  let arrAlumnos = obtenerArregloAlumnos();
  let dniRemover = dni;
  let nuevoArr = arrAlumnos.filter(alumno => alumno.dni !== dniRemover);
  return nuevoArr;
}


//Busca alumno y trae sus propiedas
function buscarAlumno(dni){
  let arrAlumnos = obtenerArregloAlumnos();
  let indice = arrAlumnos.findIndex(alumno => alumno.dni == dni);
  return arrAlumnos[indice];
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
    <legend class="text-center">REMOVER ALUMNO</legend>
    <input type="number" id="dniRemover" placeholder="Ingrese DNI de alumno a remover">
    <button class="btn btn-danger mt-3" id="btnRemover">Remover alumno</button>
  `
  divForm.replaceChildren(formRemover);
}

function dibujarFormEditar(){
  let formEditar = document.createElement('form');
  formEditar.classList.add('d-flex', 'flex-column');
  formEditar.innerHTML = `
      <legend class="text-center">EDITAR INFO DE ALUMNO</legend>
      <input type="text" id="dniBuscar" placeholder="Ingrese DNI de alumno a editar">
      <button class="btn btn-primary mt-3" id="btnBuscar">BUSCAR</button>
  `
  divForm.replaceChildren(formEditar);
}

function dibujarTablaListaAlumnos(){
  let arrAlumnos = obtenerArregloAlumnos();
  let cuerpoTabla = document.getElementById('listadoAlumnosTabla');
  cuerpoTabla.innerHTML = '';
  arrAlumnos.map((alumno) =>{
    cuerpoTabla.innerHTML += `
      <td>${alumno.nombre}</td>
      <td>${alumno.apellido}</td>
      <td>${alumno.dni}</td>
      <td>${alumno.edad}</td>
    `
  })
}





