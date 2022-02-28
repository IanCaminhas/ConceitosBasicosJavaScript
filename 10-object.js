//object em JS não é a mesma coisa que JSON
//JSON é um formato textual. 
//O formato JSON lembra muito o formato objeto em JS
// {} representa objeto, enquanto que [] representa array
//const prod1={} acabei de criar um objeto vazio
//Objeto em JS é uma coleção de chave/valor, ou seja, nome do identificador com o seu valor
//Um objeto pode conter outro objeto dentro.
//chave/valor pode ser definido dinamicamente: prod1.nome = 'Celular Ultra Mega'
// A chave precisa ser única
const prod1={}
//chave/valor definidos dinâmicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

//{ nome: 'Celular Ultra Mega', preco: 4998.9 }
console.log(prod1)

prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

//{ nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }
console.log(prod1)

const prod2 ={
    nome:'Camisa Polo',
    preco: 79.90
}
//{ nome: 'Camisa Polo', preco: 79.9 }
console.log(prod2)

const prod3 ={
    nome:'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj:{
            blabla: 2
        }
    }
}
/*
    {
  nome: 'Camisa Polo',
  preco: 79.9,
  obj: { blabla: 1, obj: { blabla: 2 } }
}
*/

console.log(prod3)

prod3['Desconto Legal'] = 0.40 //evitar atributos com espaço

/*
    {
  nome: 'Camisa Polo',
  preco: 79.9,
  obj: { blabla: 1, obj: { blabla: 2 } },
  'Desconto Legal': 0.4
}
*/
console.log(prod3)


const JSONExample = '{"nome": "SSD", "preco"= 300}'

//{"nome": "SSD", "preco"= 300}
//JSON(é um formato textual) não é a mesma coisa que objeto
console.log(JSONExample)


/*
Formas de definir um Object:
1) declarar um objeto vazio e depois ir alocando
chave/valor de forma dinâmica
    const prod1={}
    prod1.nome = 'Celular Ultra Mega'
    prod1.preco = 4998.90


2) Dessa forma:
prod3['Desconto Legal'] = 0.40

3) dessa forma:
    const prod2 ={
    nome:'Camisa Polo',
    preco: 79.90
}

*/






