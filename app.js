//Comentário Linha
/* Multiplas linhas */


//criação de variáveis
var n1 = 10
var n2 = 100.1
var n3 = "Frase teste"

//Printar na tela
console.log(n1);
console.log(n2);
console.log(n3);

//condições

//IF & Else
if( n1 <= 10 ) {
    console.log("N1 maior ou igual a 10");

} else {
    console.log("N1 menor que 10");
}

//For
for(let i = 0; i < 10; i++) {
    console.log(i+"\n");
}

//While
var y = 0;

while (y <= 10) {
    console.log(y)
    y++
}

//Chamando a função soma e passando os parametros
var adicao = require("./adicao")
console.log(adicao("Soma: \n"+10,2));

