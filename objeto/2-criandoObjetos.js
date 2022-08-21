//Estratégias para a criação de objeto

//1 - usando a notação literal 
const obj1 ={}
//{}
console.log(obj1)

/*
   typeof new Object é  um objeto criado a partir de uma função.
   Object de fato é uma função. 
   new Object é uma função construtora
*/
//function object
console.log(typeof Object, typeof new Object)

// 2 - usando a notação Object
//isso é convertido para uma função contrutora por debaixo dos panos
const obj2 = new Object
//{}
console.log(obj2)

//3 - Funções construtores
//com this, a variável fica pública, ou seja, this.nome está visível para fora do objeto
/*Níveis de encapsulamento: 
    escopo global(quando trabalho a nível do navegador, usando o window),
    escopo de módulo(representa o arquivo),
    escopo da função,
    escopo de bloco com let e var

Objetivo do encapsulamento: diminuir o nível de visibilidade de determinada variável

*/
//estou this.nome exibindo para fora, enquanto que preco e desc não serão exibidos
//this.nome é público, preco e desc são privados
//this.getPrecoComDesconto também está público, pois estou usando o this
//Assim, não consigo mais alterar o valor do preco e do desc
function Produto(nome,preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto('Boné',60,0.17)
const p2 = new Produto('brinco',50,0.10)

/*
    Eu consigo alterar o nome do produto, pois this.nome está
    visível.

    p1.nome='X'
    p2.nome='Y'

    p1.preco = 100 vai gerar erro... Preco não está visível
    para fora

*/

//49.8 45
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//4- Função Factory = é uma função que fabrica objetos
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30 *(30-faltas))
        }
    }
}

const f1 = criarFuncionario('Leonardo',5000,4)
const f2 = criarFuncionario('Leandro',4000,7)
//4333.33 3066.67
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))


//5 - Object.create
const filha = Object.create(null)
filha.nome = 'Beatriz'
//{ nome: 'Beatriz' }
console.log(filha)

/*
    JSON é diferente de object!
    Uma função famosa que retorna Obejto...
    JSON.parse() é usado, por exemplo, para receber um JSON
    de um webservice e convertê-lo em Object(que é usado pelo JS).

*/
//{ info: 'Sou um JSON' }
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)


