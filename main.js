////***************************** Clase 3 *************************************
// const notasFinales = [1, 10, 5, 6, 8, 9];

//  for(let i = 0; i < 6; i ++){
//    if(notasFinales[i] === 1){
//      console.log("Desaprobado")
//    }else if (notasFinales[i] === 5){
//      console.log(`falto poco para aprobar. Te sacaste un ${notasFinales[2]}`)
//    }else if(notasFinales[i] === 10){
//      console.log("Aprobaste con " + notasFinales[1])
//    }else if(notasFinales[i] === 6){
//      console.log("Aprobaste con lo justo")
//    }else if(notasFinales[i] === 8){
//      console.log(`Aprobaste con ${notasFinales[4]}. Podes mejorar`)
//    }else if(notasFinales[i] === 9){
//      console.log(`Aprobaste con ${notasFinales[5]}. Casi sobresaliente`)
//    }
//  }
//***************************** Clase 4 *************************************
// const agregarAlCarritoo = (nombreDeProducto, precioProducto, stockProducto, cantidadPedida) => {
//     const tieneStock = validarStock(stockProducto, cantidadPedida);

//     if(tieneStock){
//         console.log(`Agregaste al carrito ${nombreDeProducto} a ${precioProducto}`);
//     }else{
//         console.log('No tenemos mas para ofrecerte, sry not sry :)');
//     }
// }

// const validarStock = (stockProducto, cantidadPedida) => {
//     return (stockProducto >= cantidadPedida);
// }

// agregarAlCarrito('Campera del barça', 1000, 3, 3);

//*****************************  Clase 5 *************************************


// function Producto(titulo, precio, categoria){
//     this.titulo = titulo;
//     this.precio = precio;
//     this.categoria = categoria;
//     this.agregarAlCarrito = function(nombreDelCliente) { 
//         console.log("me agregaste al carrito" + nombreDelCliente);
//     }
// }
// const PRODUCTO = new Producto('Zapas niky', 900, 'zapatillas');

// PRODUCTO.agregarAlCarrito('Totito');
// PRODUCTO.titulo;
// PRODUCTO.categoria = "aloha";

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

// for(let i = 0; i<10; i++){
//     console.log(i);
// }

//*****************************  Clase 6 *************************************



// Forma 2
// const agregarAlCarro = (producto) => {
//   carrito.push(producto);
// };



// let cardsGeneradas = ``;



// const arrayProductos = ["Zapa1", "Remera1", "Pantalon3"];


// const indiceDelProducto = arrayProductos.indexOf("Remera1");
// console.log(indiceDelProducto);


// arrayProductos.splice(indiceDelProducto, 1);
// console.log(arrayProductos);


// SPLICE -> BORRA
// SLICE -> COPIA
// SPLIT -> CREA UN ARRAY SEGUN UN CARACTER


//*****************************  Clase 7 *************************************



// Sumar total del carrito
// const totalDelCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log("Total del carrito:" + totalDelCarrito);

// Crear un array apartir de otro
// const nuevoListadoProductos = productos.map((producto) => {
//     if(producto.stock === 0){
//         producto.stock = "No hay stock";
//     }
//     return producto;
// })
// console.log(nuevoListadoProductos);

// Codigo para filtrar por precio/caegoria/etc
// const productosDeMayorPrecio = productos.filter((producto) => producto.precio > 750 );
// console.log(productosDeMayorPrecio);
// generarCards(productosDeMayorPrecio);


// Codigo para buscador
// const valorDelBucador = "remera Puma"
// const productoEncontrado = productos.find(
//     (producto) => producto.titulo.toUpperCase().trim() === valorDelBucador.toUpperCase().trim());
// console.log(productoEncontrado);

//*****************************  Clase 8 *************************************




// const arrayDeProductos = [
//   { id: 1, titulo: "Zapa niky", precio: 999, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
//   { id: 2, titulo: "Remera Puma", precio: 222, stock:32, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
//   { id: 3, titulo: "Pantalon Adidas", precio: 111, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg'},
//   { id: 4, titulo: "Airmax", precio: 1982, stock: 56 },
// ];



// generarCards(arrayDeProductos);



// function mostrarCardsEnElHTML(cards) {
//   document.getElementById("listado-productos").innerHTML = cards;
// };


// function buscarProducto() {
//   const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

//   const productosEncontrados = productos.filter((producto) => {
//       return producto.titulo.toUpperCase().match(nombreProductoBuscado);
//   });

//   generarCards(productosEncontrados);
// }

//*****************************  Clase 9 y 10  y aftter repaso dom y eventos*************************************



const agregarAlCarrito0 = (idProducto) => {
  const valorDeCantidad = document.getElementById(
      `cantidad-${idProducto}`
  ).value;
  
  //Buscando el producto a agregar
  const productoAgregado = productos.find(producto => producto.id === idProducto);
  productoAgregado.cantidad = valorDeCantidad;

  //Agregando al carrito
  carrito.push(productoAgregado);

  //Actualizando el storage del carrito
  localStorage.setItem("carrito", JSON.stringify(carrito));

  //Actualizando el html
  document.getElementById("cantidad-prod").innerHTML = carrito.length;

  //Actualizar stock
  //Volver a generar las cards
};

