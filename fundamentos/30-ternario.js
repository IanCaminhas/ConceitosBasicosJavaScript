/* 
Operador ternário tem 3 operandos: 
primeira parte é uma expressão relacional 
se for verdadeiro, retorna Aprovado
se for falso, retorna Reprovado.

Isso aqui é uma função arrow que retorna para a variável resultado
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

*/
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'
//Aprovado
console.log(resultado(7.1))
//Reprovado
console.log(resultado(6.7))


/* 
Curiosidade: operador unário tem 1 operando, 
binário tem 2 operandos e ternário 3 operandos

*/