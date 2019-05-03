

var valorCompra = 25.90;
var meuDinheiro = 29.90;

var saldo = meuDinheiro - valorCompra;

//<, >, <=, >=, ==, !=

if (valorCompra < meuDinheiro){        

    if (saldo > 100){
        console.log("Não Comprarei");
    }else if (saldo == 20){
        console.log("Comprarei - Troco Menor que 20.00");
    }else if (saldo == 4){
        console.log("Comprarei - Troco de 4.00");
    }else{
        console.log("Comprarei");
    }

}else if (valorCompra == meuDinheiro){
    console.log("Comprarei");
}else{
    console.log("Não comprarei");
}