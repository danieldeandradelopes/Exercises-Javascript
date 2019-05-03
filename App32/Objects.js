var herois = {
    nome: "",
    poder: "",
    qtdBracos: "",
    qtdPernas: "",
    acao: function (poder) {
        return poder;
    }
}


// CRIANDO HOMEM DE FERRO
herois.nome = "Homem de Ferro";
herois.poder = "Armadura Resistente";
herois.qtdBracos = 2;
herois.qtdPernas = 2;


console.log("Nome: " + herois.nome);
console.log("Poder: " + herois.poder);
console.log("Qtd de Braços: " + herois.qtdBracos);
console.log("Qtd de Pernas: " + herois.qtdPernas);
console.log(herois.acao("Voar"));

console.log('------------------------------------');



// CRIANDO LANTERNA VERDE
herois.nome = "Lanterna Verde";
herois.poder = "Anel que controla o mundo físico!";
herois.qtdBracos = 2;
herois.qtdPernas = 2;


console.log("Nome: " + herois.nome);
console.log("Poder: " + herois.poder);
console.log("Qtd de Braços: " + herois.qtdBracos);
console.log("Qtd de Pernas: " + herois.qtdPernas);
console.log(herois.acao("Levitar Carro"));