//estrategia 1 para gerar valor padrão
//Essa estrategia ainda é muito usada.
/*Se dentro da função alguma variavel exigir um valor padrão 
não passada como parametro, essa estrategia ainda e valida*/

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
//3
console.log(soma1())
//5
console.log(soma1(3))
//6
console.log(soma1(1,2,3))
//3 -> tinha que me dar 0 e não 3
console.log(soma1(0,0,0))

//Conclusão da estratégia 1: falha, pois o JS entende que os parametros nao foram inicializados

//estrategia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a!== undefined ? a : 1
    b = 1 in arguments ? b : 1 //dentro de arguments existe o índice 1 ?
    c = isNaN(c) ? 1 :c
    return a+b+c

}
//3 5 6 0
console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))

//Conclusão das estrategias 2,3 e 4: é mais trabalhoso e pode gerar falhas

//valor padrão do es2015
function soma3(a=1,b=1,c=1){
    return a+b+c
}
//3 5 6 0
console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))

