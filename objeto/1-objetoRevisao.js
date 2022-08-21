/*
    Coleção dinâmica(posso adicionar ou remover pares chave/valor) de pares chave/valor
*/
/*Object é uma função. Quando usamos uma função com new, 
temos uma função construtora */
const produto = new Object
produto.nome = 'Televisão' //olha o dinamismo aqui... adicinando um atributo
produto['marca do produto'] = 'LG'
produto.preco = 2200
produto.pais ='Brasil'
produto['Cidade'] = 'Araçuaí'

/*
   {
  nome: 'Televisão',
  'marca do produto': 'LG',
  preco: 2200,
  pais: 'Brasil',
  Cidade: 'Araçuaí'
}
*/
console.log(produto)

delete produto.pais
delete produto['Cidade']

//{ nome: 'Televisão', 'marca do produto': 'LG', preco: 2200 }
console.log(produto)

//aqui temos atributos inteiros, array de objetos, Strings, funções também
const carro = {
    modelo: 'A4',
    valor: 150000,
    proprietario: {
        nome: 'Carlos',
        idade: 35,
        endereco: {
            logradouro: 'Rua 123',
            numero: 13
        }
    },
    condutores:[{
        nome: 'Cristiano',
        idade:21
    },{
        nome: 'Ronaldo',
        idade: 30
    }],
    calcularValorSeguro: function() {
        //....
    }
}


carro.proprietario.endereco.numero = 1500
carro['proprietario']['endereco']['logradouro'] = 'Avenida PM'

/*
{
  modelo: 'A4',
  valor: 150000,
  proprietario: {
    nome: 'Carlos',
    idade: 35,
    endereco: { logradouro: 'Avenida PM', numero: 1500 }
  },
  condutores: [ { nome: 'Cristiano', idade: 21 }, { nome: 'Ronaldo', idade: 30 } ],      
  calcularValorSeguro: [Function: calcularValorSeguro]
}

*/
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

/*
    {
  modelo: 'A4',
  valor: 150000,
  proprietario: { nome: 'Carlos', idade: 35 }
}
*/

console.log(carro)
//undefined, pois excluí o atrbuto condutores
console.log(carro.condutores)

//definir algum método sobre algo indefinido, pode dar problema
//Aqui não existe mais o array de condutores
//console.log(carro.condutores.length)

