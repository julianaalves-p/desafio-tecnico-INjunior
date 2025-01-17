function verificarPalindromo() {
 
    let fraseUsuario = prompt("Digite uma frase:");
    
    let fraseFinal = "";
    for(let i = 0; i < fraseUsuario.length; i++) {
        if(fraseUsuario[i] !== " ") {
            let letra = fraseUsuario[i];

            if(letra >= "A" && letra <= "Z") {
                letra = String.fromCharCode(fraseUsuario[i].charCodeAt(0) + 32); // usei ASCII para converter maiusculas pra minusculas
            }
            fraseFinal += letra;
        }
    }
    
    let palindromo = true;
    for(let i = 0; i < Math.floor(fraseFinal.length / 2); i++) {
        if(fraseFinal[i] !== fraseFinal[fraseFinal.length - 1 - i]) {
            palindromo = false; // não é palindromo
            break;
        }
    }
    
    if(palindromo) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo!");
    }
}

verificarPalindromo()