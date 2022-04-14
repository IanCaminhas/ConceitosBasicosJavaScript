let isAtivo = false
//false
console.log(isAtivo)

isAtivo = true
//true
console.log(isAtivo)

// 1 representa um resultado verdadeiro
isAtivo = 1 
//true - !! acaba retornando o valor original
console.log(!!isAtivo)
//false - ! nega
console.log(!isAtivo)

//true
console.log(!!true)

//false
console.log(!true)

console.log('os verdadeiros...')
//Todas as saídas são true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = true))

console.log('os falsos...')
//Todas as saídas são false
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
//true
console.log(!!('' || null || 0 || ' '))

let nome = ''
//Desconhecido... se o nome está vazio, retorna Desconhecido... Se não, retorna o nome da pessoa
console.log(nome || 'Desconhecido')

nome = 'Tiozão'
//Tiozão
console.log(nome || 'Desconhecido')




