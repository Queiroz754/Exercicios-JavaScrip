let altura = prompt("digite a altura")
let peso = prompt("digite o peso")

altura = parseFloat(altura)
peso = parseInt(peso)

const imc = peso / (altura * altura)

if (imc > 18.5) {
    console.log("Magreza")
} else if (imc <= 24.9) {
    console.log("Normal")
} else if (imc <= 29.9) {
    console.log("Sobrepeso")
} else if (imc <= 34.9) {
    console.log("Obeso1")
} else if (imc <= 39.9) {
    console.log("Obeso2")
} else { console.log("Obeso3") }
