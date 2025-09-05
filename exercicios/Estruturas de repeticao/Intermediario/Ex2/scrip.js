let numRandom =parseInt( Math.random() * 100)
alert(numRandom)
 
 while (numUser != numRandom) {
    let numUser = parseInt(prompt("insira um numero inteiro: "))

    if (numUser > numRandom){
         alert("O numero é menor")
    }else if (numUser < numRandom){
         alert("O numero é maior")
    }
}

alert("Parabens, voce acertou! ebaaaaaaaaaaaaaaaaaaaaaaaaaa")


