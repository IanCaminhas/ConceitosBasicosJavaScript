//Infinity
console.log(7/0)

//5
console.log("10"/2)

//NaN
console.log("10,2"/2)

//10.2/2
console.log("10.2/2")

//NaN
console.log("Show!" * 2)

//0.7999999999999999
console.log(0.1 + 0.7)

/*
isso não compila
console.log(10.toString())
*/

//10.38 compila normalmente
console.log((10.375).toFixed(2))



/*

//5
console.log("10"/2)... O javaScript
interpreta "10" como interiro.

Aqui não interpreta com ponto flutuante
console.log("10,2"/2)

A soma dá isso aqui 0.7999999999999999
Isso aqui ocorre por causa do 
tipo flutuante do JS
console.log(0.1 + 0.7)

Isso gera uma exceção. Não é possível
fazer com o literal
console.log(10.toString())

Isso aqui compila
console.log((10.375).toFixed(2))


*/

