/*
Formas de definir uma funçãos
*/

//function declaration
function soma(x,y){
    return x+y
}

//function expression
const sub = function (x,y){
    return x - y
}

//named function expression
const mult = function mut(x,y){
    return x*y
}

/*
    Existe diferenças entre a function declaration
    e a function expression.

    eu posso antes de declarar a função chamar ela.

    console.log(soma(3,4))
    function soma(x,y){
        return x+y
    }

    Usando function declaration e 
    named function expression, primeiro o interpretador 
    carrega as funções e depois começa a execução do código

    console.log(sub(3,4))
    const sub = function (x,y){
        return x - y
    }

    sub is not defined. Usando function expression, o erro é gerado
    Tenho que chamar a função depois que foi declarada:
    Agora sim:
    const sub = function (x,y){
        return x - y
    }
    console.log(sub(3,4))


    const mult = function mut(x,y){
         return x*y
    }
    console.log(multi(3,4))

    named function expression é muito usado
    para debugar códigos

*/