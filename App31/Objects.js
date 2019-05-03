// OBJETO EM JAVASCRIPT

var sabreLuz = {
    cor: "",
    som: "",
    ligar: function (mensagem) {
        return mensagem;
    }
};


sabreLuz.cor = "Azul";
sabreLuz.som = "Música";

console.log("A cor é: " + sabreLuz.cor);
console.log("O som é: " + sabreLuz.som);
console.log(sabreLuz.ligar());


console.log('---------------------------------');

sabreLuz.cor = "Vermelho";
sabreLuz.som = "Som de Sabre";

console.log("A cor é: " + sabreLuz.cor);
console.log("O som é: " + sabreLuz.som);
console.log(sabreLuz.ligar("O seu sabre de luz foi desativado!"));



console.log('---------------------------------');

sabreLuz.cor = "Verde";
sabreLuz.som = "Som do sabre verde";

console.log("A cor é: " + sabreLuz.cor);
console.log("O som é: " + sabreLuz.som);
console.log(sabreLuz.ligar("O seu sabre de luz foi reiniciado!"));