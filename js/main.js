
// Cargar JSON productos y agregarlo al local storage

async function cargarJSON(){
  fetch(`js/productos.json`)
  .then(await function(res){
        return res.json();
    })
  .then(await function(productos){
      console.log(productos);
      localStorage.setItem("productos", JSON.stringify(productos));
    });
}

cargarJSON();



// Funciones

function cargarProductosLS() {
  return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLS(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}


// Agregar al Carrito

function agregarProducto(id) {
  const productos = cargarProductosLS();
  const carrito = cargarCarritoLS();
  const producto = productos.find(item => item.id === id);
  carrito.push(producto);
  guardarCarritoLS(carrito);
  console.log("Producto agregado");
  mostrarMensajeCarritoVacio();
    // Notificacion
      Toastify({
        text: "¡Producto agregado al carrito!",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      renderCarrito();
}

// Mapeo Catálogo

setTimeout(() => {
  document.getElementById("listaProductos").innerHTML = "";
  cargarProductosLS().forEach((producto) => {
     document.getElementById("listaProductos").innerHTML += 
     `<div class="card m-2 text-left shadow bg-white rounded-0 border-0">
     <a onclick="verProducto()"> <img class="card-img-top img-fluid img-thumbnail border-0" style="width:400px;height:400px" src="${producto.imagen}" alt="Card image cap"> </a>
     <div class="card-body" style="width:400px">
       <h6 class="card-text">${producto.nombre}</h6>
       <p class="card-title"> $ ${producto.precio}</p>
       <a type="button" onclick="agregarProducto(${producto.id})" class="border rounded-0 border-dark btn btn-outline-dark agregarcarrito" style="font-family: 'Road Rage', cursive; font-size:1.5rem;">Agregar al carrito</a>

     </div>

   </div>`
 })}, "500");


 mostrarMensajeCarritoVacio();
