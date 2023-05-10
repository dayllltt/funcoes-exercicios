//function soma(numero1,numero2){
   // console.log(`O resultado dessa soma é ${numero1 + numero2}`)
//}
////
//soma(22,63)

function comparacao(numero1,numero2){
    console.log(`${numero1} é maior que ${numero2}? ${numero1 >= numero2}`)
}

comparacao(22, 63)

//function parOuImpar(numero1){
//    const number2 = 0
//    console.log(`O número é impar? ${numero1 % 2 > number2} `)
//}
//
//parOuImpar(2)

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%  referente ao INSS.

function salarioInss(salariobruto){
    const inssDesconto = salariobruto * 0.1
    salarioLiquido = salariobruto - inssDesconto
    return console.log(`Seu salário líquido é de: ${salarioLiquido}`)
}
salarioInss(9000)