// const irAlProducto = (idProducto) => {
//   // Buscamos el producto
//   const productoQueQuiereVer = productos.find(producto => producto.id === idProducto);

//   localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
// };


// function generarCards(productosAMostrar){
//   let acumuladorDeCards = ``;
//   productosAMostrar.forEach((elementoDelArray) => {
//       acumuladorDeCards += `<div class="col mb-5">
//       <div class="card h-100">
//           <!-- Sale badge-->
//           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
//               ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Out stock'}
//           </div>
//           <!-- Product image-->
//           <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
//           <!-- Product details-->
//           <div class="card-body p-4">
//               <div class="text-center">
//                   <!-- Product name-->
//                   <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
//                   <!-- Product price-->
//                   <span class="text-muted text-decoration-line-through">$20.00</span>
//                   <input value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
//                   $${elementoDelArray.precio}
//               </div>
//           </div>
//           <!-- Product actions-->
//           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
//               <div class="text-center">
//                   <button 
//                       onclick="agregarAlCarrito(${elementoDelArray.id})"
//                       class="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                   </button>
//                   <button 
//                       onclick="irAlProducto(${elementoDelArray.id})"
//                       class="btn btn-outline-dark mt-auto" href="#">
//                       Ver producto
//                   </button>
//               </div>
//           </div>
//       </div>
//   </div>`;
//   });
//   mostrarCardsEnElHTML(acumuladorDeCards);
// }

// function mostrarCardsEnElHTML(cards) {
//   document.getElementById("listado-productos").innerHTML = cards;
// };


// function buscarProducto() {
//   console.log("Hola!")
//   const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

//   const productosEncontrados = productos.filter((producto) => {
//       return producto.titulo.toUpperCase().match(nombreProductoBuscado);
//   });

//   generarCards(productosEncontrados);
// }


// //Forma 2 de escuchar un evento
// const boton = document.getElementById("boton-buscar");

// // boton.addEventListener('click', buscarProducto);

// // boton.onclick = buscarProducto;
// // $("#boton-buscar").click(() => {})

// function tomarValor(event){
//   const valorDelInput = event.target.value;
//   console.log(event.target.type);


//   if(event.target.type === "password"){
//       if(valorDelInput.length < 8) {
//           event.target.style.border = "2px solid red";
//       }else{
//           event.target.style.border = "2px solid green";
//       }
//   }else{
//       if(valorDelInput.includes("@")) {
//           event.target.style.border = "2px solid green";
//       }else{
//           event.target.style.border = "2px solid red";
//       }
//   }
//   // const input = document.getElementById("texto-prueba").value;
//   // console.log(input);
// }

//*****************************  Clase 11 Storage y JSON *************************************

const carrito = validarStorageCarrito();

function validarStorageCarrito(){
    if(localStorage.getItem("carrito") != null){
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    }else{
        return [];
    }
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;

const agregarAlCarrito = (idProducto) => {
  const valorDeCantidad = document.getElementById(
      `cantidad-${idProducto}`
  ).value;
  
  // Buscando el producto a agregar
  const productoAgregado = productos.find(producto => producto.id === idProducto);
  productoAgregado.cantidad = valorDeCantidad;

  // Agregando al carrito
  carrito.push(productoAgregado);

  // Actualizando el storage del carrito
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizando el html
  document.getElementById("cantidad-prod").innerHTML = carrito.length;

  // Actualizar stock
  // Volver a generar las cards
};

const irAlProducto = (idProducto) => {
  // Buscamos el producto
  const productoQueQuiereVer = productos.find(producto => producto.id === idProducto);

  localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
};

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
                  <input value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
                  $${elementoDelArray.precio}
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
              <div class="text-center">
                  <button 
                      onclick="agregarAlCarrito(${elementoDelArray.id})"
                      class="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                  </button>
                  <button 
                      onclick="irAlProducto(${elementoDelArray.id})"
                      class="btn btn-outline-dark mt-auto" href="#">
                      Ver producto
                  </button>
              </div>
          </div>
      </div>
  </div>`;
  });
  mostrarCardsEnElHTML(acumuladorDeCards);
}

//*****************************  Clase repaso 05-04 *************************************

const agregarAlCarrito1 = (idProducto, cantidadAgregados = 1) =>{

    const indiceEncontradoProducto = listaProductos.findIndex((elemento) => {
        return elemento.id === idProducto;
    });
    const productoAgregado = listaProductos[indiceEncontradoProducto]
    
    const existeElProducto = carrito.findIndex((producto) => producto.id === productoAgregado.id);
    
    existeElProducto ? carrito[existeElProducto].cantidad += cantidadAgregados : carrito.push(productoAgregado);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

const calcularTotalCarrito = () => {
    const totalCarrito = carrito.reduce((accum, element) => accum + (element.precio * element.cantidad), 0);

    document.getElementById("cart-total").innerHTML = totalCarrito;
}


// Cart.html
const sumarCantidad = (idProducto) => {
    const indiceEncontradoProducto = carrito.findIndex((elemento) => {
        return elemento.id === idProducto;
    });
    carrito[indiceEncontradoProducto].cantidad += 1;
    // re-renderizar el html
}