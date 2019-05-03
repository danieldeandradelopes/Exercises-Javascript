//aprender a reutilizar os valores que o return nos dá no final de uma função


function soma (num1, num2){
    var somar = num1 + num2;

    return somar;
}

function dividePorDois(num){
    return num / 2;
}


var resultado = soma(10, 5);

console.log(dividePorDois(resultado));