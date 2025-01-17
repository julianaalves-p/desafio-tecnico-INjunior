function fibonacci(n) {
    if (n === 0) { // caso base
        return [0]; 
    }
    if (n === 1) { // caso base
        return [0, 1]; 
    }
    let seq = fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

let n = parseInt(prompt("Digite o número de termos que deseja ver da sequência de Fibonacci:"));

let fibonacciSeq = fibonacci(n);
alert(`Os ${n} primeiros termos da sequência são: ${fibonacciSeq.join(', ')}`);