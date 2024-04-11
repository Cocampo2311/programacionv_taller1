function verificarVelocidad(tramoKm, tiempoHoras) {
    // Calcular la velocidad en km/h
    let velocidad = tramoKm / tiempoHoras;
    
    // Verificar si la velocidad está dentro del rango permitido
    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba.";
    } else {
        return "El conductor está descalificado.";
    }
}

// Ejemplo de uso:
let resultado = verificarVelocidad(100, 4);
console.log(resultado); 
