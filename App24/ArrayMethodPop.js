var carros = [
    "Honda Civic",
    "Corolla",
    "HB20",
    "Ferrari",
    "BMW"
]

for (var i = 0; i < carros.length; i++) {
    console.log('Antes Pop: ' + carros[i]);
}

console.log('-------------------------------');


// POP - remove o último item do array

carros.pop();

for (var i = 0; i < carros.length; i++) {
    console.log('Após Pop: ' + carros[i]);
}