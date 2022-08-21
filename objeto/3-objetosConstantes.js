/*
    Essa aula trata do seguinte questionamento:
    Se o objeto é constante, como consigo alterar os atributos dele ? ?
*/

/*
pessoa aponta para um endereço de memória, por exemplo: endereço 123
esse endereço de memória aponta para um objeto.
Alterar o atributo é permitido, o que não posso fazer
é atribuir a referncia pessoa a outro objeto.

*/

const pessoa = {nome:'Cristiano Ronaldo'}
//{ nome: 'Cristiano Ronaldo' }
console.log(pessoa)
pessoa.nome = 'Lionel Messi'
//{ nome: 'Lionel Messi' }
console.log(pessoa)

/*estou fazendo que a variável pessoa aponte para um novo endereço.
Entretanto, pessoa é uma constante
TypeError: Assignment to constant variable.

Não consigo mais atribuir a constante pessoa um novo objeto !!
pessoa ={nome:'Pogba'}

*/

/*Estou congelando o objeto pessoa
    Não consigo mais mexer no objeto. Nem alterar o atributo consigo mais
*/

Object.freeze(pessoa)
pessoa.nome = 'Benzema'
/*Lionel Messi... Era pra sair Pogba, pois bem 
o Object.freeze(pessoa) ignora pessoa.nome = 'Benzema'
*/
console.log(pessoa.nome)


pessoa.endereco = 'Rua XYZ'
/*
Não foi possível incluir pessoa.endereco = 'Rua XYZ', pois
Object.freeze(pessoa) não permite
{ nome: 'Lionel Messi' }

*/ 
console.log(pessoa)

delete pessoa.nome
//{ nome: 'Lionel Messi' } Também não consigo apagar um atributo
console.log(pessoa)

//criando um objeto constante do seu nascedouro
const pessoaConstante = Object.freeze({nome: 'Carvajal'})