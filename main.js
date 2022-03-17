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


//*****************************  Clase 7 *************************************



// Sumar total del carrito
const totalDelCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Total del carrito:" + totalDelCarrito);

// Crear un array apartir de otro
const nuevoListadoProductos = productos.map((producto) => {
    if(producto.stock === 0){
        producto.stock = "No hay stock";
    }
    return producto;
})
console.log(nuevoListadoProductos);

// Codigo para filtrar por precio/caegoria/etc
const productosDeMayorPrecio = productos.filter((producto) => producto.precio > 750 );
console.log(productosDeMayorPrecio);
generarCards(productosDeMayorPrecio);


// Codigo para buscador
const valorDelBucador = "remera Puma"
const productoEncontrado = productos.find(
    (producto) => producto.titulo.toUpperCase().trim() === valorDelBucador.toUpperCase().trim());
// console.log(productoEncontrado);

//*****************************  Clase 8 *************************************

const agregarAlCarritoDeCompras = (producto) => {
  carrito.push(producto);
};

const carritoCom = [];

const arrayDeProductos = [
  { id: 1, titulo: "Zapa niky", precio: 999, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
  { id: 2, titulo: "Remera Puma", precio: 222, stock:32, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
  { id: 3, titulo: "Pantalon Adidas", precio: 111, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg'},
  { id: 4, titulo: "Airmax", precio: 1982, stock: 56 },
];



generarCards(productos);

function generarCards(productosAMostrar){
  let acumuladorDeCards = ``;
  productosAMostrar.forEach((elementoDelArray) => {
      acumuladorDeCards += `<div class="col mb-5">
      <div class="card h-100">
          <!-- Sale badge-->
          <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
              ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Out stock'}
          </div>
          <!-- Product image-->
          <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
          <!-- Product details-->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                  <!-- Product price-->
                  <span class="text-muted text-decoration-line-through">$20.00</span>
                  $${elementoDelArray.precio}
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
          </div>
      </div>
  </div>`;
  });
  mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
  document.getElementById("listado-productos").innerHTML = cards;
};


function buscarProducto() {
  const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

  const productosEncontrados = productos.filter((producto) => {
      return producto.titulo.toUpperCase().match(nombreProductoBuscado);
  });

  generarCards(productosEncontrados);
}