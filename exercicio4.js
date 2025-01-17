let reais = parseFloat(prompt("Digite o valor em reais (R$): "));

const taxaEuro = 6.10;
const taxaDolar = 5.70;

let euro = reais / taxaEuro;
let dolar = reais / taxaDolar;

alert(`Valor em reais: R$${reais.toFixed(2)}`);
alert(`Valor em euro: €${euro.toFixed(2)}`);
alert(`Valor em dólar americano: US$${dolar.toFixed(2)}`);  // usei o ".toFixed(2)" para preservar as duas casas decimais