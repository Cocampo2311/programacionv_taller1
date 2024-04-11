function determinarSigno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}


console.log(determinarSigno(5)); 
console.log(determinarSigno(-3)); 
console.log(determinarSigno(0)); 
