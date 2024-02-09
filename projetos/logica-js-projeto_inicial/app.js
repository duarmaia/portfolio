alert ('Seja Bem-vindo(a) ao jogo do número secreto');
let numeroSecreto = 29;
console.log (numeroSecreto);
let chute = prompt ('Escolha um número de 1 à 30');

//se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert (`Isso aí você acertou o numero secreto ${numeroSecreto}`);
} //se não for igual 
else {
    alert ('Você errou :(')
}