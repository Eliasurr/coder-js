const AGREGAR = 1;
const QUITAR = 2;
const CONTAR = 3;


let monitores = 0;
let teclados = 0;
let mouses = 0;
let gabinetes = 0;

let tipoItem;
let cantidadItem;

let appOn = true;

do{
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
    tipoItem = prompt(`Que item desea agregar
    Monitor
    Teclado
    Mouse
    Gabiente`);
    cantidadItem = prompt(`Indique cantidad`);
    quitarItem(tipoItem,cantidadItem);
}else{
    tipoItem = prompt(`Que item desea mostrar el stock
    Monitor
    Teclado
    Mouse
    Gabiente`);
    recuentoStock(tipoItem);
}

continuidadApp = prompt(`Desea realizar otra accion? Si/No`)
if(continuidadApp !== 'Si' ){
    appOn = false;
}

}while(appOn = true);







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
            alert('Ingrese un item valido, asegurese de escribirlo correctamente')
            break;
    }
};

function quitarItem(tipo,cantidad){
    switch(tipo){
        case 'monitor':
            monitores -= cantidad;
            alert(`Se removieron ${cantidad} monitores`)
            break;
        case 'teclado':
            teclados -= cantidad;
            alert(`Se removieron ${cantidad} teclados`)
            break;
        case 'mouse':
            mouses -= cantidad;
            alert(`Se removieron ${cantidad} mouses`)
            break;    
        case 'gabinete':
            gabinetes -= cantidad;
            alert(`Se removieron ${cantidad} gabinetes`)
            break;    
        default:
            alert('Ingrese un item valido, asegurese de escribirlo correctamente')
            break;
    }
};

function recuentoStock(tipo){
    switch(tipo){
        case 'monitor':
            alert(`Hay ${monitores} monitores disponibles`)
            break;
        case 'teclado':
            alert(`Hay ${teclados} teclados disponibles`)
            break;
        case 'mouse':
            alert(`Hay ${mouses} mouses disponibles`)
            break;
        case 'gabinete':
            alert(`Hay ${gabinetes} gabinetes disponibles`)
            break;
        default:
            alert(`Ingrese un item valido, asegurese de escribirlo correctamente`)
    }
};