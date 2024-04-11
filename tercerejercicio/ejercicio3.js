function calcularDiferencia(num1, num2) {
    
    let mayor = Math.max(num1, num2);
    let menor = Math.min(num1, num2);
    
   
    let diferencia = mayor - menor;
    
    return diferencia;
}


let resultado = calcularDiferencia(30, 80);
console.log("La diferencia es: " + resultado); 