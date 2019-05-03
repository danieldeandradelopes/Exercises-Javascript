// MAP permite alterações em cada item do nosso array

// var number = [1, 2, 3, 4, 5];

// for (var i = 0; i < number.length; i++) {
//     console.log("Antes do MAP: " + number[i]);
// }

// console.log('-------------------------------')

// var newNumber = number.map(function (element) {
//     element = element + 100;

//     return element;
// });


// for (var i = 0; i < newNumber.length; i++) {
//     console.log("Após o MAP: " + newNumber[i]);
// }


var names = [
    "João",
    "José",
    "Pedro",
    "Tiago"
];


for (var i = 0; i < names.length; i++) {
    console.log("Antes do UpperCase: " + names[i]);
}

console.log('-------------------------------------');

var namesUpperCase = names.map(function (newName) {
    //newName = newName + " Silva";
    newName += " Silva";
    newName = newName.toUpperCase();

    return newName;
});


for (var i = 0; i < namesUpperCase.length; i++) {
    console.log("Depois do UpperCase: " + namesUpperCase[i]);
}