const selectProductos = document.querySelector ("#productos-mostrados");
const pProducto1 = document.querySelector ("#producto-1");
const pProducto2 = document.querySelector ("#producto-2");
const pProducto3 = document.querySelector ("#producto-3");


const CANT_PRODUCTOS =[100,100,100];

function generarCambios() {
 console.log("prueba");

 productos = selectProductos.value; 

 CANT_PRODUCTOS [0] = CANT_PRODUCTOS [0] -1 ;
 pProducto1.innerHTML = CANT_PRODUCTOS[0];

 switch () {
    case 0:
        
        break;
 
    default:
        break;
 }
 //pProducto1.innerHTML += `productos restantes ${cantidadTotal - 1}`;

 //if (CANT_PRODUCTOS[cantidadTotal]>0) {
  //  pProducto1.innerHTML += `Cantidad: ${cantidadTotal}`;
//} 

}