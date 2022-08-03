
/*
Se o this.nome = nome for retirado, não é possível
acessar a variável através de uma instância

function Pessoa(nome) {
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

undefined, pos essa variável não existe.
console.log(p1.nome)

*/

function Pessoa(nome) {
    this.nome = nome
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

//Meu nome é Ian
// Estou dando new numa função construtora
// usando class Pessoa{}... Por trás é uma função construtora 
const p1 = new Pessoa('Caminhas')
p1.falar()

//como coloquei o this na variável nome, o nome irá aparecer.
//Caminhas
console.log(p1.nome)

/*
Posso criar um objeto a partir das seguintes estratégias:
classe, função factory, função construtora

*/