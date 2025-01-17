let fila = [];

function mostrarFila() {
   if (fila.length === 0) {
       alert("=== Fila de Espera ===\n======Fila vazia======"); 
   } else {
       let mensagem = "=== Fila de Espera ===\n";
       for (let i = 0; i < fila.length; i++) {
           mensagem += `${i + 1}º ${fila[i]}\n`;
       }
       mensagem += "===================";
       alert(mensagem);
   }
}


function addCliente(nome) {
   fila.push(nome);
   alert(`${nome} foi adicionado(a) à fila.`);
}

function atenderCliente() {
   if (fila.length === 0) {
       alert("Não há clientes na fila.");
       return;
   }
   let cliente = fila.shift();
   alert(`Atendendo cliente: ${cliente}`);
}

function menu() {
   while (true) {
       mostrarFila();
       
       let menuText = "\n Digite uma opção:\n" + 
                     "1 - Novo Cliente\n" +
                     "2 - Atender Cliente\n" +
                     "3 - Sair";
                     
       let opcao = prompt(menuText);
       
       if (opcao === "1") {
           let nome = prompt("Digite o nome do cliente:");
           if (nome) {
               addCliente(nome); }
       } 
       else if (opcao === "2") {
           atenderCliente(); }
    
       else if (opcao === "3") {
           alert("Programa encerrado");
           break;
       }

   }
}

menu();