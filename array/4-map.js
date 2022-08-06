/*
Associado ao map existe um laço que vai ser executado.
A ideia é mapear um array para outro array de mesmo tamanho, porém com dados
transformados. 
Transformar um array em outro!!
Imagine um array com 3 elementos. Quero um outro array, mas cada elemento 
com valor dobrado.
Posso pegar um objeto e transformar num número ou numa string. 

O map não altera o array atual... Gera um novo array
*/

const nums = [1,2,3,4,5]

//todos os elementos são o dobro do array original
//map pode receber até 3 parâmetros: valor, índice, array 
let resultado = nums.map(function(e){
    return e*2
})
//[ 2, 4, 6, 8, 10 ]... Mapeei cada elemento num array resultante
console.log(resultado)

let resultado2 = nums.map(function(e){
    //return e*2
})

//[ undefined, undefined, undefined, undefined, undefined ]
console.log(resultado2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

/*
    Encadeamento de maps. Somo todos os elementos por 10, depois triplico por 3 e depos converto em real.
    O encadeamento pode ser na ordem desejada.
*/

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
//[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
console.log(resultado)