var carros = [
    "Honda Civic",
    "Corolla",
    "HB20",
    "Ferrari",
    "BMW"
]

for (var i = 0; i < carros.length; i++) {
    console.log('Antes Push: ' + carros[i]);
}


console.log('-------------------------------');

//PUSH - Insere um novo item no final da lista de array
carros.push('Land Rover');
carros.push('Alfa Romeo');

for (var i = 0; i < carros.length; i++) {
    console.log('Após Push: ' + carros[i]);
}