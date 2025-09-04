let nota = prompt("insira a nota")

if (nota <100 || nota < 0) {
    console.log("Digite novamente uma nota valida")
}
else{
    switch (nota){
        case (nota >= 90):
        console.log("A")
        break

        case (nota >= 80):
        console.log("B")
        break
        
        case (nota >= 70):
        console.log("C")
        break
        
        case (nota >= 60):
        console.log("D")
        break

        default:
        console.log("F")
    }
}



