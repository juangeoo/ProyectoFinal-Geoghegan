
let puedeIngresar = false
let nombre = ""
let apellido = ""
let precioTotal = 0
let catalogo
let articulos = ""
let estadoComprando = false

function inicio(){
    nombre = prompt("Nombre:");
    console.log(nombre);
    apellido = prompt("Apellido:");
    console.log(apellido);
    if (nombre !== null && apellido !== null){
        alert("¡Bienvenido " + nombre + " " + apellido + "!\n" + "Toca Aceptar para ingresar a la tienda");
        puedeIngresar = true;
    }
}

function tienda(){
    catalogo = prompt("Tienda Apple\n" + 
    "Tu usuario: " + nombre + " " + apellido + "\n"
     + "Ingresa la letra del articulo que quieras agregar al carrito y toca Aceptar, puedes agregar multiples articulos, cuando termines de agregar escribe 'comprar'\n" 
     + "A - iPhone 13 - Valor 800$ \n B - iPad - Valor 500$\n C - iPhone 12 - Valor 600$\n D - AirPods 2 - Valor 200$").toLowerCase();
}

function resumen(){
    alert(nombre + ", este es el resumen de tu compra\n\n" + articulos + "\n TOTAL: " + precioTotal + "$");
    estadoComprando = false;
    alert("¡Gracias por comprar!")
}

inicio();

if (puedeIngresar){
    estadoComprando = true;
    tienda();
} else {
    alert("¡Tus datos no son válidos!");
    inicio();
}

do {
    if (catalogo == "a"){
        precioTotal = precioTotal + 800;
        console.log("A - iPhone 13 - Valor 800$ ----- TOTAL: " + precioTotal + "$");
        alert("¡'iPhone 13' agregado al carrito!");
        articulos += "" + "iPhone 13 - 800$\n";

    } else if (catalogo == "b"){
        precioTotal = precioTotal + 500;
        console.log("B - iPad - Valor 500$ ----- TOTAL: " + precioTotal + "$");
        alert("¡'iPad' agregado al carrito!");
        articulos += "" + "iPad - 500$\n";

    } else if (catalogo == "c"){
        precioTotal = precioTotal + 600;
        console.log("C - iPhone 12 - Valor 600$ ----- TOTAL: " + precioTotal + "$");
        alert("¡'iPhone 12' agregado al carrito!");
        articulos += "" + "iPhone 12 - 600$\n";

    } else if (catalogo == "d"){
        precioTotal = precioTotal + 200;
        console.log("D - AirPods 2 - Valor 200$ ----- TOTAL: " + precioTotal + "$");
        alert("¡'AirPods 2' agregado al carrito!");
        articulos += "" + "AirPods 2 - 200$\n";

    } else if (catalogo == "comprar"){
        resumen();

    } else{
        alert("Error. Letra incorrecta. Si queres finalizar tu compra escribe 'comprar' ")
    }
    tienda();
} while (estadoComprando == true);