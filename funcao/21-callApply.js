/*
    Posso invocar uma função dos seguintes modos:
    diretamente, a partir de um objeto, usando call ou Apply
*/


function getPreco(imposto=0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+imposto)}`
}

const produto ={
    nome:'Notebook',
    preco:4589,
    desc: 0.15,
    getPreco

}

global.preco = 20
global.desc = 0.1
//R$ 18
console.log(getPreco())// chamando diretamene
//R$ 3900.65
console.log(produto.getPreco()) // a partir de um objeto


const carro = {preco:5000, desc:0.20}
//Invocando a função com call
//R$ 4000
console.log(getPreco.call(carro))

//Invocando a função com Apply
//R$ 4000
console.log(getPreco.apply(carro))

//$ 4680
console.log(getPreco.call(carro, 0.17, '$'))
//$ 4680
console.log(getPreco.apply(carro, [0.17, '$']))
//$ 21.06
console.log(getPreco.apply(global, [0.17, '$']))


/*
Diferenças entre Apply e Call: 
a forma como passo os parâmetros para a chamada da função.
Com apply passo usando array -> []

*/










