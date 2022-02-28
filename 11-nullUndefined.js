//Passagem por valor: Quando trabalho com tipos primitivos, a atribuição é feita por passagem de valores.
//Passagem por referência: Quando trabalho com objetos(funções também), a atribuição é feita por referência.

//Trabalhamos aqui o conceito de referência(aponto para um espaço de memória)

let valor //não inicializada

//undefined -> significa que ela nunca foi inicializada
console.log(valor)

//variável não possui valor e nenhum endereço que aponte para um local de memóra
valor = null 
//null
console.log(valor)

/* Isso aqui dá error, pois estou acessando uma propriedade de uma variável null: 
TypeError: Cannot read properties of null (reading 'toString')
console.log(valor.toString())

usando undefined também dá o mesmo erro

*/

const produto = {}
//undefined, pois o obj produto já foi inicializado... Mas o atributo preco não foi
console.log(produto.preco)

/*
Isso aqui dá error:
TypeError: Cannot read properties of undefined (reading 'a')
console.log(produto.preco.a)
*/

//{}
console.log(produto)

produto.preco = 3.50
//{ preco: 3.5 }
console.log(produto)

produto.preco = undefined //evite atribuir undefined

//{ preco: undefined }
console.log(produto)

delete produto.preco
//{}
console.log(produto)

//produto grátis posso colocar o seu valor como 0(produto.preco = 0)
// Se eu não quiser que o preço esteja definido, atribuo como null ou -1(produto.preco = null)
produto.preco = null //sem preço

//{ preco: null }
console.log(produto)

/*
Inicialmente o objeto estava apontando para um 
local de memória. Se eu quiser que esse mesmo objeto não aponte para ninguém,
atribuo null à variável(a variável agora fica vazia)...

Dica: 
Não use Undefined(não inicializar com undefined a variável). Deixa apenas a linguagem operar com ela.
Quando eu quiser que a variável não aponte para nenhum endereço, coloque null( e não undefined)


*/

