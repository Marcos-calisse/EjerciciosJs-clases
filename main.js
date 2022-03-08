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

//*****************************  Clase 6 *************************************



// Forma 2
const agregarAlCarro = (producto) => {
  carrito.push(producto);
};

const carrito = [];
const productos = [
  { id: 1, titulo: "Zapa niky", precio: 999 },
  { id: 2, titulo: "Remera Puma", precio: 222 },
  { id: 3, titulo: "Pantalon Adidas", precio: 111 },
  { id: 4, titulo: "Airmax", precio: 1982 },
  { id: 5, titulo: "Jagguar", precio: 321 },
  { id: 6, titulo: "Chancla", precio: 733 },
]



let cardsGeneradas = ``;

productos.forEach(elementoDelArray => {
  cardsGeneradas += `<div class="card">
      <div class="card-header">
          ${elementoDelArray.titulo}
      </div>
      <div class="card-body">
          <h5 class="card-title">$ ${elementoDelArray.precio}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary" onclick="agregarAlCarrito()">Go somewhere</a>
      </div>
  </div>`;
})

document.write(cardsGeneradas);





const arrayProductos = ["Zapa1", "Remera1", "Pantalon3"];


const indiceDelProducto = arrayProductos.indexOf("Remera1");
// console.log(indiceDelProducto);


arrayProductos.splice(indiceDelProducto, 1);
// console.log(arrayProductos);


// SPLICE -> BORRA
// SLICE -> COPIA
// SPLIT -> CREA UN ARRAY SEGUN UN CARACTER