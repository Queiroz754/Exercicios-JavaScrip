let num = parseInt(prompt("Digite um numero: "))
let clasificacao = ""


if (num != 0) {
if (num % 2 == 0) {
    clasificacao = "par"
} else {
    clasificacao = "impar"
}
} else {
    clasificacao = "neutro"
}
alert(`Esse numero é ${clasificacao}`)