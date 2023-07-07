function verProducto(id){
    let productos = cargarProductosLS();
    console.log(productos);
    let producto = productos.filter(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
    // location.href = "verProducto.html";
}

function renderProducto() {
    let producto = JSON.parse(localStorage.getItem("producto"));
    document.getElementById("verProducto").innerHTML +=
                 `${producto.nombre}`;
}

renderProducto();