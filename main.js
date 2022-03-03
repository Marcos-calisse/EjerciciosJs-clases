////***************************** Clase 3 *************************************
const notasFinales = [1, 10, 5, 6, 8, 9];

 for(let i = 0; i < 6; i ++){
   if(notasFinales[i] === 1){
     console.log("Desaprobado")
   }else if (notasFinales[i] === 5){
     console.log(`falto poco para aprobar. Te sacaste un ${notasFinales[2]}`)
   }else if(notasFinales[i] === 10){
     console.log("Aprobaste con " + notasFinales[1])
   }else if(notasFinales[i] === 6){
     console.log("Aprobaste con lo justo")
   }else if(notasFinales[i] === 8){
     console.log(`Aprobaste con ${notasFinales[4]}. Podes mejorar`)
   }else if(notasFinales[i] === 9){
     console.log(`Aprobaste con ${notasFinales[5]}. Casi sobresaliente`)
   }
 }
//***************************** Clase 4 *************************************
const agregarAlCarrito = (nombreDeProducto, precioProducto, stockProducto, cantidadPedida) => {
    const tieneStock = validarStock(stockProducto, cantidadPedida);

    if(tieneStock){
        console.log(`Agregaste al carrito ${nombreDeProducto} a ${precioProducto}`);
    }else{
        console.log('No tenemos mas para ofrecerte, sry not sry :)');
    }
}

const validarStock = (stockProducto, cantidadPedida) => {
    return (stockProducto >= cantidadPedida);
}

agregarAlCarrito('Campera del barça', 1000, 3, 3);

//*****************************  Clase 5 *************************************


function Producto(titulo, precio, categoria){
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
    this.agregarAlCarrito = function(nombreDelCliente) { 
        console.log("me agregaste al carrito" + nombreDelCliente);
    }
}
const PRODUCTO = new Producto('Zapas niky', 900, 'zapatillas');

PRODUCTO.agregarAlCarrito('Totito');
PRODUCTO.titulo;
PRODUCTO.categoria = "aloha";

// class Producto {
//     static titulo = "Totito";

//     constructor(titulo, precio, categoria){
//         this.titulo = titulo;
//         this.precio = precio;
//         this.categoria = categoria;
//     };

//     agregarAlCarrito(){

//     }
// };

for(let i = 0; i<10; i++){
    console.log(i);
}