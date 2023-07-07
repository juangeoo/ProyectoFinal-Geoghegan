function sumaTotalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0)
}

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    borrarProducto();
}

function mostrarSumaTotal() {
    document.getElementById("totalCarrito").innerHTML = `
    <button onclick="limpiarCarrito()" type="submit" class="btn btn-primary bg-dark mx-4 rounded-0">Limpiar Carrito</button>
    <h5 class="mx-4">TOTAL: $ ${sumaTotalProductos()} </h5>`
    mostrarMensajeCarritoVacio();
}

function mostrarMensajeCarritoVacio() {
    let carrito = cargarCarritoLS();
    document.getElementById("iconoCarrito").innerHTML = JSON.stringify(JSON.parse(localStorage.getItem("carrito")).length);

    if (carrito.length > 0){
        document.getElementById("carritoVacioMensaje").innerHTML = "";
    } else {
        document.getElementById("totalCarrito").innerHTML = "";
        document.getElementById("iconoCarrito").innerHTML = "";
        document.getElementById("carritoVacioMensaje").innerHTML = `
        <h1>Tu carrito esta vacío.</h1>
        <p>Encontrá las mejores ofertas</p>
        <a href="index.html"><button class="btn btn-primary bg-dark text-uppercase rounded-0">Continuar comprando</button></a>`
    }

}

function renderCarrito() {
    let productos = cargarCarritoLS();
    productos.slice(-1).forEach((producto) => {
            document.getElementById("listaCarrito").innerHTML +=
            `<div class="d-flex border-bottom container py-3">
            <img class="w-50 mx-3" style="height:auto;" src="${producto.imagen}" alt="">
            <div>
                <h6>${producto.nombre}</h6>
                <p>$ ${producto.precio}</p>
                <a href="#" onclick="borrarProducto(${producto.id})"> <img src="./images/borrar.png" alt="Carrito" style="width:24px"> </a>
            </div>
        </div>`;
        });

  mostrarSumaTotal();
  mostrarMensajeCarritoVacio();
}

function borrarProducto(id){
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id != id);
    guardarCarritoLS(nuevoCarrito);
    document.getElementById("listaCarrito").innerHTML = "";
    nuevoCarrito.map((producto) => {
        document.getElementById("listaCarrito").innerHTML +=
        `<div class="d-flex border-bottom container py-3">
        <img class="border w-50 mx-3" style="height:auto;" src="${producto.imagen}" alt="">
        <div>
            <h6>${producto.nombre}</h6>
            <p>${producto.precio} $</p>
            <a href="#" onclick="borrarProducto(${producto.id})"> <img src="./images/borrar.png" alt="Carrito" style="width:24px"> </a>
        </div>
    </div>`;
    });
            // Notificacion
            Toastify({
                text: "¡Producto eliminado del carrito!",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(90deg, rgba(157,34,21,1) 0%, rgba(158,37,18,1) 35%, rgba(255,59,0,1) 100%)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
    mostrarMensajeCarritoVacio();
    mostrarSumaTotal();
}

borrarProducto();
mostrarMensajeCarritoVacio();
renderCarrito();
