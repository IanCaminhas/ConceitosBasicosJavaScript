const nome = 'Flavia'
//Olá Flavia! 
const concatenacao = 'Olá ' + nome + '!'

/*
 Olá
    Flavia!
*/
const template = `
    Olá
    ${nome}!`

console.log(concatenacao,template)

//expressoes...
//1 + 1 = 2
console.log(`1 + 1 = ${1 + 1}`)

//converte todos os caracteres em maiusculos
const up = texto => texto.toUpperCase()

//Ei... CUIDADO!
console.log(`Ei... ${up('cuidado')}!`)


/*

Fazendo a concatenação dessa
maneira 'Olá ' + nome + '!', não é 
possível fazer quebra de linha.

'Olá ' + nome 

+ '!'

Use `` para evitar o erro.

`${interpolação}` dentro de {} posso
colocar variáveis, chamadas a 
função, fazer operações(+,-,/,*)


*/