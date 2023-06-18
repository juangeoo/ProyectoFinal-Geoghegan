
// Funciones Productos

function guardarProductosLS() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

guardarProductosLS();

function cargarProductosLS() {
  return JSON.parse(localStorage.getItem("productos"));
}

cargarProductosLS();

// Funciones Carrito

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
  location.reload()
}

// Mapeo index

productos.forEach((producto) => {
     document.getElementById("listaProductos").innerHTML += 
     `<div class="card m-2 text-center shadow bg-white rounded">
     <img class="card-img-top img-fluid img-thumbnail " src="${producto.imagen}" alt="Card image cap">
     <div class="card-body">
       <p class="card-text">${producto.nombre}</p>
       <h5 class="card-title"> ${producto.precio} $</h5>
     </div>
     <div class="card-footer">
     <button type="button" onclick="agregarProducto(${producto.id})" class="btn btn-outline-primary agregarcarrito">Agregar al carrito</button>
     </div>
   </div>`
 });


document.getElementById("iconoCarrito").innerHTML += JSON.stringify(JSON.parse(localStorage.getItem("carrito")).length);
