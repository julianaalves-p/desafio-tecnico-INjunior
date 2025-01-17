function encontrarElementoUnico(array) {
    
    let result = 0;

    for (let numero of array) {
        result ^= numero;
    }
    
    alert(`O elemento que aparece apenas uma vez é: ${result}`);
    return result;
}
