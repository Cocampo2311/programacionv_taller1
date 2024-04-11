function debeTributar(edad, ingresosMensuales) {
    if (edad > 16 && ingresosMensuales >= 1000) {
        return true;
    } else {
        return false;
    }
}


function verificarTributacion() {
    var edad = parseInt(prompt("Por favor, introduce tu edad:"));
    var ingresosMensuales = parseFloat(prompt("Por favor, introduce tus ingresos mensuales en euros:"));

    if (!isNaN(edad) && !isNaN(ingresosMensuales)) {
        if (debeTributar(edad, ingresosMensuales)) {
            console.log("Debes tributar.");
        } else {
            console.log("No tienes que tributar.");
        }
    } else {
        console.log("Por favor, introduce valores numéricos válidos.");
    }
}


verificarTributacion();
