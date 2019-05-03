
var clima = [
    "Verão",
    "Outono",
    "Primavera",
    "Inverno"
]

for (var i = 0; i < clima.length; i++) {
    console.log('Antes Reverse - O clima Atual é: ' + clima[i]);
}


console.log('---------------------------------------------');


clima.reverse();


for (var i = 0; i < clima.length; i++) {
    console.log('Após Reverse - O clima Atual é: ' + clima[i]);
}


