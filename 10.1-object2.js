//isso é uma function
console.log(typeof Object)
//tenho um objeto instanciado a partir de uma função
//Uma função instanciada
//object
console.log(typeof new Object)
//object... Posso colocar new Object com ou sem ()
console.log(typeof new Object())

const Cliente =function() {}
//function
console.log(typeof Cliente)
//object -> estou criando instancia de função
console.log(typeof new Cliente)
//object -> estou criando instancia de função
console.log(typeof new Cliente())

//debaixo dessa estrutura eu tenho funções... Poso ter comportamentos, atributos... Essas funções podem ser instanciadas
class Produto {} //ES 2015(ES6)

//Uma classe é um detalhe de sintaxe, pois na verdade o que escrevemos por baixo dos panos é uma função
// É um atalho de sintaxe,ou seja, é uma forma diferente de construir uma função
//function
console.log(typeof Produto)
//object
console.log(typeof new Produto)
//object
console.log(typeof new Produto())










