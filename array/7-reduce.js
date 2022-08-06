/*
Reduce serve para transformar o array num único elemento.
Esse elemento pode ser outro array, string, número.
Vai existir um acumulador(é o resultado da callback anterior).
Posso chamar o acumulador de atual também.
No reduce posso passar o valor atual, acumulador, índice e o array.

*/

const alunos =[
    {nome:'Pedro', nota:7.3, bolsista: false},
    {nome:'Cristiano', nota:9.2, bolsista: true},
    {nome:'Laila', nota:9.8, bolsista: false},
    {nome:'Renato', nota:8.7, bolsista: true},

]

/*
    Primeiro eu pego todas as notas dos alunos.
    Depois uso o reduce.
    Como eu não passei um valor inicial, o reduce está
    utilizando o elemento da primeira posição como inicial.

   não é obrigatório informar o valor inicial.

   Posso ter um array no acumulador, é uma possbilidade

*/
/*
    7.3 9.2
    16.5 9.8
    26.3 8.7
*/
const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})
//35
console.log(resultado)

/*Eu posso passar um valor como inicial. 
  Abaixo, estou passando o valor 10.
*/

const resultado2 = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
}, 10)

//45
console.log(resultado2)
