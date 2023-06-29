const AGREGAR_ALUMNO = 1;
const QUITAR_ALUMNO = 2;
const MODIFICAR_ALUMNO = 3;
const VER_INFORMACION = 4;
const VER_ALUMNOS = 5;

let appOn = false;


let alumnos = [];

               
        alert('Bienvenido a la base de datos de alumnos!')
               
do{
    let opcion = prompt(`Que accion desea realizar?
    1- Agregar alumno
    2- Quitar alumno
    3- Modificar informacion de un alumno
    4- Ver informacion de un alumno
    5- Ver todos los alumnos
    `)

    if(opcion == AGREGAR_ALUMNO){
       let nombreAlumno = prompt('Ingrese nombre de alumno')
       let apellidoAlumno = prompt('Ingrese apellido de alumno');
       let dniAlumno = parseInt(prompt('Ingrese DNI de alumno'));
       let edadAlumno = parseInt(prompt('Ingrese edad del alumno'));
       let alumnoNuevo = agregarAlumno(nombreAlumno,apellidoAlumno,dniAlumno,edadAlumno);
       alumnos.push(alumnoNuevo);
       console.log(alumnoNuevo);
    }else if(opcion == QUITAR_ALUMNO){
        let dniBorrar = parseInt(prompt('Ingrese el numero de DNI del alumno a remover'))
        removerAlumno(dniBorrar);
    }
    else if(opcion == MODIFICAR_ALUMNO){
        let dniAlumno = parseInt(prompt('Ingrese DNI del alumno'));
        let alumno = encontrarAlumno(dniAlumno);
        let opcionMod = parseInt(prompt(`Que dato desea modificar?
                                        1- Nombre
                                        2- Apellido
                                        3- Dni
                                        4- Edad`))
        switch(opcionMod){
            case 1:
                let nuevoNombre = prompt('Ingrese nuevo valor para nombre');
                alumno.nombre = nuevoNombre;
                break;
            case 2:
                let nuevoApellido = prompt('Ingrese nuevo valor para apellido');
                alumno.apellido = nuevoApellido;
                break;
            case 3:
                let nuevoDni = parseInt(prompt('Ingrese nuevo valor para DNI'));
                alumno.dni - nuevoDni;
                break;
            case 4:
                let nuevaEdad = parseInt(prompt('Ingrese nuevo valor para edad'));
                alumno.edad = nuevaEdad;
                break;
            default:
                alert('Ingrese un valor correcto (SOLO NUMEROS DEL 1 al 4)')
        }
        alert('Se modifico el valor correctamente. A continuacion los nuevos valores');
        alumno.infoAlumno();

    }
    else if(opcion == VER_INFORMACION){
        let dniAlumno = parseInt(prompt('Ingrese el DNI del alumno'));
        let alumno = encontrarAlumno(dniAlumno);
        alumno.infoAlumno();
    }
    else if(opcion == VER_ALUMNOS){
        for(let i = 0; i < alumnos.length; i++){
            alumnos[i].infoAlumno();
        }
    }else{
        alert('Ingrese un valor correcto porfavor')
    }



    let continuarApp = prompt('desea realizar otra accion? si / no');
    if(continuarApp == 'no' || continuarApp == 'NO'){
        appOn = false;
    }else{
        appOn = true;
    }
}while(appOn == true);




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