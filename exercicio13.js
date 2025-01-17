
const time = [];

function addJogador(nome, idade, posicao, pontuacao) {
   const jogador = {
       nome: nome,
       idade: parseInt(idade),
       posicao: posicao,
       pontuacao: parseInt(pontuacao)
   };
   time.push(jogador);
   alert(`Jogador ${nome} adicionado com sucesso!`);
}


function buscarPorPosicao(posicao) {
   let jogadoresEncontrados = [];
   for(let i = 0; i < time.length; i++) {
       if(time[i].posicao.toLowerCase() === posicao.toLowerCase()) {
           jogadoresEncontrados.push(time[i]);
       }
   }
   
   if (jogadoresEncontrados.length === 0) {
       alert(`Nenhum jogador encontrado na posição ${posicao}`);
       return;
   }
   
   let mensagem = `Jogadores na posição ${posicao}:\n`;
   for(let i = 0; i < jogadoresEncontrados.length; i++) {
       let jogador = jogadoresEncontrados[i];
       mensagem += `Nome: ${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}\n`;
   }
   alert(mensagem);
}

function listarTime() {
   if (time.length === 0) {
       alert("O time está vazio!");
       return;
   }
   
   let mensagem = "Lista de todos os jogadores:\n";
   for(let i = 0; i < time.length; i++) {
       let jogador = time[i];
       mensagem += `Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}\n`;
   }
   alert(mensagem);
}

function calcularPontuacaoMedia() {
   if (time.length === 0) {
       alert("Não há jogadores no time para calcular a média!");
       return 0;
   }
   
   let somapontuacao = 0;
   for(let i = 0; i < time.length; i++) {
       somapontuacao += time[i].pontuacao;
   }
   
   const media = somapontuacao / time.length;
   alert(`A pontuação média do time é: ${media.toFixed(2)}`);
   return media;
}

function menu() {
   while (true) {
       let menuText = "=== Menu ===\n" +
                     "1 - Adicionar jogador\n" +
                     "2 - Buscar por posição\n" +
                     "3 - Listar time\n" +
                     "4 - Calcular pontuação média\n" +
                     "5 - Sair";
                     
       const opcao = prompt(menuText + "\n\nEscolha uma opção:");
       
       switch (opcao) {
           case "1":
               const nome = prompt("Nome do jogador:");
               const idade = prompt("Idade do jogador:");
               const posicao = prompt("Posição do jogador:");
               const pontuacao = prompt("Pontuação do jogador:");
               addJogador(nome, idade, posicao, pontuacao);
               break;
               
           case "2":
               const posicaoBusca = prompt("Digite a posição para buscar:");
               buscarPorPosicao(posicaoBusca);
               break;
               
           case "3":
               listarTime();
               break;
               
           case "4":
               calcularPontuacaoMedia();
               break;
               
           case "5":
               alert("Programa encerrado!");
               return;
               
           default:
               alert("Opção inválida! Tente novamente.");
       }
   }
}

menu();