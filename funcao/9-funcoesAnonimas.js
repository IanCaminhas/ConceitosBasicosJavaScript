/*
 Posso armazenar a função anônima numa variável
 ou passá-la para outra função
*/

const soma = function (x,y){
    return x + y
}

//se eu não passar nada para operacao, vou passar a funcao soma como parâmetro
const imprimirResultado = function (a,b,operacao=soma){
    console.log(operacao(a,b))
}

//7
imprimirResultado(3,4)
//7
imprimirResultado(3,4,soma)

//estou passando uma fnução anônima
//-1
imprimirResultado(3,4,function(x,y){
    return x-y
})

//passando uma arrow Function
//12
imprimirResultado(3,4, (x,y) => x*y)

//funcao anônima dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('ola')
    },

    falar2() {
        console.log('Tudo bem pessoal ?')
    }
}

//ola
pessoa.falar()

//Tudo bem pessoal ?
pessoa.falar2()