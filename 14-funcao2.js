//Armazenando uma funcao em uma variável
//isso aqui é uma função anônima(função sem nome)
const imprimirSoma = function (a,b){
    console.log(a+b)
}

//5
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variável
//=> substitui function
const soma = (a,b) =>{
    return a + b
}

//5
console.log(soma(2,3))

//retorno implícito
//não tem {}, pois vou executar apenas uma linha de código 
const subtracao = (a,b) => a-b
//-1
console.log(subtracao(2,3))

//funcao de unico parametro não é necessário usar () nos parâmetros
const multiplicacao = a => a*a
//4
console.log(multiplicacao(2))






