var numeros = [
    1,
    2,
    3,
    4,
    5
]


var novoNumeros = numeros.map(function (elemento) {
    elemento = elemento + 100;
    return elemento;
});


for (let index = 0; index < novoNumeros.length; index++) {
    console.log(novoNumeros[index]);

}