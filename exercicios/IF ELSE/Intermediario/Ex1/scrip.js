let num = parseInt(prompt("Digite um numero: "))
let num1 = parseInt(prompt("Digite um numero: "))
let operador = prompt("Digite um operador:[+,-,/,*]")
let resultado = 0

if (operador == "+") {
    resultado = num + num1
    alert(`O resultado de ${num} e ${num1} é ${resultado}`)
}
else if (operador == "-") {
    resultado = num - num1
    alert(`O resultado de ${num} e ${num1} é ${resultado}`)
}
else if (operador == "*") {
    resultado = num * num1
    alert(`O resultado de ${num} e ${num1} é ${resultado}`)
}
else if (operador == "/") {
    resultado = num / num1
    alert(`O resultado de ${num} e ${num1} é ${resultado}`)
}
else {
    alert("Operador invalido!")
}




