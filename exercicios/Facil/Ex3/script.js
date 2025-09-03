let num = parseInt(prompt("insira sua nota: "))

if (num > 0 && num < 100) {
    if (num >= 60) {
        alert("Você foi aprovado(a)!")
    }

    if (num < 60) {
        alert("Você foi reprovado(a)!")
    }
} else {
    alert("Esse numero é invalido!")
}