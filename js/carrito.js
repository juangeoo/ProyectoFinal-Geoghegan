function sumaTotalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0)
}

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    location.reload()
}

function borrarProducto(id){
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id != id);
    guardarCarritoLS(nuevoCarrito);
    location.reload()
}

function renderCarrito() {
    let productos = cargarCarritoLS();
    productos.forEach((producto) => {
            document.getElementById("listaCarrito").innerHTML +=
                 `<div class="m-2 d-flex flex-row w-500px align-items-center border-bottom" style="width:50em">
                <img class="img-fluid" style="width:75px; height:75px" src="${producto.imagen}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                </div>
                <h5 class="card-title">$ ${producto.precio}</h5>
                <a class="m-4" href="" onclick="borrarProducto(${producto.id})"> <img src="./images/borrar.png" alt="Carrito" style="width:24px"> </a>`

                document.getElementById("carritoVacioMensaje").innerHTML = ""
        });

  document.getElementById("totalCarrito").innerHTML = `
  <button onclick="limpiarCarrito()" type="submit" class="btn btn-primary">Limpiar Carrito</button>
  <h5>TOTAL: $ ${sumaTotalProductos()} </h5>`
}

document.getElementById("iconoCarrito").innerHTML += JSON.stringify(JSON.parse(localStorage.getItem("carrito")).length);

renderCarrito();

