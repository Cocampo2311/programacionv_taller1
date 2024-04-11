function calcularPromedio(notas) {
    let suma = 0;
    
    // Sumar todas las notas
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    
    // Calcular el promedio
    let promedio = suma / notas.length;
    
    return promedio;
}

function clasificarNota(promedio) {
    if (promedio < 5) {
        return "Suspenso";
    } else if (promedio >= 5 && promedio < 7) {
        return "Aprobado";
    } else {
        return "Notable";
    }
}

// Pedir las notas de los tres trimestres
let nota1 = parseFloat(prompt("Introduce la nota del primer trimestre:"));
let nota2 = parseFloat(prompt("Introduce la nota del segundo trimestre:"));
let nota3 = parseFloat(prompt("Introduce la nota del tercer trimestre:"));

// Calcular el promedio de las notas
let notas = [nota1, nota2, nota3];
let promedio = calcularPromedio(notas);

// Clasificar la nota
let resultado = clasificarNota(promedio);

// Mostrar el resultado
console.log("El promedio de las notas es: " + promedio);
console.log("La clasificación es: " + resultado);
