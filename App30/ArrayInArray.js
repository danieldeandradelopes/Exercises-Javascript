// ARRAYS DE ARRAYS (ANINHADOS)


var matriz = [
    [1, 2, 3, 4, 31],
    [5, 6, 7, 8, 32, 33],
    [9, 10, 11],
    [13, 14, 15, 16, 77, 99, 45]
];

for (var linha = 0; linha < matriz.length; linha++) {

    for (var coluna = 0; coluna < matriz[linha].length; coluna++) {
        console.log(matriz[linha][coluna]);
    }

}