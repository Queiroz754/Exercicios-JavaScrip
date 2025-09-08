let numRandom =parseInt( Math.random() * 100)
let numUser = 0

 
 while ( numUser != numRandom ) {
     numUser = parseInt(prompt("insira um numero inteiro: "))

    if (numUser > numRandom){
         alert("O numero é menor")
    }else if (numUser < numRandom){
         alert("O numero é maior")
    }
}

alert("Parabens, voce acertou! ebaaaaaaaaaaaaaaaaaaaaaaaaaa")


