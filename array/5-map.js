const carrinho =[
    '{"nome":"notebook", "preco":4000}',
    '{"nome":"mouse", "preco":55.50}',
    '{"nome":"telado", "preco":100}',
    '{"nome":"camera", "preco":350}',
]

//Retornar um array com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
//[ 4000, 55.5, 100, 350 ]
console.log(resultado)

/*
    Isso é um array de objetos
    [
  { nome: 'notebook', preco: 4000 },
  { nome: 'mouse', preco: 55.5 },
  { nome: 'telado', preco: 100 },
  { nome: 'camera', preco: 350 }
]
*/
const resultado2 = carrinho.map(paraObjeto)
console.log(resultado2)

