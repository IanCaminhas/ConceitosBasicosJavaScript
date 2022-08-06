/*
Formas de percorrer um array:
foreach, for,while, do while, map, filter,reduce

*/

const realFC = ['Benzema','Vini Jr','Kross','Mendy']

/*isso aqui é um callback, ou seja, a função 
forEach é invocada para cada elemento 
Dentro do forEach tem um laço for que percorre o array.
O forEach recebe o elemento e o índice
O foreach pode receber até 3 parâmetros.
Primeiro elemento é o elemento, o segundo é índice e o terceiro
é o array

*/

/*
1  Benzema
2  Vini Jr
3  Kross
4  Mendy
*/
realFC.forEach(function(nome,indice){
    console.log(`${indice + 1}  ${nome}`)

})

//Não é obrigado a passar o índice e o nome
//Aqui passo apenas uma arrow Function com único parâmetro. Não quero ter acesso ao índice
/*
Benzema
Vini Jr
Kross
Mendy
*/
realFC.forEach(nome => console.log(nome))

/*
Benzema
Vini Jr
Kross
Mendy
*/
const exibirJogadores = jogador => console.log(jogador)
realFC.forEach(exibirJogadores) 

/*
O forEach aceita o terceiro elemento que é o array
[ 'Benzema', 'Vini Jr', 'Kross', 'Mendy' ]
[ 'Benzema', 'Vini Jr', 'Kross', 'Mendy' ]
[ 'Benzema', 'Vini Jr', 'Kross', 'Mendy' ]
[ 'Benzema', 'Vini Jr', 'Kross', 'Mendy' ]


*/
realFC.forEach(function(nome,indice,realFC){
    console.log(`${indice + 1}  ${nome}`)
    console.log(realFC)


})