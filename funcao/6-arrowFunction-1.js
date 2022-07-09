/*
    Dois motivos para a criação da função arrow:
    1 - diminuir a sintaxe
    2 - para ter um this que não varia. Proporciona mais visibilidade para o código

    Com arrow function:
    o this foi associado ao local que a função foi escrita
    o this é associado ao contexto da palavra, ou seja, ao 
    contexto léxico(contexto em que a função foi escrita)

    Função arrow é sempre uma função anônima

*/

let dobro = function (a) {
    return 2 * a
}

//reescrevendo a função como arrow function
//Por ser uma função anônima, deve ser armazenada numa variável ou constante
dobro = (a) =>{
    return 2 * a
}

//se tiver apenas um parâmetro, posso retirar os parênteses
//se tiver apenas uma linha de código(um único trabalho), posso retirar as chaves
// o retorno aqui é implícito
dobro = a => 2*a

//6.283185307179586
console.log(dobro(Math.PI))

ola = () => 'Olá'

//se a função nao tiver parâmetro, posso colocar _
ola = _ => 'Olá'
//Olá
console.log(ola())


