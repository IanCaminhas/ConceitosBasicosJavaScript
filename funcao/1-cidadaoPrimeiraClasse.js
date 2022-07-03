/*
Função em JS é First-Class Object (Citiziens)
Higher-order function

função é tratado como um Dado. Por isso que consigo passar uma 
função como parâmetro, retornar uma função, declarar
uma função dentro de outra função, armazenar a função 
numa variável, etc.

Funções é cidadão de primeira linha 
no javascript. Função é o presidente, considerando
o javascript como um país.

javascript é multi-paradigma(POO, funcional,procedural)

*/

//criar função de forma literal -> não tem como tirar os {}... Com arrow function, as {} são opcionais
//Toda função em JS tem retorno. Ela vai retornar undefined caso não tiver um retorno(return) explícito
function fun1(/*lista de parametros*/){
    //corpo da função podendo ou não ter o return
}

//Armazenar em uma variável -> essa funcao acaba sendo anônima
//estou atribuindo uma função anônima para uma constante
//referencio a função através da constante. Para invocar deve existir os parênteses
const fun2 = function(){}

//Armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2]
//5
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
//Opa
console.log(obj.falar())

//Passar função como param
function run(fun){
    //fun -> assim não invoco a função... Tem que ter o parênteses
    fun()
}
//Executando...
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
//9
soma(2,3)(4)

const result = soma(2,3) //aqui armazeno a chamada que pode ser chamada novamente
//9
result(4)




