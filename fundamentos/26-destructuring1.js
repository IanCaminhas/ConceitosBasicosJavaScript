// destructuring -> novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Quero extrair as variáveis nome e idade do objeto pessoa, ou sej,a quero ter acesso a elas
//pessoa.nome ou pessoa.idade -> essa é a forma padrão
//Com destructuring fica uma forma simplificada de tirar de uma estrutura atributos
//operador desestruturar => {}
//destructuring vou destruturar uma estrutura

//aqui não estou atribuindo nada
//Tire de dentro do objeto o atributo nome e idade
//{nome, idade} => nome e idade podem ser usadas como variáveis agora
const {nome, idade} = pessoa
//Ana 5
console.log(nome,idade)
const{nome: n, idade: i} = pessoa
//Ana 5
console.log(n,i)

const {sobrenome,bemHumorada= true} = pessoa

/*undefined true... O true apareceu, pois como bemHumorada 
não é um atributo do objeto, ele inseriu true por padrão
*/ 
console.log(sobrenome,bemHumorada)

const {endereco: {logradouro,numero,cep}} = pessoa

//Rua ABC 1000 undefined
console.log(logradouro,numero,cep)

/*Cuidado ao desestruturar dados aninhados... 
Os dados do caminho precisam estar setados até o dado alvo
Se não tiver o dado aninhado, um erro é gerado
estou querendo acessar alguma coisa que não é objeto 

const {conta:{ag, num}} = pessoa
console.log(ag,num)

*/













