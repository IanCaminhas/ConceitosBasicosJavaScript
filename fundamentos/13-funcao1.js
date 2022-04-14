//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}
//5
imprimirSoma(2,3)

//quando não passei o valor b, o JS atribui undefined para ela
//NaN, pois não passei o valor de b
imprimirSoma(2)

//aqui ele vai ignorar os valores 4,5,6,7,8... 
//Java ia reclamar
//12
imprimirSoma(2,10,4,5,6,7,8)

//NaN
imprimirSoma()

//Funcao com retorno
//b = 1 isso é o valor default de b. 
//Se não passar nenhum valor para o parâmetro b, o JS atribui o valor 1 para ele
function soma(a, b = 1){
    return a + b
}

//5
console.log(soma(2,3))

//3
console.log(soma(2))

//NaN -> tudo bem, b tem valor 1 como default... mas a não possui esse valor default
console.log(soma())










