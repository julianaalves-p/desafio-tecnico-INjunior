let a = parseFloat(prompt("Digite o coeficiente a:"));
let b = parseFloat(prompt("Digite o coeficiente b:"));
let c = parseFloat(prompt("Digite o coeficiente c:"));


if (a === 0) {
    alert("Não é uma equação quadrática, o valor de 'a' deve ser diferente de zero.");
} else {

    let delta = (b * b) - (4 * a * c);
    alert("O valor de delta é: " + delta);

    if (delta < 0) {
        alert("A equação não possui raízes reais");
    }
    else if (delta == 0) {
   
        let x = -b / (2 * a);
        alert("A equação possui uma raiz real: x = " + x);
    }
    else {
      
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("A equação possui duas raízes reais: x1 = " + x1 + "  x2 = " + x2);
    }
}