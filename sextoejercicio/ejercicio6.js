function calcularPrecioTotal(articulos, precioUnitario) {
    var precioTotal = articulos * precioUnitario;

    // Comprobamos si hay más de 10 artículos y el precio unitario es superior a 40 euros
    if (articulos > 10 && precioUnitario > 40) {
        var descuento = precioTotal * 0.15;
        precioTotal -= descuento;
    }

    return precioTotal;
}

// Ejemplo de uso
var articulos = 20;
var precioUnitario = 10;
var precioFinal = calcularPrecioTotal(articulos, precioUnitario);
console.log("El precio a pagar es: " + precioFinal + " euros.");
