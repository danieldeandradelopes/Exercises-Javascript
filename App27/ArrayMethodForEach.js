var estacoes = [
    "Verão",
    "Outono",
    "Primavera",
    "Inverno"
];


function exibeArray(element, index) {

    if (element === 'Verão') {
        console.log("Índice: " + index);
        console.log("Elemento: " + element);
    } else {
        console.log('Essa estação não é o verão!');
    }

}



//percorre todos os itens do nosso array informando aquela função pré definida
estacoes.forEach(exibeArray);


