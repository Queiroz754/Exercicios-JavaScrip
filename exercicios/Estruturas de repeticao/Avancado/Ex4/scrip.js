let ano = prompt("Digite o ano")

ano = parseInt(ano)

if (ano % 100 && !(ano % 400) && !(ano % 4)) 
    console.log("O ano" + ano + "é bissexto")
    else
    console.log("O ano não é bissexto")