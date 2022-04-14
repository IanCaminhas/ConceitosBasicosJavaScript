function rand([min=0, max=1000]){
    //[min=0, max=1000] -> não é um array e sim dois atributos
    //se o min for maior que o max, inverta os valores
    //[min,max]operador destructuring = [max,min] criando array
    if(min>max) [min,max] = [max,min]
    //para me dar um valor entre o min e o max
    const valor = Math.random() * (max-min) + min
    //arredondando para baixo
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))

//assume valores padrão
console.log(rand([]))

/* Isso dá erro...
A função recebe undefined
console.log(rand())
*/


