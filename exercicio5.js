
let num = parseFloat(prompt("Digite um numero inteiro: "));

if(num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
} else if(num % 3 === 0) {
    console.log("fizz");
} else if(num % 5 === 0) {
    console.log("buzz");
}


