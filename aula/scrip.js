
// let nome = "Allan";
// let idade = 19;

// console.log("Ola, meu nome e " + nome + ",tenho " + idade + " anos.");

// let mensagem = `Ola, meu nome e ${nome}`;
// //! alert(mensagem);

// console.log(typeof mensagem);
// console.log(typeof idade);

// let profissao;

// console.log(typeof profissao);

// let endereco = null;

// console.log(typeof endereco);

// let soma = 1 

// let soma2 = "1"

// console.log(soma - soma2)

// //* IF / ELSE

// let temperatura = 12;

// if (temperatura > 25) {
//     console.log("esta calor!")
// }
// else {
//     console.log("esta frio!")
// }

// let nome1 = prompt("Digite seu nome: ")

// alert("Seu nome e:" + nome1)

//* IF / ELSE IF / ELSE 

// let nota = parseInt(prompt("Digite a nota: "))

// if (nota > 6) {
//     console.log("Aprovado(a)!")
// }
// else if (nota >= 5) {
//     console.log("Esta de recuperação!")
// }
// else {
//     console.log("Reprovado(a)!")
// }
/*
//* IF TERNARIO

let saldo = 90

//* simplificacao do if e else a baixo
let podeCompar = saldo >= 100 ? "Compra aprovada!" : "Saldo insuficiente"


/**  if (saldo >= 100) {
     podeCompar= "Compra aprovada"
 }else {
     podeCompar = "saldo insuficiente"
 } */

//console.log(podeCompar)

/*
//* CONDICIONAL ANINHADA
//* MULTIPLAS VERIFICACOES

let hora = 8
let diaDaSemana = "terça"

if (hora >= 6 && hora < 12) {
    console.log("Bom dia!")
} else {
    if (hora >= 12 && hora < 18) {
        if (diaDaSemana == "segunda") {
            console.log("Boa tarde! Otima semana!")
        } else {
            console.log("Boa tarde!")
        }
    } else {
        console.log("Boa noite!")
    }
}

*/

//* SWITCH CASE
let dia = 2 ;

switch(dia) {
    case 1:
        console.log("Domingo!");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("terça-feira");
        break;
    default:
        console.log ("Dia invalido!");
        break;
}

