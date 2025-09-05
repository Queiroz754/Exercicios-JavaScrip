valorCompra = parseInt(prompt("Qual o valor da compra? "))
precoDesconto = 100
desconto = .1

if (valorCompra > precoDesconto) {
   valorCompra = valorCompra-(valorCompra*desconto)
}
 alert(`Você pagara  R$${valorCompra}`)

