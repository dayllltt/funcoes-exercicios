// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma(num1, num2) {
    let resultado = num1 + num2
    return (`A soma de ${num1} + ${num2} é: ${resultado}`)
}

function subtracao (num1, num2) {
    let resultado = num1 - num2
    return (`A subtração de ${num1} - ${num2} é ${resultado}`)
}

const multiplicacao = (num1, num2) => {
    let resultado = num1 * num2
    return (`A multiplicação de ${num1} * ${num2} é: ${resultado}`)
}

const divisao = (num1, num2) => {
    let resultado = num1 / num2
    return (`A divisão de ${num1} / ${num2} é: ${resultado}`)
}

//b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let num1 = Number(prompt(`Digite um numero aqui`))
let num2 = Number(prompt(`Digite outro numero aqui`))

// invocando todas as 4 funções, passando como argumento os dois números recebidos do usuario

console.log(soma(num1,num2))
//alert(soma(num1,num2))
console.log(subtracao(num1,num2))
//alert(subtracao(num1,num2))
console.log(multiplicacao(num1,num2))
//alert(multiplicacao(num1, num2))
console.log(divisao(num1,num2))
//alert(divisao(num1,num2))
//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
let resultado1 = soma(num1,num2)
console.log(resultado1)
let resultado2 = subtracao(num1,num2)
console.log(resultado2)
let resultado3 = multiplicacao(num1,num2)
console.log(resultado3)
let resultado4 = divisao(num1,num2)
console.log(resultado4)