var salir = true;
var opc = 0;

var nombre1 = "";
var cantidad1;
var precio1;

var nombre2 = "";
var cantidad2;
var precio2;

var nombre3 = "";
var cantidad3;
var precio3;

var totalProductos = 0;

function agregarProducto(nombre, cantidad, precio) {
    if (nombre1 == "") {
        nombre1 = nombre;
        cantidad1 = cantidad;
        precio1 = precio;
        totalProductos = totalProductos + 1;
    } else if (nombre2 == "") {
        nombre2 = nombre;
        cantidad2 = cantidad;
        precio2 = precio;
        totalProductos = totalProductos + 1;
    } else if (nombre3 == "") {
        nombre3 = nombre;
        cantidad3 = cantidad;
        precio3 = precio;
        totalProductos = totalProductos + 1;
    }

    if (cantidad < 5) {
        console.log("quedan pocas unidades de " + nombre);
    }
}
function compra(nombre, cuantos) {
    var precio = 0;
    var cantidadActual = 0;

    if (nombre == nombre1) {
        precio = precio1;
        cantidadActual = cantidad1;
    } else if (nombre == nombre2) {
        precio = precio2;
        cantidadActual = cantidad2;
    } else if (nombre == nombre3) {
        precio = precio3;
        cantidadActual = cantidad3;
    }

    var total = precio * cuantos;

    if (cuantos > 20) {
        console.log("Tienes un 20% de descuento");
        total = total * 0.8;
    } else if (cuantos > 10) {
        console.log("Tienes un 10% de descuento");
        total = total * 0.9;
    }

    if (nombre == nombre1) {
        cantidad1 = cantidad1 - cuantos;
        if (cantidad1 < 5) {
            console.log("Quedan pocas unidades de " + nombre1);
        }
    } else if (nombre == nombre2) {
        cantidad2 = cantidad2 - cuantos;
        if (cantidad2 < 5) {
            console.log("Quedan pocas unidades de " + nombre2);
        }
    } else if (nombre == nombre3) {
        cantidad3 = cantidad3 - cuantos;
        if (cantidad3 < 5) {
            console.log("Quedan pocas unidades de " + nombre3);
        }
        return total;
    }
}
function productosDisponibles() {
    if (totalProductos == 0) {
        console.log("No  se an agregado productos");
    }
    if (nombre1 != "") {
        console.log("Nombre :" + nombre1);
        console.log("Cantidad :" + cantidad1);
        console.log("Precio :" + precio1);
        console.log("");
    }
    if (nombre2 != "") {
        console.log("Nombre :" + nombre2);
        console.log("Cantidad :" + cantidad2);
        console.log("Precio :" + precio2);
        console.log("");
    }
    if (nombre3 != "") {
        console.log("Nombre :" + nombre3);
        console.log("Cantidad :" + cantidad3);
        console.log("Precio :" + precio3);
        console.log("");
    }
}

while (salir) {
    opc = Number(
        prompt("1.Ingresar producto\n2.Compra\n3.productos disponibles\n4.salir")
    );
    switch (opc) {
        case 1:
            var nombre = prompt("Ingrese nombre del producto");
            var cantidad = Number(prompt("Ingrese la cantidad"));
            var precio = Number(prompt("Ingrese el precio"));

            agregarProducto(nombre, cantidad, precio);
            break;
        case 2:
            productosDisponibles();
            var nombre = prompt("Que producto desea comprar");
            var cantidad = Number(prompt("Cuantos quiere comprar"));

            var total = compra(nombre, cantidad);

            console.log("Total a pagar :" + total);

            break;
        case 3:
            productosDisponibles();
            break;
        case 4:
            salir = false;
            break;
    }
}
