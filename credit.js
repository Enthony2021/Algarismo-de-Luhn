
alert('Algoritmo de Luhn')

let numCard = prompt('Digite o número do seu cartão: ')
let empresa


while(numCard.length < 13) {
   alert('Número inválido!')
   numCard = prompt('Digite o número do seu cartão: ')
}


// Algoritmo de Luhn
function validaNumCard(numCard) {
    let numCardInv = []
    let soma = 0
    let result

    // Inverte os números e guarda em um array
    for(let i = numCard.length - 1; i >= 0; i--) {
        numCardInv.push(numCard[i])
    }
    
    // Calcula a soma
    for(let i = 0; i < numCardInv.length; i++) {
        result = 0
        i%2 === 1 ? result = Number(numCardInv[i])*2 : soma += Number(numCardInv[i])
        result > 9 ? result = (Number(String(result)[0]) + Number(String(result)[1])) : result
        if(result !== 0) soma += result
    }

    if (soma%10 === 0) {
        return true
    } else {
        return false
    }
    
}

// Empresa 
function cardEmpresa(numCard) {
    let idCard = numCard[0]+numCard[1]
    
    if ( idCard[0] == '4' && (numCard.length === 13 || numCard.length === 16) ) return 'VISA'

    if ( (idCard == '34' || idCard == '37') && (numCard.length === 15) ) return 'AMERICAN EXPRESS'
    
    if ((idCard == '51' || idCard == '52' || idCard == '53' || idCard == '54' || idCard == '55') && (numCard.length === 16)) return 'MASTERCARD'
    return false
}

// função principal
function credit() {
    let valido = validaNumCard(numCard)
    let empresa = cardEmpresa(numCard)

    if(valido && empresa) {
       return document.write(`<h1>${empresa}</h1>`)
    } else {
       return document.write(`<h1>INVALID</h1>`)
    }
}

credit()

// 4003600000000014 VISA
// 5150443238837875 MASTERCARD
