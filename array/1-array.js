
/*Array em JavaScript é um objeto especial com características próprias. 
Não existe array nativo em JavaScript, ou seja, não existe um tipo de dado
array em JavaScript. Array é um objeto. 
O funcionamento do array em JavaScript é igual às outras linguagens.

Array em javaScript cresce e diminui dinamicamente. Em outras
linguagens array tem tamanho fixo(estrutura estática).
Como javaScript é fracamente tipado, posso colocar em um array
os variados tipos... 

Mas a boa prática indica para usarmos 
apenas um tipo no array. Todos os valores do mesmo tipo

Não é interessante ter num único array valores booleanos, 
inteiros, outro array, strings, etc.

*/


//function
console.log(typeof Array)
//object
console.log(typeof new Array)

//array literal =[]... objeto literal ={}
//também é um object
console.log(typeof [])

//Não é uma forma recomendada de criar array
let aprovados = new Array('Bia', 'carlos', 'Ana')
//[ 'Bia', 'carlos', 'Ana' ]
console.log(aprovados)

//A notação recomendada é a literal
aprovados = ['Bia','Carlos','Ana']
//[ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados)
//Bia
console.log(aprovados[0])
//Carlos
console.log(aprovados[1])
//Ana
console.log(aprovados[2])
//undefined -> Não existe índice 3
console.log(aprovados[3])

//formas de adicionar elemento
aprovados[3]='Renato'
aprovados.push('Julio')

//tamanho do array
//5
console.log(aprovados.length)

/*
Os valores do meio ficam undefined, pois acrescentei na posição 9.
Teria que colocar na posição 4(a primeira posição vazia)
*/
aprovados[9]='Vitor'
//10
console.log(aprovados.length)
//true
console.log(aprovados[8]=== undefined)
//false
console.log(aprovados[8]=== null)
//[ 'Bia', 'Carlos', 'Ana', 'Renato', 'Julio', <4 empty items>, 'Vitor' ]
//4 elementos vazios = 4 empty items
console.log(aprovados)

//ordenando o array
aprovados.sort()
/*
[ 'Ana', 'Bia', 'Carlos', 'Julio', 'Renato', 'Vitor', <4 empty items> ]
Os elementos foram ordenados alfabeticamente.
O método sort altera o array original.
*/
console.log(aprovados)

/*

excluir elemento na posição 1. Também é usada a mesma sintaxe
para excluir um objeto. undefined vai ser colocado
no lugar do elemento.

O array não é reordenado nessa exclusão.

*/

delete aprovados[1]
//undefined, pois deletei o elemento da posição 1
console.log(aprovados[1])

aprovados = ['Cristiano','Ronaldo','Silva']


/*splice= serve para adcionar o elemento 
num determinado índice, remover elementos num array,
remover e adicionar elementos ao mesmo tempo 
*/
//começa a partir de um índice até o índice final
aprovados.splice(1,2)
//[ 'Cristiano' ]
console.log(aprovados)
//adicionando o elemento a partir do índice 1
aprovados.splice(1,0,'Elemento1','Elemento2')
//[ 'Cristiano', 'Elemento1', 'Elemento2' ]
console.log(aprovados)

/*splice(inicial,qtd) -> inicial a partir de uma posição 
até a quantidade de elementos(qtd) posições*/

