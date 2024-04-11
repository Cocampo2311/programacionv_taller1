function verificarVelocidad(tramoKm, tiempoHoras) {
    
    let velocidad = tramoKm / tiempoHoras;
    

    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba.";
    } else {
        return "El conductor está descalificado.";
    }
}

// Ejemplo de uso:
let resultado = verificarVelocidad(100, 4);
console.log(resultado); 
