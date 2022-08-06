/*
    filter serve para filtrar um array baseado em algum critério.
    Todos os produtos frágeis, todos os clientes devedores, etc.
    Filter retorna um array de tamanho igual ou menor que o original
*/

const produtos =[
    {nome:'Notebook', preco:4000,fragil: true},
    {nome:'Ipad Pro', preco:5600,fragil: true},
    {nome:'Celular', preco:1500,fragil: true},
    {nome:'Copo de plástico', preco:7,fragil: false},
]

//parâmetro p é o elemento do array. p é cada um dos produtos
//usando return false, significa que nenhum produto vai para o array final
//[]
console.log(produtos.filter(function(p){
    return false
}))

//não estou filtrando absolutamente nada. Retorno todos os elementos do array original
/*[
    { nome: 'Notebook', preco: 4000, fragil: true },
    { nome: 'Ipad Pro', preco: 5600, fragil: true },
    { nome: 'Celular', preco: 5600, fragil: true },
    { nome: 'Copo de plástico', preco: 5600, fragil: false }
  ]
  */
console.log(produtos.filter(function(p){
    return true
}))

//Filtrando todos os produtos com preços superiores a 2500
/*
[
  { nome: 'Notebook', preco: 4000, fragil: true },
  { nome: 'Ipad Pro', preco: 5600, fragil: true }
]
*/
console.log(produtos.filter(function(p){
    return p.preco >2500
}))


const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

/*
Retorno os produtos com preço maior de 500 e frágeis
[
  { nome: 'Notebook', preco: 4000, fragil: true },
  { nome: 'Ipad Pro', preco: 5600, fragil: true },
  { nome: 'Celular', preco: 1500, fragil: true }
]
*/

console.log(produtos.filter(caro).filter(fragil))

