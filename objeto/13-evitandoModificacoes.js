/*Não vai permitir que o objeto  
seja extendido, ou seja,  não vou conseguir 
aumentar o número de atributos.
Mas posso excluir atributos.
*/
//Não consigo mais atribuir atributos neste objeto
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promoção'
})
//esse objeto é extensível ?false
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
/*{ nome: 'Borracha', preco: 1.99 }, 
descriçao não foi incluído.
o nome foi alterado.
tag foi excluído.
*/
console.log(produto)

/*Object.seal -> não consigo adicionar e excluir atributos. 
Consigo alterar os valores do atributos.*/
const pessoa = {nome: 'Pessoa', idade: 35}
Object.seal(pessoa)
//Selado: true
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Pessoa 2'
delete pessoa.nome
pessoa.idade = 29
//{ nome: 'Pessoa', idade: 29 }
/*mexi no atributo idade, mas não consegui incluir 
pessoa.sobrenome = 'Pessoa 2' e excluir delete pessoa.nome */
console.log(pessoa)

//Objet.freeze = selado(Object.seal) + valores constantes(valores não podem ser modificados)




















