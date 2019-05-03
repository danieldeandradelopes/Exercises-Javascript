var animal = {
    nome: "",
    tipo: "",
    alimentar: function (alimento) {
        return "O " + animal.nome + " comeu o (a) " + alimento;
    },

    sono: function (status) {
        return "O " + animal.nome + " está " + status;
    }
}

animal.nome = "Bidu";
animal.tipo = "Cachorro";

console.log("O nome do seu bichinho é: " + animal.nome);
console.log("E ele é um: " + animal.tipo);
console.log(animal.alimentar("Ração"));
console.log(animal.sono("Dormindo"));

