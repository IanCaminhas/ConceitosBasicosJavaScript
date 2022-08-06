/*
    concat = concatenar vários elementos num único array
*/

const filhas = ['Ana','Paula']
const filhos = ['João','José']

const todos = filhas.concat(filhos)

//[ 'Ana', 'Paula', 'João', 'José' ]
console.log(todos)

//Além de concatenar, posso colocar mais nomes
const todos2 = filhas.concat(filhos,'Fulano','Ciclano')
//[ 'Ana', 'Paula', 'João', 'José', 'Fulano', 'Ciclano' ]
console.log(todos2)

//[ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]))


//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log([].concat([1,2],[3,4],5,[[6,7]]))
