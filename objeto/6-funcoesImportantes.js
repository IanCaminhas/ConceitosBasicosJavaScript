const pessoa ={
    nome:'Pedri',
    idade:21,
    peso: 70
}

//pegando todas as chaves
//[ 'nome', 'idade', 'peso' ]
console.log(Object.keys(pessoa))

//pegando os valores de um objeto
//[ 'Pedri', 21, 70 ]
console.log(Object.values(pessoa))

//vai me retonar subarrys: cada um contem chave/valor
//[ [ 'nome', 'Pedri' ], [ 'idade', 21 ], [ 'peso', 70 ] ]
console.log(Object.entries(pessoa))

/*
nome: Pedri
idade: 21
peso: 70
*/
Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${[e[1]]}`)
})

//fazendo um destructuring de cada subarray: [chave,valor]
/*
nome: Pedri
idade: 21
peso: 70
*/
Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})

//Definindo propriedades de um objeto
//Aquela propriedade pode ou não ser alterada ? a outra poderá ou não ficar visível
//pessoa é o target, 'dataNascimento' é a nova propriedade
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,// esse atributo vai ser listado quando fazer console.log(pessoa)
    writable: false, //vai ser uma propriedade que poderá modificada ?
    value: '01/01/2019'
})

//01/01/2019
console.log(pessoa.dataNascimento)

//Como writable: false, não consigo relaizar outra atribuição
pessoa.dataNascimento = '01/01/2017'
//01/01/2019 -> Naõ consigo mudar, pois writable: false
console.log(pessoa.dataNascimento)

/*
[ 'nome', 'idade', 'peso', 'dataNascimento' ]
'dataNascimento' apareceu, pois enumerable é true
*/
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
//Vai concatenar com o primeiro objeto(primeiro parâmetro)
//Vai colocar dentro de objeto de destino os chaves/valor de o1 e o2
//caso de chaves iguais, haverá uma sobrescrita de valor
const destino = {z:1}
const o1 = {b:2}
const o2 = {c:3, a:4}

const obj = Object.assign(destino, o1,o2)
//{ z: 1, b: 2, c: 3, a: 4 }
console.log(obj)

