const AGREGAR = 1;
const QUITAR = 2;
const CONTAR = 3;


let monitores = 0;
let teclados = 0;
let mouses = 0;
let gabinetes = 0;

let tipoItem;
let cantidadItem;


alert(`Bievenido a la app de stock`);

let opcion = prompt(`Que accion desea realizar
1 - Agregar items a stock existente
2 - Quitar items de stock 
3 - Recuento de stock`);

if(opcion == AGREGAR){
    tipoItem = prompt(`Que item desea agregar
    Monitor
    Teclado
    Mouse
    Gabiente`);
    cantidadItem = prompt(`Indique cantidad`);
    agregarItem(tipoItem, cantidadItem);
}else if(opcion == QUITAR){
    quitarItem()
}



function agregarItem(tipo, cantidad){
    switch(tipo){
        case 'monitor':
            monitores += cantidad;
            alert(`Se agregaron ${cantidad} monitores`)
            break;
        case 'teclado':
            teclados += cantidad;
            alert(`Se agregaron ${cantidad} teclados`)
            break;
        case 'mouse':
            mouses += cantidad;
            alert(`Se agregaron ${cantidad} mouses`)
            break;    
        case 'gabinete':
            gabinetes += cantidad;
            alert(`Se agregaron ${cantidad} gabinetes`)
            break;    
        default:
            alert('Ingrese un item valido, asegurese de escribir correctamente')
            break;
    }
};

function quitarItem(){

};

function recuentoStock(){

};