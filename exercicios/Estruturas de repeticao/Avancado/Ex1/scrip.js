let ladoA = parseInt(prompt("insira um lado do triangulo: "))
let ladoB = parseInt(prompt("insira outro lado do triangulo: "))
let ladoC = parseInt(prompt("insira outro lado do triangulo: "))

if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoC + ladoB < ladoC) {
    alert("isso não é um triangulo")
    
} else {
    let triangulo = ""

    if (ladoA == ladoB && ladoB == ladoC) {
        triangulo = "Equilatero"
    }

    if (ladoA == ladoB && ladoA != ladoC) {
        triangulo = "isosceles"
    }
    else if (ladoC == ladoB && ladoA != ladoA) {
        triangulo = "isosceles"
    }
    else if (ladoC == ladoA && ladoA != ladoB) {
        triangulo = "isosceles"
    }

    else {
        triangulo = "escaleno"
    }
    alert(`Esse triangulo é ${triangulo}`)
}



