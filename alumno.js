class Alumno{
    constructor(nombre,apellido,dni,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.arrMaterias = [];

        this.infoAlumno =()=>{
            alert(`
               Nombre: ${this.nombre}
               Apellido: ${this.apellido}
               Dni: ${this.dni}
               Edad: ${this.edad}
               `)
        }
    }


}