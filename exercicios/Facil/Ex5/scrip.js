let idade = parseInt(prompt("Digite sua idade: "))
let clasificacao = ""

if (idade >= 0 && idade <= 100 )
{
    if (idade <= 12) {
        clasificacao = "Criança"
    }
    if (idade > 12 && idade <= 17) {
        clasificacao = "adolecente"
    }
    if (idade >= 18) {
        clasificacao = "adulto"
    }

    alert(`Com essa idade você é ${clasificacao}`)
} else {
    alert("idade invalida")
}
