var carros = [
    "Honda Civic",
    "Corolla",
    "HB20",
    "Ferrari",
    "BMW"
]

for (var i = 0; i < carros.length; i++) {
    console.log('Antes Splice: ' + carros[i]);
}

console.log('-------------------------------');


// Splice
// 1 - remove um item em um indice específico ou em um intervalo
// 2 - adiciona um item em um indice específico ou em um intervalo

//REMOVENDO O PRIMEIRO ÍNDICE
// carros.splice(0, 1);

// REMOVENDO UM INTERVALO
// carros.splice(0, 3);


// ADICIONANDO UM ITEM EM UM INTERVALO
// carros.splice(0, 2, 'Fusca', 'Brasília', 'Kombi');

// ADICIONANDO UM ITEM EM UM INTERVALO
carros.reverse();

for (var i = 0; i < carros.length; i++) {
    console.log('Após Splice: ' + carros[i]);
}


console.log('O tamanho do array é: ' + carros.length);