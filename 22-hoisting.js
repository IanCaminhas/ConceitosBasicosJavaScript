// Hoisting significa jogar pra cima
// var sofre hoisting... 
//O prórpio interpretador do JS pega a variável var e joga para cima

//Em outras linguagens de programação daria erro
//Motivo: a variável a ainda não foi declarada
//entretanto, em JS a variável a vai ser jogada para cima
//Em suma, isso não dá erro

// Nesse ponto, a variável foi defnida... Mas, não foi atribuída
//a = undefined
console.log('a =', a)
var a = 2
//a = 2
console.log('a =', a)


//O que eu fiz em cima e mais coisa disso aqui abaixo:
//x = undefined
var x 
console.log('x =', x)
x = 50
//a = 50
console.log('x =', x)


/*
    Se eu fizer isso aqui, vai dar erro...
    De fato, a variável não foi declarada...
    console.log('a =', a)
    //var a = 2
    console.log('a =', a)

    erro: a is not defined
*/


//dentro da função o var também sobre hoisting
function teste(){
    //b = undefined
    console.log('b =', b)
    var b = 3
    //b = 3
    console.log('b =', b)
}

teste()

/*
hoisting com let não ocorre
Isso dá erro
console.log('c =', c)
var c = 3
console.log('c =', c)

error: b is not defined

*/
