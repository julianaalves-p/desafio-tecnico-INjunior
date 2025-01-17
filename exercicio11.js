function verificarOrdemCrescente() {

    const quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
    const numeros = [];
    
    for (let i = 0; i < quantidade; i++) {
        const num = parseInt(prompt(`Digite o ${i + 1}º número:`));
        if (isNaN(num)) {
            console.log("Por favor, insira apenas números válidos.");
            return;
        }
        numeros.push(num);
    }
    
    let contador = 0;
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[i - 1]) {
            contador++;
        }
    }
    
    console.log("Array:", numeros);
    console.log(`${contador} números estão em ordem crescente em relação ao anterior.`);
}

verificarOrdemCrescente();