const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 2.1

//1,2
console.log(peso1, peso2)
//true
console.log(Number.isInteger(peso1))
//true
console.log(Number.isInteger(peso2))
//false
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)

//7.8709999999999996 Ficou feio neh ? quero diminuir casas decimais
console.log(media)

//7.87 para diminuir casas decimais
console.log(media.toFixed(2))

//7.8709999999999996 ... Agora é uma string
console.log(media.toString())

//convertendo em binário
//111.11011110111110011101101100100010110100001110010101
console.log(media.toString(2))

//number
console.log(typeof media)

//function
console.log(typeof Number)


/*
    number é o tipo do dado
    Number é uma função.
*/