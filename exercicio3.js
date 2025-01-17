function verificarIdades() {

    const anoAtual = Number(prompt("Digite o ano atual:"));

    const entrada = prompt("Digite os anos de nascimento separados por vírgula:");

    const anosNascimento = entrada.split(",").map(ano => Number(ano.trim()));

    let resultado = "";

    anosNascimento.forEach((ano, index) => {
        const idade = anoAtual - ano;
        let status;

        if (idade >= 18) {
            status = "Maior de idade";
        } else {
            status = "Menor de idade";
        }

        resultado += `Pessoa ${index + 1}: ${status}\n`;
    });

    alert(resultado);
}
