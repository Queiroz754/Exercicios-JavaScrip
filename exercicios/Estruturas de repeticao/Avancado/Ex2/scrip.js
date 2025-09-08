let numUser = parseInt(prompt("insira o numero que voçê quer calcular o fatorial: "))
let total = numUser*numUser

for (let i = 1; i != numUser ; i++ ){
    total *= i

}

alert(`O fatorial de ${numUser} é ${total}`)
