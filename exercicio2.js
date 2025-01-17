function calculaFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}


function inicia() {    

    let continuar = true;
    while (continuar) {
        let entradaValida = false;
        let num;

        while (!entradaValida) { 
            let entrada = prompt("Digite um número inteiro positivo: ");

            if (entrada !== null && !isNaN(entrada) && Number.isInteger(Number(entrada)) && Number(entrada) >= 0) {
                num = Number(entrada);
                entradaValida = true;
            } else {
                alert("Erro! Digite um número inteiro positivo: ");
            }
        }

        let resultado = calculaFatorial(num);
        alert(`O fatorial de ${num} é ${resultado}.`);

        let resposta = prompt("Deseja calcular o fatorial de outro número? (S/N):");

        if (resposta === null || resposta.toUpperCase() !== "S") {
            continuar = false;
        }
    }

    alert("Programa encerrado");
}

inicia();
