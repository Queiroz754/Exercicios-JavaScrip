//* filter

//* Filtrar numeros maiores que 2

//*const numeros = [1,2,3,4,5,6,]

//*const mairoresQue2 = numeros.filter(numero => numero > 2)

//*console.log (mairoresQue2)

//* Filtrar nomes

//* let nomes = ["ana","bruno","carlos","eva","fernanda"]
//* let nomesLongos = nomes.filter(nome => nome.length > 5)

//* Filtrar numeros pares

// *let numero = [1,2,3,4,5,6,7,8,9,10]

//* let pares = numero.filter(numero => numero % 2 === 0)
//* console.log(pares)

//* let pessoas = [
//*     {nome: "Allan", idade: 19},
//*    {nome: "Robert", idade: 9},
//*     {nome: "juliana", idade: 14},
//*     {nome: "julia", idade: 18},
//* ]

//*let adultos  = pessoas.filter(pessoa => pessoa.idade >= 18)

//*console.log(adultos)

//* FIND
//* Retorna o primeiro elemento da lista correspondente a cindicao

//* Procurar um produto pelo preco

//* const produtos = [
//*     {id: 1, nome: "Teclado", preco: 100},
//*     {id: 1, nome: "Mouse", preco: 50},
//*     {id: 1, nome: "Monitor", preco: 700},
//* ]

//* const produtoCaro = produtos.find(produto => produto.preco > 600)
//* console.log(produtoCaro)

//*let numeros = [5,8,12,20,3,15]

//* let encontrado = numeros.find(numero => numero > 10)

//* console.log(encontrado)

//* buscar por um nome pela primeira letra 
//*let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Catia"]

//* let nomeEncontrado = nomes.find(nome => nome.startsWith("C"))

//* console.log(nomeEncontrado)

//* MAP

//* Multiplicar todos os numeros por 2

//*const numeros = [1,2,3,4,5]

//* const numerosDobrados = numeros.map(numero => numero * 2)
//* console.log(numerosDobrados)

// *let pessoas = [
//*     {nome: "Allan", idade: 19},
//*     {nome: "Robert", idade: 9},
//*     {nome: "juliana", idade: 14},
//*     {nome: "julia", idade: 18},
//* ]

//* let nomes = pessoas.map(pessoa => pessoa.nome)
// *console.log(nomes)

//* let mensagem = pessoas.map(pessoa => 

//*     `${pessoa.nome} tem ${pessoa.idade} anos.`

    
//* )
//* console.log(mensagem)

//* DEIXAR OS NOMES EM MAIUSCULO E ADICIONAR UM SULFIXO
//* const nome = ["ana","bruno","carla"]

//* const nomesMaisculo = nome.map(nome => "Colaborador: " + nome.toUpperCase())

//* console.log(nomesMaisculo)

//* REDUCE
//* Reduz um array a um unico valor 

//* Somar todos os numeros do array

//* const numeros = [1,2,3,4,5]

//* const Soma = numeros.reduce((acumulador, numero) =>
//*     acumulador + numero, 0 
//* )
//* console.log(Soma)
const numeros = [10,5,8,20,3]

const maiorNumero = numeros.reduce((max, numero) => {
    if (numero > max) {
        return numero
    } else {
        return max
    }
}, numero[0])

console.log(maiorNumero)