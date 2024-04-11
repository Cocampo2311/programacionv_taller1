function determinarTipoImpositivo(rentaAnual) {
    if (rentaAnual <= 20000) {
        return "Renta baja";
    } else if (rentaAnual <= 40000) {
        return "Renta media";
    } else if (rentaAnual <= 60000) {
        return "Renta alta";
    } else {
        return "Renta muy alta";
    }
}

function mostrarTipoImpositivo() {
    var rentaAnual = parseFloat(prompt("Por favor, introduce tu renta anual en euros:"));

    if (!isNaN(rentaAnual)) {
        var tipoImpositivo = determinarTipoImpositivo(rentaAnual);
        console.log("Tu tipo impositivo es: " + tipoImpositivo);
    } else {
        console.log("Por favor, introduce un valor numérico válido.");
    }
}

mostrarTipoImpositivo();
